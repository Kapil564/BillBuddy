"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";

const highlights = ["Easy to Use", "Secure & Transparent", "For Friends, Families & Teams"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-green/20 blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary animate-reveal-up">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Now in public beta
        </div>

        <h1 className="heading-hero mt-7 animate-reveal-up">
          Split expenses, not <span className="italic text-primary underline decoration-primary/50">friendships.</span>
        </h1>

        <p className="body-lg text-muted-foreground max-w-3xl mx-auto mt-6 animate-reveal-up">
          Track shared expenses with friends and family. Split bills, settle debts, and keep everyone in sync with our intuitive platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-reveal-up">
          <SignUpButton>
            <Button size="lg" className="bg-primary text-background hover:bg-primary-dark">
              Get Started for Free
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </SignUpButton>
          <Button size="lg" variant="outline" className="border-border text-muted-foreground hover:text-foreground">
            Watch Demo
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 animate-reveal-up">
          <div className="flex -space-x-2">
            {["A", "B", "C", "D", "E"].map((x) => (
              <div key={x} className="h-8 w-8 rounded-full border border-border bg-[#1a1a1a] text-xs grid place-items-center text-muted-foreground">{x}</div>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground">????? Loved by 12,000+ groups across India</p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-[#111111] shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden animate-reveal-up text-left">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="p-4 border-b border-border flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-2 text-xs font-mono text-muted-foreground">app.billbuddy.in — Goa Trip ???</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] min-h-[330px]">
            <aside className="border-r border-border p-4 space-y-5">
              <div className="flex items-center gap-2"><span className="text-primary font-mono">?</span><span className="font-serif">Bill Buddy</span></div>
              <nav className="space-y-2 text-sm">
                <div className="px-3 py-2 rounded-md bg-primary/10 text-primary border border-primary/30">Dashboard</div>
                <div className="px-3 py-2 text-muted-foreground">Groups</div>
                <div className="px-3 py-2 text-muted-foreground">Settlements</div>
              </nav>
              <div className="space-y-2 text-xs font-mono">
                <div className="text-muted-foreground">Goa Trip</div>
                <div className="text-muted-foreground">Flat 302</div>
                <div className="text-muted-foreground">Weekend Ride</div>
              </div>
            </aside>

            <div className="p-4">
              <div className="grid sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="rounded-lg border border-border p-3"><p className="text-muted-foreground">Total</p><p className="text-primary mt-1">?38,470</p></div>
                <div className="rounded-lg border border-border p-3"><p className="text-muted-foreground">You Owe</p><p className="text-red-400 mt-1">?2,180</p></div>
                <div className="rounded-lg border border-border p-3"><p className="text-muted-foreground">Owed</p><p className="text-green-400 mt-1">?4,120</p></div>
                <div className="rounded-lg border border-border p-3"><p className="text-muted-foreground">Net</p><p className="text-green-400 mt-1">+?1,940</p></div>
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-border p-3">
                  <p className="font-medium">Recent Expenses</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Beach shack dinner — ?3,200</li>
                    <li>Scooter rentals — ?2,400</li>
                    <li>Fuel & parking — ?1,100</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="font-medium">Balances</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Rohan owes you ?780</li>
                    <li>You owe Anaya ?420</li>
                    <li>Vikram owes you ?1,540</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {highlights.map((item) => (
            <div key={item} className="rounded-lg border border-border bg-card/60 py-3 px-4 text-sm text-muted-foreground">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

