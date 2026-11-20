/**
 * Renders a post body without a Markdown dependency. Blank lines separate
 * paragraphs, "## " and "### " are headings, "- " starts a bullet and "> " a
 * pull quote. Anything else is a paragraph, so a post typed into the admin
 * always renders sensibly.
 */
export default function PostBody({ body }: { body: string }) {
  const blocks = body
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="pt-6 font-display text-2xl font-bold leading-snug sm:text-3xl"
            >
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="pt-3 font-display text-xl font-semibold">
              {block.slice(4)}
            </h3>
          );
        }

        const lines = block.split("\n");

        if (lines.every((l) => l.startsWith("> "))) {
          return (
            <blockquote
              key={i}
              className="my-10 text-center font-display text-xl font-semibold italic leading-relaxed text-text sm:text-2xl"
            >
              {lines.map((l) => l.slice(2)).join(" ")}
            </blockquote>
          );
        }

        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul
              key={i}
              className="list-disc space-y-3 pl-5 text-[1.0625rem] leading-[1.85] text-muted"
            >
              {lines.map((l, j) => (
                <li key={j}>{l.slice(2)}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-[1.0625rem] leading-[1.85] text-muted">
            {block}
          </p>
        );
      })}
    </div>
  );
}
