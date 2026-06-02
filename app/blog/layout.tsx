import type { ReactNode } from "react";
import { pageMeta } from "@/app/seo";

// The blog index (app/blog/page.tsx) is a Client Component and cannot
// export metadata, so the blog-list metadata lives here. Individual
// posts override title/description/canonical via their own pageMeta().
export const metadata = pageMeta({
  title: "Блог для юристів",
  description:
    "Статті про LegalTech, AI та управління юридичною фірмою — практичні інсайти для українських юристів і адвокатів.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
