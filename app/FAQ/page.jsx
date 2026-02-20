"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do all my friends need to sign up?",
    a: "Yes, each member should have an account so expenses, balances, and settlements stay accurate for everyone.",
  },
  {
    q: "Can we settle with UPI apps?",
    a: "You can settle externally using your preferred UPI app and then record it in BillBuddy for clean tracking.",
  },
  {
    q: "Can I export expense records?",
    a: "Yes, your expense history remains structured so you can review and export details whenever needed.",
  },
  {
    q: "Is BillBuddy free to use?",
    a: "Core expense splitting and settlement tracking are available to all users.",
  },
  {
    q: "Is there a mobile app?",
    a: "BillBuddy is fully responsive on mobile web, with ongoing improvements for app-like usage.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">FAQ</p>
          <h2 className="heading-lg mt-4">Everything you need to know</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = idx === open;
            return (
              <div key={item.q} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  type="button"
                  className="w-full px-5 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <span className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`px-5 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
                  <p className="body-md text-muted-foreground">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

