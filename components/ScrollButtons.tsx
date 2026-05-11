"use client";

import { useEffect, useState } from "react";

export default function ScrollButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-2 transition-all duration-400 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-colors"
        aria-label="Вгору"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-colors"
        aria-label="Вниз"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
