"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  { num: "1", title: "Create a group", text: "Start a trip, home, or event group and add people.", tone: "primary" },
  { num: "2", title: "Add expenses",   text: "Track who paid and split using flexible methods.",   tone: "accent"  },
  { num: "3", title: "See balances",   text: "Everyone sees the same updated balances instantly.", tone: "green"   },
  { num: "4", title: "Settle via UPI", text: "Settle externally and record payments in Bill Buddy.", tone: "primary" },
];

const toneClass: Record<string, string> = {
  primary: "border-primary/35 text-primary shadow-[0_0_0_6px_#0f0f1a,0_0_0_7px_rgba(94,96,206,0.12)]",
  accent:  "border-accent/35  text-accent  shadow-[0_0_0_6px_#0f0f1a,0_0_0_7px_rgba(117,139,253,0.12)]",
  green:   "border-green/35   text-green   shadow-[0_0_0_6px_#0f0f1a,0_0_0_7px_rgba(122,229,130,0.12)]",
};

// pct thresholds at which each badge lights up
const BADGE_THRESHOLDS = [0, 0.33, 0.66, 0.99];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pct, setPct]           = useState(0);
  const [inView, setInView]     = useState(false);
  const [litBadges, setLitBadges] = useState<boolean[]>([false, false, false, false]);

  // ── Scroll-driven line progress ──────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect  = sectionRef.current.getBoundingClientRect();
      const top   = window.scrollY + rect.top;
      const start = top - window.innerHeight * 0.8;
      const end   = top + sectionRef.current.offsetHeight * 0.55;
      const next  = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
      setPct(next);
      setLitBadges(BADGE_THRESHOLDS.map((t) => next >= t));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Entrance animation (IntersectionObserver) ─────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const staggerDelay = ["delay-300", "delay-500", "delay-700", "delay-900"];

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="w-full bg-card border-y border-border py-[100px] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* Label */}
        <p
          className={`font-mono text-[10px] tracking-[3px] uppercase text-accent text-center
            transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          How it works
        </p>

        {/* Headline */}
        <h2
          className={`heading-lg text-center mt-4
            transition-all duration-700 delay-150
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          From shared cost to clean settlement
        </h2>

        {/* Steps grid */}
        <div className="relative mt-14 grid md:grid-cols-4 gap-8">

          {/* ── Connector line track (desktop only) ── */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[27px] left-[10%] right-[10%] h-0.5 bg-white/10 rounded-full overflow-visible"
          >
            {/* Green fill */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full transition-[width] duration-100"
              style={{ width: `${pct * 100}%` }}
            />

            {/* Glowing tip dot */}
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399] transition-[left] duration-100"
              style={{ left: `${pct * 100}%` }}
            />
          </div>

          {/* ── Step cards ── */}
          {steps.map((step, i) => (
            <article
              key={step.num}
              className={`text-center relative
                transition-all duration-700 ${staggerDelay[i]}
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Badge */}
              <div
                className={`mx-auto h-14 w-14 rounded-full bg-background border grid place-items-center
                  font-serif text-xl transition-all duration-300
                  ${toneClass[step.tone]}
                  ${litBadges[i]
                    ? "ring-2 ring-emerald-400/30 shadow-[0_0_20px_#34d39955] scale-110"
                    : "scale-100"
                  }`}
              >
                {/* Number pop */}
                <span
                  className={`transition-transform duration-300 ${staggerDelay[i]}
                    ${inView ? "scale-100" : "scale-0"}`}
                >
                  {step.num}
                </span>
              </div>

              <h3 className="font-serif text-[24px] mt-5">{step.title}</h3>
              <p className="font-sans text-[15px] text-muted-foreground mt-2 leading-[1.7]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
