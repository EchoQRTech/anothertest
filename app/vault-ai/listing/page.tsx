"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import { ChevronDown, Copy, Plus, Trash2, Download, CheckCircle, X, Package, Tag, Image as ImageIcon, Truck, Search, Sparkles, Edit3, BarChart3, Table, FileSpreadsheet, Save, XCircle } from "lucide-react";

/* ---------- DEPOP TAXONOMY DATA ---------- */
const depop = {
  categories: [
    "Women >> Tops >> T-shirts (womenswear, tops, tshirts)",
    "Women >> Tops >> Tank tops and camis (womenswear, tops, vests-tanks-camis)",
    "Women >> Tops >> Blouses (womenswear, tops, blouses)",
    "Women >> Tops >> Shirts (womenswear, tops, shirts)",
    "Women >> Tops >> Hoodies (womenswear, tops, hoodies)",
    "Women >> Tops >> Sweatshirts (womenswear, tops, sweatshirts)",
    "Women >> Tops >> Sweaters (womenswear, tops, jumpers)",
    "Women >> Tops >> Cardigans (womenswear, tops, cardigans)",
    "Women >> Tops >> Corsets (womenswear, tops, corsets)",
    "Women >> Tops >> Bodysuits (womenswear, tops, bodysuits)",
    "Women >> Tops >> Crop tops (womenswear, tops, crop-top)",
    "Women >> Tops >> Polos (womenswear, tops, polo-shirts)",
    "Women >> Tops >> Other (womenswear, tops, other-tops)",
    "Women >> Bottoms >> Jeans (womenswear, bottoms, jeans)",
    "Women >> Bottoms >> Pants (womenswear, bottoms, trousers)",
    "Women >> Bottoms >> Leggings (womenswear, bottoms, leggings)",
    "Women >> Bottoms >> Shorts (womenswear, bottoms, shorts)",
    "Women >> Bottoms >> Skirts (womenswear, bottoms, skirts)",
    "Women >> Bottoms >> Sweatpants (womenswear, bottoms, joggers-tracksuits)",
    "Women >> Bottoms >> Overalls (womenswear, bottoms, dungarees-overalls)",
    "Women >> Bottoms >> Jumpsuits (womenswear, bottoms, jumpsuits-playsuits)",
    "Women >> Bottoms >> Rompers (womenswear, bottoms, jumpsuits-playsuits)",
    "Women >> Bottoms >> Other (womenswear, bottoms, other-bottoms)",
    "Women >> Dresses >> Dresses (womenswear, dresses, dresses)",
    "Women >> Dresses >> Mini dresses (womenswear, dresses, mini-dresses)",
    "Women >> Dresses >> Midi dresses (womenswear, dresses, midi-dresses)",
    "Women >> Dresses >> Maxi dresses (womenswear, dresses, maxi-dresses)",
    "Women >> Coats and jackets >> Coats (womenswear, coats-jackets, coats)",
    "Women >> Coats and jackets >> Jackets (womenswear, coats-jackets, jackets)",
    "Women >> Coats and jackets >> Vests (womenswear, coats-jackets, gilets)",
    "Women >> Coats and jackets >> Blazers (womenswear, coats-jackets, suits-blazers)",
    "Women >> Coats and jackets >> Trench coats (womenswear, coats-jackets, trench-coats)",
    "Women >> Coats and jackets >> Puffer jackets (womenswear, coats-jackets, puffer-jackets)",
    "Women >> Coats and jackets >> Other (womenswear, coats-jackets, other-coats-jackets)",
    "Women >> Footwear >> Sneakers (womenswear, footwear, trainers)",
    "Women >> Footwear >> Boots (womenswear, footwear, boots)",
    "Women >> Footwear >> Sandals (womenswear, footwear, sandals)",
    "Women >> Footwear >> Slides (womenswear, footwear, slides)",
    "Women >> Footwear >> Slippers (womenswear, footwear, slippers)",
    "Women >> Footwear >> Loafers (womenswear, footwear, loafers)",
    "Women >> Footwear >> Mules (womenswear, footwear, mules)",
    "Women >> Footwear >> Clogs (womenswear, footwear, clogs)",
    "Women >> Footwear >> Espadrilles (womenswear, footwear, espadrilles)",
    "Women >> Footwear >> Flats (womenswear, footwear, flat-shoes)",
    "Women >> Footwear >> Heels (womenswear, footwear, heels)",
    "Women >> Footwear >> Platforms (womenswear, footwear, platforms)",
    "Women >> Footwear >> Wedges (womenswear, footwear, wedges)",
    "Women >> Footwear >> Oxfords (womenswear, footwear, oxfords)",
    "Women >> Footwear >> Other (womenswear, footwear, other-footwear)",
    "Women >> Accessories >> Bags (womenswear, accessories, bag)",
    "Women >> Accessories >> Jewelry (womenswear, accessories, jewellery)",
    "Women >> Accessories >> Belts (womenswear, accessories, belt)",
    "Women >> Accessories >> Hats and caps (womenswear, accessories, hat)",
    "Women >> Accessories >> Sunglasses (womenswear, accessories, sunglasses)",
    "Women >> Accessories >> Scarves and wraps (womenswear, accessories, scarf-wraps)",
    "Women >> Accessories >> Gloves (womenswear, accessories, gloves)",
    "Women >> Accessories >> Hair accessories (womenswear, accessories, hair-accessories)",
    "Women >> Accessories >> Wallets and cardholders (womenswear, accessories, wallet-purses)",
    "Women >> Accessories >> Watches (womenswear, accessories, watch)",
    "Women >> Accessories >> Socks (womenswear, accessories, socks)",
    "Women >> Accessories >> Tights (womenswear, accessories, tights)",
    "Women >> Accessories >> Other (womenswear, accessories, other-accessories)",
    "Men >> Tops >> T-shirts (menswear, tops, tshirts)",
    "Men >> Tops >> Polos (menswear, tops, polo-shirts)",
    "Men >> Tops >> Shirts (menswear, tops, shirts)",
    "Men >> Tops >> Hoodies (menswear, tops, hoodies)",
    "Men >> Tops >> Sweatshirts (menswear, tops, sweatshirts)",
    "Men >> Tops >> Sweaters (menswear, tops, jumpers)",
    "Men >> Tops >> Cardigans (menswear, tops, cardigans)",
    "Men >> Tops >> Vests (menswear, tops, vests)",
    "Men >> Tops >> Tanks (menswear, tops, vests-tanks-camis)",
    "Men >> Tops >> Other (menswear, tops, other-tops)",
    "Men >> Bottoms >> Jeans (menswear, bottoms, jeans)",
    "Men >> Bottoms >> Pants (menswear, bottoms, trousers)",
    "Men >> Bottoms >> Shorts (menswear, bottoms, shorts)",
    "Men >> Bottoms >> Sweatpants (menswear, bottoms, joggers-tracksuits)",
    "Men >> Bottoms >> Joggers (menswear, bottoms, joggers-tracksuits)",
    "Men >> Bottoms >> Cargo pants (menswear, bottoms, cargo-pants)",
    "Men >> Bottoms >> Chinos (menswear, bottoms, chinos)",
    "Men >> Bottoms >> Swim (menswear, swim-beach-wear, swim-briefs-shorts)",
    "Men >> Bottoms >> Other (menswear, bottoms, other-bottoms)",
    "Men >> Outerwear >> Coats (menswear, coats-jackets, coats)",
    "Men >> Outerwear >> Jackets (menswear, coats-jackets, jackets)",
    "Men >> Outerwear >> Vests (menswear, coats-jackets, gilets)",
    "Men >> Outerwear >> Blazers (menswear, coats-jackets, suits-blazers)",
    "Men >> Outerwear >> Other (menswear, coats-jackets, other-coats-jackets)",
    "Men >> Footwear >> Sneakers (menswear, footwear, trainers)",
    "Men >> Footwear >> Boots (menswear, footwear, boots)",
    "Men >> Footwear >> Loafers (menswear, footwear, loafers)",
    "Men >> Footwear >> Sandals (menswear, footwear, sandals)",
    "Men >> Footwear >> Slides (menswear, footwear, slides)",
    "Men >> Footwear >> Slippers (menswear, footwear, slippers)",
    "Men >> Footwear >> Oxfords (menswear, footwear, oxfords)",
    "Men >> Footwear >> Brogues (menswear, footwear, brogues)",
    "Men >> Footwear >> Formal shoes (menswear, footwear, formal-shoes)",
    "Men >> Footwear >> Other (menswear, footwear, other-footwear)",
    "Men >> Accessories >> Bags (menswear, accessories, bag)",
    "Men >> Accessories >> Belts (menswear, accessories, belt)",
    "Men >> Accessories >> Hats and caps (menswear, accessories, hat)",
    "Men >> Accessories >> Sunglasses (menswear, accessories, sunglasses)",
    "Men >> Accessories >> Wallets (menswear, accessories, wallet-purses)",
    "Men >> Accessories >> Watches (menswear, accessories, watch)",
    "Men >> Accessories >> Jewelry (menswear, accessories, jewellery)",
    "Men >> Accessories >> Ties and pocket squares (menswear, accessories, ties-pocketsquares)",
    "Men >> Accessories >> Scarves (menswear, accessories, scarf-wraps)",
    "Men >> Accessories >> Gloves (menswear, accessories, gloves)",
    "Men >> Accessories >> Socks (menswear, underwear, socks)",
    "Men >> Accessories >> Underwear (menswear, underwear, boxers-and-briefs)",
    "Men >> Accessories >> Other (menswear, accessories, other-accessories)",
    "Everything else >> Other (everything-else, other, other)"
  ],
  sizes: [
    "One Size", "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL", "Plus Size",
    "OS", "XS/S", "S/M", "M/L", "L/XL",
    "US 0", "US 2", "US 4", "US 6", "US 8", "US 10", "US 12", "US 14", "US 16", "US 18", "US 20",
    "US 22", "US 24", "US 26", "US 28", "US 30", "US 32",
    "W23", "W24", "W25", "W26", "W27", "W28", "W29", "W30", "W31", "W32", "W33", "W34", "W36", "W38", "W40", "W42", "W44",
    "L28", "L29", "L30", "L31", "L32", "L33", "L34", "L36",
    "US 4 (Shoe)", "US 5 (Shoe)", "US 5.5 (Shoe)", "US 6 (Shoe)", "US 6.5 (Shoe)", "US 7 (Shoe)", "US 7.5 (Shoe)",
    "US 8 (Shoe)", "US 8.5 (Shoe)", "US 9 (Shoe)", "US 9.5 (Shoe)", "US 10 (Shoe)", "US 10.5 (Shoe)",
    "US 11 (Shoe)", "US 11.5 (Shoe)", "US 12 (Shoe)", "US 12.5 (Shoe)", "US 13 (Shoe)", "US 14 (Shoe)", "US 15 (Shoe)"
  ],
  brands: [
    "Adidas (adidas)", "Nike (nike)", "Zara (zara)", "H&M (h-m)", "Levi's (levi-s)", "Champion (champion)", "Vintage (vintage)", "Unbranded (unbranded)", 
    "Urban Outfitters (urban-outfitters)", "Topshop (topshop)", "Brandy Melville (brandy-melville)", "Ralph Lauren (ralph-lauren)",
    "Tommy Hilfiger (tommy-hilfiger)", "Calvin Klein (calvin-klein)", "Gucci (gucci)", "Dr. Martens (dr-martens)", "Converse (converse)", 
    "Vans (vans)", "Puma (puma)", "Reebok (reebok)", "Under Armour (under-armour)", "The North Face (the-north-face)", "Patagonia (patagonia)",
    "Carhartt (carhartt)", "Dickies (dickies)", "Harley-Davidson (harley-davidson)", "Disney (disney)", "Hello Kitty (hello-kitty)", 
    "Playboy (playboy)", "Victoria's Secret (victoria-s-secret)", "Forever 21 (forever-21)", "Fashion Nova (fashion-nova)", "Shein (shein)",
    "PrettyLittleThing (prettylittlething)", "Missguided (missguided)", "Boohoo (boohoo)", "ASOS (asos)", "Gymshark (gymshark)", 
    "Lululemon (lululemon)", "Athleta (athleta)", "Fabletics (fabletics)", "Alo Yoga (alo-yoga)", "Free People (free-people)", "Anthropologie (anthropologie)",
    "Madewell (madewell)", "J.Crew (jcrew)", "Banana Republic (banana-republic)", "Gap (gap)", "Old Navy (old-navy)", "Abercrombie & Fitch (abercrombie-fitch)", 
    "Hollister (hollister-co)", "American Eagle (american-eagle)", "Aeropostale (aeropostale)", "PacSun (pacsun)",
    "Other (unbranded)", "Fruit of The Loom (fruit-of-the-loom)", "NFL (nfl)", "NASCAR (nascar)", "Jerzees (jerzees)", "Billabong (billabong)", "NBA (nba)", "Pro PLayer (pro-player)"
  ],
  conditions: [
    "Brand new (brand_new)", "Like new (used_like_new)", "Used - Excellent (used_excellent)", "Used - Good (used_good)", "Used - Fair (used_fair)"
  ],
  colors: [
    "Black (black)", "Blue (blue)", "Brown (brown)", "Burgundy (burgundy)", "Cream (cream)", "Gold (gold)", "Green (green)", "Grey (grey)", 
    "Khaki (khaki)", "Multi (multi)", "Navy (navy)", "Orange (orange)", "Pink (pink)", "Purple (purple)", "Red (red)", "Silver (silver)", 
    "Tan (tan)", "White (white)", "Yellow (yellow)"
  ],
  styles: [
    "Streetwear (streetwear)", "Y2K (y2_k)", "Vintage (vintage)", "Retro (retro)", "Boho (boho)", "Indie (indie)", "Grunge (grunge)", 
    "Punk (punk)", "Goth (goth)", "Emo (emo)", "Cyber (cyber)", "Rave (rave)", "Skater (skater)", "Preppy (preppy)", "Minimalist (minimalist)", 
    "Casual (casual)", "Chic (chic)", "Glam (glam)", "Luxury (luxury)", "Sporty (sportswear)", "Utility (techwear)", "Workwear (workwear)", 
    "Western (western)", "Biker (biker)", "Cottage (cottage)", "Fairy (fairy)", "Coquette (coquette)", "Twee (twee)", "Kidcore (kidcore)", 
    "Gorpcore (gorpcore)", "Whimsygoth (whimsygoth)", "Avant Garde (avant_garde)", "Costume (costume)", "Cosplay (cosplay)", "Futuristic (futuristic)"
  ],
  ages: [
    "Modern (modern)", "Y2K (y2k)", "90s (90s)", "80s (80s)", "70s (70s)", "60s (60s)", "50s (50s)", "Antique (antique)"
  ],
  locations: [
    "United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland", "France", "Germany", "Italy", "Spain",
    "Netherlands", "Belgium", "Sweden", "Denmark", "Norway", "Finland", "Switzerland", "Austria", "Portugal", "Greece",
    "Poland", "Czech Republic", "Hungary", "Russia", "Ukraine", "Turkey", "Israel", "United Arab Emirates", "Saudi Arabia",
    "South Africa", "India", "China", "Japan", "South Korea", "Taiwan", "Hong Kong", "Singapore", "Malaysia", "Thailand",
    "Indonesia", "Philippines", "Vietnam", "Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru"
  ],
  sources: [
    "Deadstock (deadstock)", "Custom (custom)", "Handmade (handmade)", "Reworked (reworked)", "Upcycled (reworked)", "Repaired (repaired)"
  ]
};

