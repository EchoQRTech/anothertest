"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Camera,
  Palette,
  Sun,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function PhotographyMastery() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-[#fffaf9] to-[#fff3f4] text-[#0a0a0a] font-[Inter] scroll-smooth">
      {/* ---------- NAVBAR ---------- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <Link
            href="/academy"
            className="flex items-center gap-2 text-sm font-medium text-[#A00028] hover:text-[#7a001e] transition-all bg-gradient-to-r from-[#A00028]/10 to-[#ffb8b8]/10 px-4 py-2 rounded-xl border border-[#A00028]/20 hover:border-[#A00028]/40 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Academy
          </Link>
          <p className="text-sm text-gray-500 hidden sm:block">
            Photography & Styling
          </p>
        </div>
      </nav>

      {/* ---------- HEADER ---------- */}
      <header className="max-w-4xl mx-auto text-center mt-28 mb-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
          <Camera className="text-[#A00028] w-8 h-8" />
          Photography & Styling Mastery
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Great photos separate average listings from exceptional ones. They
          make buyers stop scrolling, trust your quality, and purchase faster.
          This guide teaches you how to create bright, professional, and
          trustworthy product photos with minimal equipment.
        </p>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="max-w-4xl mx-auto space-y-20 px-6">
        {/* LIGHTING */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Sun className="text-[#A00028] w-5 h-5" />
            Lighting: The Foundation of Great Photos
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Lighting determines how buyers perceive your product. The goal is to
            show accurate colors, real textures, and no harsh shadows. Natural
            daylight is always the best source. Set up near a window with bright
            but indirect sunlight for soft, clean lighting.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Photograph mid-morning or early afternoon for the best light.</li>
            <li>
              Use a white sheet or foam board to bounce light and fill shadows.
            </li>
            <li>
              Turn off ceiling lights so warm tones do not distort color accuracy.
            </li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            If natural light is unavailable, use two soft LED panels at a 45-degree angle. 
            Even inexpensive lights can create professional-quality results when placed properly.
          </p>
        </div>

        {/* BACKGROUND */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Layers className="text-[#A00028] w-5 h-5" />
            Clean, Simple Backgrounds
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Backgrounds shape the buyer’s impression of your professionalism.
            A clean, consistent background builds trust and keeps all attention
            on your item. You do not need an expensive setup—just neutral tones
            and a flat surface.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Use white, beige, or gray backgrounds for clarity.</li>
            <li>
              Keep other objects out of frame—avoid cords, decor, or clutter.
            </li>
            <li>
              Photograph items straight-on or flat lay for consistent perspective.
            </li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            When every listing has the same clean background, your shop looks
            professional and cohesive, creating instant buyer confidence.
          </p>
        </div>

        {/* FRAMING */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Palette className="text-[#A00028] w-5 h-5" />
            Framing and Composition
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Framing decides how your product feels in the photo. Center your
            item, leave breathing space, and make sure it fills most of the
            frame. Use gridlines on your phone to align shots perfectly and
            avoid tilted or off-balance photos.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Take 6–8 photos: front, back, close-ups, and tag shots.</li>
            <li>Keep the item straight and centered for clarity.</li>
            <li>
              Avoid over-editing—buyers prefer honest, realistic images.
            </li>
          </ul>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            Simple, symmetrical framing feels more trustworthy and makes
            comparing items easier for buyers.
          </p>
        </div>

        {/* STYLING */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="text-[#A00028] w-5 h-5" />
            Styling and Brand Feel
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Styling connects your shop’s identity with your audience. Use the
            same approach every time to create a brand look that buyers
            remember. You do not need props or filters—just clean presentation
            and consistency.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Steam or iron items before photographing.</li>
            <li>Show natural drape and texture rather than forced poses.</li>
            <li>
              Use mannequins, hangers, or flat lays depending on your brand’s vibe.
            </li>
          </ul>
        </div>

        {/* DETAIL SHOTS */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Camera className="text-[#A00028] w-5 h-5" />
            Detail Shots That Sell
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Detail shots make your listings look complete. They help buyers see
            quality and authenticity, especially for vintage or designer pieces.
            Always capture fabric texture, stitching, and any flaws.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            <li>Show tags, labels, and branding clearly.</li>
            <li>Take close-ups of unique textures or prints.</li>
            <li>Document wear or small imperfections transparently.</li>
          </ul>
        </div>

        {/* DO'S AND DON'TS */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="text-[#A00028] w-5 h-5" />
            Do’s and Don’ts of Photography
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
            Understanding what to avoid is just as important as knowing what to
            do. These examples show how small adjustments in lighting,
            background, and framing completely change photo quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {demos.map((demo, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full flex items-center justify-center bg-[#fafafa]">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    width={600}
                    height={600}
                    className="object-contain rounded-t-2xl bg-[#fafafa] max-h-[400px] w-auto mx-auto"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className={`font-semibold text-lg mb-1 ${
                      demo.good ? "text-[#16a34a]" : "text-[#dc2626]"
                    }`}
                  >
                    {demo.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {demo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="text-[#A00028] w-5 h-5" />
            Conclusion
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Photography defines your shop’s first impression. Good lighting,
            clean backgrounds, and clear framing create trust instantly. When
            every photo in your shop looks consistent, buyers know they’re
            dealing with a reliable seller.
          </p>
          <p className="text-gray-700 text-[15px] mt-3 leading-relaxed">
            With practice, your photos will not just show your products—they’ll
            represent your brand. The best listings make buyers feel confident
            before they even read the description.
          </p>
          <p className="text-gray-600 text-[14px] mt-4">
            Up next:{" "}
            <Link
              href="/academy/pricing"
              className="text-[#A00028] hover:underline font-medium"
            >
              Pricing and Buyer Psychology →
            </Link>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-xs mt-24 pb-10">
        © {new Date().getFullYear()} Photography & Styling Mastery
      </footer>
    </main>
  );
}

/* ---------- DEMO DATA ---------- */
const demos = [
  {
    image: "/images/dolight.jpg",
    title: "✅ Do: Use natural, even light",
    desc: "Bright daylight near a window shows true colors and removes shadows.",
    good: true,
  },
  {
    image: "/images/nolight.jpg",
    title: "❌ Don’t: Shoot in dim or yellow light",
    desc: "Uneven or artificial lighting makes colors inaccurate and reduces trust.",
    good: false,
  },
  {
    image: "/images/goodbackground.jpg",
    title: "✅ Do: Use a plain, uncluttered background",
    desc: "Neutral tones help the product stand out and feel professional.",
    good: true,
  },
  {
    image: "/images/badbackground.jpg",
    title: "❌ Don’t: Photograph on messy floors or beds",
    desc: "Distractions pull focus away from the product and make listings look careless.",
    good: false,
  },
  {
    image: "/images/goodframing.jpg",
    title: "✅ Do: Center your shot and fill the frame",
    desc: "Balanced framing makes your product easier to view and compare.",
    good: true,
  },
  {
    image: "/images/poorframing.jpg",
    title: "❌ Don’t: Tilt or crop awkwardly",
    desc: "Angled shots make buyers question your professionalism and hide details.",
    good: false,
  },
];
