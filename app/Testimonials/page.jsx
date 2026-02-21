"use client";

const testimonials = [
  {
    quote: "Trip expenses used to be chaos. Bill Buddy made every split obvious for everyone.",
    person: "Sneha Reddy",
    role: "Travel content creator, Hyderabad",
    tone: "border-l-primary text-primary",
  },
  {
    quote: "Our apartment payments are finally smooth. We settle weekly without confusion.",
    person: "Tarun Nair",
    role: "Software engineer, Bengaluru",
    tone: "border-l-accent text-accent",
  },
  {
    quote: "From rent to groceries, one dashboard keeps us fair and accountable.",
    person: "Priya Menon",
    role: "Product manager, Mumbai",
    tone: "border-l-green text-green",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-[100px]">
      <p className="font-mono text-[10px] tracking-[3px] uppercase text-accent text-center">Testimonials</p>
      <h2 className="heading-lg text-center mt-4">Loved by groups across India</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <article key={item.person} className={`rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 transition-transform border-l-[3px] ${item.tone} ${idx === 1 ? "md:mt-7" : ""}`}>
            <p className="font-sans text-[15px] text-foreground leading-[1.7]">{item.quote}</p>
            <p className="font-serif text-[22px] mt-6 text-foreground">{item.person}</p>
            <p className="font-mono text-[11px] text-muted-foreground mt-1">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
