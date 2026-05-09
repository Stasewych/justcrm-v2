const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BrowserFrame({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/10 overflow-hidden">
      {/* macOS title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#f6f6f6] border-b border-black/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-16">
          <div className="mx-auto max-w-sm h-6 rounded-md bg-white/80 border border-black/5 flex items-center justify-center">
            <span className="text-[11px] text-black/30 font-medium">
              app.justcrm.com
            </span>
          </div>
        </div>
        <div className="w-[52px]" />
      </div>

      {/* Content area */}
      <div className="relative">
        {children || (
          <img
            src={`${bp}/images/crm-hero.png`}
            alt="JustCRM — контакти, справи, білінг"
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}
