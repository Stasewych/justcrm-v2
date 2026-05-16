"use client";

export default function GuideLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div className="max-w-[1440px] mx-auto h-full px-8 lg:px-16 relative">
        <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px bg-black/[0.07]" />
        <div className="absolute right-8 lg:right-16 top-0 bottom-0 w-px bg-black/[0.07]" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-black/[0.04]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/[0.05]" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-black/[0.04]" />
      </div>
    </div>
  );
}
