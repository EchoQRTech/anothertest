// File: /supabase/functions/exchange/index.ts
// Deploy command: npx supabase functions deploy exchange --no-verify-jwt

import * as jose from "https://deno.land/x/jose@v4.14.4/index.ts";

// Set CORS headers to allow requests from your frontend domain
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// The main Deno handler for the Edge Function
Deno.serve(async (req) => {
  // Handle OPTIONS preflight requests for CORS
  if (req.method === "OPTIONS") {
    console.log("OPTIONS request handled for CORS");
    return new Response("ok", { headers: corsHeaders });
  }

  // Extract the Outseta JWT from the Authorization header (Bearer token)
  const authHeader = req.headers.get("Authorization");
  const outsetaJwtAccessToken = authHeader?.split(" ")[1] || "";

  if (!outsetaJwtAccessToken) {
    return new Response(JSON.stringify({ error: "Missing Outseta JWT in Authorization header" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }

  try {
    // 1. Fetch Outseta's public keys (JWKS) using the stored secret (treasuretto-llc.outseta.com)
    const JWKS = jose.createRemoteJWKSet(
      new URL(`https://${Deno.env.get("OUTSETA_DOMAIN")}/.well-known/jwks`)
    );

    // 2. Verify the Outseta token signature
    const { payload } = await jose.jwtVerify(outsetaJwtAccessToken, JWKS);
    console.log("Outseta JWT is valid. Payload received.");

    // 3. CRITICAL STEP: Add/Update the 'role' claim for Supabase RLS
    // RLS policies require the user's role to be 'authenticated' or a custom role.
    payload.role = "authenticated"; 
    
    // Ensure the subject (sub) is set, Supabase often uses this as the user ID
    if (!payload.sub) {
        // If Outseta uses a different key for the user ID, you'd map it here.
        // Assuming 'sub' is present per standard JWT practices.
        throw new Error("JWT payload missing 'sub' claim for user ID.");
    }

    // 4. Sign the new JWT with the Supabase secret (SUPA_JWT_SECRET)
    const supabaseEncodedJwtSecret = new TextEncoder().encode(
      Deno.env.get("SUPA_JWT_SECRET")
    );
    const jwtAlg = "HS256";
    
    const supabaseJwt = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: jwtAlg, typ: "JWT" })
      .setIssuer("supabase")
      .setIssuedAt(payload.iat)
      .setExpirationTime(payload.exp || '1h') // Use original exp time or set a default
      .sign(supabaseEncodedJwtSecret);

    // 5. Respond with the new Supabase JWT
    return new Response(JSON.stringify({ supabaseJwt }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error(`Token exchange failed: ${error.message}`);
    return new Response(JSON.stringify({ error: "Token verification failed or internal error" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 401,
    });
  }
});