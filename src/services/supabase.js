import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: { persistSession: true, autoRefreshToken: true },
});
let supabaseAdmin;
if (supabaseServiceRoleKey) {
	supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
		auth: { persistSession: false },
	});
} else {
	console.error("Supabase Service Role Key is not defined");
}

export default supabase;
export { supabaseAdmin };
