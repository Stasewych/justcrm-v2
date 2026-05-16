"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface TOCItem {
  id: string;
  text: string;
}

export default function LegalPage({
  title,
  subtitle,
  toc,
  children,
}: {
  title: string;
  subtitle: string;
  toc?: TOCItem[];
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!toc?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    for (const item of toc) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-28 pb-8 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-3xl lg:text-[40px] font-bold tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-sm text-black/40">{subtitle}</p>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-8 flex gap-12">
            {/* Sidebar TOC */}
            {toc && toc.length > 0 && (
              <nav className="hidden lg:block w-56 shrink-0 sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
                <p className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-wider mb-3">
                  Зміст
                </p>
                <ul className="space-y-1">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block text-[12px] leading-snug py-1.5 border-l-2 pl-3 transition-colors ${
                          activeId === item.id
                            ? "border-black text-black font-medium"
                            : "border-transparent text-black/35 hover:text-black/60"
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Content */}
            <div className="min-w-0 flex-1 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pt-8 prose-h2:border-t prose-h2:border-black/8 prose-h3:text-base prose-h3:mt-8 prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-black/55 prose-p:mb-10 prose-li:text-[15px] prose-li:text-black/55 prose-li:mb-2 prose-strong:text-black/70 prose-table:text-[13px] prose-th:text-left prose-th:text-black/60 prose-th:font-semibold prose-th:text-[12px] prose-th:uppercase prose-th:tracking-wide prose-td:text-black/50 prose-td:align-top max-w-none">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
