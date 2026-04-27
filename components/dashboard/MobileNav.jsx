"use client";

import { Home, Users, Receipt, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Contacts", href: "/dashboard/contacts" },
  { icon: Receipt, label: "Expenses", href: "/expenses/new" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-background z-50 flex justify-around items-center h-16 px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-safe">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px]">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
