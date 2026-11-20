import { notFound } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase";
import { getResource } from "../config";
import ResourceEditor from "../ResourceEditor";
import { missingPortfolioItems } from "../sync";

export const dynamic = "force-dynamic";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const { resource: key } = await params;
  const resource = getResource(key);
  if (!resource) notFound();

  const sb = await createServerSupabase();
  const { data } = (await sb!.from(resource.table).select("*").order("sort_order")) ?? {
    data: [],
  };

  const pendingImports =
    key === "portfolio" ? missingPortfolioItems(data ?? []).map((i) => i.title) : [];

  return <ResourceEditor resource={resource} rows={data ?? []} pendingImports={pendingImports} />;
}
