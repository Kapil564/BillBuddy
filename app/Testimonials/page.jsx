const testimonials = [
  {
    quote: "Trip expenses used to end in arguments. BillBuddy made every split transparent for our whole group.",
    name: "Sneha Reddy",
    city: "Hyderabad",
  },
  {
    quote: "The dashboard makes balances obvious. We now settle weekly without reminders or awkward messages.",
    name: "Tarun Nair",
    city: "Bengaluru",
  },
  {
    quote: "From rent to dinners, everything is in one place. The app keeps our flat finances fair and simple.",
    name: "Priya Menon",
    city: "Mumbai",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Testimonials</p>
          <h2 className="heading-lg mt-4">Loved by users across India</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <article
              key={item.name}
              className={`rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 ${idx === 1 ? "md:mt-7" : ""}`}
            >
              <div className="font-serif text-[28px] leading-none text-primary">"</div>
              <p className="body-md text-foreground mt-4">{item.quote}</p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-6">
                {item.name} · {item.city}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

