"use client";
import { useRef, useState } from "react";

export default function VaultFormatter() {
  /* ---------- OPTIONS ---------- */
  const options = {
    brand: [
      "Harley-Davidson","Nike","Adidas","Levi's","Patagonia","The North Face",
      "Champion","Carhartt","Guess","Reebok","Y2K No Brand",
    ],
    category: [
      "T-Shirt","Hoodie","Sweatshirt","Jacket","Jeans",
      "Sneakers","Crewneck","Cap","Accessory","Pants","Shorts",
    ],
    era: ["80s","90s","2000s","Y2K","Modern","Retro Revival"],
    size: ["XS","S","M","L","XL","XXL","XXXL","One Size"],
    condition: [
      "Excellent condition","Good vintage condition",
      "Distressed vintage wear","Brand new with tags",
    ],
    style: [
      "Streetwear","Y2K","Minimalist","Workwear","Biker",
      "Retro","Sporty","Vintage Classic",
    ],
  };

  /* ---------- UNCONTROLLED INPUTS ---------- */
  const eraRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const shortRef = useRef<HTMLInputElement>(null);
  const sizeRef = useRef<HTMLInputElement>(null);
  const conditionRef = useRef<HTMLInputElement>(null);
  const styleRef = useRef<HTMLInputElement>(null);

  /* ---------- STATE ---------- */
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  /* ---------- GENERATE ---------- */
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    const era = eraRef.current?.value?.trim() || "";
    const category = categoryRef.current?.value?.trim() || "";
    const brand = brandRef.current?.value?.trim() || "";
    const shortcontext = shortRef.current?.value?.trim() || "";
    const size = sizeRef.current?.value?.trim() || "";
    const condition = conditionRef.current?.value?.trim() || "";
    const style = styleRef.current?.value?.trim() || "";

    const title = [era && `Vintage ${era}`, category, brand, shortcontext]
      .filter(Boolean)
      .join(" ");

    const details = [
      size && `• Size: ${size}`,
      condition && `• Condition: ${condition}`,
      style && `• Style vibe: ${style}`,
    ]
      .filter(Boolean)
      .join("\n");

    const tags = [brand, category, style, era]
      .filter(Boolean)
      .map((t) => "#" + t.replace(/\s+/g, ""))
      .slice(0, 8)
      .join(" ");

    const final = [
      `**${title.trim()}**`,
      details,
      "Ships next day 📦 | DM me with questions 💬",
      tags,
    ]
      .filter(Boolean)
      .join("\n");

    setOutput(final);
  };

  /* ---------- COPY ---------- */
  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  /* ---------- SIMPLE FIELD ---------- */
  function Field({
    label,
    placeholder,
    listId,
    inputRef,
  }: {
    label: string;
    placeholder: string;
    listId?: string;
    inputRef: React.RefObject<HTMLInputElement>;
  }) {
    return (
      <div className="relative flex flex-col">
        <label className="text-xs font-medium text-gray-500 mb-1">{label}</label>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          list={listId}
          className="p-3 rounded-lg bg-white border border-gray-200 focus:border-[#A00028] outline-none text-sm transition-all"
        />
      </div>
    );
  }

  /* ---------- RENDER ---------- */
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#fff8f8] to-[#fff1f3] text-black px-6 py-14 font-[Inter]">
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-10">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            The <span className="text-[#A00028]">Vault</span> Formatter
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            ✴︎ Build clean, powerful listings in seconds.
          </p>
        </div>

        {/* DATALISTS (native autocompletes) */}
        <datalist id="dl-era">{options.era.map((o)=><option key={o} value={o}/>)}</datalist>
        <datalist id="dl-category">{options.category.map((o)=><option key={o} value={o}/>)}</datalist>
        <datalist id="dl-brand">{options.brand.map((o)=><option key={o} value={o}/>)}</datalist>
        <datalist id="dl-size">{options.size.map((o)=><option key={o} value={o}/>)}</datalist>
        <datalist id="dl-condition">{options.condition.map((o)=><option key={o} value={o}/>)}</datalist>
        <datalist id="dl-style">{options.style.map((o)=><option key={o} value={o}/>)}</datalist>

        {/* FORM */}
        <form onSubmit={handleGenerate} className="space-y-5">
          <Field label="Era" placeholder="e.g. 90s" listId="dl-era" inputRef={eraRef}/>
          <Field label="Category" placeholder="e.g. Hoodie" listId="dl-category" inputRef={categoryRef}/>
          <Field label="Brand" placeholder="e.g. Nike" listId="dl-brand" inputRef={brandRef}/>
          <Field label="Short Context" placeholder="e.g. faded biker graphic" inputRef={shortRef}/>
          <Field label="Size" placeholder="e.g. XL" listId="dl-size" inputRef={sizeRef}/>
          <Field label="Condition" placeholder="e.g. Good vintage condition" listId="dl-condition" inputRef={conditionRef}/>
          <Field label="Style" placeholder="e.g. Streetwear" listId="dl-style" inputRef={styleRef}/>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#A00028] hover:bg-[#850020] text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_8px_25px_rgba(160,0,40,0.25)]"
          >
            Generate Listing
          </button>
        </form>

        {/* BEAUTIFUL OUTPUT CARD */}
        {output && (
          <div className="mt-10 bg-gradient-to-b from-[#ffffff] to-[#fff3f5] rounded-3xl border border-white/60 shadow-[0_10px_60px_rgba(160,0,40,0.08)] overflow-hidden transition-all duration-300">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 bg-[#A00028] text-white backdrop-blur-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="text-xl"></span> Your Vault Listing
              </h2>
              <button
                onClick={handleCopy}
                className="text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-all backdrop-blur-md border border-white/20"
              >
                {copied ? "✅ Copied!" : "Copy"}
              </button>
            </div>

            {/* BODY */}
            <div className="p-6">
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-[#f0d7dc] p-6 shadow-inner">
                <pre className="text-sm font-medium whitespace-pre-wrap text-gray-900 leading-relaxed tracking-wide">
                  {output}
                </pre>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 pointer-events-none rounded-2xl" />
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCopy}
                  className="text-sm font-semibold text-[#A00028] hover:text-[#7a001e] transition-all flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M8 2a2 2 0 0 0-2 2v1H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8V4h7a1 1 0 0 1 1 1v4h1V5a2 2 0 0 0-2-2H8Z" />
                  </svg>
                  Copy Listing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
