import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Vault — Reselling OS",
  description: "AI tools, resale data, and 50+ spreadsheets for sellers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Outseta global script (raw version) */}
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
        />
      </head>

      <body className={`${cinzel.variable} ${inter.variable} bg-vault-grad`}>
        {children}
      </body>
    </html>
  );
}
