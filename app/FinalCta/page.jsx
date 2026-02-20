import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

export default function FinalCta() {
  return (
    <section id="final-cta" className="relative py-20">
      <div className="absolute left-1/2 top-0 h-16 w-px bg-primary/50 -translate-x-1/2" />
      <div className="absolute left-1/2 top-20 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-lg">Ready to stop the <span className="italic text-primary">mental math?</span></h2>
        <p className="body-lg text-muted-foreground mt-3">Become a part of BillBuddy and manage shared expenses with confidence.</p>

        <div className="mt-8 max-w-[460px] mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-xl border border-border bg-card px-4 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <SignUpButton>
            <Button className="h-12 px-6 bg-primary text-background hover:bg-primary-dark">Join free</Button>
          </SignUpButton>
        </div>
      </div>
    </section>
  );
}

