import { createClient } from '@supabase/supabase-js'

/*
These variables are exposed on the browser, and that's completely fine since we have Row Level Security enabled on our Database.
*/
const supabaseUrl = 'https://api.testing.nabla.no'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzI5NzIwODAwLCJleHAiOjE4ODc0ODcyMDB9.nxyD-Q3Kgl7s7JhosuN7TIAh84km8Y1x9lSoqSPMqcc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, { db: { schema: 'bokskap' } })
