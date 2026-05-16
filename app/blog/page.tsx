"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/components/BlogCard";

const posts: BlogPost[] = [
  {
    slug: "ai-transforms-legal-practice",
    title: "Як AI змінює юридичну практику: статистика, інструменти та прогнози на 2026 рік",
    excerpt: "80% юристів вважають, що AI матиме трансформаційний вплив на їхню роботу протягом п'яти років. Розбираємо, що це означає для українських фірм.",
    image: "/images/blog-ai-legal.jpg",
    date: "16 травня 2026",
    tag: "AI & Legal Tech",
    readTime: "8 хв",
  },
  {
    slug: "voice-dictation-legal",
    title: "Голосове введення для юристів: як диктовка замінює ручний облік часу",
    excerpt: "До 40% оплачуваних годин не потрапляють у рахунок, бо юрист фіксує час «на око» в кінці тижня. Голосове введення вирішує цю проблему.",
    image: "/images/blog-voice-dictation.jpg",
    date: "12 травня 2026",
    tag: "Продуктивність",
    readTime: "5 хв",
  },
  {
    slug: "billing-eats-lawyer-time",
    title: "Білінг з'їдає робочий час: як автоматизація обліку повертає юристам 240 годин на рік",
    excerpt: "До 10 годин на місяць кожен юрист витрачає на ручний білінг. У фірмі з 15 осіб це €90 000 на рік на адміністрування.",
    image: "/images/blog-billing.jpg",
    date: "10 травня 2026",
    tag: "Білінг",
    readTime: "6 хв",
  },
  {
    slug: "excel-to-crm-migration",
    title: "Міграція з Excel у CRM: покроковий план для юридичної фірми",
    excerpt: "Справи в Excel, листування в Gmail, документи в папках — п'ять місць замість одного. Як перейти на CRM без втрати даних.",
    image: "/images/blog-migration.jpg",
    date: "8 травня 2026",
    tag: "Управління практикою",
    readTime: "7 хв",
  },
  {
    slug: "data-security-law-firms",
    title: "Адвокатська таємниця в хмарі: як юридичні CRM захищають конфіденційні дані",
    excerpt: "Шифрування, ізоляція даних, 2FA та мережева архітектура — що має бути під капотом CRM для юридичної фірми.",
    image: "/images/blog-data.jpg",
    date: "3 травня 2026",
    tag: "Безпека",
    readTime: "7 хв",
  },
  {
    slug: "ai-document-generation",
    title: "Автоматизація документів з AI: від шаблону до готового договору за хвилини",
    excerpt: "Юристи витрачають до 60% робочого часу на документи. AI-генерація на основі шаблонів скорочує цей час у десятки разів — від NDA до довіреності.",
    image: "/images/blog-documents.jpg",
    date: "1 травня 2026",
    tag: "AI & Legal Tech",
    readTime: "6 хв",
  },
  {
    slug: "crm-vs-excel-legal",
    title: "CRM замість Excel: чому юридичні фірми втрачають клієнтів через розрізнені інструменти",
    excerpt: "Справи в таблицях, фінанси в голові партнера — як централізація даних підвищує ефективність.",
    image: "/images/blog-crm.jpg",
    date: "25 квітня 2026",
    tag: "Управління практикою",
    readTime: "5 хв",
  },
  {
    slug: "client-intake-funnel",
    title: "Воронка лідів для юридичної фірми: як не втрачати потенційних клієнтів",
    excerpt: "Від першого звернення до підписання договору — структурований процес ведення потенційного клієнта.",
    image: "/images/blog-intake.jpg",
    date: "24 квітня 2026",
    tag: "Клієнти",
    readTime: "6 хв",
  },
  {
    slug: "data-protection-legal-crm",
    title: "Захист персональних даних у юридичній CRM: GDPR, адвокатська таємниця та шифрування",
    excerpt: "Як обрати CRM, що відповідає вимогам ст. 22 ЗУ «Про адвокатуру» та Регламенту GDPR.",
    image: "/images/blog-gdpr.jpg",
    date: "18 квітня 2026",
    tag: "Безпека",
    readTime: "8 хв",
  },
  {
    slug: "kanban-case-management",
    title: "Kanban-дошка для юриста: як візуалізація справ підвищує контроль і продуктивність",
    excerpt: "Чотири режими перегляду справ — Kanban, список, таблиця, календар — і коли який обрати.",
    image: "/images/blog-kanban.jpg",
    date: "12 квітня 2026",
    tag: "Управління практикою",
    readTime: "5 хв",
  },
  {
    slug: "multicurrency-invoicing",
    title: "Мультивалютний білінг: як українські юрфірми працюють з міжнародними клієнтами",
    excerpt: "Гривня, євро, долар — рахунки формуються у валюті клієнта з індивідуальною ставкою для кожного юриста.",
    image: "/images/blog-multicurrency.jpg",
    date: "5 квітня 2026",
    tag: "Білінг",
    readTime: "5 хв",
  },
  {
    slug: "rag-knowledge-base",
    title: "База знань юридичної фірми: як RAG-пошук знаходить відповіді у Ваших документах",
    excerpt: "AI аналізує внутрішні документи, шаблони та матеріали справ і знаходить відповіді на запити юриста.",
    image: "/images/blog-rag.jpg",
    date: "28 березня 2026",
    tag: "AI & Legal Tech",
    readTime: "7 хв",
  },
  {
    slug: "legal-tech-ukraine-2026",
    title: "Legal Tech в Україні 2026: стан ринку, гравці та можливості для юридичних фірм",
    excerpt: "48 000 адвокатів, зростаючий попит на автоматизацію та нові гравці — огляд українського ринку legal tech.",
    image: "/images/blog-ua-legaltech.jpg",
    date: "20 березня 2026",
    tag: "Індустрія",
    readTime: "9 хв",
  },
  {
    slug: "email-integration-legal-crm",
    title: "Пошта в контексті справи: як інтеграція Gmail і Outlook з CRM економить час юриста",
    excerpt: "Вхідний лист автоматично потрапляє до відповідної справи — без ручного сортування по папках.",
    image: "/images/blog-email.jpg",
    date: "12 березня 2026",
    tag: "Інтеграції",
    readTime: "5 хв",
  },
];

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
