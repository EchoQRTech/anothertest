"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { 
    Brain, FileSpreadsheet, BookOpen, Share2, Settings, BarChart3, 
    Zap, CheckCircle, XCircle, Loader2 
} from "lucide-react";

// Correct FIXED import path (global lib folder)
import { supabase } from "../../lib/supabase-outseta";

interface UserProfile {
    id: string;
    email: string;
    subscription_tier?: string;
}

function IntegrationTest() {
    const [data, setData] = useState<UserProfile[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isOutsetaReady, setIsOutsetaReady] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).Outseta) {
            setIsOutsetaReady(true);
        } else {
            const interval = setInterval(() => {
                if (typeof window !== "undefined" && (window as any).Outseta) {
                    setIsOutsetaReady(true);
                    clearInterval(interval);
                }
            }, 200);

            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if (!isOutsetaReady) return;

        async function fetchData() {
            setLoading(true);
            setError(null);

            const { data: testData, error: supabaseError } = await supabase
                .from("user_profiles")
                .select("id, email, subscription_tier")
                .limit(1);

            if (supabaseError) {
                setError(`[${supabaseError.code}] ${supabaseError.message}`);
            } else {
                setData(testData as UserProfile[]);
            }

            setLoading(false);
        }

        fetchData();
    }, [isOutsetaReady]);

    const renderStatus = () => {
        if (!isOutsetaReady) {
            return (
                <div className="flex items-center gap-3 p-4 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-xl">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-semibold text-sm">Waiting for Outseta script…</span>
                </div>
            );
        }

        if (loading) {
            return (
                <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-semibold text-sm">Running secure Supabase query…</span>
                </div>
            );
        }

        if (error) {
            return (
                <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-xl shadow-lg text-left">
                    <div className="flex items-center gap-3 text-red-700 mb-2">
                        <XCircle className="w-5 h-5" />
                        <span className="font-bold text-sm uppercase">Integration Failed</span>
                    </div>
                    <p className="font-mono text-xs text-red-800 break-words">{error}</p>
                </div>
            );
        }

        const isAuthenticated = data && data.length > 0 && data[0]?.id;

        return (
            <div className={`p-5 rounded-xl shadow-lg text-left ${isAuthenticated ? "bg-green-50 border-l-4 border-green-500" : "bg-gray-50 border-l-4 border-gray-400"}`}>
                <div className="flex items-center gap-3 mb-2">
                    {isAuthenticated ? (
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    ) : (
                        <Zap className="w-5 h-5 text-gray-700" />
                    )}
                    <span className="font-bold text-sm uppercase text-gray-800">
                        {isAuthenticated ? "Integration Successful" : "Anonymous Mode"}
                    </span>
                </div>

                <pre className="text-xs font-mono bg-white p-3 rounded-lg border border-gray-200 overflow-auto max-h-40 text-gray-800">
                    {JSON.stringify(data || { status: "Not Authenticated" }, null, 2)}
                </pre>
            </div>
        );
    };

    return <div className="w-full max-w-lg mx-auto">{renderStatus()}</div>;
}

export default function Page() {
    useEffect(() => {
        document.documentElement.style.background = "#ffffff";
        document.body.style.background = "#ffffff";

        if (typeof window !== "undefined" && (window as any).Outseta) {
            (window as any).Outseta.run();
        }
    }, []);

    const settingsHref =
        "https://treasuretto-llc.outseta.com/profile?#o-authenticated";

    const sections = [
        {
            icon: <BarChart3 size={24} className="text-[#A00028]" />,
            title: "Vault Index",
            desc: "Track brand performance and resale analytics.",
            href: "/vault-index",
        },
        {
            icon: <Brain size={24} className="text-[#A00028]" />,
            title: "AI Tools",
            desc: "Use your listing, pricing, and negotiation AI tools.",
            href: "/ai",
        },
        {
            icon: <FileSpreadsheet size={24} className="text-[#CBAF7A]" />,
            title: "Spreadsheet Vault",
            desc: "50+ tools for tracking profits and inventory.",
            href: "/spreadsheets",
        },
        {
            icon: <BookOpen size={24} className="text-[#A00028]" />,
            title: "Vault Academy",
            desc: "Learn sourcing, pricing, and buyer psychology.",
            href: "/academy",
        },
        {
            icon: <Share2 size={24} className="text-[#A00028]" />,
            title: "Affiliate Program",
            desc: "Earn by sharing The Vault.",
            href: "/affiliate",
        },
        {
            icon: <Settings size={24} className="text-gray-600" />,
            title: "Settings",
            desc: "Manage preferences and integrations.",
            href: settingsHref,
        },
    ];

    return (
        <main className="min-h-screen w-full bg-gradient-to-b from-[#ffffff] via-[#fff6f6] to-[#fff0f2] flex flex-col items-center text-[#0A0A0A] px-6 py-14">
            <div className="w-full max-w-6xl">
                <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl border border-white/70 rounded-3xl p-5 shadow-sm mb-10">
                    <img
                        src="https://placehold.co/42x42/A00028/ffffff?text=V"
                        alt="Vault Logo"
                        width={42}
                        height={42}
                        className="object-contain"
                    />

                    <a href={settingsHref} target="_blank" rel="noopener noreferrer">
                        <button className="p-2 rounded-full hover:bg-[#f5f5f5] transition">
                            <Settings size={28} className="text-[#A00028]" />
                        </button>
                    </a>
                </div>

                <section className="text-center mb-6">
                    <div className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-4">
                        Welcome to <span className="text-[#A00028]">The Vault</span>
                    </div>
                </section>

                <div className="mb-14">
                    <h2 className="text-xl font-bold mb-4 text-gray-700 flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-600" />
                        Auth Bridge Status
                    </h2>
                    <IntegrationTest />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, i) => (
                        <a
                            key={i}
                            href={section.href}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col gap-2 cursor-pointer"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#fff2f2] to-[#fafafa]">
                                    {section.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-[#0a0a0a]">
                                    {section.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">{section.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
