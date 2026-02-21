"use client";

import { ArrowRight } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import LaunchPanel from "@/app/LaunchPanel/page";
import AppMockup from "@/app/AppMockup/page";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center pt-[120px] pb-[80px] px-5 sm:px-8 overflow-hidden">
      <div className="absolute pointer-events-none blur-[90px] opacity-30 top-[15%] -left-[120px] w-[480px] h-[360px] bg-[radial-gradient(circle,var(--indigo),transparent)] animate-float-orb" />
      <div className="absolute pointer-events-none blur-[90px] opacity-30 bottom-[10%] -right-[80px] w-[380px] h-[380px] bg-[radial-gradient(circle,var(--periwinkle),transparent)] animate-float-orb" style={{ animationDuration: "13s", animationDelay: "-5s" }} />

      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-card border border-border font-mono text-[10px] tracking-[3px] uppercase text-muted-foreground animate-fade-up-1">
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--lime)] animate-live-pulse" />
        Now in public beta
      </div>

      <h1 className="heading-hero max-w-[900px] mt-6 animate-fade-up-2">
        Split expenses,<br />not <em className="italic text-[var(--lime)]">friendships.</em>
      </h1>

      <p className="body-lg text-muted-foreground max-w-[540px] mt-6 animate-fade-up-3">
        Track shared expenses with friends and family. Split bills, settle debts, and keep everyone in sync with one clear bill.
      </p>

      <div className="flex flex-col sm:flex-row gap-[14px] items-center mt-10 animate-fade-up-4">
        <SignUpButton>
          <button className="inline-flex items-center gap-2 rounded-xl px-[34px] py-[15px] text-[15px] bg-primary text-white font-semibold hover:bg-primary-dark">
            Start for free <ArrowRight size={16} />
          </button>
        </SignUpButton>
        <button className="inline-flex items-center gap-2 rounded-xl px-[34px] py-[15px] text-[15px] border border-border text-muted-foreground hover:text-foreground">
          Watch demo
        </button>
      </div>

      <LaunchPanel />

      <div className="mt-10 w-full">
        <AppMockup />
      </div>
    </section>
  );
}
