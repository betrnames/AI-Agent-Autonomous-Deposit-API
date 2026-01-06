// app/actions/waitlist.ts
'use server';

import { createClient } from '@/lib/supabase/server'; // adjust path if your supabase client is elsewhere

export async function addToWaitlist(prevState: any, formData: FormData) {
  const email = formData.get('email')?.toString().trim().toLowerCase();

  if (!email) {
    return { error: 'Email is required' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address' };
  }

  const supabase = createClient();

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email }])
    .select();

  if (error) {
    if (error.code === '23505') { // unique violation
      return { error: 'This email is already on the waitlist' };
    }
    console.error('Supabase error:', error);
    return { error: 'Something went wrong. Please try again later.' };
  }

  return { success: true, message: "Thanks! You've been added to the waitlist." };
}