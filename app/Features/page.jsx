"use client";

import { Badge } from "@/components/ui/badge";
import { Bolt, Bell, Users, Smartphone, Shield, Globe, TrendingUp, CreditCard } from "lucide-react";

const features = [
  { icon: Bolt, title: "Instant splitting", description: "Automatically calculate who owes what. Split equally, by percentage, or exact amounts." },
  { icon: Bell, title: "Payment reminders", description: "Never forget to settle up. Get gentle reminders when payments are due." },
  { icon: Users, title: "Group expenses", description: "Create groups for trips, households, or events and keep expenses organized." },
  { icon: Smartphone, title: "Mobile & web", description: "Access your expenses anywhere with responsive web and mobile-ready flows." },
  { icon: Shield, title: "Privacy first", description: "Your financial activity is protected with secure authentication and controls." },
  { icon: Globe, title: "INR-native", description: "Built for Indian users with ? amounts and local shared-expense context." },
  { icon: TrendingUp, title: "Rich analytics", description: "Visualize spending patterns with clear summaries and monthly insights." },
  { icon: CreditCard, title: "Smart settlements", description: "Track completed payments and stay in sync on every outstanding balance." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border border-primary/30">Features</Badge>
          <h2 className="heading-lg mt-4">Everything you need to <span className="gradient-text">split smart</span></h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto mt-3">
            Powerful features designed to make expense sharing effortless, transparent, and stress-free for everyone involved.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border bg-border grid md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="group bg-[#111111] p-5 hover:bg-[#181818] transition-colors relative">
                <div className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 bg-primary transition-transform" />
                <div className="h-12 w-12 rounded-[14px] bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="heading-sm mt-4">{feature.title}</h3>
                <p className="body-md text-muted-foreground mt-2">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

