"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/components/BlogCard";
import { BLOG_POSTS } from "./posts";

const posts: BlogPost[] = BLOG_POSTS.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  image: p.image,
  date: p.displayDate,
  tag: p.tag,
  readTime: p.readTime,
}));

const tags = ["Все", "AI & Legal Tech", "Білінг", "Безпека", "Управління практикою", "Продуктивність", "Клієнти", "Інтеграції", "Індустрія"];

export default function BlogPage() {
  const [filter, setFilter] = useState("Все");
  const filtered = filter === "Все" ? posts : posts.filter(p => p.tag === filter);

  return (
    <>
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        <section className="pt-28 pb-10 bg-white relative overflow-hidden">
          <FloatingDots count={25} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Блог
            </p>
            <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-5">
              Інсайти для юридичної практики
            </h1>
            <p className="text-lg text-black/45 max-w-2xl leading-relaxed">
              Статті про технології, AI та управління юридичною фірмою.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-white border-b border-black/5">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-8 px-8">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`shrink-0 text-[12px] font-medium px-4 py-2 rounded-full transition-all ${
                    filter === tag
                      ? "bg-[#1c1c1c] text-white"
                      : "text-black/40 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-black/30 py-20 text-lg">
                Статей у цій категорії поки немає.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
