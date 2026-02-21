export default function FinalCta() {
  return (
    <section id="final-cta" className="relative border-t border-border bg-card text-center py-[100px] px-5 sm:px-8 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(94,96,206,0.07)_0%,rgba(117,139,253,0.04)_45%,transparent_72%)]" />

      <div className="relative max-w-[760px] mx-auto">
        <h2 className="heading-lg">Ready to stop the <em className="italic text-[var(--lime)]">mental math?</em></h2>
        <p className="font-sans text-[16px] font-light text-muted-foreground max-w-[420px] mx-auto mt-4 leading-[1.6]">
          Join Bill Buddy and manage shared expenses with confidence and full clarity.
        </p>

        <div className="mt-7 max-w-[460px] mx-auto flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 bg-background border border-border rounded-xl px-5 py-3.5 font-sans text-[14px] placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <button className="rounded-xl px-7 py-3.5 bg-primary text-white font-semibold hover:bg-primary-dark">Join free</button>
        </div>

        <p className="font-mono text-[11px] text-muted-foreground mt-4">No credit card - Free forever plan available</p>
      </div>
    </section>
  );
}
