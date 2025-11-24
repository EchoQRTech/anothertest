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
        {/* ---------- Outseta Global Script (WORKING VERSION) ---------- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(o,l,s,e,t,a){o['Outseta']=o['Outseta']||function(){
                (o['Outseta'].q=o['Outseta'].q||[]).push(arguments)};
                t=l.createElement(s),a=l.getElementsByTagName(s)[0];
                t.async=1;t.src=e;a.parentNode.insertBefore(t,a)
              })(window,document,'script','https://cdn.outseta.com/outseta.min.js');

              Outseta('set', 'domain', 'treasuretto-llc.outseta.com');
              Outseta('load');
            `,
          }}
        />

        {/* ---------- Favicon / SEO ---------- */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#A00028" />
      </head>

      <body
        className={`${inter.variable} font-sans bg-vault-grad text-[#0A0A0A] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
