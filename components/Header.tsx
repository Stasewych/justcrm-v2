"use client";

import { useState } from "react";
import Link from "next/link";

const productLinks = [
  { href: "/product/cases", label: "Управління справами", hint: "Kanban, етапи, клієнти" },
  { href: "/product/billing", label: "Білінг і час", hint: "Таймер, інвойси, звіти" },
  { href: "/product/tasks", label: "Задачі", hint: "Kanban, список, календар" },
  { href: "/product/contacts", label: "Контакти", hint: "Клієнти, email-інтеграція" },
  { href: "/product/documents", label: "Документи", hint: "Шаблони, mail-merge" },
];

const companyLinks = [
  { href: "/enterprise", label: "Enterprise" },
  { href: "/team", label: "Про нас" },
  { href: "/contacts", label: "Контакти" },
  { href: "/blog", label: "Блог" },
];

function Divider() {
  return <div className="w-px h-4 bg-black/10" />;
}

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-2" style={{ background: "transparent" }}>
      <nav className="max-w-[1080px] w-full mx-auto px-6 h-11 flex items-center justify-between rounded-full bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={`${bp}/images/logo.png`} alt="JustCRM" className="h-8" />
          <span className="text-base font-bold tracking-tight">JustCRM</span>
        </Link>

        {/* Center nav — mono, uppercase, tiny */}
        <div className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
              Продукт
              <svg className="inline-block ml-1 w-3 h-3 -mt-px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {productOpen && (
              <div className="absolute top-full left-0 pt-1">
                <div className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-xl border border-white/40 py-2 min-w-64">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 hover:bg-black/[0.03] transition-colors"
                    >
                      <span className="text-sm font-medium text-black/80">
                        {link.label}
                      </span>
                      <span className="block text-xs text-black/35 mt-0.5">
                        {link.hint}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Divider />

          <Link
            href="/pricing"
            className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors"
          >
            Тарифи
          </Link>

          <Divider />

          <Link href="/#security" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Безпека
          </Link>

          <Divider />

          <Link href="/enterprise" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Enterprise
          </Link>

          <Divider />

          <Link href="/team" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Про нас
          </Link>

          <Divider />

          <Link href="/contacts" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Контакти
          </Link>

          <Divider />

          <Link href="/blog" className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/70 hover:text-black px-3 py-1.5 transition-colors">
            Блог
          </Link>
        </div>

        {/* Right side — CTA */}
        <div className="hidden lg:flex items-center gap-1">
          <a
            href="https://crm.justsolution.org/login"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/50 px-3 py-1.5 transition-colors hover:text-black"
          >
            Увійти
          </a>
          <a
            href="https://crm.justsolution.org/register"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium uppercase tracking-wide bg-[#1c1c1c] text-white px-4 py-1.5 rounded-full transition-colors hover:bg-[#333]"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-6 py-5 space-y-4">
          <p className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-widest">
            Продукт
          </p>
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm py-0.5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-black/5" />
          <Link href="/pricing" className="block text-sm py-0.5" onClick={() => setMobileOpen(false)}>
            Тарифи
          </Link>
          <Link href="/#security" className="block text-sm py-0.5" onClick={() => setMobileOpen(false)}>
            Безпека
          </Link>
          <Link href="/enterprise" className="block text-sm py-0.5" onClick={() => setMobileOpen(false)}>Enterprise</Link>
          <Link href="/team" className="block text-sm py-0.5" onClick={() => setMobileOpen(false)}>Про нас</Link>
          <Link href="/contacts" className="block text-sm py-0.5" onClick={() => setMobileOpen(false)}>Контакти</Link>
          <Link href="/blog" className="block text-sm py-0.5" onClick={() => setMobileOpen(false)}>Блог</Link>
          <hr className="border-black/5" />
          <div className="flex gap-3 pt-1">
            <a href="https://crm.justsolution.org/login" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] font-medium uppercase text-black/50">
              Увійти
            </a>
            <a
              href="https://crm.justsolution.org/register"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] font-medium uppercase bg-[#1c1c1c] text-white px-4 py-1.5 rounded"
            >
              Почати безкоштовно
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
