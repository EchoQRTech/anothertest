"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Cpu, BarChart3, FileSpreadsheet, Bot } from "lucide-react";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.background = "#ffffff";
    document.body.style.background = "#ffffff";
    document.body.style.fontFamily =
      '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  }, []);

  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-white text-[#0a0a0a] flex flex-col items-center font-sans">
      <Navbar />
      <Hero />
      <Features />
     
      <Testimonials />
     <ComparisonTable />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <VaultFooter />
    </main>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 backdrop-blur-xl bg-white/90 border-b border-gray-200 shadow-sm">
      {/* ---------- LOGO ---------- */}
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Vault Logo"
          width={42}
          height={42}
          className="object-contain hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(160,0,40,0.35)] transition-transform duration-300"
        />
      </div>

      {/* ---------- NAV LINKS ---------- */}
      <div className="hidden md:flex gap-10 text-[15px] text-gray-700 font-medium">
        <a href="#features" className="hover:text-[#A00028] transition">
          Features
        </a>
        <a href="#academy" className="hover:text-[#A00028] transition">
          Academy
        </a>
        <a href="#pricing" className="hover:text-[#A00028] transition">
          Pricing
        </a>
        <a href="#partners" className="hover:text-[#A00028] transition">
          Partners
        </a>
      </div>

      {/* ---------- AUTH BUTTONS ---------- */}
      <div className="flex items-center gap-4">
        {/* ✅ LOGIN BUTTON */}
        <a
          href="https://treasuretto-llc.outseta.com/auth?widgetMode=login#o-anonymous"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-[15px] text-gray-800 hover:text-[#A00028] transition font-medium"
        >
          Log In
        </a>

        {/* ✅ SIGNUP BUTTON */}
        <a
          href="https://treasuretto-llc.outseta.com/auth?widgetMode=register#o-anonymous"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#A00028] hover:bg-[#850020] transition-all text-white text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 rounded-lg shadow-[0_2px_12px_rgba(160,0,40,0.25)] hover:shadow-[0_0_25px_rgba(160,0,40,0.35)] duration-300 font-medium"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}


/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full px-6 mt-40 md:mt-44">
      <h3 className="text-[#A00028] text-lg md:text-xl font-semibold tracking-wide mb-3">
        Vault OS for Resellers
      </h3>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#0a0a0a] mb-8 tracking-tight font-[SF Pro Display]">
     Learn. Automate. Dominate
        <br className="hidden sm:block" />
        <span className="text-[#A00028] drop-shadow-[0_2px_5px_rgba(160,0,40,0.25)]">
          Connected.
        </span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        The world’s first AI-powered resale ecosystem.
Free education. Smarter tools. Infinite opportunity.
      </p>
      <button className="bg-[#A00028] hover:bg-[#850020] transition-all text-white font-semibold px-8 py-4 rounded-md text-lg shadow-[0_2px_12px_rgba(160,0,40,0.25)] hover:shadow-[0_0_25px_rgba(160,0,40,0.4)] duration-300 mb-16">
        Unlock Now
      </button>
      <p className="text-gray-600 text-sm md:text-base mb-8">
        Trusted by <span className="font-semibold text-black">10,000+</span>{" "}
        resellers worldwide
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-20 w-full px-8 opacity-95 mb-20">
        <Image src="/images/depop.png" alt="Depop" width={100} height={40} />
        <Image src="/images/ebay.png" alt="eBay" width={100} height={40} />
        <Image src="/images/whatnot.png" alt="Whatnot" width={120} height={40} />
        <Image src="/images/grailed.png" alt="OpenAI" width={100} height={40} />
      </div>
    </section>
  );
}

