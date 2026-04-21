/*
  # Fix waitlist RLS policy - remove unrestricted anon INSERT

  1. Security Changes
    - Drop the "Anyone can sign up for waitlist" policy that used WITH CHECK (true),
      which allowed unrestricted anon inserts directly to the table
    - All waitlist inserts now go through the server-side API route which uses
      the service role key and validates input before writing

  2. Notes
    - The API route at /api/waitlist performs email validation before inserting
    - Using the service role key bypasses RLS, so no anon INSERT policy is needed
    - This closes the vector for direct unauthenticated writes to the waitlist table
*/

DROP POLICY IF EXISTS "Anyone can sign up for waitlist" ON waitlist;