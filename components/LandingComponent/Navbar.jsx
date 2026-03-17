"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 40);
    // Set initial scroll state immediately on mount
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Before mount: always render the "not scrolled" state to match server HTML
  const isScrolled = mounted && scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-background/88 backdrop-blur-xl border-b border-border py-[14px]" : "bg-transparent py-[20px]"}`}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-[9px] bg-primary indigo-glow text-white grid place-items-center font-mono text-sm">Rs</div>
          <span className="font-serif text-foreground text-lg">Bill Buddy</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a key={item.label} href={item.href} className="font-sans text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/sign-in"
            className="px-4 py-2 text-[13px] rounded-[10px] border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </a>
          <a
            href="/sign-up"
            className="px-5 py-2 text-[13px] rounded-[10px] bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get started free
          </a>
        </div>
      </div>
    </header>
  );
}
