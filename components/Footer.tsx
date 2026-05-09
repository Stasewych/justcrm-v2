import Link from "next/link";
import Button from "./Button";

const columns = [
  {
    title: "Продукт",
    links: [
      { href: "/product/cases", label: "Справи" },
      { href: "/product/billing", label: "Білінг" },
      { href: "/product/tasks", label: "Задачі" },
      { href: "/product/contacts", label: "Контакти" },
      { href: "/product/documents", label: "Документи" },
    ],
  },
  {
    title: "Ресурси",
    links: [
      { href: "/pricing", label: "Тарифи" },
      { href: "/security", label: "Безпека" },
      { href: "/blog", label: "Блог" },
      { href: "/changelog", label: "Release Notes" },
    ],
  },
  {
    title: "Правове",
    links: [
      { href: "/legal/privacy", label: "Конфіденційність" },
      { href: "/legal/terms", label: "Умови використання" },
    ],
  },
];

function Cross() {
  return (
    <span className="text-[#1c1c1c] text-base leading-none select-none">+</span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] mt-auto pt-16">
      {/* Notched white card */}
      <div className="relative mx-6 lg:mx-12">
        <div className="bg-white rounded-t-lg pt-14 pb-8 px-8 lg:px-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-14">
            <img src="/images/logo.png" alt="JustCRM" className="h-7" />
            <span className="text-lg font-bold tracking-tight">JustCRM</span>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            {columns.map((col, i) => (
              <div key={col.title}>
                <div className="flex items-center gap-2 mb-4">
                  {i > 0 && <Cross />}
                  <h3 className="text-sm font-medium">{col.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-black/45 hover:text-black transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cross />
                <h3 className="text-sm font-medium">Контакти</h3>
              </div>
              <ul className="space-y-2.5 mb-8">
                <li>
                  <a
                    href="mailto:info@justsolution.org"
                    className="text-[15px] text-black/45 hover:text-black transition-colors"
                  >
                    info@justsolution.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/just-solution-ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-black/45 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <div className="flex flex-col gap-2.5">
                <Button href="/demo">Замовити демо</Button>
                <Button href="/trial" variant="outline">
                  Почати безкоштовно
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom crosses row */}
          <div className="mt-10 grid grid-cols-4 gap-x-8">
            <div><Cross /></div>
            <div><Cross /></div>
            <div><Cross /></div>
            <div className="text-right"><Cross /></div>
          </div>
        </div>
      </div>

      {/* Dark copyright bar */}
      <div className="mx-6 lg:mx-12 px-8 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[12px] text-white/35 uppercase tracking-wide">
          © {new Date().getFullYear()} — Just Solution
        </span>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/just-solution-ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
