"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import { ChevronDown, Copy, Plus, Trash2, Download, CheckCircle, X, Package, Tag, Image as ImageIcon, Truck, Search, Sparkles, Edit3 } from "lucide-react";

/* ---------- DEPOP TAXONOMY DATA (FULL RAW) ---------- */
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
    "Women >> Swimwear >> Bikini and tankini sets (womenswear, swim-beach-wear, bikinis-and-tankini-sets)",
    "Women >> Swimwear >> Bikini and tankini tops (womenswear, swim-beach-wear, bikini-and-tankini-tops)",
    "Women >> Swimwear >> Bikini and tankini bottoms (womenswear, swim-beach-wear, bikini-and-tankini-bottoms)",
    "Women >> Swimwear >> Swimsuits (womenswear, swim-beach-wear, swimsuit-one-piece)",
    "Women >> Swimwear >> Cover ups (womenswear, swim-beach-wear, cover-ups)",
    "Women >> Swimwear >> Other (womenswear, swim-beach-wear, other-swim-beach-wear)",
    "Women >> Sleepwear >> Pajamas (womenswear, nightwear, pajamas)",
    "Women >> Sleepwear >> Robes (womenswear, nightwear, robes)",
    "Women >> Sleepwear >> Lingerie sets (womenswear, lingerie, lingerie-sets)",
    "Women >> Sleepwear >> Bras (womenswear, lingerie, bras)",
    "Women >> Sleepwear >> Panties (womenswear, lingerie, panties)",
    "Women >> Sleepwear >> Shapewear (womenswear, lingerie, shapewear)",
    "Women >> Sleepwear >> Other (womenswear, lingerie, other-lingerie)",
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
    "Men >> Suits >> Suits (menswear, suits, suits)",
    "Men >> Suits >> Tuxedos (menswear, suits, tuxedos)",
    "Men >> Suits >> Other (menswear, suits, other-suits)",
    "Kids >> Clothing >> Tops (kidswear, tops, tshirts)",
    "Kids >> Clothing >> Bottoms (kidswear, bottoms, trousers)",
    "Kids >> Clothing >> Dresses (kidswear, dresses, dresses)",
    "Kids >> Clothing >> Outerwear (kidswear, coats-jackets, coats)",
    "Kids >> Clothing >> Sleepwear (kidswear, nightwear, pajamas)",
    "Kids >> Clothing >> Swimwear (kidswear, swim-beach-wear, swim-briefs-shorts)",
    "Kids >> Clothing >> Costumes (kidswear, costume, costume)",
    "Kids >> Footwear >> Sneakers (kidswear, footwear, trainers)",
    "Kids >> Footwear >> Boots (kidswear, footwear, boots)",
    "Kids >> Footwear >> Sandals (kidswear, footwear, sandals)",
    "Kids >> Footwear >> Other (kidswear, footwear, other-footwear)",
    "Kids >> Accessories >> Hats (kidswear, accessories, hat)",
    "Kids >> Accessories >> Bags (kidswear, accessories, bag)",
    "Kids >> Accessories >> Other (kidswear, accessories, other-accessories)",
    "Everything else >> Art >> Prints (everything-else, art, prints)",
    "Everything else >> Art >> Photography (everything-else, art, photography)",
    "Everything else >> Art >> Paintings (everything-else, art, paintings)",
    "Everything else >> Art >> Drawings (everything-else, art, drawing-and-illustrations)",
    "Everything else >> Art >> Sculptures (everything-else, art, sculptures)",
    "Everything else >> Art >> Other (everything-else, art, mixed-media)",
    "Everything else >> Home >> Decor (everything-else, home, decor-home-accesories)",
    "Everything else >> Home >> Bedding (everything-else, home, soft-furnishings-textiles)",
    "Everything else >> Home >> Kitchenware (everything-else, home, dinnerware)",
    "Everything else >> Home >> Lighting (everything-else, home, lighting)",
    "Everything else >> Home >> Textiles (everything-else, home, soft-furnishings-textiles)",
    "Everything else >> Home >> Other (everything-else, home, other-home)",
    "Everything else >> Tech >> Cameras (everything-else, film, cameras-and-accessories)",
    "Everything else >> Tech >> Phone cases (everything-else, tech-accessories, phone-cases)",
    "Everything else >> Tech >> Audio (everything-else, music, cds-and-vinyl)",
    "Everything else >> Tech >> Gaming (everything-else, toys, puzzles-games)",
    "Everything else >> Tech >> Other (everything-else, tech-accessories, other-tech)",
    "Everything else >> Beauty >> Makeup (everything-else, beauty, makeup)",
    "Everything else >> Beauty >> Skincare (everything-else, beauty, skincare)",
    "Everything else >> Beauty >> Haircare (everything-else, beauty, hair-products)",
    "Everything else >> Beauty >> Fragrance (everything-else, beauty, fragrance)",
    "Everything else >> Beauty >> Tools (everything-else, beauty, tools-and-brushes)",
    "Everything else >> Beauty >> Other (everything-else, beauty, other-beauty)",
    "Everything else >> Sports >> Equipment (everything-else, sports-equipment-accesories, fitness)",
    "Everything else >> Sports >> Accessories (everything-else, sports-equipment-accesories, camping-hiking)",
    "Everything else >> Sports >> Other (everything-else, sports-equipment-accesories, other-sports)",
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
    "US 11 (Shoe)", "US 11.5 (Shoe)", "US 12 (Shoe)", "US 12.5 (Shoe)", "US 13 (Shoe)", "US 14 (Shoe)", "US 15 (Shoe)",
    "Baby 0-3M", "Baby 3-6M", "Baby 6-9M", "Baby 9-12M", "Toddler 12-18M", "Toddler 18-24M", "Toddler 2T",
    "Toddler 3T", "Toddler 4T",
    "Kids 4", "Kids 5", "Kids 6", "Kids 6X", "Kids 7", "Kids 8", "Kids 10", "Kids 12", "Kids 14", "Kids 16", "Kids 18", "Kids 20"
  ],
  brands: [
    "Adidas (adidas)", "Nike (nike)", "Zara (zara)", "H&M (h-m)", "Levi's (levi-s)", "Champion (champion)", 
    "Vintage (vintage)", "American Vintage (american-vintage)", "Jerzees (jerzees)", "Gildan (gildan)", "Unbranded (unbranded)", 
    "Urban Outfitters (urban-outfitters)", "Topshop (topshop)", "Brandy Melville (brandy-melville)", "Ralph Lauren (ralph-lauren)",
    "Tommy Hilfiger (tommy-hilfiger)", "Calvin Klein (calvin-klein)", "Gucci (gucci)", "Dr. Martens (dr-martens)", "Converse (converse)", 
    "Vans (vans)", "Puma (puma)", "Reebok (reebok)", "Under Armour (under-armour)", "The North Face (the-north-face)", "Patagonia (patagonia)",
    "Carhartt (carhartt)", "Dickies (dickies)", "Harley-Davidson (harley-davidson)", "Disney (disney)", "Hello Kitty (hello-kitty)", 
    "Playboy (playboy)", "Victoria's Secret (victoria-s-secret)", "Forever 21 (forever-21)", "Fashion Nova (fashion-nova)", "Shein (shein)",
    "PrettyLittleThing (prettylittlething)", "Missguided (missguided)", "Boohoo (boohoo)", "ASOS (asos)", "Gymshark (gymshark)", 
    "Lululemon (lululemon)", "Athleta (athleta)", "Fabletics (fabletics)", "Alo Yoga (alo-yoga)", "Free People (free-people)", "Anthropologie (anthropologie)",
    "Madewell (madewell)", "J.Crew (jcrew)", "Banana Republic (banana-republic)", "Gap (gap)", "Old Navy (old-navy)", "Abercrombie & Fitch (abercrombie-fitch)", 
    "Hollister (hollister-co)", "American Eagle (american-eagle)", "Aeropostale (aeropostale)", "PacSun (pacsun)",
    "Zumiez (zumiez)", "Hot Topic (hot-topic)", "Dolls Kill (dolls-kill)", "Killstar (killstar)", "Tripp NYC (tripp-nyc)", "Demonia (demonia)", 
    "Y.R.U. (yru)", "Iron Fist (iron-fist)", "Lip Service (lip-service)", "Royal Bones (royal-bones)", "Hell Bunny (hell-bunny)",
    "Sourpuss (sourpuss-clothing)", "Kreepsville 666 (kreepsville-666)", "Too Fast (too-fast)", "Banned Apparel (banned-apparel)", "Restyle (restyle)", 
    "Punk Rave (punk-rave)", "Dark in Love (dark-in-love)", "Spin Doctor (spin-doctor)", "Jawbreaker (jawbreaker)", "Vixxsin (vixxsin)",
    "Poizen Industries (poizen-industries)", "Necessary Evil (necessary-evil)", "Queen of Darkness (queen-of-darkness)", "Devil Fashion (devil-fashion)", 
    "Burleska (burleska)", "Phaze (phaze-clothing)", "Criminal Damage (criminal-damage)", "Disturbia (disturbia)", "Drop Dead (dropdead)",
    "Blackcraft Cult (blackcraft-cult)", "Rogue & Wolf (rogue-wolf)", "Widow (widow)", "Current Mood (current-mood)", "Club Exx (club-exx)", 
    "Sugarpill (sugarpill)", "Lime Crime (lime-crime)", "Jeffree Star Cosmetics (jeffree-star)", "Morphe (morphe)",
    "ColourPop (colourpop)", "Anastasia Beverly Hills (anastasia-beverly-hills)", "Tarte (tarte)", "Too Faced (too-faced)", "Urban Decay (urban-decay)", 
    "Benefit (benefit)", "MAC (mac)", "NARS (nars)", "Fenty Beauty (fenty-beauty)", "Kylie Cosmetics (kylie-cosmetics)",
    "Glossier (glossier)", "Milk Makeup (milk-makeup)", "The Ordinary (the-ordinary)", "Mario Badescu (mario-badescu)", "Drunk Elephant (drunk-elephant)", 
    "Tatcha (tatcha)", "Sunday Riley (sunday-riley)", "Herbivore (herbivore)", "Ouai (ouai)", "Olaplex (olaplex)",
    "Briogeo (briogeo)", "Living Proof (living-proof)", "Bumble and bumble (bumble-and-bumble)", "Drybar (drybar)", "GHD (ghd)", "Dyson (dyson)", 
    "Apple (apple)", "Samsung (samsung)", "Sony (sony)", "Nintendo (nintendo)", "Canon (canon)", "Nikon (nikon)", "Fujifilm (fujifilm)",
    "Polaroid (polaroid)", "Kodak (kodak)", "GoPro (gopro)", "Fitbit (fitbit)", "Garmin (garmin)", "Beats by Dre (beats-by-dre)", "Bose (bose)", 
    "JBL (jbl)", "Skullcandy (skullcandy)", "Marshall (marshall)", "Crosley (crosley)", "Audio-Technica (audio-technica)", "Razer (razer)",
    "Logitech (logitech)", "Corsair (corsair)", "SteelSeries (steelseries)", "HyperX (hyperx)", "Funko (funko)", "Lego (lego)", "Barbie (barbie)", 
    "Squishmallows (squishmallows)", "Jellycat (jellycat)", "Sanrio (sanrio)", "Pokemon (pokemon)", "Yu-Gi-Oh! (yu-gi-oh)",
    "Magic: The Gathering (magic-the-gathering)", "Dungeons & Dragons (dungeons-dragons)", "Warhammer (warhammer)", "Hasbro (hasbro)", 
    "Mattel (mattel)", "Fisher-Price (fisher-price)", "Nerf (nerf)", "Hot Wheels (hot-wheels)", "Marvel (marvel)", "DC Comics (dc-comics)",
    "Star Wars (star-wars)", "Harry Potter (harry-potter)", "Lord of the Rings (lord-of-the-rings)", "Game of Thrones (game-of-thrones)", 
    "Stranger Things (stranger-things)", "Friends (friends)", "The Office (the-office)", "Rick and Morty (rick-and-morty)",
    "SpongeBob SquarePants (spongebob-squarepants)", "The Simpsons (the-simpsons)", "Family Guy (family-guy)", "South Park (south-park)", 
    "Anime (anime)", "Manga (manga)", "K-Pop (k-pop)", "BTS (bts)", "Blackpink (blackpink)", "Stray Kids (stray-kids)", "Twice (twice)",
    "NCT (nct)", "Seventeen (seventeen)", "TXT (txt)", "Enhypen (enhypen)", "Ateez (ateez)", "Itzy (itzy)", "Red Velvet (red-velvet)", 
    "Aespa (aespa)", "NewJeans (newjeans)", "Ive (ive)", "Le Sserafim (le-sserafim)", "Stayc (stayc)", "Nmixx (nmixx)", "Kep1er (kep1er)",
    "Loona (loona)", "Dreamcatcher (dreamcatcher)", "Mamamoo (mamamoo)", "G-Idle (g-idle)", "Everglow (everglow)", "Fromis_9 (fromis_9)", 
    "WJSN (wjsn)", "Cherry Bullet (cherry-bullet)", "Rocket Punch (rocket-punch)", "Weeekly (weeekly)", "Woo!ah! (woo-ah)", "Lightsum (lightsum)",
    "Billlie (billlie)", "Viviz (viviz)", "Class:y (class-y)", "NiziU (niziu)", "XG (xg)", "Fifty Fifty (fifty-fifty)", "TripleS (triples)", 
    "Kiss of Life (kiss-of-life)", "BabyMonster (babymonster)"
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

  // HELPER: Strips the slug for display (e.g. "Nike (nike)" -> "Nike")
  const cleanDisplayValue = (val: string) => val ? val.split(" (")[0] : "";

  // Sync displayed text (cleaned) ONLY when dropdown is closed to prevent fighting user input
  useEffect(() => {
    if (!isOpen) {
        setInputValue(cleanDisplayValue(value));
    }
  }, [value, isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- IMPROVED FILTERING LOGIC ---
  const filteredOptions = useMemo(() => {
    if (!inputValue) return options;
    
    // 1. Tokenize Input (e.g. "hoodie men" -> ["hoodie", "men"])
    const searchTerms = inputValue.toLowerCase().split(" ").filter(t => t.trim());
    
    // 2. Filter: Option must contain ALL tokens
    const filtered = options.filter((opt) => {
        const lowerOpt = opt.toLowerCase();
        return searchTerms.every(term => lowerOpt.includes(term));
    });

    // 3. Sort: Prioritize options that START with the first search term
    // This ensures "Men" comes before "Women" (because women contains men)
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
    onChange(opt); // CRITICAL: Saves FULL string to state
    setInputValue(cleanDisplayValue(opt)); // Updates Input to CLEAN string
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (!isOpen) setIsOpen(true);
  };

  // --- CLEAN ITEM RENDERER ---
  // Parses complex Depop strings into Clean Title + Subtitle
  const renderOption = (opt: string) => {
      const cleanOpt = opt.split(" (")[0]; // Remove (slug)
      
      if (cleanOpt.includes(" >> ")) {
          const parts = cleanOpt.split(" >> ");
          const mainItem = parts.pop(); // "T-shirts"
          const path = parts.join(" > "); // "Women > Tops"
          
          return (
              <div className="flex flex-col">
                  <span className="font-bold text-gray-800 text-sm">{mainItem}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{path}</span>
              </div>
          );
      }
      // For brands/styles without >>
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
          onChange={handleInputChange}
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

      {/* DROPDOWN MENU */}
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

/* ---------- UI COMPONENT: STANDARD INPUT ---------- */
function TextInput({
  label,
  placeholder,
  inputRef,
  prefix
}: {
  label?: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
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
          ref={inputRef}
          type="text"
          placeholder={placeholder}
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
  /* ---------- STATE ---------- */
  const [era, setEra] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [source1, setSource1] = useState("");
  const [location, setLocation] = useState("");
  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [style3, setStyle3] = useState("");

  /* ---------- REFS ---------- */
  const shortRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const measurementsRef = useRef<HTMLInputElement | null>(null);
  const domesticShipRef = useRef<HTMLInputElement | null>(null);
  const intShipRef = useRef<HTMLInputElement | null>(null);
  const pic1Ref = useRef<HTMLInputElement | null>(null);
  const pic2Ref = useRef<HTMLInputElement | null>(null);
  const pic3Ref = useRef<HTMLInputElement | null>(null);
  const pic4Ref = useRef<HTMLInputElement | null>(null);

  /* ---------- BATCH STATE ---------- */
  const [batch, setBatch] = useState<BatchItem[]>([]);
  const [output, setOutput] = useState(""); 
  const [isOutputDirty, setIsOutputDirty] = useState(false); 
  const [copied, setCopied] = useState(false); 
  const [msg, setMsg] = useState(""); 

  /* ---------- LOGIC ---------- */
  const generateDescriptionString = () => {
    const shortcontext = shortRef.current?.value?.trim() || "";
    const measurements = measurementsRef.current?.value?.trim() || "";
    
    // Clean values for preview legibility
    const cleanVal = (val: string) => val.split(" (")[0].split(" >> ").pop() || val;

    const title = [
        era && `Vintage ${cleanVal(era)}`, 
        cleanVal(category), 
        cleanVal(brand), 
        shortcontext
    ].filter(Boolean).join(" ");
    
    const details = [
      size && `• Size: ${size}`,
      measurements && `• Measurements: ${measurements}`,
      condition && `• Condition: ${cleanVal(condition)}`,
      style1 && `• Style vibe: ${cleanVal(style1)}`,
    ].filter(Boolean).join("\n");

    // --- SINGULARIZER MAP ---
    const singularMap: Record<string, string> = {
      "hoodies": "Hoodie",
      "shirts": "Shirt",
      "t-shirts": "Tshirt",
      "tshirts": "Tshirt",
      "sweatshirts": "Sweatshirt",
      "sweaters": "Sweater",
      "jackets": "Jacket",
      "coats": "Coat",
      "blouses": "Blouse",
      "vests": "Vest",
      "cardigans": "Cardigan",
      "tops": "Top"
    };

    const processTag = (val: string) => {
       const lower = val.toLowerCase();
       return singularMap[lower] || val;
    };

    // TAGS: Deduplicated, cleaned, singularized, and formatted
    const potentialTags = [
        cleanVal(brand), 
        processTag(cleanVal(category)), // Apply singular logic to category
        cleanVal(style1), 
        cleanVal(era), 
        "vintage"
    ]
      .filter(Boolean)
      .map((t) => "#" + t?.replace(/\s+/g, ""));
    
    const tags = Array.from(new Set(potentialTags)).slice(0, 5).join(" ");

    return [title, details, "Ships next day 📦 | DM me with questions 💬", tags].filter(Boolean).join("\n\n");
  };

  const handlePreview = (e: React.FormEvent) => {
      e.preventDefault();
      const generated = generateDescriptionString();
      setOutput(generated);
      setIsOutputDirty(true); 
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setOutput(e.target.value);
      setIsOutputDirty(true); 
  };

  const handleAddToBatch = () => {
    if (!category) {
        setMsg("Category required"); 
        setTimeout(()=>setMsg(""), 2000); 
        return; 
    }

    const finalDescription = isOutputDirty ? output : generateDescriptionString();

    const newItem: BatchItem = {
      id: crypto.randomUUID(),
      description: finalDescription,
      category, // SAVES FULL STRING WITH SLUG
      price: priceRef.current?.value || "", 
      brand, 
      condition, 
      size,
      color1, 
      color2, 
      source1, 
      source2: "", 
      age: era,
      style1, 
      style2, 
      style3, 
      location,
      pic1: pic1Ref.current?.value || "", 
      pic2: pic2Ref.current?.value || "",
      pic3: pic3Ref.current?.value || "", 
      pic4: pic4Ref.current?.value || "",
      domesticShipping: domesticShipRef.current?.value || "",
      internationalShipping: intShipRef.current?.value || "",
    };
    setBatch(prev => [...prev, newItem]);
    setMsg("Added to Batch!");
    setTimeout(()=>setMsg(""), 2000);
  };

  const handleExportCSV = () => {
    if(batch.length === 0) return;
    
    const headers = ["Description","Category","Price","Brand","Condition","Size","Color 1","Color 2","Source 1","Source 2","Age","Style 1","Style 2","Style 3","Location","Picture Hero url","Picture 2 url","Picture 3 url","Picture 4 url","Picture 5 url","Picture 6 url","Picture 7 url","Picture 8 url","Domestic Shipping price","International Shipping price"];
    
    const csvRows = batch.map(i => [
      `"${i.description.replace(/"/g, '""')}"`, 
      `"${i.category.replace(/"/g, '""')}"`, // Full string exported here
      i.price, 
      `"${i.brand.replace(/"/g, '""')}"`,
      `"${i.condition.replace(/"/g, '""')}"`, 
      i.size,
      i.color1, i.color2, i.source1, "", i.age, i.style1, i.style2, i.style3, i.location,
      i.pic1, i.pic2, i.pic3, i.pic4, "", "", "", "", i.domesticShipping, i.internationalShipping
    ].join(","));
    
    const csvString = "Template version: 5\r\n" + headers.join(",") + "\r\n\r\n" + csvRows.join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["\uFEFF"+csvString], {type: "text/csv"}));
    a.download = "depop_batch.csv";
    a.click();
  };

  /* ---------- RENDER ---------- */
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-slate-900 font-sans pb-28 selection:bg-[#A00028] selection:text-white bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* HEADER */}
      <div className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-200/60 px-6 py-4 sticky top-0 z-40 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img src="/images/logo.png" alt="Logo" className="h-9 w-auto object-contain" />
                <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
                <h1 className="text-sm font-bold tracking-widest text-gray-500 uppercase">Vault Engine <span className="text-[#A00028]">V5</span></h1>
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
          
          {/* --- LEFT: FORM --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* CARD 1: CORE INFO */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-gray-100 overflow-visible relative z-30 p-2">
                <div className="bg-gradient-to-b from-white to-gray-50/50 px-8 py-5 border-b border-gray-100 rounded-t-[1.7rem]">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2.5 opacity-80">
                        <Tag className="w-4 h-4 text-[#A00028] fill-[#A00028]/20"/> Core Information
                    </h3>
                </div>
                <div className="p-8 grid grid-cols-1 gap-6">
                    <SearchableSelect label="Category" placeholder="Type to search (e.g. Hoodie)..." options={depop.categories} value={category} onChange={setCategory} zIndex={100} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SearchableSelect label="Brand" placeholder="Select Brand..." options={depop.brands} value={brand} onChange={setBrand} zIndex={90} />
                        <SearchableSelect label="Era / Age" placeholder="Select Era..." options={depop.ages} value={era} onChange={setEra} zIndex={90} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <TextInput label="Price" placeholder="0.00" inputRef={priceRef} prefix="$" />
                         <TextInput label="Short Title Context" placeholder="e.g. Rare graphic print" inputRef={shortRef} />
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
                        <SearchableSelect label="Size" placeholder="Select Size..." options={depop.sizes} value={size} onChange={setSize} zIndex={80} />
                        <TextInput label="Measurements" placeholder="e.g. 22x28" inputRef={measurementsRef} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <SearchableSelect label="Color 1" placeholder="Primary..." options={depop.colors} value={color1} onChange={setColor1} zIndex={70} />
                        <SearchableSelect label="Color 2" placeholder="Secondary..." options={depop.colors} value={color2} onChange={setColor2} zIndex={70} />
                    </div>
                    
                    <SearchableSelect label="Condition" placeholder="Select Condition..." options={depop.conditions} value={condition} onChange={setCondition} zIndex={60} />

                    {/* STYLE BOX */}
                    <div className="p-6 bg-gray-50/80 rounded-3xl border border-gray-100 relative z-10 shadow-inner">
                        <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-4 block flex items-center gap-2">
                             <Sparkles className="w-3 h-3"/> Style Tags
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            <SearchableSelect label="" placeholder="Style 1" options={depop.styles} value={style1} onChange={setStyle1} zIndex={50} />
                            <SearchableSelect label="" placeholder="Style 2" options={depop.styles} value={style2} onChange={setStyle2} zIndex={50} />
                            <SearchableSelect label="" placeholder="Style 3" options={depop.styles} value={style3} onChange={setStyle3} zIndex={50} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-2">
                         <SearchableSelect label="Source" placeholder="Source..." options={depop.sources} value={source1} onChange={setSource1} zIndex={40} />
                         <SearchableSelect label="Location" placeholder="Shipping From..." options={depop.locations} value={location} onChange={setLocation} zIndex={40} />
                    </div>
                </div>
            </div>

            {/* CARD 3: IMAGES & SHIP */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-gray-100 overflow-visible relative z-10 p-2">
                <div className="bg-gradient-to-b from-white to-gray-50/50 px-8 py-5 border-b border-gray-100 rounded-t-[1.7rem] flex justify-between">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2.5 opacity-80">
                        <ImageIcon className="w-4 h-4 text-purple-600 fill-purple-600/20"/> Images
                    </h3>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2.5 opacity-80">
                        <Truck className="w-4 h-4 text-green-600 fill-green-600/20"/> Shipping
                    </h3>
                </div>
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <TextInput label="Hero Image URL" placeholder="https://..." inputRef={pic1Ref} />
                            <TextInput label="Image 2 URL" placeholder="https://..." inputRef={pic2Ref} />
                            <TextInput label="Image 3 URL" placeholder="https://..." inputRef={pic3Ref} />
                            <TextInput label="Image 4 URL" placeholder="https://..." inputRef={pic4Ref} />
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 bg-gray-50/80 rounded-3xl border border-gray-100 h-full flex flex-col justify-center shadow-inner">
                                <div className="space-y-6">
                                    <TextInput label="Domestic Ship" placeholder="0.00" inputRef={domesticShipRef} prefix="$" />
                                    <TextInput label="Intl Ship" placeholder="0.00" inputRef={intShipRef} prefix="$" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* --- RIGHT: PREVIEW & BATCH --- */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* EDITABLE PREVIEW */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white ring-1 ring-gray-100 overflow-hidden p-2">
                <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center rounded-t-[1.7rem] shadow-lg shadow-gray-900/20">
                    <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                         <Edit3 className="w-3 h-3"/> Live Editor
                    </h2>
                    <button 
                        onClick={async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false), 1000); }} 
                        className="text-[10px] font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 border border-white/10"
                    >
                        {copied ? <CheckCircle className="w-3 h-3 text-green-400"/> : <Copy className="w-3 h-3"/>} 
                        {copied ? "COPIED" : "COPY TEXT"}
                    </button>
                </div>
                <div className="p-0 bg-gray-50/50 min-h-[240px] rounded-b-[1.7rem] relative group">
                    {isOutputDirty || output ? (
                         <textarea
                             value={output}
                             onChange={handleTextChange}
                             className="w-full h-full min-h-[240px] bg-transparent p-6 text-xs text-gray-600 font-medium font-mono leading-relaxed resize-none outline-none focus:bg-white/50 transition-colors"
                             placeholder="Click 'Preview' or type here..."
                         />
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-300 gap-3 py-12 border-2 border-dashed border-gray-200 rounded-2xl m-4">
                            <Search className="w-10 h-10 opacity-20"/>
                            <span className="text-xs font-medium uppercase tracking-wider opacity-60">Content appears here</span>
                        </div>
                    )}
                </div>
            </div>

            {/* BATCH LIST */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white ring-1 ring-gray-100 overflow-hidden p-2">
                <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-gradient-to-b from-white to-gray-50/50 rounded-t-[1.7rem]">
                    <h2 className="text-xs font-black uppercase text-gray-900 tracking-widest opacity-80">Batch Queue</h2>
                    <div className="bg-[#A00028]/10 border border-[#A00028]/10 text-[#A00028] text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm">
                        {batch.length} ITEMS
                    </div>
                </div>
                <div className="p-6">
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
                                <button onClick={() => setBatch(b => b.filter(x => x.id !== item.id))} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all">
                                    <Trash2 className="w-4 h-4"/>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => setBatch([])} 
                            disabled={batch.length===0} 
                            className="py-3.5 text-xs font-bold text-red-600 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        >
                            CLEAR ALL
                        </button>
                        <button 
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

      {/* FLOATING ACTION BAR */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-white/90 backdrop-blur-xl p-2 rounded-[1.5rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border border-white/50 ring-1 ring-gray-200 flex gap-2">
            <button onClick={() => window.location.reload()} className="px-5 py-3 text-xs font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-colors">
                CLEAR
            </button>
            <button 
                onClick={handlePreview}
                className="flex-1 bg-gray-900 hover:bg-black text-white py-3 rounded-2xl font-bold transition-all shadow-lg shadow-gray-900/10 flex items-center justify-center gap-2 text-xs tracking-wide"
            >
                <Search className="w-3.5 h-3.5"/> PREVIEW
            </button>
            <button 
                onClick={handleAddToBatch}
                className="flex-1 bg-[#A00028] hover:bg-[#850020] text-white py-3 rounded-2xl font-bold transition-all shadow-lg shadow-[#A00028]/20 flex items-center justify-center gap-2 text-xs tracking-wide"
            >
                <Plus className="w-3.5 h-3.5"/> ADD TO BATCH
            </button>
        </div>
      </div>

    </div>
  );
}
