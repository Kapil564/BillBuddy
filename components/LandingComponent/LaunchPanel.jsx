export default function LaunchPanel() {
  const cells = [
    {
      badge: "Just launched",
      value: "v1.0",
      label: "First release",
      tone: "border-primary/35 bg-primary/10",
      textColor: "text-primary",
      dot: true,
    },
    {
      badge: "Open",
      value: "Free",
      label: "Always, for core",
      tone: "border-accent/30 bg-accent/10",
      textColor: "text-accent",
      dot: false,
    },
    {
      badge: "Early access",
      value: "India",
      label: "Built for INR and UPI",
      tone: "border-green/30 bg-green/10",
      textColor: "text-green",
      dot: false,
    },
  ];

  return (
    <div className="mt-14 max-w-[560px] mx-auto flex rounded-2xl border border-border overflow-hidden bg-card animate-fade-up-5">
      {cells.map((cell) => (
        <div key={cell.value} className="flex-1 text-center p-5 hover:bg-white/[0.02] transition-colors">
          <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 border font-mono text-[9px] uppercase tracking-[1.5px] ${cell.textColor} ${cell.tone}`}>
            {cell.dot && (
              <span className="h-[5px] w-[5px] rounded-full bg-[var(--lime)] animate-live-pulse" />
            )}
            {cell.badge}
          </div>
          <p className={`font-serif text-2xl mt-3 ${cell.textColor}`}>{cell.value}</p>
          <p className="font-mono text-[9px] uppercase tracking-[2px] text-muted-foreground mt-1">{cell.label}</p>
        </div>
      ))}
    </div>
  );
}

