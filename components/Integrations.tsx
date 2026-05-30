const bp = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_BASE_PATH || "") : "";

const integrations = [
  {
    name: "Gmail / Outlook",
    file: "gmail.svg",
    file2: "outlook.svg",
    desc: "Вхідний лист автоматично потрапляє до справи, з якою пов'язаний контакт. Відправляйте листи з CRM — вони підуть з Вашої робочої пошти.",
  },
  {
    name: "Google Calendar / Microsoft Calendar",
    file: "google-calendar.svg",
    desc: "Засідання, зустрічі з клієнтами та внутрішні дедлайни з'являються в обох місцях одночасно. Змінили час у CRM — оновилось у календарі.",
  },
  {
    name: "Google Drive / OneDrive",
    file: "google-drive.svg",
    file2: "onedrive.svg",
    desc: "Файли лишаються там, де вони є. JustCRM просто бачить їх у контексті справи — без дублювання, без перенесення.",
  },
];

export default function Integrations() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f7f7f5] bg-dot-grid" id="integrations">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — headline */}
          <div>
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Інтеграції
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold leading-[1.15] tracking-tight mb-5">
              Ваші інструменти вже працюють —{" "}
              <span className="font-normal text-black/40">
                JustCRM просто під'єднується до них
              </span>
            </h2>
            <p className="text-base text-black/45 leading-relaxed mb-10">
              Ми не замінюємо Gmail чи Outlook. Не переносимо файли з Drive. Не дублюємо календар. Ви підключаєте те, що вже використовуєте — через OAuth за хвилину — і CRM починає бачити Ваші дані в контексті справ і клієнтів.
            </p>
            <div className="flex items-center gap-6">
              {["gmail.svg", "google-calendar.svg", "google-drive.svg", "outlook.svg", "onedrive.svg"].map((file) => (
                <img
                  key={file}
                  src={`${bp}/images/integrations/${file}`}
                  alt=""
                  className="w-7 h-7 opacity-40"
                />
              ))}
            </div>
          </div>

          {/* Right — integration list */}
          <div className="border-t border-black/10">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="py-6 border-b border-black/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={`${bp}/images/integrations/${item.file}`}
                    alt=""
                    className="w-5 h-5"
                  />
                  {item.file2 && (
                    <img
                      src={`${bp}/images/integrations/${item.file2}`}
                      alt=""
                      className="w-5 h-5"
                    />
                  )}
                  <h3 className="text-[15px] font-semibold text-black/80">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-black/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
