import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
};

const NOTCH = 10;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const clip = `polygon(0 0, calc(100% - ${NOTCH}px) 0, 100% ${NOTCH}px, 100% 100%, 0 100%)`;

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`relative z-10 inline-block font-mono text-[12px] font-medium uppercase tracking-wide text-black/70 px-6 py-2.5 transition-all hover:text-black ${className}`}
      >
        {/* Border via clipped pseudo-layer */}
        <span
          className="absolute inset-0 bg-black/15 transition-colors hover:bg-black/25"
          style={{ clipPath: clip }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-[1px] bg-white/80 backdrop-blur-sm"
          style={{ clipPath: clip }}
          aria-hidden="true"
        />
        <span className="relative">{children}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`relative z-10 inline-block font-mono text-[12px] font-medium uppercase tracking-wide text-white bg-[#1c1c1c] px-6 py-2.5 transition-all hover:bg-[#333] hover:shadow-lg hover:shadow-black/10 ${className}`}
      style={{ clipPath: clip }}
    >
      {children}
    </Link>
  );
}
