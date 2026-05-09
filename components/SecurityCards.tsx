"use client";

import React from "react";

const sharedKeyframes = `
  @keyframes secDraw { to { stroke-dashoffset: 0; } }
  @keyframes secFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
  @keyframes secBreathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
  @keyframes secShimmer { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 8; } }
  .secFloat { transform-box: fill-box; transform-origin: center; animation: secFloat 4s ease-in-out 1.2s infinite; }
  .secBreathe { transform-box: fill-box; transform-origin: center; animation: secBreathe 4s ease-in-out 1.2s infinite; }
`;

// --- ShieldSVG ---
const ShieldSVG = () => (
  <svg viewBox="0 0 180 180" className="ShieldSVG-root" aria-hidden="true">
    <style>{`
      .ShieldSVG-root {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      ${sharedKeyframes}
      .ShieldSVG-lines {
        stroke-dasharray: 10000;
        stroke-dashoffset: 10000;
        animation: secDraw 1.2s ease-out forwards, secShimmer 3s linear 1.2s infinite;
      }
    `}</style>
    <defs>
      <clipPath id="clip-shield">
        <path d="M90 16C111 29 134 32 150 37V78C150 123 124 153 90 166C56 153 30 123 30 78V37C46 32 69 29 90 16Z" />
      </clipPath>
    </defs>
    <g className="secFloat"><g className="secBreathe">
      <path
        className="ShieldSVG-lines"
        clipPath="url(#clip-shield)"
        d="M0 2H180 M0 6H180 M0 10H180 M0 14H180 M0 18H180 M0 22H180 M0 26H180 M0 30H180 M0 34H180 M0 38H180 M0 42H180 M0 46H180 M0 50H180 M0 54H180 M0 58H180 M0 62H180 M0 66H180 M0 70H180 M0 74H180 M0 78H180 M0 82H180 M0 86H180 M0 90H180 M0 94H180 M0 98H180 M0 102H180 M0 106H180 M0 110H180 M0 114H180 M0 118H180 M0 122H180 M0 126H180 M0 130H180 M0 134H180 M0 138H180 M0 142H180 M0 146H180 M0 150H180 M0 154H180 M0 158H180 M0 162H180 M0 166H180 M0 170H180 M0 174H180 M0 178H180"
        fill="none"
        stroke="#1c1c1c"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </g></g>
  </svg>
);

// --- LockSVG ---
const LockSVG = () => (
  <svg viewBox="0 0 180 180" className="LockSVG-root" aria-hidden="true">
    <style>{`
      .LockSVG-root {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      ${sharedKeyframes}
      .LockSVG-lines {
        stroke-dasharray: 10000;
        stroke-dashoffset: 10000;
        animation: secDraw 1.2s ease-out forwards, secShimmer 3s linear 1.2s infinite;
      }
    `}</style>
    <defs>
      <clipPath id="clip-lock">
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M54 74V61C54 40.6 70.6 24 91 24C111.4 24 128 40.6 128 61V74H114V61C114 48.3 103.7 38 91 38C78.3 38 68 48.3 68 61V74H54ZM44 76H136C143.2 76 149 81.8 149 89V144C149 151.2 143.2 157 136 157H44C36.8 157 31 151.2 31 144V89C31 81.8 36.8 76 44 76Z"
        />
      </clipPath>
    </defs>
    <g className="secFloat"><g className="secBreathe">
      <path
        className="LockSVG-lines"
        clipPath="url(#clip-lock)"
        d="M0 2H180 M0 6H180 M0 10H180 M0 14H180 M0 18H180 M0 22H180 M0 26H180 M0 30H180 M0 34H180 M0 38H180 M0 42H180 M0 46H180 M0 50H180 M0 54H180 M0 58H180 M0 62H180 M0 66H180 M0 70H180 M0 74H180 M0 78H180 M0 82H180 M0 86H180 M0 90H180 M0 94H180 M0 98H180 M0 102H180 M0 106H180 M0 110H180 M0 114H180 M0 118H180 M0 122H180 M0 126H180 M0 130H180 M0 134H180 M0 138H180 M0 142H180 M0 146H180 M0 150H180 M0 154H180 M0 158H180 M0 162H180 M0 166H180 M0 170H180 M0 174H180 M0 178H180"
        fill="none"
        stroke="#1c1c1c"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </g></g>
  </svg>
);

