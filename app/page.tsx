* ---------- BENEFITS SECTION ---------- */
function BenefitsSection() {
  const benefits = [
    {
      icon: "⏱️",
      title: "Save 10+ Hours Every Week",
      desc: "Automate manual tracking, price adjustments, and cross-listing so you can focus on sourcing and sales — not spreadsheets.",
      stat: "10+ hours saved weekly",
    },
    {
      icon: "📊",
      title: "80% Less Guesswork",
      desc: "Data-driven insights replace gut instinct. The Vault Index helps you price smarter, buy smarter, and grow faster.",
      stat: "80% less pricing errors",
    },
    {
      icon: "🤖",
      title: "AI That Works For You",
      desc: "Our Title Genius, Price Predictor, and Description Writer handle the repetitive work — freeing your brain for creativity.",
      stat: "5× faster listing creation",
    },
    {
      icon: "💰",
      title: "Instant ROI On Day One",
      desc: "Even one optimized listing or smarter purchase often covers your monthly plan cost — it literally pays for itself.",
      stat: "1 sale = plan paid off",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-32 text-center border-t border-gray-100 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f9] via-[#fff5f5] to-[#ffffff]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#A00028]/10 blur-[160px] rounded-full opacity-60" />

      <div className="relative">
        <h2 className="text-5xl sm:text-6xl font-extrabold font-[SF Pro Display] text-[#0a0a0a] mb-6">
          How <span className="text-[#A00028]">The Vault</span> Saves You Time
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-20 text-lg">
          Every tool, automation, and dashboard in The Vault was designed to save
          you hours — and make reselling *actually fun again*.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/80 border border-gray-200 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_45px_rgba(160,0,40,0.08)] transition-all duration-300 p-8 backdrop-blur-xl"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                {b.desc}
              </p>
              <div className="text-[#A00028] font-semibold text-sm uppercase tracking-wide">
                {b.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
