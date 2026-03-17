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
    description: "Built by users, for users. We continuously improve from real feedback.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "A modern experience for fast, reliable expense tracking.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-[100px]">
      <p className="font-mono text-[10px] tracking-[3px] uppercase text-accent text-center">About Us</p>
      <h2 className="heading-lg text-center mt-4">Trusted by millions worldwide</h2>
      <p className="font-sans text-[16px] text-muted-foreground max-w-[760px] text-center mx-auto mt-3 leading-[1.7]">
        Since 2012, Bill Buddy has helped people split expenses fairly and transparently. From roommates to travelers, the platform has supported billions in shared costs.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {values.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6 hover:bg-secondary transition-colors">
              <div className="h-12 w-12 rounded-xl border border-primary/35 bg-primary/10 text-primary grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-[24px] mt-4">{item.title}</h3>
              <p className="font-sans text-[15px] text-muted-foreground mt-2 leading-[1.7]">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

