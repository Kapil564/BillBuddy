export default function AppMockup() {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto animate-fade-up-6">
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-card shadow-[0_80px_160px_rgba(0,0,0,0.7)]">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/60 via-accent/60 to-transparent" />

        <div className="bg-[#0a0a14] border-b border-border px-5 py-3.5 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="flex-1 rounded-md border border-white/10 bg-white/5 py-1.5 px-3.5 text-center font-mono text-[11px] text-muted-foreground">
            app.billbuddy.in - Goa Trip
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-[400px]">
          <aside className="bg-[#090912] border-r border-border p-3">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-[22px] w-[22px] rounded-md bg-primary text-white grid place-items-center font-mono text-[10px]">Rs</span>
              <span className="font-serif text-[13px]">Bill Buddy</span>
            </div>
            <p className="font-mono text-[8px] tracking-[1.8px] text-muted-foreground uppercase mb-2">Menu</p>
            <div className="space-y-1 text-[12px]">
              <div className="rounded-md px-2 py-1.5 bg-primary/12 text-primary">Dashboard</div>
              <div className="rounded-md px-2 py-1.5 text-muted-foreground">Transactions</div>
              <div className="rounded-md px-2 py-1.5 text-muted-foreground">Balances</div>
              <div className="rounded-md px-2 py-1.5 text-muted-foreground">Analytics</div>
            </div>
            <p className="font-mono text-[8px] tracking-[1.8px] text-muted-foreground uppercase mt-5 mb-2">Groups</p>
            <div className="space-y-1.5 text-[12px] text-muted-foreground">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" />Goa Trip</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green" />Flat No. 4B</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />Office Lunches</div>
            </div>
          </aside>

          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 font-mono text-[11px]">
              <div className="rounded-lg border border-primary/35 p-2.5"><p className="text-muted-foreground">TOTAL SPENT</p><p className="text-accent mt-1">INR 38,470</p></div>
              <div className="rounded-lg border border-border p-2.5"><p className="text-muted-foreground">YOU OWE</p><p className="text-red-400 mt-1">INR 2,180</p></div>
              <div className="rounded-lg border border-border p-2.5"><p className="text-muted-foreground">OWED TO YOU</p><p className="text-green mt-1">INR 4,120</p></div>
              <div className="rounded-lg border border-border p-2.5"><p className="text-muted-foreground">NET BALANCE</p><p className="text-green mt-1">+INR 1,940</p></div>
            </div>

            <div className="grid md:grid-cols-[1fr_140px] gap-2.5 text-[12px]">
              <div className="rounded-lg border border-border p-3">
                <p className="font-medium">Recent Expenses</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>Beach shack dinner - INR 3,200</li>
                  <li>Scooter rentals - INR 2,400</li>
                  <li>Airbnb - INR 12,600</li>
                  <li>Scuba activity - INR 4,100</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="font-medium">Balances</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>RK - INR 800</li>
                  <li>PM - INR 1,380</li>
                  <li>AS +INR 2,860</li>
                  <li>VT +INR 1,260</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-[200px] bg-[radial-gradient(circle,rgba(94,96,206,0.25)_0%,rgba(117,139,253,0.16)_45%,transparent_75%)] blur-xl" />
    </div>
  );
}