/* ---------- FEATURES ---------- */
function Features() {
  return (
    <section
      id="features"
      className="w-full max-w-6xl px-8 py-24 text-center border-t border-gray-100"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-12 font-[SF Pro Display]">
        Built For Resellers. <span className="text-[#A00028]">Powered By AI.</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
        The Vault brings automation, analytics, and strategy together — everything
        a modern reseller needs to grow faster and operate smarter.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
        <FeatureCard
          icon={<Cpu className="text-[#A00028] w-6 h-6" />}
          title="Automate Your Workflow"
          highlights={[
            "Automated profit tracking",
            "Real-time listing analytics",
            "Multi-platform synchronization",
          ]}
          status="Optimized"
          desc="Automate listing organization, pricing, and performance tracking — saving hours weekly."
          tag="Reseller Operations"
        />
        <FeatureCard
          icon={<BarChart3 className="text-[#A00028] w-6 h-6" />}
          title="Vault Index"
          highlights={[
            "100+ brand performance metrics",
            "Real-time trend updates",
            "Historical resale insights",
          ]}
          status="Live"
          desc="Track the resale market like an investor with live brand & category insights."
          tag="Market Data Engine"
        />
        <FeatureCard
          icon={<FileSpreadsheet className="text-[#A00028] w-6 h-6" />}
          title="Spreadsheet Vault"
          highlights={[
            "50+ customizable templates",
            "Profit & loss dashboards",
            "Tax and sourcing calculators",
          ]}
          status="Included"
          desc="Access 50+ pro spreadsheets for ROI tracking, sourcing logs, and more."
          tag="Resource Library"
        />
        <FeatureCard
          icon={<Bot className="text-[#A00028] w-6 h-6" />}
          title="AI Tools Suite"
          highlights={[
            "Title & description optimization",
            "Dynamic pricing assistance",
            "Listing strategy analysis",
          ]}
          status="Powered by AI"
          desc="AI tools like Title Genius, Price Predictor, and more to maximize listing potential."
          tag="Intelligent Systems"
        />
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full max-w-6xl px-8 py-28 text-center border-t border-gray-100"
    >
      <h2 className="text-5xl sm:text-6xl font-bold mb-4 font-[SF Pro Display]">
        <span className="text-[#0a0a0a]">Real Sellers.</span>{" "}
        <span className="text-[#A00028]">Real Results.</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
        Top resellers use <span className="font-semibold text-[#A00028]">The Vault</span> to automate listings, track profits, and scale faster.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-start">
        <Testimonial
          username="@redrockvntg"
          quote="The Vault changed how we run our business. Automation freed up hours every day."
          role="Vintage Seller • Featured on Depop"
          image="/images/redrock.jpg"
          preview="/images/redrock-preview.png"
          link="https://www.depop.com/redrockvntg/"
        />
        <Testimonial
          username="@garagegrailz"
          quote="Our listings got cleaner, pricing smarter, and sales moved faster. The data insights alone are worth it."
          role="Multi-Platform Seller • Verified Member"
          image="/images/garagegrailz.jpg"
          preview="/images/garagegrailz-preview.png"
          link="https://www.depop.com/garagegrailz/"
        />
      </div>
    </section>
  );
  
}
/* ---------- COMPARISON TABLE SECTION ---------- */
/* ---------- WHY USE THE VAULT SECTION ---------- */
function ComparisonTable() {
  const methods = ["Manual Research", "YouTube Guides", "Random Spreadsheets", "The Vault"];

  const features = [
    {
      label: "Up-to-Date Trend Data & Brand Tracking",
      values: [false, false, false, true],
    },
    {
      label: "AI Tools (Title Genius, Price Predictor, etc.)",
      values: [false, false, false, true],
    },
    {
      label: "Spreadsheet Vault (50+ Pre-Built Systems)",
      values: [false, false, true, true],
    },
    {
      label: "Weekly Market Drops & Sourcing Updates",
      values: [false, true, false, true],
    },
    {
      label: "Negotiation Scripts & Pricing Templates",
      values: [false, false, false, true],
    },
    {
      label: "Community of Verified Resellers",
      values: [false, false, false, true],
    },
    {
      label: "Affiliate Income Opportunities",
      values: [false, false, false, true],
    },
    {
      label: "All-In-One Dashboard (No Switching Tools)",
      values: [false, false, false, true],
    },
    {
      label: "Lifetime Learning & Updates",
      values: [false, false, false, true],
    },
  ];

  return (
    <section
      id="why-vault"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-32 text-center border-t border-gray-100 overflow-hidden"
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#fff5f5] to-[#fff0f2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#A00028]/10 blur-[160px] rounded-full opacity-50" />

      <div className="relative">
        {/* HEADER */}
        <h2 className="text-5xl font-extrabold font-[SF Pro Display] mb-6 text-[#0a0a0a]">
          Why <span className="text-[#A00028]">Use The Vault?</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          Compare traditional reseller methods vs. The Vault’s all-in-one system.
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-gray-700 shadow-[0_0_50px_rgba(0,0,0,0.03)] rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#fafafa] text-[#0a0a0a]">
                <th className="py-5 px-4 text-sm font-medium text-gray-500"></th>
                {methods.map((method, i) => (
                  <th
                    key={i}
                    className={`py-5 px-4 text-center font-semibold ${
                      i === 3 ? "bg-[#A00028]/10 text-[#A00028]" : ""
                    }`}
                  >
                    {method}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white/70 backdrop-blur-xl">
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#fff5f5]/70 transition-all duration-300"
                >
                  <td className="py-4 px-4 text-sm font-medium text-gray-800 w-[35%]">
                    {feature.label}
                  </td>
                  {feature.values.map((val, j) => (
                    <td
                      key={j}
                      className={`py-4 text-center ${
                        j === 3 ? "bg-[#A00028]/5" : ""
                      }`}
                    >
                      {val ? (
                        <span className="text-[#A00028] text-lg font-semibold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA BELOW TABLE */}
        <div className="mt-16">
          <button
            onClick={() => window.Outseta?.AuthWidget.showSignUp()}
            className="bg-[#A00028] hover:bg-[#850020] text-white font-semibold px-10 py-4 rounded-xl shadow-[0_8px_30px_rgba(160,0,40,0.25)] hover:shadow-[0_10px_45px_rgba(160,0,40,0.35)] transition-all"
          >
            Unlock The Vault Today
          </button>
          <p className="text-gray-500 mt-4">
            Stop guessing. Start reselling with data, AI, and strategy on your side.
          </p>
        </div>
      </div>
    </section>
  );
}



/* ---------- COMPONENTS (FeatureCard, Testimonial, PreviewCard) ---------- */
function FeatureCard({ icon, title, desc, highlights, status, tag }: any) {
  return (
    <div className="bg-[#fafafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-8">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-[#0a0a0a]">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-5">{desc}</p>
      <div className="bg-white rounded-xl border border-gray-200 shadow-inner p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-gray-800">{tag}</span>
          <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-1">
            {status}
          </span>
        </div>
        <ul className="text-gray-700 text-[15px] space-y-1">
          {highlights.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Testimonial({ username, quote, role, image, preview, link }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-center">
      <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300 mb-4 mx-auto">
        <Image src={image} alt={username} width={64} height={64} />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#A00028] font-semibold text-lg mb-4 hover:underline block"
      >
        {username}
      </a>
      <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden w-full mb-5">
        <Image src={preview} alt={`${username} preview`} width={400} height={180} className="w-full h-auto" />
      </div>
      <p className="text-gray-800 italic text-lg mb-4 px-4">{quote}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  );
}

function PreviewCard({ image, title, desc }: any) {
  return (
    <div className="bg-[#fafafa] border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <Image src={image} alt={title} width={700} height={450} className="object-cover w-full h-auto" />
      <div className="p-6 text-left">
        <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-32 text-center overflow-hidden"
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#fff5f5] to-[#ffeef0]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#A00028]/10 blur-[160px] rounded-full opacity-60" />

      {/* HEADER */}
      <h2 className="relative text-6xl font-extrabold font-[SF Pro Display] tracking-tight mb-5 text-[#0a0a0a]">
        Choose Your{" "}
        <span className="bg-gradient-to-r from-[#A00028] via-[#C44D5C] to-[#CBAF7A] bg-clip-text text-transparent">
          Vault
        </span>
      </h2>
      <p className="relative text-gray-500 max-w-2xl mx-auto text-lg mb-20">
        Whether you’re learning, scaling, or leading — each plan unlocks a new
        layer of your reselling journey.
      </p>

      {/* GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

        {/* EDUCATION VAULT (Free) */}
        <div className="relative group rounded-2xl p-10 flex flex-col items-center text-center border transition-all duration-500 backdrop-blur-xl border-white/60 bg-white/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:scale-[1.02]">
          <h3 className="text-[22px] font-semibold mb-1 text-[#0a0a0a]">Education Vault</h3>
          <p className="text-gray-500 text-sm mb-8">Master reselling fundamentals at zero cost.</p>

          <div className="flex items-end justify-center mb-8">
            <span className="text-5xl font-extrabold text-[#0a0a0a] leading-none tracking-tight">Free</span>
          </div>

          <ul className="text-gray-700 text-[15px] space-y-3 mb-10 text-left w-full leading-relaxed">
            <li>• Free reseller education content</li>
            <li>• Beginner spreadsheets</li>
            <li>• Weekly trend previews</li>
            <li>• Community access</li>
          </ul>

          <a
            href="https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=L9PB36mJ&planPaymentTerm=month&skipPlanOptions=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl font-semibold bg-[#A00028] text-white hover:bg-[#850020] transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          >
            Join Free
          </a>
        </div>

        {/* VAULT STARTER ($10) */}
        <div className="relative group rounded-2xl p-10 flex flex-col items-center text-center border transition-all duration-500 backdrop-blur-xl border-white/60 bg-white/70 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:scale-[1.02]">
          <h3 className="text-[22px] font-semibold mb-1 text-[#0a0a0a]">Vault Starter</h3>
          <p className="text-gray-500 text-sm mb-8">Tools and insights for new sellers ready to grow.</p>

          <div className="flex items-end justify-center mb-8">
            <span className="text-5xl font-extrabold text-[#0a0a0a] leading-none tracking-tight">$10</span>
            <span className="text-gray-400 text-sm ml-1 mb-1">/mo</span>
          </div>

          <ul className="text-gray-700 text-[15px] space-y-3 mb-10 text-left w-full leading-relaxed">
            <li>• 20+ spreadsheet templates</li>
            <li>• Title Genius + Price Predictor</li>
            <li>• Weekly trend drops</li>
            <li>• Affiliate dashboard</li>
          </ul>

          <a
            href="https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=DQ2L0LWV&planPaymentTerm=month&skipPlanOptions=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl font-semibold bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          >
            Start Now
          </a>
        </div>

        {/* VAULT PRO ($25) — FEATURED */}
        <div className="relative group featured rounded-2xl p-10 flex flex-col items-center text-center border transition-all duration-500 backdrop-blur-xl border-[#A00028]/30 bg-white/80 shadow-[0_20px_90px_rgba(160,0,40,0.15)] scale-[1.05]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A00028] text-white text-[11px] tracking-wide px-4 py-1 rounded-full shadow-md">
            MOST POPULAR
          </div>

          <h3 className="text-[22px] font-semibold mb-1 text-[#0a0a0a]">Vault Pro</h3>
          <p className="text-gray-500 text-sm mb-8">Unlock all AI tools, spreadsheets, and market data.</p>

          <div className="flex items-end justify-center mb-8">
            <span className="text-5xl font-extrabold text-[#0a0a0a] leading-none tracking-tight">$25</span>
            <span className="text-gray-400 text-sm ml-1 mb-1">/mo</span>
          </div>

          <ul className="text-gray-700 text-[15px] space-y-3 mb-10 text-left w-full leading-relaxed">
            <li>• All AI Tools (Vault.AI Suite)</li>
            <li>• 50+ Spreadsheet Templates</li>
            <li>• Vault Index Dashboard</li>
            <li>• Private Community Access</li>
            <li>• Affiliate Earnings System</li>
          </ul>

          <a
            href="https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=L9nbXX9Z&planPaymentTerm=month&skipPlanOptions=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl font-semibold bg-[#A00028] text-white hover:bg-[#850020] transition-all duration-300 shadow-[0_8px_30px_rgba(160,0,40,0.3)]"
          >
            Get Started
          </a>
        </div>

        {/* VAULT ELITE ($99) */}
        <div className="relative group rounded-2xl p-10 flex flex-col items-center text-center border transition-all duration-500 backdrop-blur-xl border-white/60 bg-white/70 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:scale-[1.02]">
          <h3 className="text-[22px] font-semibold mb-1 text-[#0a0a0a]">Vault Elite</h3>
          <p className="text-gray-500 text-sm mb-8">Enterprise-level automations and strategic scaling.</p>

          <div className="flex items-end justify-center mb-8">
            <span className="text-5xl font-extrabold text-[#0a0a0a] leading-none tracking-tight">$99</span>
            <span className="text-gray-400 text-sm ml-1 mb-1">/mo</span>
          </div>

          <ul className="text-gray-700 text-[15px] space-y-3 mb-10 text-left w-full leading-relaxed">
            <li>• Everything in Vault Pro</li>
            <li>• Priority feature access</li>
            <li>• Custom AI automations</li>
            <li>• Team accounts (5 users)</li>
            <li>• Private reseller calls</li>
          </ul>

          <a
            href="https://treasuretto-llc.outseta.com/auth?widgetMode=register&planUid=xmeMVwmV&planPaymentTerm=month&skipPlanOptions=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl font-semibold bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
          >
            Go Elite
          </a>
        </div>
      </div>

      <p className="relative text-gray-400 text-xs mt-16">
        *All plans include secure billing via Outseta. Cancel anytime.
      </p>
    </section>
  );
}

/* ---------- FAQ SECTION ---------- */
function FAQSection() {
  const faqs = [
    {
      q: "What exactly is The Vault?",
      a: "The Vault is a reselling ecosystem — combining AI automation, spreadsheets, analytics, and strategy into one modern platform for sellers who want to grow smarter and faster.",
    },
    {
      q: "Do I need experience to join?",
      a: "Not at all. The Education Vault is completely free and built for beginners — while Starter and Access plans scale with you as you grow your brand.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. All plans are month-to-month with zero contracts or hidden fees. You can upgrade, downgrade, or cancel directly inside your account.",
    },
    {
      q: "Is The Vault only for clothing resellers?",
      a: "No — while we’re known for vintage and apparel, The Vault’s tools and templates work for collectibles, sneakers, tech, and nearly any product category.",
    },
    {
      q: "How do I access the tools after subscribing?",
      a: "Once you sign up, you’ll receive an email with your Vault login. From there, you can immediately access all spreadsheets, tools, and your personal AI workspace.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full max-w-5xl mx-auto px-6 md:px-10 py-28 text-left border-t border-gray-100"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14 font-[SF Pro Display]">
        Frequently Asked <span className="text-[#A00028]">Questions</span>
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group py-6 cursor-pointer transition-all duration-300"
          >
            <summary className="flex justify-between items-center text-lg font-medium text-[#0a0a0a] hover:text-[#A00028]">
              {faq.q}
              <span className="transition-transform group-open:rotate-45 text-[#A00028] text-2xl">
                +
              </span>
            </summary>
            <p className="text-gray-600 text-[15px] mt-3 leading-relaxed pl-1">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------- FINAL CALL / CTA SECTION ---------- */
function FinalCTA() {
  return (
    <section className="relative w-full py-36 px-6 text-center overflow-hidden border-t border-gray-100">
      {/* Soft Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f5] via-[#fff1f3] to-[#ffffff]" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#A00028]/10 blur-[160px] rounded-full opacity-60" />

      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-extrabold font-[SF Pro Display] text-[#0a0a0a] mb-6">
          Ready to <span className="text-[#A00028]">Unlock The Vault?</span>
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Join thousands of resellers mastering automation, data, and growth —
          all inside one seamless platform.
        </p>
        <button
          onClick={() => window.Outseta?.AuthWidget.showSignUp()}
          className="bg-[#A00028] hover:bg-[#850020] transition-all text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-[0_8px_35px_rgba(160,0,40,0.25)] hover:shadow-[0_10px_45px_rgba(160,0,40,0.35)]"
        >
          Unlock The Vault
        </button>
      </div>
    </section>
  );
}

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
          <p className="text-[15px] leading-relaxed text-gray-500 max-w-xs">
            The all-in-one resale ecosystem — tools, education, and automation.
          </p>
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
