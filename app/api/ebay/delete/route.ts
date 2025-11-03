import crypto from "crypto";
import { NextResponse } from "next/server";

/**
 *  🔧 CONFIG
 *  1. In your Vercel dashboard, go to:
 *     Settings → Environment Variables
 *  2. Add these:
 *     EBAY_VERIFICATION_TOKEN = your-unique-token (32–80 chars)
 *     EBAY_ENDPOINT = https://anothertest-one.vercel.app/api/ebay/delete
 */

const verificationToken = process.env.EBAY_VERIFICATION_TOKEN!;
const endpoint = process.env.EBAY_ENDPOINT!;

/* ==========================================================
   1️⃣ VALIDATION HANDLER (GET)
   ----------------------------------------------------------
   When you first register your endpoint in the eBay Dev Portal,
   eBay sends a GET request with a `challenge_code` query param.
   You must respond with a hashed challengeResponse.
========================================================== */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const challengeCode = searchParams.get("challenge_code");

    if (!challengeCode) {
      return NextResponse.json(
        { error: "Missing challenge_code" },
        { status: 400 }
      );
    }

    // Create hash of challengeCode + verificationToken + endpoint
    const hash = crypto.createHash("sha256");
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpoint);
    const challengeResponse = hash.digest("hex");

    console.log("✅ Challenge validated successfully:", challengeResponse);

    return NextResponse.json({ challengeResponse });
  } catch (error) {
    console.error("❌ Error handling challenge:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

/* ==========================================================
   2️⃣ ACCOUNT DELETION HANDLER (POST)
   ----------------------------------------------------------
   Once subscribed, eBay sends POST notifications here every
   time a user requests account deletion. You must respond 200.
========================================================== */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 eBay deletion notification received:", body);

    // If you store user data, delete or anonymize it here:
    // Example:
    // await db.user.delete({ where: { ebayUserId: body.notification.data.userId } });

    // Acknowledge receipt
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error("❌ Error processing eBay notification:", error);
    return new Response("Error", { status: 500 });
  }
}
