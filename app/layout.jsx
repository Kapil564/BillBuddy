import { Fraunces, DM_Mono, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./global.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "700", "900"],
  style: ["normal"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Bill Buddy - Split Expenses, Not Friendships",
  description: "Track shared expenses with friends. UPI-native, built for India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmMono.variable} ${syne.variable}`}>
      <body className="bg-background text-foreground antialiased relative">
        <div 
          className="fixed inset-0 pointer-events-none z-[100] opacity-50"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")` }}
        />
        <ClerkProvider 
          afterSignOutUrl="/"
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
        >
          <ConvexClientProvider>
            <Toaster richColors />
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
