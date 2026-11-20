/**
 * Supabase client helpers.
 *
 * These return `null` when env vars are absent, so the site runs fully without
 * a backend during front-end development. Once you create a Supabase project
 * and add the env vars (see .env.example), the contact form, admin dashboard,
 * and live content all light up with no component changes.
 */
import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(URL && ANON);

/** Anonymous read-only client for public server-side data fetching (no cookies). */
export function createPublicClient() {
  if (!URL || !ANON) return null;
  return createSupabaseClient(URL, ANON, { auth: { persistSession: false } });
}

/** Browser-side client (client components). */
export function createClient() {
  if (!URL || !ANON) return null;
  return createBrowserClient(URL, ANON);
}

/** Server-side client (route handlers, server components, admin). */
export async function createServerSupabase() {
  if (!URL || !ANON) return null;
  const cookieStore = await cookies();
  return createServerClient(URL, ANON, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => {
        try {
          toSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // called from a Server Component — safe to ignore
        }
      },
    },
  });
}
