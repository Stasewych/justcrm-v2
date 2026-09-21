"use client";

import { useState } from "react";

/**
 * Форма заявки на AI-навчання (/ai-kurs).
 *
 * Сабміт іде AJAX-ом просто на ендпоінт Formspree, без пакета @formspree/react:
 * запит це звичайний POST з FormData, а стан і повідомлення в нас уже свої, тож
 * залежність не додала б нічого, крім ваги бандла й власного набору компонентів
 * валідації, яких ми не використовуємо.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjgjvpy";
const IS_STUB = FORMSPREE_ENDPOINT.includes("REPLACE_WITH_FORM_ID");

const NOTCH = "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)";

const inputClass =
  "w-full bg-white border border-black/10 px-4 py-3 text-[15px] text-black/80 placeholder:text-black/25 outline-none transition-colors focus:border-black/40";

function Field({
  label,
  children,
  optional = false,
}: {
  label: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.15em] text-black/35 block mb-2">
        {label}
        {optional && <span className="text-black/20"> (необов'язково)</span>}
      </span>
      {children}
    </label>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export default function AiCourseForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (IS_STUB) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-black/10 bg-white p-8 lg:p-10">
        <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.15em] text-black/30 mb-4">
          Заявку отримали
        </p>
        <p className="text-[16px] text-black/70 leading-relaxed">
          Передзвонимо протягом робочого дня й обговоримо формат.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-black/10 bg-white p-6 sm:p-8 lg:p-10">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Компанія">
          <input name="company" required className={inputClass} placeholder="Назва фірми" />
        </Field>
        <Field label="Ім'я">
          <input name="name" required className={inputClass} placeholder="Як до вас звертатися" />
        </Field>
        <Field label="Телефон">
          <input name="phone" type="tel" required className={inputClass} placeholder="+380" />
        </Field>
        <Field label="Скільки людей у команді">
          <input name="team_size" required className={inputClass} placeholder="Наприклад, 8" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Що хочете автоматизувати">
          <textarea
            name="goal"
            required
            rows={3}
            className={inputClass + " resize-y"}
            placeholder="Які задачі забирають найбільше часу"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Чому шукаєте навчання з AI" optional>
          <textarea
            name="reason"
            rows={2}
            className={inputClass + " resize-y"}
            placeholder="Що вже пробували і що не спрацювало"
          />
        </Field>
      </div>

      {/* Тема листа у скриньці замість дефолтного "New submission". */}
      <input
        type="hidden"
        name="_subject"
        value="Заявка на AI-навчання — justsolution.org/ai-kurs"
      />

      {/* Honeypot: боти заповнюють приховане поле, люди його не бачать. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-mono text-[12px] font-medium uppercase tracking-wide text-white bg-[#1c1c1c] px-6 py-2.5 transition-colors hover:bg-[#333] disabled:opacity-50"
          style={{ clipPath: NOTCH }}
        >
          {status === "sending" ? "Надсилаємо" : "Надіслати"}
        </button>

        {status === "error" && (
          <p className="text-[13px] text-[#b42318] leading-relaxed">
            {IS_STUB
              ? "Форма ще не підключена: підставте ID Formspree у components/AiCourseForm.tsx."
              : "Не вдалося надіслати. Спробуйте ще раз або напишіть на stanislav.marynovych@justsolution.org."}
          </p>
        )}
      </div>
    </form>
  );
}
