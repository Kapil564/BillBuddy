import { LockKeyhole, ShieldCheck, ReceiptText } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Transparent by default",
    text: "Every split, settlement, and balance update is visible to everyone involved.",
  },
  {
    icon: LockKeyhole,
    title: "Secure data practices",
    text: "Authentication and session handling are enforced with modern provider security controls.",
  },
  {
    icon: ReceiptText,
    title: "Traceable history",
    text: "Track who paid, when it happened, and how each amount was split across people.",
  },
];

export default function Trust() {
  return (
    <section id="security" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 animate-reveal-up">
          <p className="label-sm text-primary">Security and trust</p>
          <h2 className="heading-lg text-foreground">Built for accurate, accountable money sharing</h2>
          <p className="body-lg text-muted-foreground">
            Keep everyone aligned with clear records, secure access, and no hidden calculations.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft animate-reveal-up">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="heading-sm text-foreground mt-4">{item.title}</h3>
                <p className="body-md text-muted-foreground mt-2">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
