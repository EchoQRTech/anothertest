"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { useEffect, useState } from "react";
import { 
    Brain, FileSpreadsheet, BookOpen, Share2, Settings, BarChart3, 
    Zap, CheckCircle, XCircle, Loader2 
} from "lucide-react";

// NOTE: Supabase import moved INSIDE the component so SSR NEVER touches it.

interface UserProfile {
    id: string;
    email: string;
    subscription_tier?: string;
}

function IntegrationTest() {
    const [supabase, setSupabase] = useState<any>(null);
    const [data, setData] = useState<UserProfile[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isOutsetaReady, setIsOutsetaReady] = useState(false);

    // Load Supabase client dynamically (browser only)
    useEffect(() => {
        const client = require("../../lib/supabase-outseta");
        setSupabase(client.supabase);
    }, []);

    // Wait for Outseta
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

    // Run secure Supabase query
    useEffect(() => {
        if (!isOutsetaReady || !supabase) return;

        async function runQuery() {
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

        runQuery();
    }, [isOutsetaReady, supabase]);

    const renderStatus = () => {
        if (!supabase) {
            return (
                <div className="p-4 bg-gray-100 rounded-xl border">
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span className="ml-3 text-sm">Initializing secure client…</span>
                </div>
            );
        }

        if (!isOutsetaReady) {
            return (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-semibold text-sm">Waiting for Outseta…</span>
                </div>
            );
        }

        if (loading) {
            return (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-semibold text-sm">Running RLS-secure query…</span>
                </div>
            );
        }

        if (error) {
            return (
                <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 text-red-700 mb-2">
                        <XCircle className="w-5 h-5" />
                        <span className="font-bold text-sm uppercase">Integration Failed</span>
                    </div>
                    <p className="font-mono text-xs">{error}</p>
                </div>
            );
        }

        const isAuthenticated = data && data.length > 0;

        return (
            <div className={`p-5 rounded-xl shadow-lg ${isAuthenticated ? "bg-green-50 border-l-4 border-green-500" : "bg-gray-50 border-l-4 border-gray-400"}`}>
                <div className="flex items-center gap-3 mb-2">
                    {isAuthenticated ? (
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    ) : (
                        <Zap className="w-5 h-5 text-gray-700" />
                    )}
                    <span className="font-bold text-sm uppercase">
                        {isAuthenticated ? "Integration Successful" : "Anonymous Mode"}
                    </span>
                </div>

                <pre className="text-xs font-mono bg-white p-3 rounded-lg border border-gray-200 max-h-40 overflow-auto">
                    {JSON.stringify(data || { status: "Not Authenticated" }, null, 2)}
                </pre>
            </div>
        );
    };

    return <div className="w-full max-w-lg mx-auto">{renderStatus()}</div>;
}

export default function Page() {
    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).Outseta) {
            (window as any).Outseta.run();
        }
    }, []);

    const settingsHref = "https://treasuretto-llc.outseta.com/profile?#o-authenticated";

    const sections = [
        {
            icon: <BarChart3 size={24} className="text-[#A00028]" />,
            title: "Vault Index",
            desc: "Track brand performance & resale analytics.",
            href: "/vault-index",
        },
        {
            icon: <Brain size={24} className="text-[#A00028]" />,
            title: "AI Tools",
            desc: "Use your listing, pricing, & negotiation AI.",
            href: "/ai",
        },
        {
            icon: <FileSpreadsheet size={24} className="text-[#CBAF7A]" />,
            title: "Spreadsheet Vault",
            desc: "50+ tools for inventory & profit tracking.",
            href: "/spreadsheets",
        },
        {
            icon: <BookOpen size={24} className="text-[#A00028]" />,
            title: "Vault Academy",
            desc: "Learn sourcing, pricing & buyer psychology.",
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
            desc: "Manage account & preferences.",
            href: settingsHref,
        },
    ];

    return (
        <main className="min-h-screen w-full bg-gradient-to-b from-white via-[#fff6f6] to-[#fff0f2] flex flex-col items-center text-black px-6 py-14">
            <div className="w-full max-w-6xl">

                <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl border border-white/70 rounded-3xl p-5 shadow-sm mb-10">
                    <img src="https://placehold.co/42x42/A00028/ffffff?text=V" width={42} height={42} />
                    <a href={settingsHref} target="_blank">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <Settings size={28} className="text-[#A00028]" />
                        </button>
                    </a>
                </div>

                <section className="text-center mb-6">
                    <div className="text-4xl sm:text-5xl font-bold mb-4">
                        Welcome to <span className="text-[#A00028]">The Vault</span>
                    </div>
                </section>

                <div className="mb-14">
                    <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2 text-gray-700">
                        <Zap className="w-5 h-5 text-yellow-600" />
                        Auth Bridge Status
                    </h2>
                    <IntegrationTest />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, i) => (
                        <a key={i} href={section.href} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition p-8 flex flex-col gap-2">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#fff2f2] to-[#fafafa]">
                                    {section.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{section.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{section.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
