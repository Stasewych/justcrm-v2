"use client";

export default function Marquee({
  children,
  reverse = false,
  duration = 40,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
}) {
  const dir = reverse ? "reverse" : "normal";

  return (
    <div className="overflow-hidden relative group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-16 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${duration}s linear infinite ${dir}`,
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
