const steps = [
  { num: "1", title: "Create a group", text: "Start a trip, home, or event group and add people." , tone:"primary"},
  { num: "2", title: "Add expenses", text: "Track who paid and split using flexible methods.", tone:"accent" },
  { num: "3", title: "See balances", text: "Everyone sees the same updated balances instantly.", tone:"green" },
  { num: "4", title: "Settle via UPI", text: "Settle externally and record payments in Bill Buddy.", tone:"primary" },
];

const toneClass = {
  primary: "border-primary/35 text-primary shadow-[0_0_0_6px_#0f0f1a,0_0_0_7px_rgba(94,96,206,0.12)]",
  accent: "border-accent/35 text-accent shadow-[0_0_0_6px_#0f0f1a,0_0_0_7px_rgba(117,139,253,0.12)]",
  green: "border-green/35 text-green shadow-[0_0_0_6px_#0f0f1a,0_0_0_7px_rgba(122,229,130,0.12)]",
};

export default function HowItWorks() {
  return (
    <section id="workflow" className="w-full bg-card border-y border-border py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <p className="font-mono text-[10px] tracking-[3px] uppercase text-accent text-center">How it works</p>
        <h2 className="heading-lg text-center mt-4">From shared cost to clean settlement</h2>

        <div className="relative mt-14 grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/35 via-accent/35 via-green/35 to-transparent" />
          {steps.map((step) => (
            <article key={step.num} className="text-center relative">
              <div className={`mx-auto h-14 w-14 rounded-full bg-background border grid place-items-center font-serif text-xl ${toneClass[step.tone]}`}>
                {step.num}
              </div>
              <h3 className="font-serif text-[24px] mt-5">{step.title}</h3>
              <p className="font-sans text-[15px] text-muted-foreground mt-2 leading-[1.7]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
