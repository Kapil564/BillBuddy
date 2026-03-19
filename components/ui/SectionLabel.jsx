export function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.12em] uppercase text-[var(--ink-soft)] before:content-[''] before:block before:w-7 before:h-px before:bg-[var(--ink-soft)] ${className}`}>
      {children}
    </div>
  );
}
