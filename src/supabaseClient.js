import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://bbnlgqjscvoeufyiorpc.supabase.co";

const supabaseKey = "sb_publishable_FmqBIrGWpNbvIH8DEueg1Q_r8lZH6ar";


export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);