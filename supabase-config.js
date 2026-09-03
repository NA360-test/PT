// Fill these in once you've created your Supabase project.
// Project Settings → API → you'll find both values there.
// The "anon public" key is safe to use in frontend code — it's
// designed to be public and is restricted by your table's
// Row Level Security policies (see README).

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabaseClient = (SUPABASE_URL.startsWith("http"))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
