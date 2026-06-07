"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const productLinks = [
  { href: "/product/cases", label: "Справи", hint: "Картка справи об'єднує документи, задачі, контакти та фінанси. Kanban, список або таблиця — на вибір команди.", icon: "M3 7h18M3 12h18M3 17h18" },
  { href: "/product/billing", label: "Білінг & час", hint: "Таймер або календар для обліку часу. Рахунки в гривнях, євро чи доларах з індивідуальною ставкою.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { href: "/product/tasks", label: "Задачі", hint: "Kanban-дошка, список, таблиця або календар. Дедлайни з автоматичними сповіщеннями.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { href: "/product/clients", label: "Клієнти", hint: "Досьє фізичних та юридичних осіб. Воронка лідів від звернення до підписання договору.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { href: "/product/ai", label: "AI-помічник", hint: "База знань фірми, майстер шаблонів, голосове введення та покращення тексту.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { href: "/product/tables", label: "Конструктор таблиць", hint: "Власні реєстри, журнали та трекери з довільною структурою полів.", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
  { href: "/product/documents", label: "Документи", hint: "Файли в контексті справи, шаблони з AI та захищене хмарне сховище з шифруванням.", icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
];

function Divider() {
  return <div className="w-px h-4 bg-black/10" />;
}

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!productOpen) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [productOpen]);

  return (
    <header ref={headerRef} className="relative z-50 bg-[#f4f4f4]">
      <nav className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={`${bp}/images/logo.png`} alt="JustCRM" className="h-8" />
          <span className="text-base font-bold tracking-tight">JustCRM</span>
        </Link>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setProductOpen(!productOpen)}
            className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors"
          >
            Продукт
            <svg className="inline-block ml-1 w-3 h-3 -mt-px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <Divider />

          <Link href="/pricing" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Тарифи
          </Link>

          <Divider />

          <Link href="/#security" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Безпека
          </Link>

          <Divider />

          <Link href="/team" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Про нас
          </Link>

          <Divider />

          <Link href="/blog" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Блог
          </Link>
        </div>

        {/* Right side — CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/sales"
            className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 border border-black/15 rounded hover:border-black/30 transition-all"
          >
            Відділ продажів
          </Link>
          <a
            href="https://crm.justsolution.org/login"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/65 px-3 py-1.5 transition-colors hover:text-black"
          >
            Увійти
          </a>
          <a
            href="https://crm.justsolution.org/register"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium uppercase tracking-wide bg-[#1c1c1c] text-white px-4 py-1.5 rounded transition-colors hover:bg-[#333]"
          >
            Почати безкоштовно
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mega menu — sits directly under nav, inside header */}
      {productOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-black/5 shadow-xl shadow-black/10 animate-[menuSlide_0.2s_ease-out]">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-8 grid grid-cols-[1fr_1fr_280px] gap-x-10">
            {/* Left — features col 1 */}
            <div>
              <p className="font-mono text-[10px] font-medium text-black/25 uppercase tracking-widest mb-5">
                Основні можливості
              </p>
              <div className="space-y-1">
                {productLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setProductOpen(false)}
                    className="flex gap-3.5 p-2.5 -mx-2.5 rounded-lg hover:bg-black/[0.03] transition-colors group"
                  >
                    <svg className="w-5 h-5 text-black/30 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={link.icon} />
                    </svg>
                    <div>
                      <span className="text-[14px] font-semibold text-black/80 block">{link.label}</span>
                      <span className="text-[12px] text-black/35 leading-relaxed block mt-0.5">{link.hint}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Center — features col 2 */}
            <div>
              <p className="font-mono text-[10px] font-medium text-black/25 uppercase tracking-widest mb-5">
                &nbsp;
              </p>
              <div className="space-y-1">
                {productLinks.slice(4).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setProductOpen(false)}
                    className="flex gap-3.5 p-2.5 -mx-2.5 rounded-lg hover:bg-black/[0.03] transition-colors group"
                  >
                    <svg className="w-5 h-5 text-black/30 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={link.icon} />
                    </svg>
                    <div>
                      <span className="text-[14px] font-semibold text-black/80 block">{link.label}</span>
                      <span className="text-[12px] text-black/35 leading-relaxed block mt-0.5">{link.hint}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — plans */}
            <div className="border-l border-black/6 pl-8">
              <p className="font-mono text-[10px] font-medium text-black/25 uppercase tracking-widest mb-5">
                Тарифні плани
              </p>
              <div className="space-y-4">
                <Link href="/pricing" onClick={() => setProductOpen(false)} className="block group">
                  <span className="text-[14px] font-semibold text-black/80 group-hover:text-black transition-colors">Classic</span>
                  <span className="block text-[12px] text-black/35 mt-0.5">Для фірм, що переходять з Excel</span>
                </Link>
                <Link href="/pricing" onClick={() => setProductOpen(false)} className="block group">
                  <span className="text-[14px] font-semibold text-black/80 group-hover:text-black transition-colors">Pro AI</span>
                  <span className="block text-[12px] text-black/35 mt-0.5">Повний набір інструментів + AI</span>
                </Link>
                <Link href="/pricing" onClick={() => setProductOpen(false)} className="block group">
                  <span className="text-[14px] font-semibold text-black/80 group-hover:text-black transition-colors">Enterprise</span>
                  <span className="block text-[12px] text-black/35 mt-0.5">Self-hosted, кастомізація, SLA</span>
                </Link>
              </div>
              <div className="mt-6 pt-5 border-t border-black/6">
                <Link
                  href="/sales"
                  onClick={() => setProductOpen(false)}
                  className="text-[13px] font-medium text-black/50 hover:text-black transition-colors inline-flex items-center gap-1.5"
                >
                  Зв&apos;язатися з відділом продажів
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-4 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <p className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-widest mt-2 mb-1">
            Продукт
          </p>
          <nav>
            {productLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-[15px] text-black/80 border-b border-black/[0.05]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-widest mt-6 mb-1">
            Компанія
          </p>
          <nav>
            <Link href="/pricing" className="block py-3 text-[15px] text-black/80 border-b border-black/[0.05]" onClick={() => setMobileOpen(false)}>
              Тарифи
            </Link>
            <Link href="/#security" className="block py-3 text-[15px] text-black/80 border-b border-black/[0.05]" onClick={() => setMobileOpen(false)}>
              Безпека
            </Link>
            <Link href="/team" className="block py-3 text-[15px] text-black/80 border-b border-black/[0.05]" onClick={() => setMobileOpen(false)}>
              Про нас
            </Link>
            <Link href="/blog" className="block py-3 text-[15px] text-black/80 border-b border-black/[0.05]" onClick={() => setMobileOpen(false)}>
              Блог
            </Link>
            <Link href="/sales" className="block py-3 text-[15px] text-black/80" onClick={() => setMobileOpen(false)}>
              Відділ продажів
            </Link>
          </nav>

          <div className="mt-6 pt-4 border-t border-black/5 space-y-2.5">
            <a
              href="https://crm.justsolution.org/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-[#1c1c1c] text-white font-mono text-[11px] font-medium uppercase tracking-wide rounded hover:bg-[#333] transition-colors"
            >
              Почати безкоштовно
            </a>
            <a
              href="https://crm.justsolution.org/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 font-mono text-[11px] font-medium uppercase tracking-wide text-black/60 border border-black/15 rounded"
            >
              Увійти
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
