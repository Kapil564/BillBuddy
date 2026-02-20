"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, LayoutDashboardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { useStoreUser } from "@/hooks/use-store-user";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useStoreUser();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-foreground">
          <span className="h-7 w-7 rounded-md bg-primary/15 border border-primary/40 text-primary grid place-items-center font-mono text-sm">?</span>
          <span className="font-serif text-lg">Bill Buddy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Authenticated>
            <Link href="/dashboard">
              <Button className="bg-primary text-background hover:bg-primary-dark">
                <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <UserButton appearance={{ elements: { userButtonAvatarBox: { width: "2.2rem", height: "2.2rem" } } }} />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <button className="px-3 py-2 rounded-md text-sm text-muted-foreground border border-border hover:text-foreground">Sign in</button>
            </SignInButton>
            <SignUpButton>
              <button className="px-3.5 py-2 rounded-md text-sm font-medium bg-primary text-background hover:bg-primary-dark">
                Get started free
              </button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen((v) => !v)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm text-foreground hover:bg-white/5">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

