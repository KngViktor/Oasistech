"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Plus, Trash2, ChevronUp, ChevronDown, Check, Download } from "lucide-react";
import type { Resource, Field } from "./config";
import { saveRow, deleteRow, moveRow, importPortfolioFromSite } from "./actions";

type Row = Record<string, unknown>;

const inputCls =
  "w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none";

function FieldInput({ field, value }: { field: Field; value: unknown }) {
  const v = value ?? "";
  switch (field.type) {
    case "textarea":
      return <textarea name={field.name} defaultValue={String(v)} rows={3} className={inputCls} />;
    case "number":
      return <input name={field.name} type="number" defaultValue={Number(v) || 0} className={inputCls} />;
    case "boolean":
      return (
        <label className="inline-flex items-center gap-2 text-sm">
          <input name={field.name} type="checkbox" defaultChecked={Boolean(v)} className="h-4 w-4 accent-[#28e98c]" />
          <span className="text-muted">{field.label}</span>
        </label>
      );
    case "array":
      return (
        <textarea
          name={field.name}
          defaultValue={Array.isArray(v) ? (v as string[]).join("\n") : String(v)}
          rows={4}
          className={inputCls}
        />
      );
    case "select":
      return (
        <select name={field.name} defaultValue={String(v)} className={inputCls}>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    case "image":
      return (
        <div className="space-y-2">
          {v ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={String(v)} alt="" className="h-20 w-32 rounded-lg border border-border object-cover" />
          ) : (
            <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted">
              no image
            </div>
          )}
          <input type="hidden" name={field.name} defaultValue={String(v)} />
          <input type="file" name={`${field.name}__file`} accept={field.accept} className="text-xs text-muted" />
        </div>
      );
    case "video":
      return (
        <div className="space-y-2">
          {v ? (
            <video src={String(v)} controls className="h-28 w-auto rounded-lg border border-border bg-black" />
          ) : (
            <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted">
              no video
            </div>
          )}
          <input type="hidden" name={field.name} defaultValue={String(v)} />
          <input type="file" name={`${field.name}__file`} accept={field.accept} className="text-xs text-muted" />
        </div>
      );
    default:
      return <input name={field.name} type="text" defaultValue={String(v)} className={inputCls} />;
  }
}

function RowForm({
  resource,
  row,
  isNew,
}: {
  resource: Resource;
  row: Row;
  isNew?: boolean;
}) {
  const [state, action, pending] = useActionState(saveRow, null);
  const [open, setOpen] = useState(Boolean(isNew));
  const id = row.id ? String(row.id) : "";
  const heading = String(row[resource.titleField] ?? "") || `New ${resource.singular}`;

  return (
    <div className="rounded-2xl border border-border bg-bg-card">
      {!isNew && (
        <div className="flex items-center justify-between gap-3 px-5 py-3">
          <button onClick={() => setOpen((o) => !o)} className="flex-1 text-left font-medium">
            {heading}
          </button>
          <div className="flex items-center gap-1">
            <form action={moveRow}>
              <input type="hidden" name="__resource" value={resource.key} />
              <input type="hidden" name="__id" value={id} />
              <input type="hidden" name="__dir" value="up" />
              <button className="rounded p-1.5 text-muted hover:text-accent" aria-label="Move up">
                <ChevronUp className="h-4 w-4" />
              </button>
            </form>
            <form action={moveRow}>
              <input type="hidden" name="__resource" value={resource.key} />
              <input type="hidden" name="__id" value={id} />
              <input type="hidden" name="__dir" value="down" />
              <button className="rounded p-1.5 text-muted hover:text-accent" aria-label="Move down">
                <ChevronDown className="h-4 w-4" />
              </button>
            </form>
            <form action={deleteRow}>
              <input type="hidden" name="__resource" value={resource.key} />
              <input type="hidden" name="__id" value={id} />
              <button className="rounded p-1.5 text-muted hover:text-red-400" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {open && (
        <form action={action} className="space-y-4 border-t border-border p-5">
          <input type="hidden" name="__resource" value={resource.key} />
          <input type="hidden" name="__id" value={id} />
          {resource.fields.map((f) => (
            <div key={f.name}>
              {f.type !== "boolean" && (
                <label className="mb-1 block text-xs font-medium text-muted">{f.label}</label>
              )}
              <FieldInput field={f} value={row[f.name]} />
              {f.help && <p className="mt-1 text-xs text-muted/70">{f.help}</p>}
            </div>
          ))}
          {state?.error && <p className="text-sm text-red-400">{state.error}</p>}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-[#06150d] disabled:opacity-60"
            >
              {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
              {isNew ? "Add" : "Save"}
            </button>
            {state?.ok && <span className="text-sm text-accent">Saved</span>}
          </div>
        </form>
      )}
    </div>
  );
}

function ImportButton({ count }: { count: number }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-[#06150d] disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
      Import {count}
    </button>
  );
}

function ImportBanner({ titles }: { titles: string[] }) {
  const [state, action] = useActionState(importPortfolioFromSite, null);
  return (
    <form
      action={action}
      className="mb-6 flex flex-col gap-4 rounded-2xl border border-accent/40 bg-accent/5 p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="font-medium">
          {titles.length} new project{titles.length === 1 ? "" : "s"} in the site file
        </p>
        <p className="mt-1 text-sm text-muted">
          {titles.join(", ")}. Importing adds {titles.length === 1 ? "it" : "them"} to the top; existing
          items are left as they are.
        </p>
        {state?.error && <p className="mt-2 text-sm text-red-400">{state.error}</p>}
      </div>
      <ImportButton count={titles.length} />
    </form>
  );
}

export default function ResourceEditor({
  resource,
  rows,
  pendingImports = [],
}: {
  resource: Resource;
  rows: Row[];
  pendingImports?: string[];
}) {
  const [adding, setAdding] = useState(false);
  const blank: Row = Object.fromEntries(resource.fields.map((f) => [f.name, ""]));

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold">{resource.label}</h1>
          <p className="mt-1 text-sm text-muted">{rows.length} item(s)</p>
        </div>
        <button
          onClick={() => setAdding((a) => !a)}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
        >
          <Plus className="h-4 w-4" /> Add {resource.singular}
        </button>
      </div>

      {pendingImports.length > 0 && <ImportBanner titles={pendingImports} />}

      <div className="space-y-3">
        {adding && (
          <RowForm key="new" resource={resource} row={blank} isNew />
        )}
        {rows.map((row) => (
          <RowForm key={String(row.id)} resource={resource} row={row} />
        ))}
        {rows.length === 0 && !adding && (
          <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted">
            Nothing yet. Click “Add {resource.singular}”.
          </p>
        )}
      </div>
    </div>
  );
}
