import React from "react";

export default function ObeliskSVG({ className }: { className?: string }) {
  const lines: React.ReactNode[] = [];
  for (let y = 0; y < 400; y += 3) {
    const progress = y / 400;
    const obeliskLeft = 170 - progress * 30;
    const obeliskRight = 230 + progress * 30;
    const groundY = 310;

    if (y < groundY) {
      const tipY = 40;
      const baseLeft = 155;
      const baseRight = 245;
      const t = Math.max(0, (y - tipY) / (groundY - tipY));
      const left = 200 - t * (200 - baseLeft);
      const right = 200 + t * (baseRight - 200);

      if (y >= tipY) {
        lines.push(
          <line
            key={`ob-${y}`}
            x1={left}
            y1={y}
            x2={right}
            y2={y}
            stroke="currentColor"
            strokeWidth={1.5 + t * 0.5}
            opacity={0.6 + t * 0.3}
          />
        );
      }
    }

    if (y >= groundY - 10 && y <= groundY + 6) {
      lines.push(
        <line
          key={`base-${y}`}
          x1={130}
          y1={y}
          x2={270}
          y2={y}
          stroke="currentColor"
          strokeWidth={2}
          opacity={0.8}
        />
      );
    }

    if (y >= groundY + 20) {
      const fade = 1 - (y - groundY - 20) / 80;
      if (fade > 0) {
        const spread = 40 + (y - groundY - 20) * 1.5;
        lines.push(
          <line
            key={`ground-${y}`}
            x1={200 - spread}
            y1={y}
            x2={200 + spread}
            y2={y}
            stroke="currentColor"
            strokeWidth={1}
            opacity={fade * 0.15}
          />
        );
      }
    }

    const skyFade = Math.max(0, 1 - y / 320);
    if (skyFade > 0.05 && y < 310) {
      const tipY = 40;
      const t = Math.max(0, (y - tipY) / (310 - tipY));
      const obLeft = 200 - t * 45;
      const obRight = 200 + t * 45;

      if (y < tipY) {
        lines.push(
          <line key={`sky-${y}`} x1={20} y1={y} x2={380} y2={y}
            stroke="currentColor" strokeWidth={1} opacity={skyFade * 0.06} />
        );
      } else {
        if (obLeft > 30) {
          lines.push(
            <line key={`skyl-${y}`} x1={20} y1={y} x2={obLeft - 8} y2={y}
              stroke="currentColor" strokeWidth={1} opacity={skyFade * 0.06} />
          );
        }
        if (obRight < 370) {
          lines.push(
            <line key={`skyr-${y}`} x1={obRight + 8} y1={y} x2={380} y2={y}
              stroke="currentColor" strokeWidth={1} opacity={skyFade * 0.06} />
          );
        }
      }
    }
  }

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines}
      <line x1="200" y1="20" x2="200" y2="40" stroke="currentColor" strokeWidth={2} opacity={0.5} strokeLinecap="round" />
    </svg>
  );
}
