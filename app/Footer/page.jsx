"use client";

const links = ["Features", "Blog", "Privacy", "Terms", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 sm:px-8 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-5 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="h-[26px] w-[26px] rounded-md bg-primary text-white grid place-items-center font-mono text-[10px]">Rs</span>
          <span className="font-serif text-foreground">Bill Buddy</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          {links.map((item) => (
            <a key={item} href="#" className="font-mono text-[12px] text-muted-foreground hover:text-accent transition-colors">
              {item}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] text-muted-foreground">Copyright 2026 Bill Buddy Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
