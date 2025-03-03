export async function GET() {
  return new Response(JSON.stringify({ 
    success: true,
    roleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,  // Directly return the value
    paystackKey: process.env.PAYSTACK_SECRET_KEY
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
