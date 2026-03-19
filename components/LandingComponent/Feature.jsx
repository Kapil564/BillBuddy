"use client";

import { Bolt, Bell, Users, BarChart3, Shield, HandCoins } from "lucide-react";

const features = [
  { icon: Bolt,      title: "Instant splitting", description: "Automatically calculate who owes what with equal, percentage, and exact split types.",          tone: "primary", span: "tall" },
  { icon: HandCoins, title: "UPI-native",         description: "Bill Buddy is built around Indian payment behavior and INR-first workflows.",                    tone: "accent",  span: "normal" },
  { icon: Users,     title: "Smart settlements",  description: "Record who paid whom and keep every group balance transparent.",                                 tone: "green",   span: "normal" },
  { icon: BarChart3, title: "Rich analytics",     description: "Understand spending patterns and monthly trends with clear visual summaries.",                    tone: "primary", span: "normal" },
  { icon: Bell,      title: "Gentle reminders",   description: "Nudge friends at the right time so dues get settled without awkward follow-ups.",                tone: "accent",  span: "normal" },
  { icon: Shield,    title: "Privacy first",      description: "Built with secure auth and clear access boundaries for shared financial data — always yours.",   tone: "green",   span: "wide" },
];

const toneMap = {
  primary: { wrap: "bg-primary/12 border-primary/35 text-primary", bar: "bg-primary" },
  accent:  { wrap: "bg-accent/10  border-accent/30  text-accent",  bar: "bg-accent" },
  green:   { wrap: "bg-green/10   border-green/30   text-green",   bar: "bg-green" },
};

export default function Features() {
  const FirstFeatureIcon = features[0].icon;
  const LastFeatureIcon = features[5].icon;

  return (
    <section id="features" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-[100px]">
     <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-5 flex items-center gap-[10px] before:block before:w-7 before:h-px before:bg-accent">
  Features
</p>
      <h2 className="heading-lg max-w-[640px] mt-4">Everything you need to split smart</h2>
      <p className="font-sans font-light text-[16px] text-muted-foreground max-w-[560px] leading-[1.7] mt-3">
        Powerful features from the original Bill Buddy experience, now presented in a cleaner editorial layout.
      </p>

      {/* Bento grid */}
      <div className="mt-10 rounded-2xl overflow-hidden bg-border grid lg:grid-cols-3 grid-cols-1 gap-[2px]">

        {/* Row 1+2 left — tall card */}
        <article className="group relative bg-card hover:bg-secondary transition-colors p-9 lg:row-span-2 flex flex-col justify-end cursor-pointer">
          <div className={`absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${toneMap[features[0].tone].bar}`} />
          <div className={`h-12 w-12 rounded-[14px] border grid place-items-center ${toneMap[features[0].tone].wrap}`}>
            <FirstFeatureIcon size={20} />
          </div>
          <h3 className="font-mono text-[26px] leading-tight mt-5">{features[0].title}</h3>
          <p className="font-sans text-[15px] text-muted-foreground mt-3 leading-[1.7]">{features[0].description}</p>
        </article>

        {/* Cards 2–5: right side 2×2 */}
        {features.slice(1, 5).map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="group relative bg-card hover:bg-secondary transition-colors p-9 cursor-pointer">
              <div className={`absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${toneMap[feature.tone].bar}`} />
              <div className={`h-12 w-12 rounded-[14px] border grid place-items-center ${toneMap[feature.tone].wrap}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-mono text-[26px] leading-tight mt-5">{feature.title}</h3>
              <p className="font-sans text-[15px] text-muted-foreground mt-3 leading-[1.7]">{feature.description}</p>
            </article>
          );
        })}

        {/* Card 6 — full-width banner */}
        <article className="group relative bg-card hover:bg-secondary transition-colors p-9 lg:col-span-3 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 cursor-pointer">
          <div className={`absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${toneMap[features[5].tone].bar}`} />

          {/* Icon */}
          <div className={`h-12 w-12 shrink-0 rounded-[14px] border grid place-items-center ${toneMap[features[5].tone].wrap}`}>
            <LastFeatureIcon size={20} />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-border" />

          {/* Text */}
          <div>
            <h3 className="font-mono text-[26px] leading-tight">{features[5].title}</h3>
            <p className="font-sans text-[15px] text-muted-foreground mt-2 leading-[1.7] max-w-[600px]">{features[5].description}</p>
          </div>
        </article>

      </div>
    </section>
  );
}