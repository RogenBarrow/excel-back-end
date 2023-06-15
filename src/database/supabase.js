
import { createClient } from '@supabase/supabase-js'
const { supabaseUrl, supabaseKey } = require("./config/configuration")

const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient( supabaseUrl, supabaseKey, options)
