import Link from "next/link";
import Button from "./Button";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const columns = [
  {
    title: "Продукт",
    links: [
      { href: "/product/cases", label: "Справи" },
      { href: "/product/billing", label: "Білінг & час" },
      { href: "/product/tasks", label: "Задачі" },
      { href: "/product/clients", label: "Клієнти" },
      { href: "/product/ai", label: "AI" },
      { href: "/product/tables", label: "Конструктор таблиць" },
      { href: "/product/documents", label: "Документи" },
    ],
  },
  {
    title: "Для кого",
    links: [
      { href: "/for/advokat", label: "Адвокат" },
      { href: "/for/firma", label: "Юридична фірма" },
      { href: "/for/yuryst", label: "Приватний юрист" },
      { href: "/for/notarius", label: "Нотаріус" },
    ],
  },
  {
    title: "Ресурси",
    links: [
      { href: "/why", label: "Чому JustCRM" },
      { href: "/pricing", label: "Тарифи" },
      { href: "/#security", label: "Безпека" },
      { href: "/blog", label: "Блог" },
    ],
  },
  {
    title: "Правове",
    links: [
      { href: "/privacy", label: "Конфіденційність" },
      { href: "/terms", label: "Правила користування" },
      { href: "/offer", label: "Публічна оферта" },
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
      <div className="relative mx-4 sm:mx-6 lg:mx-12">
        <div className="bg-white rounded-t-lg pt-12 sm:pt-14 pb-8 px-5 sm:px-8 lg:px-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-14">
            <img src={`${bp}/images/logo.png`} alt="JustCRM" className="h-7" />
            <span className="text-lg font-bold tracking-tight">JustCRM</span>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8">
            {columns.map((col, i) => (
              <div key={col.title}>
                <div className="flex items-center gap-2 mb-4">
                  {i > 0 && <Cross />}
                  <h3 className="text-sm font-medium">{col.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-black/60 hover:text-black transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect column — full width on mobile so email + buttons breathe */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Cross />
                <h3 className="text-sm font-medium">Контакти</h3>
              </div>
              <ul className="space-y-2.5 mb-8">
                <li>
                  <a
                    href="mailto:stanislav.marynovych@justsolution.org"
                    className="text-[14px] sm:text-[15px] text-black/60 hover:text-black transition-colors break-all"
                  >
                    stanislav.marynovych@justsolution.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/just-solution-ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-black/60 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/crm_just_solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-black/60 hover:text-black transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590782785853&sk=directory_contact_info&locale=uk_UA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-black/60 hover:text-black transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
              <div className="flex flex-col gap-2.5">
                <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min">Замовити демо</Button>
                <Button href="https://crm.justsolution.org/register" variant="outline">
                  Почати безкоштовно
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom crosses row */}
          <div className="mt-10 hidden lg:grid grid-cols-5 gap-x-8">
            <div><Cross /></div>
            <div><Cross /></div>
            <div><Cross /></div>
            <div><Cross /></div>
            <div className="text-right"><Cross /></div>
          </div>
        </div>
      </div>

      {/* Dark copyright bar */}
      <div className="mx-4 sm:mx-6 lg:mx-12 px-5 sm:px-8 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[12px] text-white/55 uppercase tracking-wide">
          © {new Date().getFullYear()} — Just Solution
        </span>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/just-solution-ua/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JustCRM у LinkedIn"
            className="text-white/55 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/crm_just_solution/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JustCRM в Instagram"
            className="text-white/55 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 00-.68-1.06 2.85 2.85 0 00-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4zm0 3.06A4.94 4.94 0 1112 17a4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.14-.96a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61590782785853&sk=directory_contact_info&locale=uk_UA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JustCRM у Facebook"
            className="text-white/55 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
