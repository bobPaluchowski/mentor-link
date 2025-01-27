import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqmafxdwhtmggxpffiff.supabase.co';
const supabseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWFmeGR3aHRtZ2d4cGZmaWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NDQ0MzYsImV4cCI6MjA1MzIyMDQzNn0.1bmcq1lEsPlprjFBb7xBPXMq7wJDFQrBj10PUWAiFuw';
export const supabase = createClient(supabaseUrl, supabseKey);
