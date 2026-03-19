export function BadgeDot({ className = "" }) {
  return (
    <span className={`w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse inline-block ${className}`} />
  );
}
