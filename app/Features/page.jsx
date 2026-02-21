"use client";

import { Bolt, Bell, Users, BarChart3, Shield, HandCoins } from "lucide-react";

const features = [
  { icon: Bolt, title: "Instant splitting", description: "Automatically calculate who owes what with equal, percentage, and exact split types.", tone: "primary" },
  { icon: HandCoins, title: "UPI-native", description: "Bill Buddy is built around Indian payment behavior and INR-first workflows.", tone: "accent" },
  { icon: Users, title: "Smart settlements", description: "Record who paid whom and keep every group balance transparent.", tone: "green" },
  { icon: BarChart3, title: "Rich analytics", description: "Understand spending patterns and monthly trends with clear visual summaries.", tone: "primary" },
  { icon: Bell, title: "Gentle reminders", description: "Nudge friends at the right time so dues get settled without awkward follow-ups.", tone: "accent" },
  { icon: Shield, title: "Privacy first", description: "Built with secure auth and clear access boundaries for shared financial data.", tone: "green" },
];

const toneMap = {
  primary: "bg-primary/12 border-primary/35 text-primary before:bg-primary",
  accent: "bg-accent/10 border-accent/30 text-accent before:bg-accent",
  green: "bg-green/10 border-green/30 text-green before:bg-green",
};

export default function Features() {
  return (
    <section id="features" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-[100px]">
      <p className="font-mono text-[10px] tracking-[3px] uppercase text-accent">Features</p>
      <h2 className="heading-lg max-w-[640px] mt-4">Everything you need to split smart</h2>
      <p className="font-sans font-light text-[16px] text-muted-foreground max-w-[560px] leading-[1.7] mt-3">
        Powerful features from the original Bill Buddy experience, now presented in a cleaner editorial layout.
      </p>

      <div className="mt-10 rounded-2xl overflow-hidden bg-border grid md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="group relative bg-card hover:bg-secondary transition-colors p-9">
              <div className={`absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${toneMap[feature.tone].split(" ")[3]}`} />
              <div className={`h-12 w-12 rounded-[14px] border grid place-items-center ${toneMap[feature.tone].split(" ").slice(0,3).join(" ")}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-[26px] leading-tight mt-5">{feature.title}</h3>
              <p className="font-sans text-[15px] text-muted-foreground mt-3 leading-[1.7]">{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