// --- DatabaseSVG (v2) ---
const DatabaseSVG = () => {
  const fillLines = Array.from({ length: 31 }, (_, i) => {
    const y = 36 + i * 4;
    return <path key={y} d={`M 30 ${y} H 150`} />;
  });
  return (
    <svg viewBox="0 0 180 180" width="180" height="180" aria-hidden="true" style={{ overflow: "visible" }}>
      <style>{`
        ${sharedKeyframes}
        .dbFill_91 path { fill:none;stroke:#1c1c1c;stroke-width:1.5;stroke-linecap:round;vector-effect:non-scaling-stroke;stroke-dasharray:120;stroke-dashoffset:120;animation:secDraw 1.2s ease-out forwards,secShimmer 3s linear 1.2s infinite; }
        .dbStroke_91 { fill:none;stroke:#1c1c1c;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke;stroke-dasharray:260;stroke-dashoffset:260;animation:secDraw 1.2s ease-out forwards; }
        .dbD1_91 { animation-delay:.06s; } .dbD2_91 { animation-delay:.12s; } .dbD3_91 { animation-delay:.18s; }
      `}</style>
      <defs><clipPath id="dbClip91"><path d="M40 50 C40 32 140 32 140 50 V126 C140 144 40 144 40 126 Z" /></clipPath></defs>
      <g className="secFloat">
        <g className="secBreathe">
          <g className="dbFill_91" clipPath="url(#dbClip91)">{fillLines}</g>
          <ellipse className="dbStroke_91" cx="90" cy="50" rx="50" ry="14" />
          <path className="dbStroke_91" d="M40 50 V126" />
          <path className="dbStroke_91" d="M140 50 V126" />
          <path className="dbStroke_91" d="M40 126 C40 144 140 144 140 126" />
          <path className="dbStroke_91 dbD1_91" d="M40 74 C40 92 140 92 140 74" />
          <path className="dbStroke_91 dbD2_91" d="M40 98 C40 116 140 116 140 98" />
          <path className="dbStroke_91 dbD3_91" d="M40 122 C40 140 140 140 140 122" />
        </g>
      </g>
    </svg>
  );
};

// --- FingerprintSVG (v8 — star/asterisk for auth code) ---
const FingerprintSVG = () => {
  const clipId = React.useId();
  const fillLines = Array.from({ length: 36 }, (_, i) => {
    const y = 14 + i * 4;
    return <path key={y} d={`M 10 ${y} H 170`} />;
  });
  const points = 6;
  const outerR = 68;
  const innerR = 32;
  const cx = 90, cy = 90;
  let d = "";
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
  }
  d += "Z";
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true" style={{ overflow: "visible" }}>
      <style>{`
        ${sharedKeyframes}
        .fp8F path { fill:none;stroke:#1c1c1c;stroke-width:1.5;stroke-linecap:round;vector-effect:non-scaling-stroke;stroke-dasharray:200;stroke-dashoffset:200;animation:secDraw 0.8s ease-out forwards,secShimmer 3s linear 0.8s infinite; }
        .fp8S { fill:none;stroke:#1c1c1c;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke;stroke-dasharray:600;stroke-dashoffset:600;animation:secDraw 1.4s ease-out forwards; }
      `}</style>
      <defs><clipPath id={clipId}><path d={d} /></clipPath></defs>
      <g className="secFloat"><g className="secBreathe">
        <g className="fp8F" clipPath={`url(#${clipId})`}>{fillLines}</g>
        <path className="fp8S" d={d} />
      </g></g>
    </svg>
  );
};

// --- FirewallSVG (v8 — hexagon) ---
const FirewallSVG = () => {
  const clipId = React.useId();
  const fillLines = Array.from({ length: 36 }, (_, i) => {
    const y = 14 + i * 4;
    return <path key={y} d={`M 10 ${y} H 170`} />;
  });
  const r = 70;
  const cx = 90, cy = 90;
  let d = "";
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
  }
  d += "Z";
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true" style={{ overflow: "visible" }}>
      <style>{`
        ${sharedKeyframes}
        .fw8F path { fill:none;stroke:#1c1c1c;stroke-width:1.5;stroke-linecap:round;vector-effect:non-scaling-stroke;stroke-dasharray:200;stroke-dashoffset:200;animation:secDraw 0.8s ease-out forwards,secShimmer 3s linear 0.8s infinite; }
        .fw8S { fill:none;stroke:#1c1c1c;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke;stroke-dasharray:500;stroke-dashoffset:500;animation:secDraw 1.4s ease-out forwards; }
      `}</style>
      <defs><clipPath id={clipId}><path d={d} /></clipPath></defs>
      <g className="secFloat"><g className="secBreathe">
        <g className="fw8F" clipPath={`url(#${clipId})`}>{fillLines}</g>
        <path className="fw8S" d={d} />
      </g></g>
    </svg>
  );
};

