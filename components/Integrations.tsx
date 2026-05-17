import FloatingDots from "./FloatingDots";

const bp = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_BASE_PATH || "") : "";

const integrations = [
  { name: "Gmail", file: "gmail.svg", desc: "Листи автоматично потрапляють у картку справи" },
  { name: "Google Calendar", file: "google-calendar.svg", desc: "Засідання та зустрічі синхронізуються з CRM" },
  { name: "Google Drive", file: "google-drive.svg", desc: "Файли лишаються на Drive, але доступні зі справи" },
  { name: "Outlook", file: "outlook.svg", desc: "Пошта та календар Microsoft — в контексті проєкту" },
  { name: "OneDrive", file: "onedrive.svg", desc: "Документи з OneDrive прив'язані до справ і клієнтів" },
];

export default function Integrations() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="integrations">
      <FloatingDots count={25} />
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">

          {/* Left — text */}
          <div>
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Інтеграції
            </p>
            <h2 className="text-2xl lg:text-[32px] font-bold leading-[1.15] tracking-tight mb-5">
              Підключіть пошту, календар та файли за хвилину
            </h2>
            <p className="text-[15px] text-black/45 leading-relaxed mb-10">
              OAuth-авторизація — без паролів, без налаштувань сервера. Ви обираєте, що підключити. Відкликати доступ можна в будь-який момент.
            </p>

            <div className="space-y-5">
              {integrations.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f4f4f4] flex items-center justify-center shrink-0">
                    <img
                      src={`${bp}/images/integrations/${item.file}`}
                      alt={item.name}
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <span className="text-[14px] font-semibold text-black/80">{item.name}</span>
                    <span className="text-[13px] text-black/35 ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Connection lines background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-black/6" />
                <div className="absolute w-52 h-52 rounded-full border border-dashed border-black/4" />
                <div className="absolute w-72 h-72 rounded-full border border-dashed border-black/3" />
              </div>

              {/* Center logo */}
              <div className="relative flex items-center justify-center h-80">
                <div className="w-16 h-16 rounded-2xl bg-[#1c1c1c] flex items-center justify-center shadow-xl shadow-black/10 z-10">
                  <img src={`${bp}/images/logo.png`} alt="JustCRM" className="w-9 h-9 brightness-0 invert" />
                </div>

                {/* Orbiting icons */}
                {integrations.map((item, i) => {
                  const angle = (i / integrations.length) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 120;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  return (
                    <div
                      key={item.name}
                      className="absolute w-11 h-11 rounded-xl bg-white border border-black/8 shadow-md shadow-black/5 flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px - 22px)`,
                        top: `calc(50% + ${y}px - 22px)`,
                      }}
                    >
                      <img
                        src={`${bp}/images/integrations/${item.file}`}
                        alt={item.name}
                        className="w-5 h-5"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
