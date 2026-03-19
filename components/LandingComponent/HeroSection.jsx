"use client";

import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import AppMockup from "@/components/LandingComponent/AppMockup";
import StatsBar from "@/components/ui/StatsBar";

export default function Hero() {
  return (
    <section id="home" className="relative cursor-pointer min-h-screen flex flex-col items-center justify-center text-center pt-[120px] pb-[80px] px-5 sm:px-8 overflow-hidden">
      <div className="absolute pointer-events-none blur-[90px] opacity-30 top-[15%] -left-[120px] w-[480px] h-[360px] bg-[radial-gradient(circle,var(--indigo),transparent)] animate-float-orb" />
      <div className="absolute pointer-events-none blur-[90px] opacity-30 bottom-[10%] -right-[80px] w-[380px] h-[380px] bg-[radial-gradient(circle,var(--periwinkle),transparent)] animate-float-orb" style={{ animationDuration: "13s", animationDelay: "-5s" }} />

      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-emerald-50 border border-emerald-200 font-sans text-[10px] tracking-[3px] uppercase text-emerald-700 font-bold shadow-sm animate-fade-up-1">
        <span className="relative flex h-[6px] w-[6px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500"></span>
        </span>
        Now in public beta
      </div>

      <h1 className="heading-hero max-w-[900px] mt-6 animate-fade-up-2">
        Split expenses,<br />not <em className="relative italic text-[var(--green)]">friendships.</em>
      </h1>

      <p className="body-lg text-muted-foreground max-w-[540px] mt-6 animate-fade-up-3">
        Track shared expenses with friends and family. Split bills, settle debts, and keep everyone in sync with one clear bill.
      </p>

      <div className="flex flex-col sm:flex-row gap-[14px] items-center mt-10 animate-fade-up-4">
        <SignInButton>
          <button className="inline-flex items-center gap-2 rounded-xl px-[34px] py-[15px] text-[15px] bg-primary text-white font-semibold hover:bg-primary-dark">
            Start for free <ArrowRight size={16} />
          </button>
        </SignInButton>
        <button className="inline-flex items-center gap-2 rounded-xl px-[34px] py-[15px] text-[15px] border border-border text-muted-foreground hover:text-foreground">
          Watch demo
        </button>
      </div>

      <StatsBar />

      <div className="mt-14 w-full">
        <AppMockup />
      </div>
    </section>
  );
}
