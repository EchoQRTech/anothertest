import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* ==========================
   FONT CONFIG
   ========================== */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

/* ==========================
   SITE METADATA
   ========================== */
export const metadata: Metadata = {
  title: "The Vault — Reselling OS",
  description: "AI tools, resale data, and 50+ spreadsheets for sellers.",
};

/* ==========================
   ROOT LAYOUT
   ========================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ---------- Outseta Global Script ---------- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var o_options = {
                domain: 'treasuretto-llc.outseta.com',
                load: 'auth,customForm,emailList,leadCapture,nocode,profile,support'
              };
            `,
          }}
        />
        <script
          src="https://cdn.outseta.com/outseta.min.js"
          data-options="o_options"
          async
          defer
        />

        {/* ---------- Favicon / SEO (Optional additions) ---------- */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#A00028" />
      </head>

      {/* ---------- BODY ---------- */}
      <body
        className={`${inter.variable} font-sans bg-vault-grad text-[#0A0A0A] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
