export default function LaunchPanel() {
  const cells = [
    {
      badge: "Just launched",
      value: "v1.0",
      label: "First release",
      tone: "text-primary border-primary/35 bg-primary/12",
      dot: true,
    },
    {
      badge: "Open",
      value: "Free",
      label: "Always, for core",
      tone: "text-accent border-accent/30 bg-accent/10",
      dot: false,
    },
    {
      badge: "Early access",
      value: "India",
      label: "Built for INR and UPI",
      tone: "text-green border-green/30 bg-green/10",
      dot: false,
    },
  ];

  return (
    <div className="mt-14 max-w-[560px] mx-auto flex rounded-2xl border border-border overflow-hidden bg-card animate-fade-up-5">
      {cells.map((cell, idx) => (
        <div key={cell.value} className="flex-1 text-center p-5 hover:bg-white/[0.02] transition-colors">
          <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 border font-mono text-[9px] uppercase tracking-[1.5px] ${cell.tone}`}>
            {cell.dot ? <span className="h-[5px] w-[5px] rounded-full bg-[var(--lime)] animate-live-pulse" /> : null}
            {cell.badge}
          </div>
          <p className={`font-serif text-2xl mt-3 ${cell.tone.split(" ")[0]}`}>{cell.value}</p>
          <p className="font-mono text-[9px] uppercase tracking-[2px] text-muted-foreground mt-1">{cell.label}</p>
          {idx < cells.length - 1 ? <span className="absolute" /> : null}
        </div>
      ))}
    </div>
  );
}
