"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const bp = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_BASE_PATH || "") : "";

export interface CarouselScreen {
  /** Production: path to screenshot. */
  src?: string;
  /** Optional caption shown under the screen — independent of the section text. */
  caption?: string;
  /** Demo placeholder: label shown in the empty frame when there is no src. */
  label?: string;
  /** Demo placeholder: background tone for the empty frame. */
  tone?: string;
}

interface Props {
  /** Browser title-bar label. */
  label: string;
  screens: CarouselScreen[];
  indicator?: "segments" | "dots";
  /** Dwell per screen, ms. */
  interval?: number;
  pauseOnHover?: boolean;
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const fn = () => setReduce(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduce;
}

export default function ScreenshotCarousel({
  label,
  screens,
  indicator = "segments",
  interval = 4500,
  pauseOnHover = true,
}: Props) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 of current dwell
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false); // played through once → stop
  const [zoom, setZoom] = useState(false); // lightbox open
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  const count = screens.length;
  // The core rule: advance ONLY while in view, not paused, motion allowed,
  // lightbox closed — and only until the sequence has played through once (no
  // endless looping while the visitor scrolls). Restart is manual, via a click.
  const running = inView && !paused && !reduce && count > 1 && !finished && !zoom;

  // In-view detection — each carousel watches its own visibility, so only the
  // section the user is actually looking at ever cycles.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.5,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance + progress via rAF. Resumes from current progress after pause.
  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    let elapsed = progress * interval;
    const tick = (now: number) => {
      elapsed += now - last;
      last = now;
      if (elapsed >= interval) {
        if (active >= count - 1) {
          // Last screen done — freeze full, stop. Visitor clicks to replay.
          setProgress(1);
          setFinished(true);
          return; // no next frame
        }
        setProgress(0);
        setActive((a) => a + 1); // effect restarts on the new active
        return;
      }
      setProgress(elapsed / interval);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // progress intentionally omitted — read once on (re)start to resume smoothly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, active, interval, count]);

  // Manual click: jump there and replay the single pass from that screen.
  const goto = (i: number) => {
    setActive(i);
    setProgress(0);
    setFinished(false);
  };

  // Lightbox: lock body scroll + keyboard nav (Esc closes, arrows navigate).
  useEffect(() => {
    if (!zoom) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      else if (e.key === "ArrowRight" && count > 1) goto((active + 1) % count);
      else if (e.key === "ArrowLeft" && count > 1) goto((active - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom, active, count]);

  const hasImage = !!screens[active]?.src;

  // Touch/pointer swipe — applies to both the inline content area and the
  // lightbox. Horizontal drag past SWIPE_THRESHOLD advances/rewinds.
  const swipe = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const SWIPE_THRESHOLD = 50;
  const onSwipeStart = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return; // mouse uses click, not swipe
    swipe.current = { x: e.clientX, y: e.clientY, moved: false };
  };
  const onSwipeMove = (e: React.PointerEvent) => {
    if (!swipe.current) return;
    if (Math.abs(e.clientX - swipe.current.x) > 8 || Math.abs(e.clientY - swipe.current.y) > 8) {
      swipe.current.moved = true;
    }
  };
  const onSwipeEnd = (e: React.PointerEvent) => {
    const s = swipe.current;
    swipe.current = null;
    if (!s) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (count > 1 && Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goto((active + 1) % count);
      else goto((active - 1 + count) % count);
    }
  };
  const wasDragged = () => !!swipe.current?.moved;

  return (
    <>
    <div
      ref={rootRef}
      className="group rounded-xl overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10 flex flex-col w-full"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* macOS title bar */}
      <div className="flex items-center h-9 px-4 bg-[#f6f6f6] border-b border-black/5 shrink-0">
        <div className="flex items-center gap-[6px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] font-medium text-black/25">JustCRM — {label}</span>
        </div>
        <div className="w-[52px]" />
      </div>

      {/* Segments indicator — sits above the screen, fills like a countdown */}
      {indicator === "segments" && count > 1 && (
        <div className="flex gap-1.5 px-3 py-2 bg-white shrink-0">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => goto(i)}
              className="relative h-[3px] flex-1 rounded-full bg-black/10 overflow-hidden cursor-pointer"
              aria-label={`Скрін ${i + 1}`}
            >
              <span
                className="absolute inset-y-0 left-0 bg-black/70 rounded-full"
                style={{
                  width:
                    i < active
                      ? "100%"
                      : i === active
                      ? reduce
                        ? "100%"
                        : `${progress * 100}%`
                      : "0%",
                  transition: i === active ? "none" : "width 0.25s ease-out",
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Content area — crossfade between screens; click opens the lightbox,
          swipe-left/right navigates on touch devices */}
      <div
        className={`relative w-full bg-[#ededed] overflow-hidden select-none ${hasImage ? "cursor-zoom-in" : ""}`}
        style={{ aspectRatio: "16 / 9", touchAction: "pan-y" }}
        onClick={() => hasImage && !wasDragged() && setZoom(true)}
        onPointerDown={onSwipeStart}
        onPointerMove={onSwipeMove}
        onPointerUp={onSwipeEnd}
        onPointerCancel={onSwipeEnd}
      >
        {screens.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            {s.src ? (
              <img
                src={`${bp}${s.src}`}
                alt={s.caption || `JustCRM — ${label} (${i + 1})`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: s.tone || "#e4e4e7" }}
              >
                <span className="text-black/40 text-xl font-medium">
                  {s.label || `Скрін ${i + 1}`}
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Dots indicator — bottom overlay */}
        {indicator === "dots" && count > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goto(i);
                }}
                aria-label={`Скрін ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-2.5 h-2.5 bg-black/70"
                    : "w-2 h-2 bg-black/25 hover:bg-black/40"
                } ${i === active && running ? "animate-pulse" : ""}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>

    {/* Explicit "enlarge" affordance — sits outside the banner so the hint reads clearly */}
    {hasImage && (
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setZoom(true)}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-[13px] font-medium text-black/55 hover:text-black hover:border-black/30 hover:bg-black/[0.02] transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          Збільшити
        </button>
      </div>
    )}

    {/* Lightbox — opens the active screenshot large over a dimmed backdrop */}
    {zoom && hasImage && typeof document !== "undefined" &&
      createPortal(
        <div
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Закрити"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {count > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goto((active - 1 + count) % count);
              }}
              aria-label="Попередній"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <img
            src={`${bp}${screens[active].src}`}
            alt={screens[active].caption || `JustCRM — ${label}`}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => { e.stopPropagation(); onSwipeStart(e); }}
            onPointerMove={onSwipeMove}
            onPointerUp={(e) => { e.stopPropagation(); onSwipeEnd(e); }}
            onPointerCancel={onSwipeEnd}
            className="max-w-[92vw] max-h-[86vh] object-contain rounded-lg shadow-2xl select-none"
            style={{ touchAction: "pan-y" }}
            draggable={false}
          />

          {count > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goto((active + 1) % count);
              }}
              aria-label="Наступний"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {count > 1 && (
            <div
              className="absolute bottom-5 left-0 right-0 flex justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goto(i)}
                  aria-label={`Скрін ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
