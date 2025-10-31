"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#fff5f5] to-[#fff0f2] text-[#0A0A0A] font-sans px-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-[0_8px_35px_rgba(0,0,0,0.08)] p-10 sm:p-12 text-center max-w-md w-full"
      >
        {/* ---------- LOGO ---------- */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Vault Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* ---------- CHECK ICON ---------- */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#A00028] rounded-full p-4 flex items-center justify-center shadow-[0_4px_15px_rgba(160,0,40,0.25)]">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* ---------- TITLE ---------- */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 font-[SF Pro Display] text-[#A00028]">
          Welcome to The Vault
        </h1>

        {/* ---------- MESSAGE ---------- */}
        <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
          Your account has been created — and your access is secured.
          <br />
          Check your inbox for a confirmation email to{" "}
          <span className="text-[#A00028] font-semibold">set your password</span>.
          Once confirmed, log in to unlock your personalized dashboard.
        </p>

        {/* ---------- CTA BUTTON ---------- */}
        <Link
          href="https://treasuretto-llc.outseta.com/auth?widgetMode=login#o-anonymous"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full bg-[#A00028] text-white font-semibold px-8 py-3.5 rounded-xl text-lg shadow-[0_4px_20px_rgba(160,0,40,0.25)] hover:scale-[1.03] transition-all duration-300">
            Go to Login
          </button>
        </Link>
      </motion.section>
    </main>
  );
}
