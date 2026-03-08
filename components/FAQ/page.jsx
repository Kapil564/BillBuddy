"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do friends need to sign up?",
    a: "Yes, each member needs an account so all balances and settlements remain accurate for everyone.",
  },
  {
    q: "Which UPI apps are supported?",
    a: "You can settle with any preferred UPI app and then record that settlement in Bill Buddy.",
  },
  {
    q: "Can I export expense history?",
    a: "Yes, your history remains structured for review and export workflows.",
  },
  {
    q: "Is Bill Buddy free?",
    a: "Core splitting and settlement capabilities are available on the free plan.",
  },
  {
    q: "Is there a mobile app?",
    a: "Bill Buddy is mobile responsive today, with ongoing improvements for app-like use.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="max-w-[800px] mx-auto px-5 sm:px-8 py-[100px]">
      <p className="font-mono text-[10px] tracking-[3px] uppercase text-accent text-center">FAQ</p>
      <h2 className="heading-lg text-center mt-4">Questions, answered</h2>

      <div className="mt-10">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={item.q} className="border-b border-border">
              <button className="w-full py-5 text-left flex items-center justify-between hover:text-accent transition-colors" onClick={() => setOpen(isOpen ? -1 : idx)}>
                <span className="font-sans text-[15px]">{item.q}</span>
                <span className={`text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[200px] pb-5" : "max-h-0"}`}>
                <p className="font-sans text-[14px] text-muted-foreground leading-[1.7]">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
