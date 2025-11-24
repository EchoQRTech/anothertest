import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const EXCHANGE_FUNCTION_URL = process.env.NEXT_PUBLIC_EXCHANGE_URL!;

/* 
  EXCHANGES OUTSETA ACCESS TOKEN → SUPABASE JWT
*/
async function exchangeOutsetaTokenForSupabaseToken(): Promise<string | null> {
  if (typeof window === 'undefined' || !window.Outseta) {
    return null; // Running on server or Outseta not loaded yet
  }

  const outsetaToken = window.Outseta?.getAuth()?.getAccessToken();
  if (!outsetaToken) return null;

  try {
    const response = await fetch(EXCHANGE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outsetaToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error("Token exchange failed:", response.status);
      return null;
    }

    const data = await response.json();
    return data.supabaseJwt as string;
  } catch (err) {
    console.error("Token exchange error:", err);
    return null;
  }
}

/*
  SUPABASE V2-COMPATIBLE OPTIONS  
  (No accessToken field allowed — must use fetch override)
*/
const options: SupabaseClientOptions<'public'> = {
  global: {
    fetch: async (url, opts = {}) => {
      const jwt = await exchangeOutsetaTokenForSupabaseToken();

      const headers = {
        ...(opts.headers || {}),
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
      };

      return fetch(url, {
        ...opts,
        headers,
      });
    },
  },
  auth: {
    persistSession: false, // Outseta handles session persistence
  },
};

// Create Supabase client
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  options
);
