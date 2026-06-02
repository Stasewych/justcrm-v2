/**
 * "Коротко" summary box for blog posts (Phase 2 GEO "tail"). A short, extractable
 * answer block at the top of each article — AI answer engines and скрейпери lift
 * these bullets directly, and human readers get the gist before the long read.
 *
 * Content lives in blogTldr.ts (one array per slug); every bullet restates a
 * point the article actually makes and any number it cites is one the article
 * attributes. Copy follows ai-writing-tells-checklist.md.
 */
export default function TldrBox({ points }: { points: string[] }) {
  if (!points || points.length === 0) return null;
  return (
    <aside className="not-prose mb-12 border border-black/10 bg-[#fafafa] rounded-xl p-6 lg:p-7">
      <p className="font-mono text-[11px] font-medium text-black/35 uppercase tracking-[0.15em] mb-4">
        Коротко
      </p>
      <ul className="space-y-2.5 list-none pl-0 m-0">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-black/65">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" aria-hidden="true" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
