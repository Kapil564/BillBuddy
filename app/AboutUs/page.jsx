"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To simplify expense sharing and make financial transparency accessible to everyone, everywhere.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Built by users, for users. We listen to feedback and continuously improve based on your needs.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging modern technology to provide fast and reliable expense tracking.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge className="bg-primary/10 border border-primary/30 text-primary">About Us</Badge>
          <h2 className="heading-lg">Trusted by Millions <span className="gradient-text">Worldwide</span></h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Since 2012, we have been helping people split expenses fairly and transparently. From roommates to travelers, our platform has facilitated billions in shared expenses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="p-6 bg-card border border-border hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 text-primary grid place-items-center">
                  <Icon size={20} />
                </div>
                <h3 className="heading-sm mt-4">{value.title}</h3>
                <p className="body-md text-muted-foreground mt-2">{value.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <h3 className="heading-sm">Our Story</h3>
          <p className="body-md text-muted-foreground mt-3">
            What began as a simple college project to help friends split bills quickly grew into something bigger. We realized people needed an easier, affordable way to manage shared expenses.
          </p>
          <p className="body-md text-muted-foreground mt-3">
            Now, we are building a platform that keeps things simple, transparent, and fair for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

