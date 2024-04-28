import { createClient } from "@refinedev/supabase";


const supabase = createClient(MINE_SUPABASE_URL, MINE_SUPABASE_KEY, {
  db: {
    schema: "public", 
  },
  auth: {
    persistSession: true,
  },
});

export default supabase;