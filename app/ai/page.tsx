"use client";

import { useEffect } from "react";
import { Bot, Brain, BarChart3, PackageSearch } from "lucide-react";
import Link from "next/link";

export default function VaultAIDashboard() {
  useEffect(() => {
    document.documentElement.style.background = "#ffffff";
    document.body.style.background = "#ffffff";
    document.body.style.fontFamily =
      '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  }, []);

  const bots = [
    {
      id: "listing",
      name: "Listing Genius",
      desc: "Auto-generate clean resale titles & descriptions.",
      icon: <Bot className="w-5 h-5 text-[#A00028]" />,
    },
    {
      id: "pricing",
      name: "Price Predictor",
      desc: "Estimate item value based on brand & category data.",
      icon: <BarChart3 className="w-5 h-5 text-[#A00028]" />,
    },
    {
      id: "psychology",
      name: "Buyer Psychology",
      desc: "Optimize listings to attract more engagement.",
      icon: <Brain className="w-5 h-5 text-[#A00028]" />,
    },
    {
      id: "sourcing",
      name: "Sourcing Strategist",
      desc: "Discover high-ROI brands & trending items.",
      icon: <PackageSearch className="w-5 h-5 text-[#A00028]" />,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-[#0a0a0a] flex flex-col items-center pt-28 px-6 font-sans">
      {/* ---------- HEADER ---------- */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        Vault <span className="text-[#A00028]">AI Dashboard</span>
      </h1>
      <p className="text-gray-500 text-center mb-12 max-w-md">
        Select a specialized AI assistant to start chatting instantly.
      </p>

      {/* ---------- GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {bots.map((bot) => (
          <Link
            key={bot.id}
            href={`/vault-ai/${bot.id}`}
            className="flex flex-col items-start justify-between p-6 border border-gray-200 rounded-xl hover:border-[#A00028]/50 hover:shadow-[0_4px_25px_rgba(160,0,40,0.08)] transition-all duration-300 bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              {bot.icon}
              <h3 className="text-lg font-semibold">{bot.name}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {bot.desc}
            </p>
            <div className="w-full flex justify-between items-center">
              <span className="text-[#A00028] text-sm font-medium">
                Open Chat →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ---------- FOOTER ---------- */}
      <p className="text-xs text-gray-400 mt-20 text-center">
        © {new Date().getFullYear()} The Vault AI • Powered by Treasuretto
      </p>
    </main>
  );
}
