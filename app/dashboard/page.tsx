"use client";

import { useEffect, useState } from "react";
// Lucide icons are used for visual appeal and functionality
import { 
    Brain, FileSpreadsheet, BookOpen, Share2, Settings, BarChart3, 
    Zap, CheckCircle, XCircle, Loader2 
} from "lucide-react";
// motion from framer-motion has been removed to avoid compilation issues

// --- START: SUPABASE CLIENT IMPORT AND INTEGRATION TEST LOGIC ---

// IMPORTANT: This file needs to be located in your project root at /lib/supabase-outseta.ts
// We use the simplest relative path here.
import { supabase } from './lib/supabase-outseta'; 

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

  // 1. Wait for the Outseta script to load
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Outseta) {
        setIsOutsetaReady(true);
    } else {
        const interval = setInterval(() => {
            if (typeof window !== 'undefined' && (window as any).Outseta) {
                setIsOutsetaReady(true);
                clearInterval(interval);
            }
        }, 200);
        return () => clearInterval(interval);
    }
  }, []);

  // 2. Run the RLS test query when Outseta is ready
  useEffect(() => {
    if (!isOutsetaReady) return;

    async function fetchData() {
        setLoading(true);
        setError(null);
      
        // This query automatically calls the token exchange in your utility file!
        const { data: testData, error: supabaseError } = await supabase
          .from('user_profiles') // CHANGE this to a table you have RLS enabled on
          .select('id, email, subscription_tier')
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


  // 3. Render Status UI
  const renderStatus = () => {
    if (!isOutsetaReady) {
        return (
             <div className="flex items-center gap-3 p-4 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-xl">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="font-semibold text-sm">Waiting for Outseta script to load...</span>
            </div>
        );
    }
    
    if (loading) {
      return (
        <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="font-semibold text-sm">Executing Token Exchange & RLS Query...</span>
        </div>
      );
    }
    
    if (error) {
        return (
            <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-xl shadow-lg text-left">
                <div className="flex items-center gap-3 text-red-700 mb-2">
                    <XCircle className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase">INTEGRATION FAILED</span>
                </div>
                <p className="font-mono text-xs text-red-800 break-words">
                    {error}
                </p>
                <p className="mt-3 text-xs text-red-600">
                    * If you are **logged in**, check the Supabase Edge Function logs.
                </p>
            </div>
        );
    }
    
    const isAuthenticated = data && data.length > 0 && data[0]?.id;

    return (
        <div className={`p-5 rounded-xl shadow-lg text-left ${isAuthenticated ? 'bg-green-50 border-l-4 border-green-500' : 'bg-gray-50 border-l-4 border-gray-400'}`}>
            <div className="flex items-center gap-3 mb-2">
                {isAuthenticated ? (
                    <CheckCircle className="w-5 h-5 text-green-700" />
                ) : (
                    <Zap className="w-5 h-5 text-gray-700" />
                )}
                <span className="font-bold text-sm uppercase text-gray-800">
                    {isAuthenticated ? 'Integration Successful' : 'Anonymous Mode (No Login)'}
                </span>
            </div>
            
            <p className="text-gray-600 text-xs mb-3">
                {isAuthenticated
                    ? `Data retrieved for user ${data[0].id.slice(0, 8)}... using exchanged JWT.`
                    : 'Testing connection as anonymous user.'}
            </p>

            <pre className="text-xs font-mono bg-white/90 p-3 rounded-lg border border-gray-200 overflow-auto max-h-40 text-gray-800">
                {JSON.stringify(data || { status: 'Not Authenticated' }, null, 2)}
            </pre>
        </div>
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {renderStatus()}
    </div>
  );
}
// --- END: INTEGRATION TEST COMPONENT (EMBEDDED) ---


export default function Page() {
  useEffect(() => {
    document.documentElement.style.background = "#ffffff";
    document.body.style.background = "#ffffff";
    document.body.style.fontFamily =
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",Roboto,Helvetica,Arial,sans-serif';

    // Ensure Outseta is explicitly run on this dashboard page
    if (typeof window !== "undefined" && (window as any).Outseta) {
      (window as any).Outseta.run();
    }
  }, []);

  const settingsHref = "https://treasuretto-llc.outseta.com/profile?#o-authenticated";

  const sections = [
    {
      icon: <BarChart3 size={24} className="text-[#A00028]" />,
      title: "Vault Index",
      desc: "Track brand performance, live resale trends, and category data.",
      href: "/vault-index",
    },
    {
      icon: <Brain size={24} className="text-[#A00028]" />,
      title: "AI Tools",
      desc: "Access your Vault AI listing, pricing, and strategy suite.",
      href: "/ai",
    },
    {
      icon: <FileSpreadsheet size={24} className="text-[#CBAF7A]" />,
      title: "Spreadsheet Vault",
      desc: "50+ templates to track profits, inventory, and expenses.",
      href: "/spreadsheets",
    },
    {
      icon: <BookOpen size={24} className="text-[#A00028]" />,
      title: "Vault Academy",
      desc: "Learn sourcing, pricing, and buyer psychology in curated lessons.",
      href: "/academy",
    },
    {
      icon: <Share2 size={24} className="text-[#A00028]" />,
      title: "Affiliate Program",
      desc: "Earn commissions by sharing The Vault with other sellers.",
      href: "/affiliate",
    },
    {
      icon: <Settings size={24} className="text-gray-600" />,
      title: "Settings & Preferences",
      desc: "Customize notifications, themes, and integrations.",
      href: settingsHref,
    },
  ];

  const platforms = [
    {
      name: "Depop",
      desc: "Master Depop growth — learn photography, branding, and pricing strategies that convert.",
      // Using a basic placeholder URL
      image: "https://placehold.co/42x42/A00028/ffffff?text=DP",
      href: "/academy/depop",
    },
    {
      name: "Whatnot",
      desc: "Host powerful live shows and optimize your auctions with proven tips and templates.",
      // Using a basic placeholder URL
      image: "https://placehold.co/42x42/0A0A0A/ffffff?text=WN",
      href: "/academy/whatnot",
    },
    {
      name: "eBay",
      desc: "Dominate the marketplace with SEO-driven titles, dynamic pricing, and listing data.",
      // Using a basic placeholder URL
      image: "https://placehold.co/42x42/CBAF7A/ffffff?text=EB",
      href: "/academy/ebay",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#ffffff] via-[#fff6f6] to-[#fff0f2] flex flex-col items-center text-[#0A0A0A] px-6 py-14 sm:py-20">
      <div // Removed motion.div
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl border border-white/70 rounded-3xl p-5 sm:p-6 shadow-[0_6px_25px_rgba(0,0,0,0.05)] mb-10">
          {/* Logo Placeholder */}
          <img 
            src="https://placehold.co/42x42/A00028/ffffff?text=V"
            alt="Vault Logo"
            width={42}
            height={42}
            className="object-contain hover:scale-105 transition-transform duration-300"
          />

          <a href={settingsHref} target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-[#f5f5f5] transition">
              <Settings size={28} className="text-[#A00028]" />
            </button>
          </a>
        </div>

        {/* Welcome Section */}
        <section className="text-center mb-6">
          <div // Removed motion.h1
            className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-4"
          >
            Welcome to <span className="text-[#A00028]">The Vault</span>
          </div>
        </section>
        
        {/* --- LIVE INTEGRATION STATUS (PLACEMENT) --- */}
        <div className="mb-14">
            <h2 className="text-xl font-bold mb-4 text-gray-700 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Auth Bridge Status
            </h2>
            <IntegrationTest />
        </div>
        {/* ------------------------------------------- */}


        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <a // Removed Link
              key={i}
              href={section.href}
              target={section.href === settingsHref ? "_blank" : "_self"}
              rel={section.href === settingsHref ? "noopener noreferrer" : undefined}
            >
              <div // Removed motion.div
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300 p-8 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#fff2f2] to-[#fafafa]">
                    {section.icon}
                  </div>
                  <h3 className="text-[17px] sm:text-lg font-semibold text-[#0a0a0a]">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[15px] leading-snug">
                  {section.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Learn by Platform Section */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-10">
            Learn by <span className="text-[#A00028]">Platform</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {platforms.map((platform, i) => (
              <a key={i} href={platform.href} target="_self" rel="noopener noreferrer"> {/* Removed Link */}
                <div // Removed motion.div
                  className="bg-white rounded-3xl border border-gray-100 p-8 text-left shadow-sm hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                      {/* Placeholder Image */}
                    <img 
                      src={`https://placehold.co/42x42/CBAF7A/ffffff?text=${platform.name.slice(0,1)}`}
                      alt={platform.name}
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                    <h3 className="text-xl font-semibold text-[#0a0a0a]">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {platform.desc}
                  </p>
                  <button className="mt-5 text-[#A00028] font-medium text-sm hover:underline">
                    Explore →
                  </button>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div> {/* Removed motion.div */}

      <VaultFooter />
    </main>
  );
}

/* Footer component unchanged */
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
    <footer className="relative w-full bg-[#fafafa] border-t border-gray-200 mt-24 py-16 px-10 text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
          {/* Logo Placeholder */}
          <img 
            src="https://placehold.co/48x48/A00028/ffffff?text=V"
            alt="Vault Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-[#0a0a0a] font-semibold mb-4">{title}</h4>
            <ul className="space-y-2 text-[15px]">
              {items.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A00028] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} The Vault by Treasuretto. All rights reserved.
      </div>
    </footer>
  );
}
