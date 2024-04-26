import { createClient } from "@refinedev/supabase";

const MINE_SUPABASE_URL = "https://wnwvcmvkehsxlfoefcwn.supabase.co";
const MINE_SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indud3ZjbXZrZWhzeGxmb2VmY3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNTE1NDMsImV4cCI6MjAyOTcyNzU0M30.5kwYb4Uz6vnoNfiVdIRzyIV_bBdVDt0nvbC9sPyWDdc";

const supabase = createClient(MINE_SUPABASE_URL, MINE_SUPABASE_KEY, {
  db: {
    schema: "public", 
  },
  auth: {
    persistSession: true,
  },
});

export default supabase;