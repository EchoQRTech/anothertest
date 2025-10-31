"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  FileSpreadsheet,
  BookOpen,
  Share2,
  Settings,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.background = "#ffffff";
    document.body.style.background = "#ffffff";
    document.body.style.fontFamily =
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",Roboto,Helvetica,Arial,sans-serif';

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
      image: "/images/depop.png",
      href: "/academy/depop",
    },
    {
      name: "Whatnot",
      desc: "Host powerful live shows and optimize your auctions with proven tips and templates.",
      image: "/images/whatnot.png",
      href: "/academy/whatnot",
    },
    {
      name: "eBay",
      desc: "Dominate the marketplace with SEO-driven titles, dynamic pricing, and listing data.",
      image: "/images/ebay.png",
      href: "/academy/ebay",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#ffffff] via-[#fff6f6] to-[#fff0f2] flex flex-col items-center text-[#0A0A0A] px-6 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl border border-white/70 rounded-3xl p-5 sm:p-6 shadow-[0_6px_25px_rgba(0,0,0,0.05)] mb-10">
          <Image
            src="/images/logo.png"
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
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-4"
          >
            Welcome to <span className="text-[#A00028]">The Vault</span>
          </motion.h1>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <a
              key={i}
              href={section.href}
              target={section.href === settingsHref ? "_blank" : "_self"}
              rel={section.href === settingsHref ? "noopener noreferrer" : undefined}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.25 }}
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
              </motion.div>
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
              <Link key={i} href={platform.href}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-3xl border border-gray-100 p-8 text-left shadow-sm hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={platform.image}
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
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

      </motion.div>

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
          <Image
            src="/images/logo.png"
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
