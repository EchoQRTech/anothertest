"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0b0603] to-black text-[#f6e6b2] font-sans overflow-hidden">
      {/* ---------------- HEADER / INTRO ---------------- */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h1
          className="font-[Cinzel] text-5xl md:text-6xl font-bold bg-gradient-to-b from-[#f6e6b2] via-[#d1b573] to-[#b8944a] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(209,181,115,0.35)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Vault Affiliate Program
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mt-6 text-[#d1b573]/90 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Earn <span className="text-[#f6e6b2] font-semibold">40% lifetime commission</span> through Rewardful + Stripe.
        </motion.p>

        <motion.p
          className="text-sm text-gray-400 mt-3 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Earnings vary. Results are not guaranteed.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="https://YOUR-REWARDFUL-SIGNUP-LINK"
            className="px-10 py-4 bg-gradient-to-b from-[#f6e6b2] via-[#d1b573] to-[#b8944a] text-black font-semibold rounded-2xl shadow-[0_0_40px_rgba(209,181,115,0.45)] hover:shadow-[0_0_60px_rgba(209,181,115,0.7)] transition-all duration-300"
          >
            Sign Up to Become an Affiliate
          </Link>
        </motion.div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-24 px-8 md:px-20 text-center border-t border-b border-[#d1b573]/20">
        <motion.h2
          className="font-[Cinzel] text-3xl mb-6 bg-gradient-to-b from-[#f6e6b2] to-[#b8944a] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-[#d1b573]/90 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join for free and earn recurring commissions every month from your referrals.
          Each new subscriber you bring to The Vault is tracked automatically by
          Rewardful. Payments are processed securely through Stripe, and you’ll continue
          to earn 40% lifetime revenue share for as long as your referrals stay active.
        </motion.p>
      </section>

      {/* ---------------- TERMS OF SERVICE ---------------- */}
      <section className="py-24 px-8 md:px-20 border-b border-[#d1b573]/20">
        <motion.h2
          className="font-[Cinzel] text-3xl mb-8 bg-gradient-to-b from-[#f6e6b2] to-[#b8944a] bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Terms of Service
        </motion.h2>

        <motion.ul
          className="max-w-3xl mx-auto space-y-4 text-[#d1b573]/90 text-left list-disc list-inside"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <li>40% recurring commissions on active referrals.</li>
          <li>Payments via Rewardful + Stripe monthly.</li>
          <li>Affiliates must comply with FTC disclosure rules.</li>
          <li>No spam, fake claims, or deceptive ads.</li>
          <li>The Vault may modify rates/terms with notice.</li>
          <li>Earnings are not guaranteed.</li>
        </motion.ul>
      </section>

      {/* ---------------- PRIVACY POLICY ---------------- */}
      <section className="py-24 px-8 md:px-20 border-b border-[#d1b573]/20">
        <motion.h2
          className="font-[Cinzel] text-3xl mb-8 bg-gradient-to-b from-[#f6e6b2] to-[#b8944a] bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Privacy Policy
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-[#d1b573]/90 leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>
            We collect minimal personal data — only what’s necessary to operate the
            affiliate program: your name, email address, and payment details.
          </p>
          <p>
            This information is stored securely by Rewardful and Stripe. The Vault does
            not sell, rent, or share your data with any third parties.
          </p>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a
              href="mailto:support@thevault.ai"
              className="text-[#f6e6b2] underline hover:text-white"
            >
              support@thevault.ai
            </a>.
          </p>
        </motion.div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-10 text-center text-xs text-[#b8944a]/70">
        © 2025 The Vault — Powered by Supabase · Lemon Squeezy · Rewardful · Stripe.
      </footer>
    </main>
  );
}
