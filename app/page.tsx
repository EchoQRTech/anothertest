"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Cpu, BarChart3, FileSpreadsheet, Bot } from "lucide-react";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.background = "#ffffff";
    document.body.style.background = "#ffffff";
  }, []);

  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-white text-[#0a0a0a] flex flex-col items-center">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 backdrop-blur-xl bg-white/90 border-b border-gray-200 shadow-sm">
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Vault Logo"
            width={42}
            height={42}
            className="object-contain hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(160,0,40,0.35)] transition-transform duration-300"
          />
        </div>

        {/* CENTER: Nav Links */}
        <div className="hidden md:flex gap-10 text-[15px] text-gray-700 font-medium">
          <a href="#features" className="hover:text-[#A00028] transition">Features</a>
          <a href="#nexus" className="hover:text-[#A00028] transition">Nexus</a>
          <a href="#academy" className="hover:text-[#A00028] transition">Academy</a>
          <a href="#partners" className="hover:text-[#A00028] transition">Partners</a>
        </div>

        {/* RIGHT: Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm sm:text-[15px] text-gray-800 hover:text-[#A00028] transition font-medium">
            Log In
          </button>
          <button className="bg-[#A00028] hover:bg-[#850020] transition-all text-white text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 rounded-lg shadow-[0_2px_12px_rgba(160,0,40,0.25)] hover:shadow-[0_0_25px_rgba(160,0,40,0.35)] duration-300 font-medium">
            Unlock Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center w-full px-6 mt-40 md:mt-44">
        <h3 className="text-[#A00028] text-lg md:text-xl font-semibold tracking-wide mb-3">
          Vault OS for Resellers
        </h3>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight text-[#0a0a0a] mb-8 tracking-tight">
          Your Reselling Empire.
          <br className="hidden sm:block" />
          <span className="text-[#A00028] drop-shadow-[0_2px_5px_rgba(160,0,40,0.25)]">
            Connected.
          </span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          One unified platform where sellers automate listings, track profits,
          and master resale strategy — all in one daring system built for modern resellers.
        </p>
        <button className="bg-[#A00028] hover:bg-[#850020] transition-all text-white font-semibold px-8 py-4 rounded-md text-lg shadow-[0_2px_12px_rgba(160,0,40,0.25)] hover:shadow-[0_0_25px_rgba(160,0,40,0.4)] duration-300 mb-16">
          Unlock Now
        </button>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Trusted by <span className="font-semibold text-black">10,000+</span> resellers worldwide
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-20 w-full px-8 opacity-95 mb-20">
          <Image src="/images/depop.png" alt="Depop" width={100} height={40} className="object-contain" />
          <Image src="/images/ebay.png" alt="eBay" width={100} height={40} className="object-contain" />
          <Image src="/images/whatnot.png" alt="Whatnot" width={120} height={40} className="object-contain" />
          <Image src="/images/openai.png" alt="OpenAI" width={100} height={40} className="object-contain" />
        </div>
      </section>

      {/* VALUE SECTION */}
      <section id="features" className="w-full max-w-6xl px-8 py-24 text-center border-t border-gray-100">
        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0a0a0a] mb-12">
          Built For Resellers. <span className="text-[#A00028]">Powered By AI.</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          The Vault brings automation, analytics, and strategy together — everything a modern reseller needs to grow faster and operate smarter.
        </p>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {/* Automate Workflow */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-[#A00028] w-6 h-6" />
              <h3 className="text-xl font-semibold text-[#0a0a0a]">Automate Your Workflow</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              The Vault streamlines your daily workflow. Automate listing organization, cross-platform pricing, and performance tracking — saving hours each week.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-inner p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-800">Reseller Operations</span>
                <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-1">Optimized</span>
              </div>
              <ul className="text-gray-700 text-[15px] space-y-1">
                <li>• Automated profit tracking</li>
                <li>• Real-time listing analytics</li>
                <li>• Multi-platform synchronization</li>
              </ul>
            </div>
          </div>

          {/* Vault Index */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-[#A00028] w-6 h-6" />
              <h3 className="text-xl font-semibold text-[#0a0a0a]">Vault Index</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              Track the resale market like an investor. The Vault Index analyzes pricing trends, brand performance, and category data — giving you real market intelligence.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-inner p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-800">Market Data Engine</span>
                <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-1">Live</span>
              </div>
              <ul className="text-gray-700 text-[15px] space-y-1">
                <li>• 100+ brand performance metrics</li>
                <li>• Real-time trend updates</li>
                <li>• Historical resale insights</li>
              </ul>
            </div>
          </div>

          {/* Spreadsheet Vault */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileSpreadsheet className="text-[#A00028] w-6 h-6" />
              <h3 className="text-xl font-semibold text-[#0a0a0a]">Spreadsheet Vault</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              Access 50+ professional spreadsheets designed for resellers — from expense tracking and ROI calculators to inventory planners and sourcing logs.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-inner p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-800">Resource Library</span>
                <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-1">Included</span>
              </div>
              <ul className="text-gray-700 text-[15px] space-y-1">
                <li>• 50+ customizable templates</li>
                <li>• Profit & loss dashboards</li>
                <li>• Tax and sourcing calculators</li>
              </ul>
            </div>
          </div>

          {/* AI Tools */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="text-[#A00028] w-6 h-6" />
              <h3 className="text-xl font-semibold text-[#0a0a0a]">AI Tools Suite</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              A growing suite of AI tools for sellers — including Title Genius, Price Predictor, Description Writer, and more — built to maximize your listings’ potential.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-inner p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-800">Intelligent Systems</span>
                <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-1">Powered by AI</span>
              </div>
              <ul className="text-gray-700 text-[15px] space-y-1">
                <li>• Title & description optimization</li>
                <li>• Dynamic pricing assistance</li>
                <li>• Listing strategy analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REAL SELLERS SECTION */}
      <section
        id="testimonials"
        className="w-full max-w-6xl px-8 py-28 text-center border-t border-gray-100"
      >
        <h2 className="text-5xl sm:text-6xl font-serif font-bold mb-4">
          <span className="text-[#0a0a0a]">Real Sellers.</span>{" "}
          <span className="text-[#A00028]">Real Results.</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          These top resellers use <span className="font-semibold text-[#A00028]">The Vault</span> to automate listings, track profits, and grow their resale brands.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-start">
          {/* RedRockVNTG */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300 mb-4">
              <Image src="/images/redrock.jpg" alt="RedRockVNTG Logo" width={64} height={64} className="object-cover" />
            </div>
            <a href="https://www.depop.com/redrockvntg/" target="_blank" rel="noopener noreferrer" className="text-[#A00028] font-semibold text-lg mb-4 hover:underline">
              @redrockvntg
            </a>
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden w-full mb-5">
              <Image src="/images/redrock-preview.png" alt="RedRockVNTG Depop Preview" width={400} height={180} className="object-cover w-full h-auto" />
            </div>
            <p className="text-gray-800 italic text-lg mb-4 px-4">
              “The Vault changed how we run our reselling business. Automating listings and tracking data freed up hours every day — it’s an essential tool for scaling.”
            </p>
            <p className="text-gray-500 text-sm">
              Vintage Seller • Featured on Depop
            </p>
          </div>

          {/* GarageGrailz */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300 mb-4">
              <Image src="/images/garagegrailz.jpg" alt="GarageGrailz Logo" width={64} height={64} className="object-cover" />
            </div>
            <a href="https://www.depop.com/garagegrailz/" target="_blank" rel="noopener noreferrer" className="text-[#A00028] font-semibold text-lg mb-4 hover:underline">
              @garagegrailz
            </a>
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden w-full mb-5">
              <Image src="/images/garagegrailz-preview.png" alt="GarageGrailz Depop Preview" width={400} height={180} className="object-cover w-full h-auto" />
            </div>
            <p className="text-gray-800 italic text-lg mb-4 px-4">
              “Within weeks of joining The Vault, our listings got cleaner, pricing got smarter, and sales started moving faster. The data insights alone are worth it.”
            </p>
            <p className="text-gray-500 text-sm">
              Multi-Platform Seller • Verified Member
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-10 h-20 bg-white" />
    </main>
  );
}
