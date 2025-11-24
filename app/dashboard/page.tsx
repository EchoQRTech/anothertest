"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import {
  Brain, FileSpreadsheet, BookOpen, Share2, Settings,
  BarChart3, Zap, CheckCircle, XCircle, Loader2
} from "lucide-react";

// ---------------------------------------------
// INTERNAL CLIENT-SIDE SUPABASE LOADING
// ---------------------------------------------
let supabase: any = null;
function loadSupabaseClient() {
  if (!supabase) {
    supabase = require("../../lib/supabase-outseta").supabase;
  }
  return supabase;
}

// ---------------------------------------------
// TYPES
// ---------------------------------------------
interface UserProfile {
  id: string;
  email: string;
  subscription_tier?: string;
}

// ---------------------------------------------
// INTEGRATION TEST COMPONENT
// ---------------------------------------------
function IntegrationTest() {
  const [data, setData] = useState<UserProfile[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOutsetaReady, setIsOutsetaReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).Outseta) {
        setIsOutsetaReady(true);
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isOutsetaReady) return;

    async function fetchData() {
      setLoading(true);
      setError(null);

      const supabase = loadSupabaseClient();

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

  // Render UI
  if (!isOutsetaReady) {
    return (
      <div className="flex items-center gap-3 p-4 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-xl">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="font-semibold text-sm">Waiting for Outseta script...</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="font-semibold text-sm">Running Token Exchange...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-xl shadow-lg text-left">
        <div className="flex items-center gap-3 text-red-700 mb-2">
          <XCircle className="w-5 h-5" />
          <span className="font-bold text-sm uppercase">Integration Error</span>
        </div>
        <pre className="text-xs font-mono text-red-700">{error}</pre>
      </div>
    );
  }

  const authenticated = data && data.length > 0 && data[0]?.id;

  return (
    <div className={`p-5 rounded-xl shadow-lg text-left ${authenticated ? "bg-green-50 border-l-4 border-green-500" : "bg-gray-50 border-l-4 border-gray-400"}`}>
      <div className="flex items-center gap-3 mb-2">
        {authenticated ? (
          <CheckCircle className="w-5 h-5 text-green-700" />
        ) : (
          <Zap className="w-5 h-5 text-gray-700" />
        )}
        <span className="font-bold text-sm uppercase text-gray-800">
          {authenticated ? "Integration Successful" : "Anonymous Mode"}
        </span>
      </div>

      <pre className="text-xs font-mono bg-white/90 p-3 rounded-lg border border-gray-200 overflow-auto max-h-40 text-gray-800">
        {JSON.stringify(data || { status: "Not Authenticated" }, null, 2)}
      </pre>
    </div>
  );
}

// ---------------------------------------------
// MAIN PAGE
// ---------------------------------------------
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
      desc: "Track brand performance, live resale trends.",
      href: "/vault-index",
    },
    {
      icon: <Brain size={24} className="text-[#A00028]" />,
      title: "AI Tools",
      desc: "Your AI listing + pricing suite.",
      href: "/ai",
    },
    {
      icon: <FileSpreadsheet size={24} className="text-[#CBAF7A]" />,
      title: "Spreadsheet Vault",
      desc: "50+ templates for resellers.",
      href: "/spreadsheets",
    },
    {
      icon: <BookOpen size={24} className="text-[#A00028]" />,
      title: "Vault Academy",
      desc: "Learn sourcing & pricing.",
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
      desc: "Manage your account.",
      href: settingsHref,
    },
  ];

  const platforms = [
    {
      name: "Depop",
      desc: "Master Depop conversions.",
      image: "https://placehold.co/42x42/A00028/ffffff?text=DP",
      href: "/academy/depop",
    },
    {
      name: "Whatnot",
      desc: "Boost your live show sales.",
      image: "https://placehold.co/42x42/0A0A0A/ffffff?text=WN",
      href: "/academy/whatnot",
    },
    {
      name: "eBay",
      desc: "SEO, pricing & optimization.",
      image: "https://placehold.co/42x42/CBAF7A/ffffff?text=EB",
      href: "/academy/ebay",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-[#fff0f2] flex flex-col items-center text-[#0A0A0A] px-6 py-14">

      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl border border-white/70 rounded-3xl p-5 shadow mb-10">
          <img
            src="https://placehold.co/42x42/A00028/ffffff?text=V"
            alt="Vault Logo"
            width={42}
            height={42}
          />

          <a href={settingsHref} target="_blank" rel="noopener noreferrer">
            <Settings size={28} className="text-[#A00028]" />
          </a>
        </div>

        {/* Title */}
        <section className="text-center mb-6">
          <div className="text-4xl font-bold text-[#0a0a0a]">
            Welcome to <span className="text-[#A00028]">The Vault</span>
          </div>
        </section>

        {/* Integration Test */}
        <div className="mb-14">
          <h2 className="text-xl font-bold mb-4 text-gray-700 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Auth Bridge Status
          </h2>
          <IntegrationTest />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <a key={i} href={section.href}>
              <div className="bg-white rounded-3xl border p-8 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                </div>
                <p className="text-gray-600">{section.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Platform Learning */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Learn by <span className="text-[#A00028]">Platform</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {platforms.map((platform, i) => (
              <a key={i} href={platform.href}>
                <div className="bg-white rounded-3xl border p-8 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={platform.image} width={42} height={42} />
                    <h3 className="text-xl font-semibold">{platform.name}</h3>
                  </div>
                  <p className="text-gray-600">{platform.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>

      <VaultFooter />
    </main>
  );
}

// ---------------------------------------------
// FOOTER
// ---------------------------------------------
function VaultFooter() {
  const links = {
    Learn: [
      { name: "Getting Started", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "AI Tools", href: "#features" },
      { name: "Affiliate Program", href: "#affiliate" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Support", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    Connect: [
      { name: "Instagram", href: "https://instagram.com/treasuretto" },
      { name: "TikTok", href: "https://tiktok.com/@treasuretto" },
      { name: "YouTube", href: "https://youtube.com/@treasuretto" },
    ],
  };

  return (
    <footer className="w-full bg-[#fafafa] border-t mt-24 py-16 px-10 text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://placehold.co/48x48/A00028/ffffff?text=V"
            width={48}
            height={48}
          />
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-2 text-sm">
              {items.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#A00028]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t mt-16 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} The Vault by Treasuretto. All rights reserved.
      </div>
    </footer>
  );
}
