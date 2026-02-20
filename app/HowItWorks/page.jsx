const steps = [
  {
    num: "1",
    title: "Create a group",
    text: "Start a trip, household, or event group and invite your people in seconds.",
  },
  {
    num: "2",
    title: "Add expenses",
    text: "Log who paid and split equally, by percentage, or with exact amounts.",
  },
  {
    num: "3",
    title: "See balances",
    text: "Instantly know who owes whom with full transparency across the group.",
  },
  {
    num: "4",
    title: "Settle quickly",
    text: "Record payments and settle up with familiar options like UPI.",
  },
];

export default function HowItWorks() {
  return (
    <section id="workflow" className="relative border-y border-border py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">How it works</p>
          <h2 className="heading-lg mt-4">Simple flow, <span className="gradient-text">zero confusion</span></h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {steps.map((step) => (
            <div key={step.num} className="relative text-center">
              <div className="mx-auto h-14 w-14 rounded-full border border-primary/40 bg-background flex items-center justify-center text-primary font-serif text-xl shadow-[0_0_0_6px_#111111,0_0_0_7px_rgba(232,184,75,0.12)]">
                {step.num}
              </div>
              <h3 className="heading-sm mt-5">{step.title}</h3>
              <p className="body-md text-muted-foreground mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

