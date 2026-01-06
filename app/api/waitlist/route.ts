// app/waitlist/route.ts (updated top part)
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';  // ← Use this public client

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ... rest of your POST function remains the same ...
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { email, referral_source } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Trim and lowercase for consistency
    email = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
    }

    const insertData = { email };
    if (referral_source) insertData.referral_source = referral_source;

    const { data, error } = await supabase
      .from('waitlist')
      .insert([insertData])
      .select()
      .maybeSingle();

    if (error) {
      if (error.code === '23505') { // unique violation
        return NextResponse.json({ error: 'This email is already registered' }, { status: 409 });
      }
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: 'Successfully joined the waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}