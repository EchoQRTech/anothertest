"use client";

import { Suspense } from "react";
import Link from "next/link";
import { GraduationCap, Lock, Crown, Rocket, Check, ArrowRight } from "lucide-react";

function SignUpContent() {
  const plans = [
    {
      name: "Education Vault",
      icon: GraduationCap,
      price: "Free",
      period: "forever",
      paymentLink:
        "https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=L9PB36mJ&planPaymentTerm=month&skipPlanOptions=true",
      features: [
        "Free educational content",
        "Community support",
        "Basic templates",
        "Weekly trends",
      ],
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
    },
    {
      name: "Starter Vault",
      icon: Lock,
      price: "$10",
      period: "/month",
      paymentLink:
        "https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=DQ2L0LWV&planPaymentTerm=month&skipPlanOptions=true",
      features: [
        "Everything in Education",
        "Spreadsheet Vault",
        "12 Hour Vault Index",
        "Access To GPTs via OpenAI",
        "Community Access",
      ],
      color: "from-gold/20 to-[#b8944a]/20",
      borderColor: "border-gold/30",
    },
    {
      name: "Pro Vault",
      icon: Crown,
      price: "$25",
      period: "/month",
      paymentLink:
        "https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=L9nbXX9Z&planPaymentTerm=month&skipPlanOptions=true",
      features: [
        "Everything in Starter",
        "All AI Tools",
        "12-Hour Market Index",
        "Priority Support",
        "Advanced Analytics",
      ],
      color: "from-[#d1b573]/30 to-[#b8944a]/30",
      borderColor: "border-gold",
      popular: true,
    },
    {
      name: "Elite Vault",
      icon: Rocket,
      price: "$99",
      period: "/month",
      paymentLink:
        "https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=xmeMVwmV&planPaymentTerm=month&skipPlanOptions=true",
      features: [
        "Everything in Pro",
        "1-on-1 Mentorship",
        "Beta Access",
        "Direct Data Feeds",
        "Monthly Calls",
      ],
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-[#0b0603] to-black text-gold p-8 overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#d1b57325] via-transparent to-transparent blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-block mb-6 text-gold/70 hover:text-gold transition-colors"
          >
            Back to Home
          </Link>
          <h1 className="font-[Cinzel] text-6xl mb-4 bg-gradient-to-b from-[#f6e6b2] via-[#d1b573] to-[#b8944a] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(209,181,115,0.3)]">
            Choose Your Vault
          </h1>
          <p className="text-xl text-gold/80 max-w-2xl mx-auto">
            Select the plan that fits your reselling journey
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative p-6 rounded-2xl border-2 ${plan.borderColor} bg-gradient-to-b ${plan.color} transition-all duration-300 hover:scale-105`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d1b573] to-[#b8944a] text-black px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-gold" />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-gold mb-2 font-[Cinzel]">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gold">{plan.price}</span>
                  <span className="text-gold/60 text-sm ml-1">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gold/80">
                      <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* ✅ Fixed Outseta Link Button (no popup hijack) */}
                <button
                  onClick={() => window.open(plan.paymentLink, "_blank")}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-b from-[#d1b573] to-[#b8944a] text-black rounded-lg font-semibold text-sm hover:from-[#f6e6b2] hover:to-[#d1b573] transition-all shadow-[0_0_20px_rgba(209,181,115,0.3)] hover:shadow-[0_0_40px_rgba(209,181,115,0.5)]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <div className="flex items-center justify-center gap-8 text-gold/60 text-sm mt-12">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Secure via Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>14-day free trial</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0603] to-black text-gold flex items-center justify-center">
          <div className="animate-pulse text-2xl font-[Cinzel]">Loading...</div>
        </div>
      }
    >
      <SignUpContent />
    </Suspense>
  );
}
