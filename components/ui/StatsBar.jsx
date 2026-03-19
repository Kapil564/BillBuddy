export default function StatsBar() {
  return (
    <div className="w-full max-w-[680px] mx-auto mt-14 px-5 animate-fade-up-5">
      <div className="relative rounded-[1.5rem] bg-white p-6 md:p-8 
      shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[var(--border)]">

        {/* Blurred green orbs - scaled down */}
        <div className="absolute -top-16 -left-16 w-32 h-32 
        bg-[var(--green)]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-32 h-32 
        bg-emerald-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">

          {/* Column 1 — v1.0 */}
          <div className="flex flex-col items-center text-center px-2 relative">
            <div className="absolute right-0 top-1/4 h-1/2 w-px 
            bg-gradient-to-b from-transparent via-[var(--ink)]/10 
            to-transparent hidden md:block" />
            <span className="inline-flex items-center px-3 py-1 rounded-full 
            bg-white border border-[var(--green)]/20 text-[var(--green)] 
            text-[8px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm font-mono">
              Just Launched
            </span>
            <h3 className="font-heading font-black text-3xl md:text-4xl 
            text-[var(--ink)] mb-2 drop-shadow-sm">
              v1.0
            </h3>
            <p className="text-[9px] tracking-[0.1em] text-[var(--ink-soft)] 
            uppercase font-semibold font-mono">
              First Release
            </p>
          </div>

          {/* Column 2 — Free (shimmer) */}
          <div className="flex flex-col items-center text-center px-2 relative group">
            <div className="absolute right-0 top-1/4 h-1/2 w-px 
            bg-gradient-to-b from-transparent via-[var(--ink)]/10 
            to-transparent hidden md:block" />
            <span className="inline-flex items-center px-3 py-1 rounded-full 
            bg-[var(--green)]/5 border border-[var(--green)]/30 
            text-[var(--green)] text-[8px] font-bold tracking-[0.2em] 
            uppercase mb-4 shadow-sm font-mono">
              Open
            </span>
            <h3 className="font-heading font-black text-3xl md:text-4xl mb-2 
            text-shine-light drop-shadow-[0_0_12px_rgba(52,211,153,0.5)] 
            group-hover:scale-105 transition-transform duration-500">
              Free
            </h3>
            <p className="text-[9px] tracking-[0.1em] text-[var(--ink)] 
            uppercase font-bold font-mono">
              Always, For Core
            </p>
          </div>

          {/* Column 3 — India */}
          <div className="flex flex-col items-center text-center px-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full 
            bg-white border border-[var(--green)]/20 text-[var(--green)] 
            text-[8px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm font-mono">
              Early Access
            </span>
            <h3 className="font-heading font-black text-3xl md:text-4xl 
            text-[var(--ink)] mb-2 drop-shadow-sm">
              India
            </h3>
            <p className="text-[9px] tracking-[0.1em] text-[var(--ink-soft)] 
            uppercase font-semibold font-mono">
              Built for INR and UPI
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
