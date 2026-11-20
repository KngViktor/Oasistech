import Link from "next/link";
import { createServerSupabase } from "@/lib/supabase";
import { RESOURCES } from "./config";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const sb = await createServerSupabase();

  async function count(table: string, onlyUnread = false) {
    if (!sb) return 0;
    const base = sb.from(table).select("*", { count: "exact", head: true });
    const { count: c } = await (onlyUnread ? base.eq("is_read", false) : base);
    return c ?? 0;
  }

  const counts = await Promise.all(RESOURCES.map((r) => count(r.table)));
  const unread = await count("submissions", true);
  const totalSubs = await count("submissions");

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-sm text-muted">
        Edit every section of your live site. Changes publish immediately.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r, i) => (
          <Link
            key={r.key}
            href={`/admin/${r.key}`}
            className="rounded-2xl border border-border bg-bg-card p-6 transition hover:border-accent/60"
          >
            <p className="font-display text-3xl font-bold text-accent">{counts[i]}</p>
            <p className="mt-1 text-sm text-muted">{r.label}</p>
          </Link>
        ))}
        <Link
          href="/admin/submissions"
          className="rounded-2xl border border-border bg-bg-card p-6 transition hover:border-accent/60"
        >
          <p className="font-display text-3xl font-bold text-accent">
            {totalSubs}
            {unread > 0 && (
              <span className="ml-2 align-middle text-sm font-semibold text-text">
                {unread} new
              </span>
            )}
          </p>
          <p className="mt-1 text-sm text-muted">Submissions</p>
        </Link>
        <Link
          href="/admin/general"
          className="rounded-2xl border border-dashed border-border p-6 transition hover:border-accent/60"
        >
          <p className="font-display text-lg font-semibold">General · Hero · About</p>
          <p className="mt-1 text-sm text-muted">Profile, stats, bio & contact info</p>
        </Link>
      </div>
    </div>
  );
}
