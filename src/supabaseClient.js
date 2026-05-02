import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ehpaemyoufgywmaqzpgk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocGFlbXlvdWZneXdtYXF6cGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NDc5NzEsImV4cCI6MTk5NTA0Nzk3MX0.JwGG8M4kfR1zqKQrJ4QQwC1kVjK-W5JzX2Y3Z4A5B6C';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
