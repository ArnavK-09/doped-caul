import { createClient } from "@refinedev/supabase";

const MINE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const MINE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(MINE_SUPABASE_URL, MINE_SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});

export default supabase;
