import { pageMeta } from "@/app/seo";
import FeaturePage from "@/components/FeaturePage";
import JsonLd from "@/components/JsonLd";
import { productGraph } from "@/app/structured-data";

export const metadata = pageMeta({
  title: "Клієнтська база адвоката",
  description: "Картка клієнта з усією історією — справи, оплати, документи й листування зібрані в одному профілі. Жоден контакт не загубиться.",
  path: "/product/clients",
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={productGraph("Клієнти", "/product/clients")} />
      <FeaturePage
      tag="Клієнти"
      title="Повне досьє клієнта — від першого звернення до завершення справи"
      subtitle="Фізичні та юридичні особи, воронка лідів, email-листування у контексті справи та миттєвий пошук по будь-якому реквізиту."
      heroImage="/images/hero-clients.webp"
      heroImageWidth={2600}
      heroImageHeight={1092}
      heroImageMaxWidth={1320}
      sections={[
        {
          tag: "Профіль клієнта",
          title: "Фізичні та юридичні особи з повним досьє",
          desc: "Контакти, реквізити, зв'язки між особами та компаніями, історія справ і платежів. Усе на одному екрані — без переходів між системами.",
          screens: [
            { src: "/images/clients-profile-1.webp" },
            { src: "/images/clients-profile-2.webp" },
            { src: "/images/clients-profile-3.webp" },
          ],
          points: [
            {
              title: "Картка фізособи",
              desc: "Контактні дані, ІПН, документи — структуровано.",
              icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
            },
            {
              title: "Картка юрособи",
              desc: "ЄДРПОУ, реквізити, підписанти, банківські рахунки.",
              icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h6M9 13h6M9 17h6",
            },
          ],
        },
        {
          tag: "Email-інтеграція",
          title: "Листування з клієнтом — у контексті справи",
          desc: "Підключіть Gmail або Outlook — вхідні листи від клієнта самі потраплять до картки справи. Відповідайте з CRM, лист піде з робочої пошти.",
          screens: [
            { src: "/images/clients-email-1.webp" },
            { src: "/images/clients-email-2.webp" },
            { src: "/images/clients-email-3.webp" },
          ],
          points: [
            {
              title: "Gmail та Outlook",
              desc: "Підключіть пошту через OAuth за хвилину — без передачі паролю.",
              icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
            },
            {
              title: "Авто-прив'язка",
              desc: "Лист від відомого контакту автоматично прив'язується до його справи.",
              icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
            },
            {
              title: "Відповіді з CRM",
              desc: "Пишіть відповідь у JustCRM — вона піде з Вашої робочої скриньки, як зазвичай.",
              icon: "M3 11l18-8-8 18-2-8-8-2z",
            },
            {
              title: "Шаблони листів",
              desc: "Швидкі відповіді на типові запити — з підстановкою імені та реквізитів клієнта.",
              icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5",
            },
          ],
        },
        {
          tag: "Пошук та сегментація",
          title: "Знайти потрібного клієнта — за п'ять секунд",
          desc: "Глобальний пошук по імені, email, телефону, ІПН чи номеру договору. Сегментуйте базу за стадією, типом юридичної послуги або юристом.",
          screens: [
            { src: "/images/clients-search-1.webp" },
            { src: "/images/clients-search-2.webp" },
            { src: "/images/clients-search-3.webp" },
            { src: "/images/clients-search-4.webp" },
          ],
          points: [
            {
              title: "Швидкий пошук",
              desc: "Одне поле — для імені, компанії, email, телефону, ІПН чи ЄДРПОУ.",
              icon: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35",
            },
            {
              title: "Розумні фільтри",
              desc: "Активні клієнти, лідери воронки, неоплачені рахунки — у два кліки.",
              icon: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
            },
          ],
        },
      ]}
    />
    </>
  );
}
