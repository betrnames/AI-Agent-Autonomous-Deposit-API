import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { email, referral_source } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    email = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    // Explicitly define type so TS allows optional referral_source
    const insertData: { email: string; referral_source?: string } = { email };

    if (referral_source) {
      insertData.referral_source = referral_source;
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([insertData]);

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