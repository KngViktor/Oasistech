/** Refresh untouched copy from an older seed while preserving CMS edits. */
export function mergeContentDefaults<T extends object>(
  current: T,
  stored: Partial<T> | null | undefined,
  previous: Partial<Record<keyof T, unknown>>,
): T {
  const merged = { ...current, ...stored };
  for (const key of Object.keys(previous) as (keyof T)[]) {
    if (merged[key] === previous[key]) merged[key] = current[key];
  }
  return merged;
}
