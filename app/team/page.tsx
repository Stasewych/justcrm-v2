import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { teamGraph } from "@/app/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";

export const metadata = pageMeta({
  title: "Команда",
  description: "Команда Just Solution — інженери та юристи, що будують українську AI-CRM для юридичних фірм JustCRM. Хто стоїть за продуктом і нашою місією.",
  path: "/team",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const team = [
  {
    name: "Тарас Зубачик",
    role: "Chief of Business Development & Product, Co-founder",
    photo: "/images/team-taras.webp",
    linkedin: "https://www.linkedin.com/in/taras-zubachyk-95077a215/",
    bio: "Юрист за освітою, спеціалізується на міжнародному бізнес-розвитку. Відповідає за роботу з юридичними компаніями, партнерства та комерційну стратегію JustCRM. Має практичний досвід у провідних юридичних фірмах України. Поєднує юридичне мислення з розумінням технологічного бізнесу.",
  },
  {
    name: "Станіслав Маринович",
    role: "Chief of Marketing & Project, Co-founder",
    photo: "/images/team-stanislav.webp",
    linkedin: "https://www.linkedin.com/in/stanislav-marynovych/",
    bio: "Побудував JustCRM від першого customer discovery до робочого продукту з AI-функціями. До Just Solution керував клієнтськими проєктами в Norml Studio (US-based digital agency; клієнти — AstraZeneca, Nasdaq), займався операційним управлінням та бізнес-розвитком у Flintec (дистриб’юція промислового обладнання з Німеччини), у Smart Export керував проєктами з виходу українських та іноземних виробників на зовнішні ринки — понад 50 клієнтів за весь час, а зараз працює в ПриватБанку на позиції Senior AI Product Manager. Запустив кілька продуктів від нуля до перших користувачів — у сферах нетворкінгу, IoT, e-commerce та нерухомості.",
  },
  {
    name: "Мар’ян Петльований",
    role: "AI/ML Engineer & Co-founder",
    photo: "/images/team-marian.webp",
    linkedin: "https://www.linkedin.com/in/marian-petlovanyi/",
    bio: "Відповідає за AI-інфраструктуру JustCRM — RAG-пошук по базі знань фірми, голосове введення за допомогою AI, генерацію документів та AI-помічника. Data Scientist із досвідом у LLM serving, навчанні та fine-tuning моделей. Працює з Python та сучасним ML-стеком. Постійно постачає нові продукти у форматі PoC / MVP. Спроєктував архітектуру векторного пошуку по внутрішніх документах юридичної фірми. Реалізував систему AI-агентів, яка дозволяє помічнику звертатися до CRM-даних у реальному часі — контакти, справи, документи. Випускник UCU та Львівської Політехніки з фокусом на машинному навчанні та аналізі даних.",
  },
  {
    name: "Микола Ковалик",
    role: "CTO & Co-founder",
    photo: "/images/team-mykola.webp",
    linkedin: "https://www.linkedin.com/in/mykola-kovalyk/",
    bio: "Проєктує серверну архітектуру та інфраструктуру JustCRM. Інженер із 7 роками досвіду в різних галузях програмування, з фокусом на системному — C, Python, Linux. Має глибинну експертизу в хардварному програмуванні, POSIX-системах, комп’ютерних мережах, потоковій безпеці та production-grade інженерії. Відповідає за ізоляцію даних, JWT-автентифікацію та шифрування у JustCRM, а також оптимізацію ресурсів та перевірку якості системи. Досвід у full-stack розробці (React, Flask), machine learning та IoT. Засновник GenLint — платформи для автоматичного аудиту технічної документації. Випускник Львівської Політехніки за спеціальністю Computer Engineering — IoT.",
  },
  {
    name: "Іван Волошанський",
    role: "Full-Stack Engineer",
    photo: "/images/team-ivan.webp",
    linkedin: "https://www.linkedin.com/in/ivan-voloshanskyi-394936272/",
    bio: "Full-stack інженер JustCRM. Веде розробку продукту на всіх рівнях: фронтенд на Next.js, бекенд на Python (Flask) і Node.js, база даних та інфраструктура. Однаково впевнено працює і з клієнтською частиною, яку бачить користувач, і з серверною, що за нею стоїть. Один із ключових інженерів команди JustCRM.",
  },
];

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamGraph()} />
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero */}
        <section className="pt-28 pb-14 bg-white relative overflow-hidden">
          <FloatingDots count={25} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Команда
            </p>
            <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-5 max-w-3xl">
              Команда JustCRM
            </h1>
            <p className="text-lg text-black/45 max-w-4xl leading-relaxed">
              Ми розуміємо юридичну практику зсередини — і будуємо інструменти,
              яких їй не вистачає.
            </p>
          </div>
        </section>

        {/* Team — full-width horizontal cards */}
        <section className="pb-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 py-14 ${
                  i > 0 ? "border-t border-black/6" : ""
                }`}
              >
                {/* Photo */}
                <div>
                  <div className="w-full aspect-[4/5] rounded-xl bg-[#f0f0ee] overflow-hidden">
                    <img
                      src={`${bp}${member.photo}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-[32px] font-bold tracking-tight mb-2">
                    {member.name}
                  </h2>
                  <p className="text-[15px] text-black/35 mb-6">
                    {member.role}
                  </p>
                  <p className="text-[16px] leading-[1.8] text-black/50 mb-8 max-w-4xl">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] text-black/30 hover:text-black/60 transition-colors"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
