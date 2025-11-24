// /lib/supabase-outseta.ts

import { createClient, SupabaseClientOptions } from '@supabase/supabase-js'; // <-- ADD SupabaseClientOptions here

// Environment variable access is fine (assuming you use 'as string' or similar for non-null assertion)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const EXCHANGE_FUNCTION_URL = process.env.NEXT_PUBLIC_EXCHANGE_URL!;

// This is the function that runs before every Supabase query
async function exchangeOutsetaTokenForSupabaseToken(): Promise<string | null> {
    // SECURITY NOTE: We must check for 'window' because this code is imported
    // into components that might be rendered on the Next.js server first.
    if (typeof window === 'undefined' || !window.Outseta) {
        // Return null if running on the server or Outseta script hasn't loaded yet
        return null; 
    }

    // A. Retrieve the Outseta Access Token from the global window.Outseta object
    const outsetaToken = window.Outseta?.getAuth()?.getAccessToken();

    if (!outsetaToken) {
        return null; 
    }

    // B. Call your Edge Function
    try {
        const response = await fetch(EXCHANGE_FUNCTION_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${outsetaToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            // Log failure but don't crash the app
            console.error("Token exchange failed with status:", response.status);
            return null;
        }

        const data = await response.json();
        
        // C. Return the new Supabase-signed JWT
        return data.supabaseJwt as string;
    } catch (error) {
        console.error("Network error during token exchange:", error);
        return null;
    }
}

// Define the options object explicitly with the correct type to resolve the accessToken error.
const options: SupabaseClientOptions<'public'> = {
    global: {
        // Supabase automatically calls this function to get a fresh token
        accessToken: exchangeOutsetaTokenForSupabaseToken 
    },
    auth: {
        // Disable Supabase's built-in session storage since Outseta manages it
        persistSession: false 
    }
};

// Initialize the single, custom Supabase client instance
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  options // <-- Pass the correctly typed options object here
);

export { supabase };