/* ---------- TYPES ---------- */
interface BatchItem {
  id: string;
  description: string;
  category: string;
  price: string;
  brand: string;
  condition: string;
  size: string;
  color1: string;
  color2: string;
  source1: string;
  source2: string;
  age: string;
  style1: string;
  style2: string;
  style3: string;
  location: string;
  pic1: string;
  pic2: string;
  pic3: string;
  pic4: string;
  domesticShipping: string;
  internationalShipping: string;
  rawShortContext?: string; // Stored for editing
  measurements?: string; // Stored for editing
}

/* ---------- UI COMPONENT: INTELLIGENT SEARCHABLE SELECT ---------- */
function SearchableSelect({
  label,
  options,
  value,
  onChange,
  placeholder,
  zIndex = 50 
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  zIndex?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value); 
  const containerRef = useRef<HTMLDivElement>(null);

  const cleanDisplayValue = (val: string) => val ? val.split(" (")[0] : "";

  // Sync displayed text when value prop changes (critical for edit mode)
  useEffect(() => {
    setInputValue(cleanDisplayValue(value));
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // On close, revert input to match selected value
        setInputValue(cleanDisplayValue(value));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value]);

  const filteredOptions = useMemo(() => {
    if (!inputValue) return options;
    const searchTerms = inputValue.toLowerCase().split(" ").filter(t => t.trim());
    const filtered = options.filter((opt) => {
        const lowerOpt = opt.toLowerCase();
        return searchTerms.every(term => lowerOpt.includes(term));
    });
    return filtered.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();
        const firstTerm = searchTerms[0] || "";
        const aStarts = aLower.startsWith(firstTerm);
        const bStarts = bLower.startsWith(firstTerm);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
    });
  }, [inputValue, options]);

  const handleSelect = (opt: string) => {
    onChange(opt);
    setInputValue(cleanDisplayValue(opt));
    setIsOpen(false);
  };

  const renderOption = (opt: string) => {
      const cleanOpt = opt.split(" (")[0];
      if (cleanOpt.includes(" >> ")) {
          const parts = cleanOpt.split(" >> ");
          const mainItem = parts.pop();
          const path = parts.join(" > ");
          return (
              <div className="flex flex-col">
                  <span className="font-bold text-gray-800 text-sm">{mainItem}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{path}</span>
              </div>
          );
      }
      return <span className="font-medium text-gray-700">{cleanOpt}</span>;
  };

  return (
    <div className="relative flex flex-col w-full" ref={containerRef} style={{ zIndex: isOpen ? zIndex + 50 : zIndex }}>
      {label && <label className="text-[10px] font-extrabold text-gray-400 mb-1.5 uppercase tracking-widest">{label}</label>}
      <div className="relative">
        <input
          type="text"
          className={`w-full pl-4 pr-10 py-3.5 bg-white border text-sm font-medium text-gray-800 rounded-2xl transition-all outline-none shadow-sm
            ${isOpen ? 'border-[#A00028] ring-2 ring-[#A00028]/10' : 'border-gray-200 hover:border-[#A00028]/40 hover:shadow-md focus:border-[#A00028] focus:ring-2 focus:ring-[#A00028]/10'}
          `}
          placeholder={placeholder}
          value={inputValue} 
          onChange={(e) => { setInputValue(e.target.value); setIsOpen(true); }}
          onClick={() => setIsOpen(true)}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {inputValue && (
                <button 
                    type="button"
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        setInputValue(""); 
                        onChange(""); 
                    }}
                    className="text-gray-300 hover:text-gray-500 p-1 transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            )}
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>
      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-200 p-1.5">
          {filteredOptions.map((opt, idx) => (
            <div
              key={idx}
              className="px-3.5 py-2.5 cursor-pointer hover:bg-[#A00028]/5 hover:text-[#A00028] rounded-xl transition-all duration-150 border-b border-dashed border-gray-100 last:border-0 group"
              onMouseDown={(e) => {
                e.preventDefault(); 
                handleSelect(opt);
              }}
            >
              {renderOption(opt)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- UI COMPONENT: STANDARD INPUT (Refactored for Edit Support) ---------- */
function TextInput({
  label,
  placeholder,
  value,
  onChange,
  prefix
}: {
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
}) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="text-[10px] font-extrabold text-gray-400 mb-1.5 uppercase tracking-widest">{label}</label>}
      <div className="relative flex items-center w-full group">
        {prefix && (
            <div className="absolute left-3.5 text-gray-400 text-sm font-medium z-10 pointer-events-none group-focus-within:text-[#A00028] transition-colors">
                {prefix}
            </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-3.5 bg-white border border-gray-200 text-sm font-medium text-gray-800 placeholder-gray-300 outline-none rounded-2xl transition-all shadow-sm
            hover:border-[#A00028]/40 hover:shadow-md
            focus:border-[#A00028] focus:ring-2 focus:ring-[#A00028]/10
            ${prefix ? 'pl-8 pr-4' : 'px-4'}
          `}
        />
      </div>
    </div>
  );
}

export default function VaultBatchSystem() {
  /* ---------- GLOBAL STATE ---------- */
  const [batch, setBatch] = useState<BatchItem[]>([]);
  const [msg, setMsg] = useState("");
  const [previewTab, setPreviewTab] = useState<"cards" | "csv">("cards");
  const [editingItem, setEditingItem] = useState<BatchItem | null>(null);

  /* ---------- FORM STATE (Main & Edit) ---------- */
  const [formState, setFormState] = useState({
    era: "", category: "", brand: "", size: "", condition: "",
    color1: "", color2: "", source1: "", location: "",
    style1: "", style2: "", style3: "",
    shortContext: "", price: "", measurements: "",
    domesticShip: "", intShip: "",
    pic1: "", pic2: "", pic3: "", pic4: "",
    output: "", isOutputDirty: false
  });

  const [seoScore, setSeoScore] = useState(0);
  const [copied, setCopied] = useState(false);

  /* ---------- LOGIC: DESCRIPTION GENERATOR ---------- */
  const cleanVal = (val: string) => val.split(" (")[0].split(" >> ").pop() || val;

  // --- LIVE SEO SCORING ---
  useEffect(() => {
    let score = 0;
    if (formState.category) score += 15;
    if (formState.brand) score += 15;
    if (formState.size) score += 15;
    if (formState.condition) score += 10;
    if (formState.style1) score += 10; 
    
    const titleParts = [formState.era, formState.brand, formState.category, formState.shortContext].filter(Boolean).join(" ");
    if (titleParts.length > 30) score += 15;
    
    if (formState.pic1) score += 20;

    setSeoScore(Math.min(100, score));
  }, [formState]);

  // --- GENERATOR FUNCTION ---
  const generateDescriptionString = (state: typeof formState) => {
    const rawShortContext = state.shortContext?.trim() || "";
    const measurements = state.measurements?.trim() || "";
    
    const finalEra = cleanVal(state.era);
    const finalBrand = cleanVal(state.brand);
    
    // Singularization
    const getSingularCategory = (catString: string) => {
        const clean = cleanVal(catString);
        const lower = clean.toLowerCase();
        const keepPlural = ["jeans", "pants", "shorts", "leggings", "overalls", "tights", "sunglasses", "slippers", "clogs", "pajamas", "dungarees"];
        if (keepPlural.some(k => lower.includes(k))) return clean;
        if (lower.endsWith("ies")) return clean.slice(0, -3) + "y";
        if (lower.endsWith("sses")) return clean.slice(0, -2);
        if (lower.endsWith("ches") || lower.endsWith("xes") || lower.endsWith("shes")) return clean.slice(0, -2);
        if (lower.endsWith("s") && !lower.endsWith("ss")) return clean.slice(0, -1);
        return clean;
    };

    const finalCategory = getSingularCategory(state.category);

    // Deduplication
    let optimizedContext = rawShortContext;
    if (finalBrand) optimizedContext = optimizedContext.replace(new RegExp(`\\b${finalBrand}\\b`, 'gi'), "");
    if (finalCategory) optimizedContext = optimizedContext.replace(new RegExp(`\\b${finalCategory}\\b`, 'gi'), "");
    if (finalEra) optimizedContext = optimizedContext.replace(/vintage/gi, "");
    optimizedContext = optimizedContext.replace(/\s+/g, " ").trim();

    const title = [
        finalEra, finalBrand, finalCategory, optimizedContext,
        state.size && `- Size ${state.size}` 
    ].filter(Boolean).join(" ");
    
    const details = [
      state.size && `• Size: ${state.size}`,
      measurements && `• Measurements: ${measurements}`,
      state.condition && `• Condition: ${cleanVal(state.condition)}`,
      (state.style1 || state.style2) && `• Style: ${[cleanVal(state.style1), cleanVal(state.style2)].filter(Boolean).join(", ")}`,
    ].filter(Boolean).join("\n");

    // Hashtags
    const getBrandVibe = (b: string) => {
        const lower = b.toLowerCase();
        if (lower.match(/nike|adidas|puma|champion|fila|reebok|under armour|north face/)) return "gorpcore";
        if (lower.match(/carhartt|dickies|wrangler/)) return "workwear";
        if (lower.match(/stussy|supreme|palace|vans|thrasher/)) return "streetwear";
        if (lower.match(/tripp|lip service|killstar|demon/)) return "goth";
        if (lower.match(/harley/)) return "biker";
        if (lower.match(/north face|patagonia|columbia|arc'teryx/)) return "gorpcore";
        if (lower.match(/abercrombie|hollister|juicy|von dutch|ed hardy/)) return "y2k";
        if (lower.match(/lauren|tommy|nautica|lacoste/)) return "preppy";
        return "";
    };

    const getCategorySynonyms = (cat: string) => {
        const lower = cat.toLowerCase();
        if(lower.includes("hoodie")) return ["hoodie", "sweatshirt"];
        if(lower.includes("t-shirt") || lower.includes("top")) return ["tee", "top"];
        if(lower.includes("jeans") || lower.includes("pants")) return ["denim", "trousers"];
        if(lower.includes("jacket") || lower.includes("coat")) return ["jacket", "outerwear"];
        if(lower.includes("sweater")) return ["jumper", "knit"];
        return [];
    };

    const isVintageEra = ["90s", "80s", "70s", "60s", "50s", "antique", "y2k"].some(e => finalEra.toLowerCase().includes(e));

    const potentialTags = [
        cleanVal(state.style1), cleanVal(state.style2), cleanVal(state.style3), 
        getBrandVibe(finalBrand), 
        isVintageEra ? "vintage" : "",
        finalEra.toLowerCase(), 
        cleanVal(state.condition).includes("Brand new") ? "deadstock" : "",
        ...getCategorySynonyms(state.category),
        "streetwear", "fashion", "style"
    ];

    const tags = Array.from(new Set(potentialTags))
      .filter(Boolean)
      .map((t) => "#" + t?.replace(/\s+/g, "").toLowerCase())
      .slice(0, 5)
      .join(" ");

    return [title, details, "Ships next day 📦 | DM me with questions 💬", tags].filter(Boolean).join("\n");
  };

  /* ---------- EVENT HANDLERS ---------- */
  const handleUpdateField = (field: string, value: any) => {
    setFormState(prev => {
        const newState = { ...prev, [field]: value };
        
        // --- LOGIC FIX START ---
        // If the user is specifically editing the "output" text area, 
        // we set isOutputDirty to true. This stops the auto-generator from 
        // overwriting their manual work in the future.
        if (field === "output") {
            newState.isOutputDirty = true;
        } 
        // Otherwise, if we are editing normal fields (brand, size, etc)
        // We ONLY auto-generate if the user hasn't manually dirtied the output yet.
        else if (!prev.isOutputDirty) {
            newState.output = generateDescriptionString(newState);
        }
        // --- LOGIC FIX END ---

        return newState;
    });
  };

  const handlePreview = () => {
      const generated = generateDescriptionString(formState);
      handleUpdateField("output", generated);
      // Explicitly set dirty to true so subsequent field edits don't overwrite this preview
      // Note: handleUpdateField handles the state merge, but since we need to force
      // the dirty flag alongside the output update for the preview button specifically:
      setFormState(prev => ({
          ...prev,
          output: generated,
          isOutputDirty: true
      }));
  };

  const handleClearForm = () => {
      setFormState({
        era: "", category: "", brand: "", size: "", condition: "",
        color1: "", color2: "", source1: "", location: "",
        style1: "", style2: "", style3: "",
        shortContext: "", price: "", measurements: "",
        domesticShip: "", intShip: "",
        pic1: "", pic2: "", pic3: "", pic4: "",
        output: "", isOutputDirty: false
      });
      setSeoScore(0);
      setMsg("Form Cleared");
      setTimeout(()=>setMsg(""), 1000);
  };

  const handleAddToBatch = () => {
    if (!formState.category) {
        setMsg("Category required"); 
        setTimeout(()=>setMsg(""), 2000); 
        return; 
    }

    // Use current output (whether manual or generated)
    const finalDescription = formState.output || generateDescriptionString(formState);

    const newItem: BatchItem = {
      id: crypto.randomUUID(),
      description: finalDescription,
      category: formState.category, 
      price: formState.price, 
      brand: formState.brand, 
      condition: formState.condition, 
      size: formState.size,
      color1: formState.color1, 
      color2: formState.color2, 
      source1: formState.source1, 
      source2: "", 
      age: formState.era,
      style1: formState.style1, 
      style2: formState.style2, 
      style3: formState.style3, 
      location: formState.location,
      pic1: formState.pic1, pic2: formState.pic2, pic3: formState.pic3, pic4: formState.pic4,
      domesticShipping: formState.domesticShip,
      internationalShipping: formState.intShip,
      rawShortContext: formState.shortContext,
      measurements: formState.measurements
    };
    setBatch(prev => [...prev, newItem]);
    handleClearForm();
    setMsg("Added to Batch!");
    setTimeout(()=>setMsg(""), 2000);
  };

  // --- EDIT MODAL HANDLERS ---
  const openEditModal = (item: BatchItem) => {
    setEditingItem(item);
    // Populate form state from item
    setFormState({
        era: item.age, category: item.category, brand: item.brand, size: item.size, condition: item.condition,
        color1: item.color1, color2: item.color2, source1: item.source1, location: item.location,
        style1: item.style1, style2: item.style2, style3: item.style3,
        shortContext: item.rawShortContext || "", price: item.price, measurements: item.measurements || "",
        domesticShip: item.domesticShipping, intShip: item.internationalShipping,
        pic1: item.pic1, pic2: item.pic2, pic3: item.pic3, pic4: item.pic4,
        output: item.description, isOutputDirty: true // Assume edited items are "dirty" to prevent immediate overwrite
    });
  };

  const saveEditedItem = () => {
      if(!editingItem) return;
      
      const updatedItem: BatchItem = {
          ...editingItem,
          description: formState.output,
          category: formState.category,
          price: formState.price,
          brand: formState.brand,
          condition: formState.condition,
          size: formState.size,
          color1: formState.color1,
          color2: formState.color2,
          source1: formState.source1,
          age: formState.era,
          style1: formState.style1, style2: formState.style2, style3: formState.style3,
          location: formState.location,
          pic1: formState.pic1, pic2: formState.pic2, pic3: formState.pic3, pic4: formState.pic4,
          domesticShipping: formState.domesticShip,
          internationalShipping: formState.intShip,
          rawShortContext: formState.shortContext,
          measurements: formState.measurements
      };

      setBatch(prev => prev.map(item => item.id === editingItem.id ? updatedItem : item));
      setEditingItem(null);
      handleClearForm(); // Reset form after edit so main form is clean
      setMsg("Item Updated");
      setTimeout(()=>setMsg(""), 2000);
  };

  const handleExportCSV = () => {
    if(batch.length === 0) return;
    const headers = ["Description","Category","Price","Brand","Condition","Size","Color 1","Color 2","Source 1","Source 2","Age","Style 1","Style 2","Style 3","Location","Picture Hero url","Picture 2 url","Picture 3 url","Picture 4 url","Picture 5 url","Picture 6 url","Picture 7 url","Picture 8 url","Domestic Shipping price","International Shipping price"];
    const csvRows = batch.map(i => [
      `"${i.description.replace(/"/g, '""')}"`, 
      `"${i.category.replace(/"/g, '""')}"`, 
      i.price, `"${i.brand.replace(/"/g, '""')}"`, `"${i.condition.replace(/"/g, '""')}"`, 
      i.size, i.color1, i.color2, i.source1, "", i.age, i.style1, i.style2, i.style3, i.location,
      i.pic1, i.pic2, i.pic3, i.pic4, "", "", "", "", i.domesticShipping, i.internationalShipping
    ].join(","));
    
    const csvString = "Template version: 5\r\n" + headers.join(",") + "\r\n\r\n" + csvRows.join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["\uFEFF"+csvString], {type: "text/csv"}));
    a.download = `depop_batch_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  /* ---------- SUB-RENDER: FORM FIELDS (Used in Main & Modal) ---------- */
  const renderFormFields = () => (
    <>
        {/* CARD 1: CORE */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-gray-100 overflow-visible relative z-30 p-2">
            <div className="bg-gradient-to-b from-white to-gray-50/50 px-8 py-5 border-b border-gray-100 rounded-t-[1.7rem]">
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2.5 opacity-80">
                    <Tag className="w-4 h-4 text-[#A00028] fill-[#A00028]/20"/> Core Information
                </h3>
            </div>
            <div className="p-8 grid grid-cols-1 gap-6">
                <SearchableSelect label="Category" placeholder="Type to search..." options={depop.categories} value={formState.category} onChange={(v)=>handleUpdateField("category", v)} zIndex={100} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SearchableSelect label="Brand" placeholder="Select Brand..." options={depop.brands} value={formState.brand} onChange={(v)=>handleUpdateField("brand", v)} zIndex={90} />
                    <SearchableSelect label="Era / Age" placeholder="Select Era..." options={depop.ages} value={formState.era} onChange={(v)=>handleUpdateField("era", v)} zIndex={90} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextInput label="Price" placeholder="0.00" value={formState.price} onChange={(e)=>handleUpdateField("price", e.target.value)} prefix="$" />
                        <TextInput label="Short Title Context" placeholder="e.g. Rare graphic print" value={formState.shortContext} onChange={(e)=>handleUpdateField("shortContext", e.target.value)} />
                </div>
            </div>
        </div>

        {/* CARD 2: DETAILS */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-gray-100 overflow-visible relative z-20 p-2">
            <div className="bg-gradient-to-b from-white to-gray-50/50 px-8 py-5 border-b border-gray-100 rounded-t-[1.7rem]">
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2.5 opacity-80">
                    <Package className="w-4 h-4 text-blue-600 fill-blue-600/20"/> Item Details
                </h3>
            </div>
            <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SearchableSelect label="Size" placeholder="Select Size..." options={depop.sizes} value={formState.size} onChange={(v)=>handleUpdateField("size", v)} zIndex={80} />
                    <TextInput label="Measurements" placeholder="e.g. 22x28" value={formState.measurements} onChange={(e)=>handleUpdateField("measurements", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <SearchableSelect label="Color 1" placeholder="Primary..." options={depop.colors} value={formState.color1} onChange={(v)=>handleUpdateField("color1", v)} zIndex={70} />
                    <SearchableSelect label="Color 2" placeholder="Secondary..." options={depop.colors} value={formState.color2} onChange={(v)=>handleUpdateField("color2", v)} zIndex={70} />
                </div>
                <SearchableSelect label="Condition" placeholder="Select Condition..." options={depop.conditions} value={formState.condition} onChange={(v)=>handleUpdateField("condition", v)} zIndex={60} />
                <div className="p-6 bg-gray-50/80 rounded-3xl border border-gray-100 relative z-10 shadow-inner">
                    <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-4 block flex items-center gap-2">
                            <Sparkles className="w-3 h-3"/> Style Tags
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        <SearchableSelect label="" placeholder="Style 1" options={depop.styles} value={formState.style1} onChange={(v)=>handleUpdateField("style1", v)} zIndex={50} />
                        <SearchableSelect label="" placeholder="Style 2" options={depop.styles} value={formState.style2} onChange={(v)=>handleUpdateField("style2", v)} zIndex={50} />
                        <SearchableSelect label="" placeholder="Style 3" options={depop.styles} value={formState.style3} onChange={(v)=>handleUpdateField("style3", v)} zIndex={50} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-2">
                        <SearchableSelect label="Source" placeholder="Source..." options={depop.sources} value={formState.source1} onChange={(v)=>handleUpdateField("source1", v)} zIndex={40} />
                        <SearchableSelect label="Location" placeholder="Shipping From..." options={depop.locations} value={formState.location} onChange={(v)=>handleUpdateField("location", v)} zIndex={40} />
                </div>
            </div>
        </div>

        {/* CARD 3: IMAGES */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-gray-100 overflow-visible relative z-10 p-2">
            <div className="bg-gradient-to-b from-white to-gray-50/50 px-8 py-5 border-b border-gray-100 rounded-t-[1.7rem] flex justify-between">
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2.5 opacity-80">
                    <ImageIcon className="w-4 h-4 text-purple-600 fill-purple-600/20"/> Images & Shipping
                </h3>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <TextInput label="Hero Image URL" placeholder="https://..." value={formState.pic1} onChange={(e)=>handleUpdateField("pic1", e.target.value)} />
                        <TextInput label="Image 2 URL" placeholder="https://..." value={formState.pic2} onChange={(e)=>handleUpdateField("pic2", e.target.value)} />
                        <TextInput label="Image 3 URL" placeholder="https://..." value={formState.pic3} onChange={(e)=>handleUpdateField("pic3", e.target.value)} />
                        <TextInput label="Image 4 URL" placeholder="https://..." value={formState.pic4} onChange={(e)=>handleUpdateField("pic4", e.target.value)} />
                    </div>
                    <div className="space-y-4">
                        <div className="p-6 bg-gray-50/80 rounded-3xl border border-gray-100 h-full flex flex-col justify-center shadow-inner">
                            <div className="space-y-6">
                                <TextInput label="Domestic Ship" placeholder="0.00" value={formState.domesticShip} onChange={(e)=>handleUpdateField("domesticShip", e.target.value)} prefix="$" />
                                <TextInput label="Intl Ship" placeholder="0.00" value={formState.intShip} onChange={(e)=>handleUpdateField("intShip", e.target.value)} prefix="$" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-slate-900 font-sans pb-32 selection:bg-[#A00028] selection:text-white bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* HEADER */}
      <div className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-200/60 px-6 py-4 sticky top-0 z-40 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="h-8 w-8 bg-[#A00028] rounded-lg flex items-center justify-center text-white font-black text-xs">V5</div>
                <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
                <h1 className="text-sm font-bold tracking-widest text-gray-500 uppercase">Vault Engine</h1>
            </div>
            {msg && (
                <div className="flex items-center gap-2 text-[#A00028] bg-[#A00028]/5 px-4 py-1.5 rounded-full text-xs font-bold animate-in fade-in slide-in-from-top-2 border border-[#A00028]/10 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5"/>{msg}
                </div>
            )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* --- LEFT: FORM AREA --- */}
          <div className="lg:col-span-7 space-y-8">
            {renderFormFields()}
          </div>

          {/* --- RIGHT: PREVIEW & BATCH --- */}
          <div className="lg:col-span-5 space-y-8 sticky top-24">
            
            {/* SEO HEALTH WIDGET */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-200/60 p-4 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase text-gray-500 tracking-wider">SEO Health</h4>
                        <p className="text-[10px] font-medium text-gray-400">Completeness Score</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-500 ${seoScore > 80 ? 'bg-green-500' : seoScore > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${seoScore}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-gray-700">{seoScore}%</span>
                 </div>
            </div>

            {/* LIVE EDITOR */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white ring-1 ring-gray-100 overflow-hidden p-2">
                <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center rounded-t-[1.7rem] shadow-lg shadow-gray-900/20">
                    <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                         <Edit3 className="w-3 h-3"/> Live Editor
                    </h2>
                    <button 
                        type="button"
                        onClick={async () => { await navigator.clipboard.writeText(formState.output); setCopied(true); setTimeout(()=>setCopied(false), 1000); }} 
                        className="text-[10px] font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 border border-white/10"
                    >
                        {copied ? <CheckCircle className="w-3 h-3 text-green-400"/> : <Copy className="w-3 h-3"/>} 
                        {copied ? "COPIED" : "COPY TEXT"}
                    </button>
                </div>
                <div className="p-0 bg-gray-50/50 min-h-[240px] rounded-b-[1.7rem] relative group">
                    <textarea
                        value={formState.output}
                        onChange={(e) => handleUpdateField("output", e.target.value)}
                        className="w-full h-full min-h-[240px] bg-transparent p-6 text-xs text-gray-600 font-medium font-mono leading-relaxed resize-none outline-none focus:bg-white/50 transition-colors"
                        placeholder="Click 'Preview' or type here..."
                    />
                </div>
            </div>

            {/* BATCH & PREVIEW TABS */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white ring-1 ring-gray-100 overflow-hidden p-2">
                <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-gradient-to-b from-white to-gray-50/50 rounded-t-[1.7rem]">
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setPreviewTab("cards")}
                            className={`text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 ${previewTab === "cards" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            <Table className="w-3.5 h-3.5"/> Batch List
                        </button>
                        <div className="w-[1px] h-4 bg-gray-300"></div>
                        <button 
                            onClick={() => setPreviewTab("csv")}
                            className={`text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 ${previewTab === "csv" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            <FileSpreadsheet className="w-3.5 h-3.5"/> CSV Preview
                        </button>
                    </div>
                    <div className="bg-[#A00028]/10 border border-[#A00028]/10 text-[#A00028] text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm">
                        {batch.length} ITEMS
                    </div>
                </div>
                
                <div className="p-6">
                    {/* VIEW 1: CARDS */}
                    {previewTab === "cards" && (
                        <div className="max-h-[400px] overflow-y-auto space-y-2.5 mb-6 custom-scrollbar pr-2">
                            {batch.length === 0 && (
                                <div className="text-center text-xs text-gray-400 py-12 border-2 border-dashed border-gray-100 rounded-2xl">
                                    Batch is currently empty
                                </div>
                            )}
                            {batch.map((item, i) => (
                                <div key={item.id} className="flex justify-between items-center p-3.5 bg-white border border-gray-100 rounded-xl group hover:border-[#A00028]/20 hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all duration-200">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-black text-gray-300">#{i+1}</span>
                                            <span className="text-xs font-bold text-gray-800">{item.brand.split(" (")[0] || "No Brand"}</span>
                                        </div>
                                        <span className="text-[10px] font-medium text-gray-400 truncate w-48 pl-5">
                                            {item.category.split(" >> ").pop()?.split(" (")[0]}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="button" onClick={() => openEditModal(item)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-blue-500 hover:bg-blue-50 transition-all">
                                            <Edit3 className="w-4 h-4"/>
                                        </button>
                                        <button type="button" onClick={() => setBatch(b => b.filter(x => x.id !== item.id))} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all">
                                            <Trash2 className="w-4 h-4"/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* VIEW 2: CSV GRID */}
                    {previewTab === "csv" && (
                        <div className="max-h-[400px] overflow-auto mb-6 custom-scrollbar border border-gray-100 rounded-xl bg-gray-50/50">
                            {batch.length === 0 ? (
                                <div className="text-center text-xs text-gray-400 py-12">No data to preview</div>
                            ) : (
                                <table className="w-max min-w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100 border-b border-gray-200">
                                            {["Description", "Category", "Price", "Brand", "Condition", "Size"].map(h => (
                                                <th key={h} className="p-3 text-[10px] font-bold text-gray-500 uppercase whitespace-nowrap sticky top-0 bg-gray-100 z-10">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {batch.map(item => (
                                            <tr key={item.id} className="hover:bg-blue-50/30">
                                                <td className="p-3 text-[10px] font-mono text-gray-600 max-w-[200px] truncate">{item.description}</td>
                                                <td className="p-3 text-[10px] font-medium text-gray-800 whitespace-nowrap">{cleanVal(item.category)}</td>
                                                <td className="p-3 text-[10px] text-gray-600">${item.price}</td>
                                                <td className="p-3 text-[10px] text-gray-600">{cleanVal(item.brand)}</td>
                                                <td className="p-3 text-[10px] text-gray-600">{cleanVal(item.condition)}</td>
                                                <td className="p-3 text-[10px] text-gray-600">{item.size}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            type="button"
                            onClick={() => setBatch([])} 
                            disabled={batch.length===0} 
                            className="py-3.5 text-xs font-bold text-red-600 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        >
                            CLEAR ALL
                        </button>
                        <button 
                            type="button"
                            onClick={handleExportCSV} 
                            disabled={batch.length===0} 
                            className="py-3.5 text-xs font-bold text-white bg-gray-900 rounded-xl hover:bg-black hover:shadow-lg hover:shadow-gray-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                        >
                            <Download className="w-3.5 h-3.5"/> EXPORT CSV
                        </button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* FLOATING ACTION BAR (MAIN) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md">
        <div className="bg-white/90 backdrop-blur-xl p-2 rounded-[1.5rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border border-white/50 ring-1 ring-gray-200 flex gap-2">
            <button type="button" onClick={handleClearForm} className="px-5 py-3 text-xs font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-colors">
                CLEAR
            </button>
            <button 
                type="button"
                onClick={handlePreview}
                className="flex-1 bg-gray-900 hover:bg-black text-white py-3 rounded-2xl font-bold transition-all shadow-lg shadow-gray-900/10 flex items-center justify-center gap-2 text-xs tracking-wide"
            >
                <Search className="w-3.5 h-3.5"/> PREVIEW
            </button>
            <button 
                type="button"
                onClick={handleAddToBatch}
                className="flex-1 bg-[#A00028] hover:bg-[#850020] text-white py-3 rounded-2xl font-bold transition-all shadow-lg shadow-[#A00028]/20 flex items-center justify-center gap-2 text-xs tracking-wide"
            >
                <Plus className="w-3.5 h-3.5"/> ADD TO BATCH
            </button>
        </div>
      </div>

      {/* MODAL: EDIT ITEM */}
      {editingItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" onClick={() => setEditingItem(null)} />
              <div className="bg-[#F8F9FC] w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  
                  {/* Modal Header */}
                  <div className="bg-white px-8 py-5 border-b border-gray-200 flex justify-between items-center z-10 shrink-0">
                      <div>
                          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                              <Edit3 className="w-5 h-5 text-[#A00028]"/> Edit Item
                          </h2>
                          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Modifying ID: {editingItem.id.slice(0,8)}...</p>
                      </div>
                      <button onClick={() => { setEditingItem(null); handleClearForm(); }} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                          <X className="w-5 h-5 text-gray-600" />
                      </button>
                  </div>

                  {/* Modal Body (Scrollable) */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8 bg-[#F8F9FC]">
                       {renderFormFields()}
                       
                       {/* Live Editor inside Modal */}
                       <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                           <h3 className="text-xs font-black uppercase text-gray-400 mb-2">Updated Description Preview</h3>
                           <textarea 
                                value={formState.output} 
                                onChange={(e) => handleUpdateField("output", e.target.value)}
                                className="w-full h-40 bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs font-mono"
                           />
                       </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="bg-white px-8 py-4 border-t border-gray-200 flex justify-end gap-3 shrink-0 z-10">
                       <button 
                          onClick={() => { setEditingItem(null); handleClearForm(); }}
                          className="px-6 py-3 rounded-xl font-bold text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                       >
                           Cancel
                       </button>
                       <button 
                          onClick={saveEditedItem}
                          className="px-8 py-3 rounded-xl font-bold text-sm text-white bg-[#A00028] hover:bg-[#850020] shadow-lg shadow-[#A00028]/20 flex items-center gap-2 transition-transform active:scale-95"
                       >
                           <Save className="w-4 h-4" /> Save Changes
                       </button>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
}
