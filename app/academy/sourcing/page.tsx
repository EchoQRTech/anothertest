"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  Lightbulb,
  ShoppingBag,
  DollarSign,
  Home,
  Truck,
  Gift,
  Brain,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function SourcingMastery() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-[#fffaf9] to-[#fff3f4] text-[#0a0a0a] font-[Inter] scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <Link
            href="/academy"
            className="flex items-center gap-2 text-sm font-medium text-[#A00028] hover:text-[#7a001e] transition-all bg-gradient-to-r from-[#A00028]/10 to-[#ffb8b8]/10 px-4 py-2 rounded-xl border border-[#A00028]/20 hover:border-[#A00028]/40 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Academy
          </Link>
          <p className="text-sm text-gray-500 hidden sm:block">Sourcing Mastery</p>
        </div>
      </nav>

      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center mt-28 mb-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
          <Compass className="text-[#A00028] w-8 h-8" />
          Sourcing Mastery
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Sourcing is the heart of reselling. It is where you decide what type of business you are building. The quality of your sourcing choices determines how stable your income becomes and how easily your store can scale. This lesson will teach you how to source intentionally, how to create a flow of consistent inventory, and how to use community, strategy, and data to build long-term success.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto space-y-20 px-6">

        {/* MINDSET */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="text-[#A00028] w-5 h-5" />
            Building a True Sourcing Mindset
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Sourcing is not about luck. It is about discipline, awareness, and systems. The best resellers do not chase every item they find. They build consistent habits that let them find proven inventory faster. They track what sells, study their data, and use that knowledge to decide what to buy next. 
          </p>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Cash flow matters more than quantity. A reseller with ten fast-selling items will always outperform someone with one hundred unlisted or slow-moving ones. The goal is to bring home pieces that are guaranteed to move, not piles of uncertainty. Inside The Vault, the Vault Index helps you confirm which brands and categories are trending right now so you can source with confidence.
          </p>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            When you begin to view sourcing as a business process instead of a game of chance, everything changes. You start thinking in terms of sell-through rate, return on investment, and predictability. Each sourcing trip becomes an opportunity to gather data, strengthen your instincts, and improve your efficiency.
          </p>
        </div>

        {/* STARTING OUT */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="text-[#A00028] w-5 h-5" />
            Starting From Zero
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            The smartest way to begin is to start with what you already own. Go through your closet, drawers, and storage bins. Old clothing, shoes, or accessories that no longer fit your style are free inventory and a perfect training ground. This lets you practice photographing, describing, and pricing items without spending any money.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Pick ten items you no longer wear or need.</li>
            <li>Clean them, take clear photos in good lighting, and write honest descriptions.</li>
            <li>List them on the platform you plan to focus on and track how fast they sell.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Each sale teaches you something. You learn how buyers search, what titles perform, and what types of items attract attention. When you finish selling your first batch, reinvest that profit into new inventory. If you use The Vault’s Inventory Tracker, log your results and see which categories and price ranges performed best. This will help you make smarter sourcing decisions next time.
          </p>
        </div>

        {/* BINS */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <ShoppingBag className="text-[#A00028] w-5 h-5" />
            Mastering the Bins
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            The bins are one of the best training environments for resellers. They teach you how to make decisions under pressure and recognize value in real time. The key to succeeding at the bins is patience and consistency. You want to focus on cash flow items — proven categories that move quickly — not random picks that sit for months.
          </p>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Go as early as possible when new rotations start, but choose times that fit your schedule. You do not have to be there every morning, but when you go, commit to staying for a while. Many good pieces are pulled late or missed by others. The longer you stay and pay attention, the better your results will be.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Use the Vault Index before going to check what brands or categories are trending that week.</li>
            <li>Track your bins trips in your sourcing spreadsheet so you can measure profit per visit.</li>
            <li>Pay attention to which bins or sections give you the best return and focus on them next time.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Treat the bins like a system. Each trip should teach you what to grab, what to leave, and what to look for next time. The sellers who win at the bins are not the ones who pull the most. They are the ones who pull the right things consistently.
          </p>
        </div>

        {/* THRIFT STORES */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <DollarSign className="text-[#A00028] w-5 h-5" />
            Thrift Stores and Racks
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Thrift stores are about timing, awareness, and familiarity. Each location has its own rhythm. Learn when they restock and which sections are most consistent. Visit often enough that employees recognize you. Building that routine gives you early access and better chances at valuable finds.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Develop a rotation of stores and visit them regularly.</li>
            <li>Learn which store restocks which section on what days.</li>
            <li>Train your eyes and hands to feel quality fabrics, sturdy stitching, and unique designs.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Over time, you will walk into a thrift store and instantly know which racks are worth your time. The Vault’s Trend Reports can help you align what you find in-store with what is currently in demand across major platforms, ensuring your money goes to inventory that sells quickly.
          </p>
        </div>

        {/* YARD SALES */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Home className="text-[#A00028] w-5 h-5" />
            Yard and Estate Sales
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Yard and estate sales are excellent for sourcing vintage or collectible inventory. Preparation is what separates the good trips from the bad ones. You can plan routes the night before by checking Facebook Marketplace, Craigslist, and local community boards. Many small neighborhood sales are never advertised outside these groups.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Join local community Facebook groups to see early postings about upcoming sales.</li>
            <li>Bring small bills, reusable bags, and a notebook to track your purchases.</li>
            <li>Ask polite questions like “Do you have any old tees or denim stored inside?” to uncover hidden inventory.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Most of the best items at yard sales are not even on the tables outside. By showing curiosity and respect, you can often access closets, basements, or storage bins full of forgotten items. Record what you find and where. If you use The Vault, log each sale source so you can see which neighborhoods or types of sales give you the highest returns.
          </p>
        </div>

        {/* COMMUNITY SOURCING */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Gift className="text-[#A00028] w-5 h-5" />
            Local Pickups, Community Groups, and Free Inventory
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Many new resellers underestimate how much free or low-cost inventory exists locally. Facebook Marketplace, neighborhood groups, and community boards are some of the best sources for donations and pickups. Many people are happy to have someone take old clothing or vintage items off their hands.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Post in local Facebook groups that you offer free clothing pickup for items people no longer want.</li>
            <li>Create flyers with your name and contact info and post them around community centers, laundromats, and coffee shops.</li>
            <li>Follow up regularly with repeat donors and thank them. Building goodwill leads to steady, long-term sources of inventory.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Free sourcing builds consistent supply and strong relationships in your community. It also improves your margins and helps you reinvest more into high-value items. If you track donations through The Vault’s spreadsheets, you can monitor how much inventory you received for free and how much profit those items brought in over time.
          </p>
        </div>

        {/* WHOLESALE */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Truck className="text-[#A00028] w-5 h-5" />
            Wholesale and Bulk Buying
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Wholesale sourcing allows you to scale your operation when you already know what sells. It gives you access to bulk quantities of similar inventory, but it also carries higher risk if you are not tracking results carefully. Always start small and verify that the supplier’s items match your target market.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Ask for photos and detailed manifests before purchasing.</li>
            <li>Test small batches first and track their performance.</li>
            <li>Only reorder from suppliers who have proven consistent results in your data.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Use the Vault Spreadsheet templates to record the cost per item, your average sale price, and your net margin per supplier. Once you can see exactly which sources perform, scaling becomes much easier and less risky. Wholesale should never be random. It should be a system backed by your own data and experience.
          </p>
        </div>

        {/* PATTERNS */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Brain className="text-[#A00028] w-5 h-5" />
            Developing Pattern Recognition
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Over time, your mind starts connecting dots automatically. You begin to notice the fabrics, colors, or tags that indicate value. This pattern recognition comes from experience and reflection. The more you document your finds and review your results, the faster you grow.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Review your sales every week to find which items sold fastest and which sat too long.</li>
            <li>Compare those results with the Vault Index to spot what categories are rising or declining in the market.</li>
            <li>Adjust your sourcing trips accordingly, focusing more on what is proven to sell now.</li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Pattern recognition separates experienced sellers from beginners. It helps you make faster decisions and avoid burnout. Each data point you log brings you closer to understanding your niche and building a sourcing style that fits your personality and market.
          </p>
        </div>

        {/* CONCLUSION */}
        <div className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="text-[#A00028] w-5 h-5" />
            Conclusion and Next Steps
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Sourcing mastery is not about finding more items. It is about finding the right ones. The process becomes easier when you track results, stay consistent, and learn from every trip. Every category, every store, and every source teaches you something new about your market.
          </p>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            The Vault gives you the structure to keep that learning organized. Use it to track your sales, trends, and sourcing trips so your decisions stay informed and focused. When you source with intention, you create stability, and stability leads to freedom. The better your sourcing becomes, the more predictable your income grows.
          </p>
          <p className="text-gray-600 text-[14px] mt-4">
            Up next:{" "}
            <Link
              href="/academy/photography"
              className="text-[#A00028] hover:underline font-medium"
            >
              Photography and Styling Mastery →
            </Link>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-xs mt-24 pb-10">
        © {new Date().getFullYear()} The Vault — Sourcing Mastery
      </footer>
    </main>
  );
}