// --- AuditSVG ---
const AuditSVG = () => (
  <svg viewBox="0 0 180 180" className="AuditSVG-root" aria-hidden="true">
    <style>{`
      .AuditSVG-root {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      ${sharedKeyframes}
      .AuditSVG-lines {
        stroke-dasharray: 10000;
        stroke-dashoffset: 10000;
        animation: secDraw 1.2s ease-out forwards, secShimmer 3s linear 1.2s infinite;
      }
    `}</style>
    <defs>
      <clipPath id="clip-audit">
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M36 18H103L136 51V99C131.5 97.1 126.5 96 121 96C99.5 96 82 113.5 82 135C82 144.8 85.6 153.8 91.6 160H36C28.8 160 23 154.2 23 147V31C23 23.8 28.8 18 36 18ZM101 18V50C101 57.2 106.8 63 114 63H136L101 18ZM121 108C106.1 108 94 120.1 94 135C94 149.9 106.1 162 121 162C135.9 162 148 149.9 148 135C148 120.1 135.9 108 121 108ZM121 120C112.7 120 106 126.7 106 135C106 143.3 112.7 150 121 150C129.3 150 136 143.3 136 135C136 126.7 129.3 120 121 120ZM142 151L166 164L158 176L136 160L142 151Z"
        />
      </clipPath>
    </defs>
    <g className="secFloat"><g className="secBreathe">
      <path
        className="AuditSVG-lines"
        clipPath="url(#clip-audit)"
        d="M0 2H180 M0 6H180 M0 10H180 M0 14H180 M0 18H180 M0 22H180 M0 26H180 M0 30H180 M0 34H180 M0 38H180 M0 42H180 M0 46H180 M0 50H180 M0 54H180 M0 58H180 M0 62H180 M0 66H180 M0 70H180 M0 74H180 M0 78H180 M0 82H180 M0 86H180 M0 90H180 M0 94H180 M0 98H180 M0 102H180 M0 106H180 M0 110H180 M0 114H180 M0 118H180 M0 122H180 M0 126H180 M0 130H180 M0 134H180 M0 138H180 M0 142H180 M0 146H180 M0 150H180 M0 154H180 M0 158H180 M0 162H180 M0 166H180 M0 170H180 M0 174H180 M0 178H180"
        fill="none"
        stroke="#1c1c1c"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </g></g>
  </svg>
);

const cards = [
  { Icon: ShieldSVG, title: "AWS інфраструктура, дата-центр в ЄС", desc: "Сервери у Європі. Мережева ізоляція — база даних недоступна ззовні." },
  { Icon: LockSVG, title: "Шифрування на кожному рівні", desc: "HTTPS/TLS для всіх з'єднань. Паролі — bcrypt. Файли — ізольоване сховище." },
  { Icon: DatabaseSVG, title: "Ізоляція даних між фірмами", desc: "Кожна організація — окремий простір. Архітектурно неможливо отримати чужі дані." },
  { Icon: FingerprintSVG, title: "Двофакторна автентифікація", desc: "Додатковий рівень захисту при вході. JWT-токени з обмеженим часом дії." },
  { Icon: FirewallSVG, title: "Захист від веб-атак", desc: "X-Frame-Options, XSS-Protection, Content-Type-Options, strict Referrer-Policy." },
  { Icon: AuditSVG, title: "Ролі, дозволи та журнал дій", desc: "Розмежування доступу по ролях. Аудит-лог — хто, коли і що змінив." },
];

export default function SecurityCards() {
  return (
    <section className="py-20 bg-white" id="security">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
            Безпека
          </p>
          <h2 className="text-3xl lg:text-[40px] font-light tracking-tight">
            Адвокатська таємниця —{" "}
            <strong className="font-medium">наша інженерна задача</strong>
          </h2>
          <p className="mt-4 text-black/45 max-w-2xl mx-auto leading-relaxed">
            Юридична фірма працює з конфіденційною інформацією щодня.
            JustCRM побудована так, щоб безпека працювала за замовчуванням —
            без додаткових налаштувань з вашого боку.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.Icon;

            return (
              <div
                key={card.title}
                className="border border-black/8 p-8 hover:border-black/15 transition-colors"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                }}
              >
                <h3 className="text-[15px] font-medium mb-6">{card.title}</h3>
                <div className="w-44 h-44 mx-auto">
                  <Icon />
                </div>
                <p className="mt-6 text-sm text-black/40 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
