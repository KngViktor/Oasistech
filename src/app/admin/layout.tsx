import Link from "next/link";
import { LogOut, ExternalLink } from "lucide-react";
import { createServerSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { RESOURCES } from "./config";
import { signOut } from "./actions";

export const metadata = {
  title: "Admin | Oasis North Digital",
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/general", label: "General · Hero · About" },
  ...RESOURCES.map((r) => ({ href: `/admin/${r.key}`, label: r.label })),
  { href: "/admin/submissions", label: "Submissions" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured) {
    return (
      <div className="mx-auto max-w-lg p-10 text-center">
        <h1 className="font-display text-2xl font-bold">Backend not configured</h1>
        <p className="mt-3 text-sm text-muted">
          Add <code className="text-accent">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="text-accent">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to{" "}
          <code>.env.local</code>, then restart the dev server.
        </p>
      </div>
    );
  }

  const sb = await createServerSupabase();
  const {
    data: { user },
  } = (await sb!.auth.getUser()) ?? { data: { user: null } };

  // Unauthenticated (login page) — render bare, no dashboard chrome.
  if (!user) return <div className="min-h-screen">{children}</div>;

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-border bg-bg-elevated p-5 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/admin" className="font-display text-lg font-bold">
            Oasis North<span className="text-accent">.</span> Admin
          </Link>
        </div>
        <nav className="flex flex-wrap gap-1.5 lg:flex-col">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-bg-card hover:text-text"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 space-y-2 border-t border-border pt-5">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:text-accent"
          >
            <ExternalLink className="h-4 w-4" /> View site
          </Link>
          <form action={signOut}>
            <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:text-text">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </form>
          <p className="px-3 pt-2 text-xs text-muted/70">{user.email}</p>
        </div>
      </aside>
      <main className="p-6 lg:p-10">{children}</main>
    </div>
  );
}
