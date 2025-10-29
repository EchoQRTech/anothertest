"use client";

import { useRef, useEffect } from "react";
import Script from "next/script";
import "@/styles/vault-login.css";

declare global {
  interface Window {
    Outseta: any;
  }
}

export default function LoginPage() {
  const initializedRef = useRef(false);
  const scriptLoadedRef = useRef(false);

  const initOutseta = () => {
    console.log("Attempting to initialize Outseta...");
    console.log("Window.Outseta exists:", !!window.Outseta);
    
    if (!initializedRef.current && window.Outseta) {
      try {
        console.log("Initializing Outseta with config:", {
          domain: "treasuretto-llc.outseta.com",
          selector: "#vault-auth",
        });

        window.Outseta.init({
          domain: "treasuretto-llc.outseta.com",
          selector: "#vault-auth",
          load: {
            auth: { mode: "inline" },
          },
        });
        
        initializedRef.current = true;
        console.log("Outseta initialized successfully!");
        
        // Check if content was actually loaded
        setTimeout(() => {
          const authDiv = document.getElementById("vault-auth");
          console.log("Auth div content:", authDiv?.innerHTML);
          console.log("Auth div children count:", authDiv?.children.length);
        }, 1000);
      } catch (error) {
        console.error("Error initializing Outseta:", error);
      }
    }
  };

  const handleScriptLoad = () => {
    console.log("Script loaded event fired");
    scriptLoadedRef.current = true;
    initOutseta();
  };

  const handleScriptError = (error: any) => {
    console.error("Failed to load Outseta script:", error);
  };

  useEffect(() => {
    // Fallback polling in case onLoad doesn't fire
    const checkInterval = setInterval(() => {
      if (window.Outseta && !initializedRef.current) {
        console.log("Found Outseta via polling");
        initOutseta();
        clearInterval(checkInterval);
      }
    }, 500);

    // Cleanup after 10 seconds
    setTimeout(() => clearInterval(checkInterval), 10000);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#0b0603] to-black text-gold">
      {/* glow background */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#d1b57325] via-transparent to-transparent blur-[180px]" />

      {/* login container */}
      <div className="vault-login relative z-10 w-[400px] p-10 rounded-2xl border border-gold/20 bg-gradient-to-b from-[#0b0603] to-black shadow-[0_0_45px_rgba(209,181,115,0.25)] backdrop-blur-md">
        <h1 className="vault-title font-[Cinzel] text-3xl text-center mb-6 bg-gradient-to-b from-[#f6e6b2] via-[#d1b573] to-[#b8944a] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(209,181,115,0.3)]">
          Unlock The Vault
        </h1>

        {/* Outseta mounts here */}
        <div id="vault-auth" className="min-h-[200px]">
          {/* Loading indicator */}
          <div className="text-center text-gold/50 py-8">
            <div className="animate-pulse">Loading authentication...</div>
          </div>
        </div>
      </div>

      <Script
        src="https://cdn.outseta.com/treasuretto-llc/outseta.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onReady={handleScriptLoad}
        onError={handleScriptError}
      />
    </main>
  );
}