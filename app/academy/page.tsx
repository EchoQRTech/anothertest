"use client";

import Link from "next/link";
import {
  BookOpen,
  Camera,
  LineChart,
  Brain,
  Zap,
  MessageSquare,
  Store,
  Package,
} from "lucide-react";

export default function VaultAcademy() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-[#fff8f8] text-[#0a0a0a] px-6 py-16 font-[Inter]">
      {/* ---------- HEADER ---------- */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
          Welcome to <span className="text-[#A00028]">The Academy</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Deep-dive into every part of reselling, from sourcing and pricing to mastering your favorite platforms.
        </p>
      </header>

      {/* ---------- MODULE GRID ---------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modules.map((m, i) => (
          <Link
            key={i}
            href={m.href}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#A00028]/40 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#A00028]/10 rounded-xl group-hover:bg-[#A00028]/20 transition-all">
                {m.icon}
              </div>
              <h3 className="text-lg font-semibold">{m.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">{m.desc}</p>
            <span className="text-[#A00028] text-sm font-medium group-hover:underline">
              Open Module →
            </span>
          </Link>
        ))}
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="text-center text-gray-400 text-xs mt-20">
        © {new Date().getFullYear()} The Vault — Academy Access
      </footer>
    </main>
  );
}

/* ---------- MODULE DATA ---------- */
const modules = [
  {
    icon: <BookOpen className="w-5 h-5 text-[#A00028]" />,
    title: "Sourcing Mastery",
    desc: "Find profitable inventory anywhere. Learn pattern recognition, negotiation, and sourcing flow.",
    href: "/academy/sourcing",
  },
  {
    icon: <Camera className="w-5 h-5 text-[#A00028]" />,
    title: "Photography & Styling",
    desc: "Create photos that convert. Learn lighting, posing, and the art of building a consistent visual brand.",
    href: "/academy/photography",
  },
  {
    icon: <LineChart className="w-5 h-5 text-[#A00028]" />,
    title: "Pricing & Buyer Psychology",
    desc: "Understand emotional pricing, scarcity triggers, and how to increase perceived value instantly.",
    href: "/academy/pricing",
  },
  {
    icon: <Brain className="w-5 h-5 text-[#A00028]" />,
    title: "AI Tools Mastery",
    desc: "Use Vault’s AI suite — from Title Genius to Price Predictor — to automate listings and decisions.",
    href: "/academy/ai-tools",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#A00028]" />,
    title: "Negotiation & Communication",
    desc: "Master DMs and offers. Learn professional negotiation tactics, buyer messaging, and brand trust building.",
    href: "/academy/negotiation",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#A00028]" />,
    title: "Scaling & Automation",
    desc: "Systemize your store and scale with spreadsheets, analytics, and time-saving automations.",
    href: "/academy/scaling",
  },
  // --- Platform-Specific Mastery Modules ---
  {
    icon: <Store className="w-5 h-5 text-[#A00028]" />,
    title: "Depop Mastery",
    desc: "Learn algorithm secrets, discover timing tactics, and optimize your visuals to dominate Depop’s feed.",
    href: "/academy/depop",
  },
  {
    icon: <Package className="w-5 h-5 text-[#A00028]" />,
    title: "eBay Mastery",
    desc: "From SEO to auction strategy, build a system for consistent daily eBay sales and repeat buyers.",
    href: "/academy/ebay",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#A00028]" />,
    title: "Whatnot Mastery",
    desc: "Host profitable live shows, build repeat buyers, and learn how to run efficient, engaging Whatnot streams.",
    href: "/academy/whatnot",
  },
];
