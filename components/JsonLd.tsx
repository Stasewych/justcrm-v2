/**
 * Renders a JSON-LD structured-data block as a native <script> tag.
 *
 * Per the Next.js 16 guidance (node_modules/next/dist/docs/01-app/02-guides/
 * json-ld.md): render structured data as a plain
 * <script type="application/ld+json"> inside a Server Component — NOT via
 * next/script (which is for executable JS). Under `output: "export"` the tag
 * is baked straight into the static HTML at build time.
 *
 * `<` is escaped to its unicode form (<) to neutralise any
 * `</script>`-style XSS payload, exactly as the Next docs recommend for
 * JSON.stringify output.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
