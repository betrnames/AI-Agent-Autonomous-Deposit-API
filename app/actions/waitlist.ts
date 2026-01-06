// app/actions/waitlist.ts
'use server';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function addToWaitlist(prevState: any, formData: FormData) {
  const email = formData.get('email')?.toString().trim().toLowerCase();

  if (!email) {
    return { error: 'Email is required' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address' };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email }]);

  if (error) {
    if (error.code === '23505') { // unique violation
      return { error: 'This email is already on the waitlist' };
    }
    console.error('Supabase error:', error);
    return { error: 'Something went wrong. Please try again later.' };
  }

  return { success: true, message: "Thanks! You've been added to the waitlist." };
}