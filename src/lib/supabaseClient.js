import { createClient } from '@supabase/supabase-js'


// TODO: use .env file or something
export const supabase = createClient(
  'http://localhost:54321',
  '<insert ANON key here>'
);

