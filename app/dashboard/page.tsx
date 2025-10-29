"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Cpu,
  BookOpen,
  TrendingUp,
  Rocket,
  LogOut,
  Zap,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ---------------- PAGE ---------------- */
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = "Tyler";

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0b0603] to-[#120a06] text-[#f6e6b2] font-[Inter] relative overflow-hidden">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={`transition-all duration-500 ${
          menuOpen ? "blur-md pointer-events-none" : ""
        }`}
      >
        <Hero username={username} />
        <VaultNexus />
        <Academy />
        <MarketPulse />
        <PartnerProgram />
      </div>
    </main>
  );
}

/* ---------------- SIDEBAR ---------------- */
function Sidebar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const navItems = [
    { name: "Dashboard", icon: Home },
    { name: "Nexus", icon: Cpu },
    { name: "Academy", icon: BookOpen },
    { name: "Market", icon: TrendingUp },
    { name: "Partners", icon: Rocket },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-2 bg-black/40 backdrop-blur-lg rounded-xl border border-[#d1b573]/30"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: menuOpen || typeof window === "undefined" ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 90 }}
        className={`fixed top-0 left-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-[#d1b573]/20 shadow-[0_0_45px_rgba(209,181,115,0.2)] p-6 flex flex-col gap-10 z-40 md:translate-x-0 md:static`}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Vault OS"
            width={34}
            height={34}
            className="rounded-full"
          />
          <span className="text-xl font-[Cinzel] tracking-wide text-[#f6e6b2]">
            VAULT OS
          </span>
        </div>

        <nav className="flex flex-col gap-6 mt-4">
          {navItems.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href="#"
              className="flex items-center gap-3 text-[#f6e6b2]/80 hover:text-[#f6e6b2] transition-all duration-200"
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            href="#"
            className="flex items-center gap-3 text-[#f6e6b2]/80 hover:text-[#f6e6b2] transition-all duration-200"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </div>
      </motion.aside>
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ username }: { username: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 md:ml-64"
    >
      {/* Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 20, 0],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#d1b573]/10 blur-3xl"
      />
      <div className="relative z-10">
        <h1 className="font-[Cinzel] text-4xl md:text-5xl mb-4">
          Welcome back, <span className="text-[#d1b573]">{username}</span>.
        </h1>
        <p className="text-[#f6e6b2]/70 max-w-2xl mx-auto text-lg">
          Control your entire resale empire — listings, data, AI insights, and
          education — all in one OS.
        </p>
      </div>
    </motion.section>
  );
}

/* ---------------- VAULT NEXUS ---------------- */
function VaultNexus() {
  const modules = [
    { title: "Listing Optimizer", icon: Zap },
    { title: "Price Predictor", icon: TrendingUp },
    { title: "DM Script Engine", icon: BookOpen },
    { title: "Profit Tracker", icon: Cpu },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-20 md:ml-64"
    >
      <h2 className="font-[Cinzel] text-3xl text-center mb-10">
        Vault Nexus
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {modules.map(({ title, icon: Icon }) => (
          <motion.div
            key={title}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-black/30 border border-[#d1b573]/20 rounded-2xl p-6 text-center shadow-[0_0_25px_rgba(209,181,115,0.1)] backdrop-blur-lg transition-all"
          >
            <Icon className="mx-auto mb-3 text-[#d1b573]" size={28} />
            <h3 className="font-semibold">{title}</h3>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 rounded-xl border border-[#d1b573]/50 hover:bg-[#d1b573]/10 transition-all text-[#f6e6b2] font-medium">
          Launch Nexus →
        </button>
      </div>
    </motion.section>
  );
}

/* ---------------- ACADEMY ---------------- */
function Academy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-28 px-6 md:px-20 text-center md:ml-64"
    >
      <div className="bg-gradient-to-br from-[#1a120c]/60 to-[#0b0603]/60 border border-[#d1b573]/20 rounded-2xl backdrop-blur-lg shadow-[0_0_40px_rgba(209,181,115,0.15)] p-12 max-w-3xl mx-auto">
        <h2 className="font-[Cinzel] text-3xl mb-4 text-[#f6e6b2]">
          The Academy
        </h2>
        <p className="text-[#f6e6b2]/70 mb-6">
          Learn the secrets of top-tier resellers through guided modules and
          case studies.
        </p>
        <button className="px-6 py-3 rounded-xl border border-[#d1b573]/50 hover:bg-[#d1b573]/10 transition-all text-[#f6e6b2] font-medium">
          Enter The Academy →
        </button>
      </div>
    </motion.section>
  );
}

/* ---------------- MARKET PULSE ---------------- */
function MarketPulse() {
  const data = [
    "Nike Vintage +3.2%",
    "Y2K Denim +1.8%",
    "Carhartt Jackets -0.9%",
    "Harley Tees +4.5%",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden border-t border-b border-[#d1b573]/20 py-6 md:ml-64"
    >
      <div className="animate-marquee whitespace-nowrap text-center">
        {Array(4)
          .fill(data)
          .flat()
          .map((item, i) => (
            <span
              key={i}
              className="inline-block mx-10 text-[#f6e6b2]/80 tracking-wide"
            >
              {item}
            </span>
          ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
}

/* ---------------- PARTNER PROGRAM ---------------- */
function PartnerProgram() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-20 text-center md:ml-64"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="font-[Cinzel] text-3xl mb-4 text-[#f6e6b2]">
          Partner Program
        </h2>
        <p className="text-[#f6e6b2]/70 mb-8">
          Earn 40% recurring commissions by referring other resellers.
        </p>
        <button className="px-8 py-3 rounded-xl border border-[#d1b573]/60 hover:bg-[#d1b573]/10 hover:shadow-[0_0_30px_rgba(209,181,115,0.3)] transition-all text-[#f6e6b2] font-medium">
          Join Now →
        </button>
      </div>
    </motion.section>
  );
}
