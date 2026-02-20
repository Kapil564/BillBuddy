import { Star } from "lucide-react";

const logos = ["NOVA", "HARBOUR", "HORIZON", "PLAINCO", "WESTEND"];

const stats = [
  { value: "120K+", label: "Monthly active users" },
  { value: "$8.4M", label: "Expenses settled" },
  { value: "99.9%", label: "Service reliability" },
  { value: "4.9/5", label: "Average rating" },
];

export default function SocialProof() {
  return (
    <section id="proof" className="py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-soft animate-reveal-up">
          <p className="label-sm text-muted-foreground text-center">Trusted by teams and roommates worldwide</p>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {logos.map((logo) => (
              <div key={logo} className="rounded-xl border border-border bg-background/80 py-3 font-semibold text-muted-foreground">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-reveal-up">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="heading-sm text-foreground">{item.value}</div>
              <p className="body-md text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft animate-reveal-up">
          <div className="flex items-center gap-2 text-amber-500 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="body-lg text-foreground">
            "BillBuddy removed every awkward money conversation in our flat. Everyone sees the same numbers, and settlements happen fast."
          </p>
          <p className="body-md text-muted-foreground mt-3">Priya S., Operations Lead</p>
        </div>
      </div>
    </section>
  );
}
