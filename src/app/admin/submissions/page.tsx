import { Mail, Trash2, Check, Circle } from "lucide-react";
import { createServerSupabase } from "@/lib/supabase";
import { toggleSubmissionRead, deleteSubmission } from "../actions";

export const dynamic = "force-dynamic";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  budget: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

export default async function SubmissionsPage() {
  const sb = await createServerSupabase();
  const { data } = (await sb!
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false })) ?? { data: [] };
  const rows = (data ?? []) as Submission[];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Submissions</h1>
      <p className="mt-1 mb-6 text-sm text-muted">{rows.length} message(s)</p>

      {rows.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted">
          No messages yet. Submissions from the site’s contact form land here.
        </p>
      ) : (
        <div className="space-y-3">
          {rows.map((s) => (
            <article
              key={s.id}
              className={`rounded-2xl border p-5 ${
                s.is_read ? "border-border bg-bg-card" : "border-accent/40 bg-bg-card"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    {!s.is_read && <Circle className="h-2.5 w-2.5 fill-accent text-accent" />}
                    <h3 className="font-semibold">{s.name}</h3>
                    <a href={`mailto:${s.email}`} className="text-sm text-accent hover:underline">
                      {s.email}
                    </a>
                    {s.phone && (
                      <a href={`tel:${s.phone}`} className="text-sm text-muted hover:text-accent">
                        {s.phone}
                      </a>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    {new Date(s.created_at).toLocaleString()}
                    {s.project_type ? ` · ${s.project_type}` : ""}
                    {s.budget ? ` · Budget: ${s.budget}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <form action={toggleSubmissionRead}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="is_read" value={String(s.is_read)} />
                    <button
                      className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted hover:text-accent"
                      title={s.is_read ? "Mark unread" : "Mark read"}
                    >
                      {s.is_read ? <Mail className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
                      {s.is_read ? "Unread" : "Read"}
                    </button>
                  </form>
                  <form action={deleteSubmission}>
                    <input type="hidden" name="id" value={s.id} />
                    <button
                      className="rounded-lg border border-border p-1.5 text-muted hover:text-red-400"
                      title="Delete"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm text-muted">{s.message}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
