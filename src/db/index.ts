import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dbdyrkuaseqeagwxkblf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZHlya3Vhc2VxZWFnd3hrYmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MTA2MzYsImV4cCI6MjA1MTk4NjYzNn0.fdrPa_JF2ikyYm7HiKLCC3WjMkqDEfG0ryVaTN5nwtI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
