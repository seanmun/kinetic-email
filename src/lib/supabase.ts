// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tdabaqomcpiwbneyvlvw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkYWJhcW9tY3Bpd2JuZXl2bHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyOTU5OTMsImV4cCI6MjA4MTg3MTk5M30.wnxohfXVpVsKXQEYM50z2rg81z-R0BQ-hG6XPHbExdk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
