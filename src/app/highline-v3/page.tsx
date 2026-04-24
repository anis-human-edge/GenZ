"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  BatteryCharging,
  Menu,
  X,
} from "lucide-react";

const trackEvent = (eventName: string, props?: Record<string, unknown>) => {
  console.log(`[Tracking] ${eventName}`, props);
};

const LOGO_URL =
  "https://xepoqvwvwgglwyjelqsw.supabase.co/storage/v1/object/public/Images/GenZ-logo-w-blue.png";

const inventory = [
  { stock: "HL-4821", year: 2019, make: "BMW", model: "X5 xDrive40i", miles: 87420, category: "Luxury SUV", risk: "High Mileage", wholesale: 24500, retail: 31200, vsc: 1850, uplift: 6700 },
  { stock: "HL-3297", year: 2020, make: "Mercedes-Benz", model: "GLE 350", miles: 112300, category: "Luxury SUV", risk: "100K+ Miles", wholesale: 22800, retail: 29900, vsc: 1950, uplift: 7100 },
  { stock: "HL-5510", year: 2018, make: "Audi", model: "Q7 Premium Plus", miles: 134750, category: "Luxury SUV", risk: "High Mileage", wholesale: 18200, retail: 25800, vsc: 1800, uplift: 7600 },
  { stock: "HL-2103", year: 2021, make: "Tesla", model: "Model Y Long Range", miles: 68900, category: "Electric Vehicle", risk: "Battery Degradation", wholesale: 27400, retail: 35500, vsc: 2000, uplift: 8100 },
  { stock: "HL-6744", year: 2017, make: "Land Rover", model: "Range Rover Sport", miles: 156200, category: "Luxury SUV", risk: "150K+ Miles", wholesale: 19600, retail: 27400, vsc: 1750, uplift: 7800 },
  { stock: "HL-1888", year: 2020, make: "Porsche", model: "Cayenne", miles: 91300, category: "Exotic Vehicle", risk: "Exotic + High Miles", wholesale: 38500, retail: 47200, vsc: 2000, uplift: 8700 },
  { stock: "HL-7392", year: 2019, make: "Ford", model: "F-350 Super Duty", miles: 178400, category: "Heavy Duty Truck", risk: "High Mileage + DRW", wholesale: 32100, retail: 39800, vsc: 1900, uplift: 7700 },
  { stock: "HL-0456", year: 2022, make: "Rivian", model: "R1S Adventure", miles: 42100, category: "Electric Vehicle", risk: "EV Battery Risk", wholesale: 48200, retail: 57500, vsc: 2000, uplift: 9300 },
  { stock: "HL-9021", year: 2018, make: "Maserati", model: "Levante GranLusso", miles: 103600, category: "Exotic Vehicle", risk: "Exotic + 100K+", wholesale: 21300, retail: 29500, vsc: 1850, uplift: 8200 },
  { stock: "HL-3150", year: 2021, make: "RAM", model: "3500 Limited", miles: 89200, category: "Heavy Duty Truck", risk: "Commercial Use", wholesale: 44700, retail: 52900, vsc: 1950, uplift: 8200 },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("v3-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".v3-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ═══════════════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════════════ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#math", label: "The Math" },
    { href: "#why-us", label: "Why Us" },
    { href: "#coverage", label: "Coverage" },
    { href: "#stories", label: "Stories" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #E7E5E4" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-8 flex h-20 items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={LOGO_URL} alt="GenZ Protect" className="h-7 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-[#78716C] hover:text-[#0A0A0A] transition-colors"
                onClick={() => trackEvent("Nav Click", { link: l.label })}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            onClick={() => trackEvent("CTA Click", { location: "Nav" })}
            className="inline-flex items-center gap-2 rounded-full px-7 py-2.5 bg-[#0A0A0A] text-white text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            Book a Call
          </a>
        </div>

        <button className="md:hidden p-2 -m-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-[#0A0A0A]" /> : <Menu className="h-6 w-6 text-[#0A0A0A]" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute w-full bg-white border-b border-[#E7E5E4] px-8 py-8 shadow-xl">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[#0A0A0A] font-medium text-lg">
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="mt-4 bg-[#0A0A0A] text-white font-semibold py-3.5 text-center rounded-full">
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-20 bg-white">
      <div className="mx-auto max-w-6xl px-8 w-full v3-reveal">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#A8A29E] mb-8">
          Built for dealers who hate leaving money at auction
        </p>

        <h1 className="font-display text-[clamp(2.75rem,6vw,6.5rem)] font-bold leading-[0.95] tracking-tighter text-[#0A0A0A] mb-14 max-w-[92%]">
          Retail 5 to 6 more cars a month your current provider
          <span className="text-[#D6D3D1]"> won&apos;t touch.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="text-xl sm:text-2xl leading-relaxed text-[#78716C] font-light max-w-xl">
              We don&apos;t replace your provider. We cover the cars they won&apos;t.
              <span className="block mt-4 text-[#0A0A0A] font-normal">
                The deals you currently send to auction become the backend you wish you had.
              </span>
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-3">
            <a
              href="#math"
              onClick={() => trackEvent("Hero CTA", { action: "Math" })}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-[#0A0A0A] text-white text-base font-semibold transition-transform hover:scale-[1.03] active:scale-[0.97] w-full"
            >
              Show Me The Math
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#book"
              onClick={() => trackEvent("Hero CTA", { action: "Book" })}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-white border border-[#E7E5E4] text-[#0A0A0A] text-base font-semibold transition-colors hover:bg-[#F5F5F4] w-full"
            >
              Book 15 Min With Jason
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PITCH
   ═══════════════════════════════════════════════════════════════════ */

function Pitch() {
  return (
    <section className="py-32 sm:py-40 bg-[#F5F5F4] border-t border-[#E7E5E4]">
      <div className="mx-auto max-w-4xl px-8 text-center v3-reveal">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#A8A29E] mb-12">
          The 10-Second Version
        </p>

        <p className="text-xl sm:text-2xl leading-relaxed font-light text-[#78716C] max-w-3xl mx-auto">
          Every month, your store <span className="text-[#0A0A0A] font-normal">wholesales decent cars</span> because
          your provider won&apos;t cover them. High mileage, rideshare, lifted, branded. The recon math
          doesn&apos;t work. Finance has nothing to sell.{" "}
          <span className="text-[#0A0A0A] font-normal">We cover those cars.</span> You retail them.
          You pocket ~$2,000 in backend per unit. Five to six units a month adds up to{" "}
          <span className="text-[#0A0A0A] font-semibold underline decoration-[#C8A951] decoration-2 underline-offset-4">
            $120,000 a year left behind.
          </span>
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CALCULATOR
   ═══════════════════════════════════════════════════════════════════ */

function Calculator() {
  const [units, setUnits] = useState(5);
  const [gross, setGross] = useState(2000);

  const monthly = units * gross;
  const annual = monthly * 12;
  const threeYear = annual * 3;

  return (
    <section id="math" className="py-32 sm:py-40 bg-white border-t border-[#E7E5E4]">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-20 v3-reveal">
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-6">
            Your Math.
          </h2>
          <p className="text-xl text-[#78716C] font-light max-w-2xl">
            How much are you leaving at auction every year? Move the sliders.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center v3-reveal">
          <div className="lg:col-span-5 space-y-14">
            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-sm font-medium text-[#78716C]">Units wholesaled per month</label>
                <span className="text-4xl font-light tracking-tighter text-[#0A0A0A]">{units}</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full v3-slider"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-sm font-medium text-[#78716C]">Avg backend gross / unit</label>
                <span className="text-4xl font-light tracking-tighter text-[#0A0A0A]">
                  ${gross.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="2500"
                step="100"
                value={gross}
                onChange={(e) => setGross(Number(e.target.value))}
                className="w-full v3-slider"
              />
              <p className="text-xs mt-4 text-[#A8A29E]">Most GenZ dealers see $1,800 – $2,200.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-10 sm:p-14 bg-[#F5F5F4] border border-[#E7E5E4] rounded-3xl">
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A8A29E] mb-4">
                  Annual Reclaimed
                </p>
                <p className="text-5xl sm:text-7xl font-light tracking-tighter text-[#0A0A0A]">
                  ${annual.toLocaleString()}
                </p>
              </div>

              <div className="flex gap-12 sm:gap-20 border-t border-[#E7E5E4] pt-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A8A29E] mb-2">
                    Monthly Impact
                  </p>
                  <p className="text-2xl sm:text-3xl font-light text-[#0A0A0A]">
                    ${monthly.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A8A29E] mb-2">
                    3-Year Impact
                  </p>
                  <p className="text-2xl sm:text-3xl font-light text-[#0A0A0A]">
                    ${threeYear.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#A8A29E] mt-6 max-w-lg">
              * Conservative number. Real upside climbs when factoring rental reimbursement, service
              drive retention, and trade-cycle continuity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   RISK BUFFER — COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════════ */

function RiskBuffer() {
  const rows = [
    { vehicle: "Clean low-mileage trades", current: "Covered natively", genz: "We intentionally stay out", highlight: false },
    { vehicle: "100K – 300K mile trades", current: "Denied or flagged", genz: "Fully covered", highlight: true },
    { vehicle: "Rideshare vehicles", current: "Excluded instantly", genz: "Fully covered", highlight: true },
    { vehicle: "Lifted trucks (up to 6″)", current: "Excluded", genz: "Fully covered", highlight: true },
    { vehicle: "Used EVs / Battery risk", current: "Excluded", genz: "Fully covered + degradation", highlight: true },
    { vehicle: "Branded / Salvage titles", current: "Excluded instantly", genz: "Fully covered", highlight: true },
  ];

  return (
    <section id="why-us" className="py-32 sm:py-40 bg-white border-t border-[#E7E5E4]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="v3-reveal lg:sticky lg:top-32">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-8 leading-[1.1]">
              We aren&apos;t here
              <br />
              to replace anyone.
            </h2>
            <p className="text-xl text-[#78716C] font-light leading-relaxed mb-8 max-w-lg">
              Your provider works great on clean trades. Keep them. Keep your reinsurance. We operate
              exclusively in the dead zone.
            </p>
            <p className="text-base text-[#0A0A0A] font-serif italic leading-relaxed">
              &ldquo;We don&rsquo;t fight your provider. We cover the cars your provider runs
              from.&rdquo;
            </p>
          </div>

          <div className="v3-reveal">
            {/* Desktop table */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-[#E7E5E4]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F5F5F4]">
                    <th className="px-6 py-4 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#A8A29E]">
                      Vehicle Type
                    </th>
                    <th className="px-6 py-4 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#A8A29E]">
                      Your Provider
                    </th>
                    <th className="px-6 py-4 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#0A0A0A]">
                      GenZ Protect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-t border-[#F5F5F4] hover:bg-[#FAFAF9] transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-[#0A0A0A]">{row.vehicle}</td>
                      <td className="px-6 py-4 text-sm text-[#A8A29E]">{row.current}</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#0A0A0A]">
                        {row.highlight && <CheckCircle2 className="inline-block w-4 h-4 mr-2 text-[#78716C] -mt-0.5" />}
                        {row.genz}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {rows.map((row, i) => (
                <div key={i} className="p-5 rounded-xl border border-[#E7E5E4] bg-white">
                  <p className="text-sm font-semibold text-[#0A0A0A] mb-3">{row.vehicle}</p>
                  <div className="flex justify-between gap-4 text-xs">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#A8A29E] mb-1">
                        Your Provider
                      </p>
                      <p className="text-[#A8A29E]">{row.current}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#0A0A0A] mb-1">
                        GenZ
                      </p>
                      <p className="font-medium text-[#0A0A0A]">{row.genz}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STORIES
   ═══════════════════════════════════════════════════════════════════ */

function OpenStories() {
  const stories = [
    {
      title: "The Disappearing F&I Manager",
      quote: "Where did F&I go?",
      setup:
        "Customer agrees to buy a $7,500 SUV with 184,000 miles. Deal goes to F&I. Forty-five minutes later, your manager hasn't come back.",
      body: "Because there's nothing to sell. No VSC. The bank capped the deal. Your F&I manager is hiding because the menu is empty. CSI takes a hit when it knocks at 200k. The deal made zero.",
      fix: "With GenZ, F&I has real coverage to sell on every car. Real backend. No dead deals.",
    },
    {
      title: "The Wholesale Rescue",
      quote: "That trade is on a competitor's lot.",
      setup:
        "You took in a 2018 Range Rover with 156,000 miles. Your manager looked at the recon estimate and wholesaled it for $19,600.",
      body: "A competitor down the road retailed it for $27k with a warranty. Made $7,800 front-end and ~$1,800 backend. You made nothing. The car you wholesaled paid someone else's rent.",
      fix: "GenZ covers that Range Rover. Your manager stops sending profit down the road.",
    },
    {
      title: "The Service Defection",
      quote: "I'll take it somewhere else.",
      setup:
        "A rideshare driver pulls in with a 2019 Camry, 142k miles, needing a coverage option. Your advisor says no VSC covers rideshare.",
      body: "They leave. Pay cash elsewhere. Post a 1-star Google review. You lost the revenue, the future trade, and the referral in one 5-minute interaction.",
      fix: "GenZ covers rideshare. The Camry stays in your drive. CSI stays pristine.",
    },
  ];

  return (
    <section id="stories" className="pb-32 sm:pb-40 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 v3-reveal">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#A8A29E] mb-6">
            Sound familiar?
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight max-w-3xl">
            Three scenarios playing out on your lot right now.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 v3-reveal">
          {stories.map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-6 p-6 bg-[#F5F5F4] rounded-2xl">
                <h3 className="font-display text-xl font-bold tracking-tight text-[#0A0A0A] leading-snug">
                  &ldquo;{s.quote}&rdquo;
                </h3>
              </div>

              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#A8A29E] mb-3">
                {s.title}
              </p>
              <p className="text-sm text-[#78716C] font-medium italic mb-3 leading-relaxed">
                {s.setup}
              </p>
              <p className="text-sm text-[#78716C] leading-relaxed font-light mb-8 flex-1">{s.body}</p>

              <div className="pt-5 border-t border-[#E7E5E4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0A0A0A] mb-2">
                  The Fix
                </p>
                <p className="text-sm text-[#0A0A0A] leading-relaxed font-medium">{s.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   COVERAGE
   ═══════════════════════════════════════════════════════════════════ */

function Coverage() {
  const pillars = [
    {
      title: "Coverage Levels",
      items: [
        "4 levels of exclusionary & comp",
        "Term + Miles / Unlimited",
        "Vehicles up to 300,000 miles",
        "$0 to $250 disappearing deductible",
        "Start: signing, 30, or 60 days",
      ],
    },
    {
      title: "What We Cover",
      items: [
        "Branded, salvage, lemon titles",
        "Lifted trucks up to 6 inches",
        "Trucks up to 6500 series, DRW",
        "Rideshare & Commercial use",
        "Exotics (Ferrari, Lamborghini)",
        "Canadian-manufactured",
      ],
    },
    {
      title: "Built for F&I",
      items: [
        "Darwin & Reynolds integration",
        "100% internal labor rate",
        "List price on OEM parts",
        "No chargebacks after 90 days",
        "Up to $2,000 gross protection",
        "SCPP available",
      ],
    },
  ];

  return (
    <section id="coverage" className="py-32 sm:py-40 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start v3-reveal">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              The menu built for
              <br />
              the vehicles that built
              <br />
              your wholesale lane.
            </h2>
            <p className="text-lg text-white/50 font-light">
              Pick the level. Pick the term. Built strictly around how you sell.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {pillars.map((p, i) => (
              <div key={i}>
                <h3 className="text-base font-bold mb-5 text-white pb-4 border-b border-white/15">
                  {p.title}
                </h3>
                <ul className="space-y-3">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-white/45 font-light leading-relaxed">
                      <span className="text-white/20 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-10 sm:p-16 border border-white/10 rounded-3xl bg-white/[0.02] v3-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-[10px] uppercase font-semibold tracking-[0.15em] mb-6 text-white/60">
            Industry First
          </span>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                Electric VSC
              </h3>
              <p className="text-base text-white/45 font-light mb-6 max-w-2xl leading-relaxed">
                The first VSC with real battery degradation and replacement coverage built in. Used
                EVs become a profit center.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60 font-medium">
                <span>Full battery replacement</span>
                <span className="text-white/20">·</span>
                <span>Degradation protection</span>
                <span className="text-white/20">·</span>
                <span>Thermal management</span>
                <span className="text-white/20">·</span>
                <span>Bank-approved</span>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <BatteryCharging className="h-20 w-20 text-white/15" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════════════ */

function Stats() {
  return (
    <section className="py-32 sm:py-40 bg-white border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-20 v3-reveal">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#A8A29E] mb-6">
            The Proof
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-4">
            Numbers we&apos;re proud of.
          </h2>
          <p className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-[#D6D3D1]">
            And the ones we&apos;re not afraid to share.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 v3-reveal">
          {[
            { val: "150", suffix: "+", l: "Dealerships Running GenZ" },
            { val: "0", pre: "$", l: "Chargebacks After 90 Days" },
            { val: "0", l: "Denied Covered Repairs. Ever." },
            { val: "300", suffix: "K", l: "Max Miles Covered" },
          ].map((s, i) => (
            <div key={i} className="text-center py-8">
              <p className="text-5xl sm:text-6xl font-light tracking-tighter text-[#0A0A0A] mb-3">
                {s.pre}
                {s.val}
                {s.suffix}
              </p>
              <p className="text-xs font-semibold text-[#A8A29E] uppercase tracking-[0.1em]">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12 v3-reveal">
          {[
            {
              title: "Bank-approved across the board.",
              body: "No callbacks. No 'we don't recognize this VSC'. The major lenders already know us and approve us in deal flow natively.",
            },
            {
              title: "Real claims process. Real humans.",
              body: "40+ claim analysts on staff. No 'press 7 for warranty'. Your service department gets paid at internal labor rate effortlessly.",
            },
            {
              title: "No chargebacks after 90 days.",
              body: "Up to $2,000 gross protection per contract. Your F&I team writes the deal, and 90 days later the money is permanently yours.",
            },
          ].map((p, i) => (
            <div key={i}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] mb-6" />
              <h4 className="text-lg font-bold text-[#0A0A0A] mb-3">{p.title}</h4>
              <p className="text-sm text-[#78716C] font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WHO IS JASON
   ═══════════════════════════════════════════════════════════════════ */

function WhoIsJason() {
  return (
    <section className="py-32 bg-[#F5F5F4]">
      <div className="mx-auto max-w-6xl px-8 flex flex-col md:flex-row items-center gap-16 v3-reveal">
        <div className="w-full md:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden bg-[#E7E5E4] shrink-0">
          <img
            src="https://xepoqvwvwgglwyjelqsw.supabase.co/storage/v1/object/public/Images/Jason.jpeg"
            alt="Jason Scott, CRO"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-2">
            Jason Scott
          </h2>
          <p className="text-base font-medium text-[#A8A29E] mb-8">CRO · 25+ Years in Automotive</p>

          <p className="text-lg sm:text-xl text-[#78716C] font-light leading-relaxed mb-10 max-w-2xl">
            Jason isn&apos;t a pitch man. He spent his career inside dealer groups, finance offices,
            and reinsurance tables. He knows what the F&I manager is hiding. He knows why units are
            bleeding at auction. The 15 minutes you spend with him is a peer-to-peer strategy
            conversation.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "Built and led F&I strategy at top dealer groups",
              "Speaker at NADA & industry standard events",
              "Author of the 20-tactic dealer playbook",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-center text-sm font-medium text-[#0A0A0A]">
                <CheckCircle2 className="h-4 w-4 text-[#A8A29E] shrink-0" /> {t}
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="inline-block rounded-full px-8 py-3.5 bg-[#0A0A0A] text-white text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            Book 15 Min With Jason
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INVENTORY
   ═══════════════════════════════════════════════════════════════════ */

function Inventory() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const totalUplift = inventory.reduce((s, v) => s + v.uplift, 0);
  const totalVSC = inventory.reduce((s, v) => s + v.vsc, 0);

  return (
    <section id="inventory" className="relative py-32 sm:py-40 overflow-hidden bg-[#0A0A0A]">
      <div className="relative mx-auto max-w-6xl px-8">
        <div className="v3-reveal max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4 text-white/40">
            Highline Inventory Analysis
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-white">
            Your units. Real numbers.
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-light leading-relaxed text-white/45">
            We pulled 10 cars off your lot. Here&apos;s the math.
          </p>
        </div>

        {/* Desktop table */}
        <div className="v3-reveal hidden lg:block rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                {["Stock #", "Vehicle", "Miles", "Risk Factor", "Wholesale", "Retail + VSC", "VSC Gross", "Total Uplift"].map((h, i) => (
                  <th
                    key={h}
                    className={`px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35 ${i >= 4 ? "text-right" : "text-left"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventory.map((v) => (
                <tr key={v.stock} className="transition-colors hover:bg-white/[0.02] border-b border-white/[0.04]">
                  <td className="px-5 py-4 v3-mono text-xs text-white/40">{v.stock}</td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-white">
                      {v.year} {v.make} {v.model}
                    </p>
                    <p className="text-[11px] mt-0.5 uppercase text-white/25">{v.category}</p>
                  </td>
                  <td className="px-5 py-4 v3-mono text-xs text-right text-white/40">
                    {v.miles.toLocaleString()}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/[0.08] text-white/80">
                      {v.risk}
                    </span>
                  </td>
                  <td className="px-5 py-4 v3-mono text-xs text-right text-white/35">
                    ${v.wholesale.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 v3-mono text-xs text-right font-medium text-white">
                    ${v.retail.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 v3-mono text-xs text-right font-medium text-white/60">
                    +${v.vsc.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 v3-mono text-sm text-right font-bold text-white">
                    +${v.uplift.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-white/[0.08]">
                <td colSpan={6} className="px-5 py-5 text-sm font-medium text-right text-white/40">
                  Total across {inventory.length} units
                </td>
                <td className="px-5 py-5 v3-mono text-sm text-right font-bold text-white/60">
                  +${totalVSC.toLocaleString()}
                </td>
                <td className="px-5 py-5 v3-mono text-base text-right font-bold text-white">
                  +${totalUplift.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-3 v3-stagger">
          {inventory.map((v, i) => (
            <div
              key={v.stock}
              className="v3-reveal rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
            >
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {v.year} {v.make} {v.model}
                  </p>
                  <p className="text-[11px] v3-mono mt-0.5 text-white/35">
                    {v.miles.toLocaleString()} mi
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="v3-mono text-sm font-bold text-white">+${v.uplift.toLocaleString()}</span>
                  <ChevronDown
                    className="h-4 w-4 text-white/35 transition-transform duration-300"
                    strokeWidth={1.5}
                    style={{ transform: expanded === i ? "rotate(180deg)" : "none" }}
                  />
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: expanded === i ? "250px" : "0", opacity: expanded === i ? 1 : 0 }}
              >
                <div className="px-5 pb-4 grid grid-cols-2 gap-3 text-xs border-t border-white/5 pt-3">
                  {[
                    ["Risk", <span key="r" className="inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/[0.08] text-white/80">{v.risk}</span>],
                    ["Stock", <span key="s" className="v3-mono text-white/40">{v.stock}</span>],
                    ["Wholesale", <span key="w" className="v3-mono text-white/35">${v.wholesale.toLocaleString()}</span>],
                    ["Retail + VSC", <span key="rv" className="v3-mono font-medium text-white">${v.retail.toLocaleString()}</span>],
                    ["VSC Gross", <span key="vsc" className="v3-mono font-medium text-white/60">+${v.vsc.toLocaleString()}</span>],
                    ["Category", <span key="c" className="uppercase text-[11px] text-white/40">{v.category}</span>],
                  ].map(([label, val]) => (
                    <div key={label as string}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] mb-1 text-white/25">
                        {label}
                      </p>
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-10 v3-reveal">
          <div className="p-7 border border-white/10 rounded-2xl bg-white/[0.02] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/35 mb-2">
              VSC Backend Gross
            </p>
            <p className="text-3xl font-light text-white">+$19,050</p>
          </div>
          <div className="p-7 border border-white/10 rounded-2xl bg-white/[0.02] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/35 mb-2">
              Total Revenue Uplift
            </p>
            <p className="text-3xl font-light text-white">+$79,400</p>
          </div>
          <div className="p-7 border border-[#C8A951]/30 bg-[#C8A951]/10 rounded-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#C8A951] mb-2">
              Annualized
            </p>
            <p className="text-3xl font-light text-white">$952,800</p>
          </div>
        </div>

        <div className="text-center v3-reveal mb-10">
          <p className="text-lg sm:text-xl font-serif italic font-light text-white/40 max-w-3xl mx-auto leading-relaxed">
            &ldquo;$952,800 per year. Reclaimed from units Highline would have otherwise wholesaled.
            And this is just 10 cars.&rdquo;
          </p>
        </div>

        <div className="text-center v3-reveal">
          <a
            href="#book"
            className="inline-block rounded-full px-10 py-4 bg-white text-[#0A0A0A] text-base font-bold transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            Book 15 Min With Jason
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════════════ */

function FinalMinimalCTA() {
  return (
    <section id="book" className="py-32 sm:py-40 bg-white text-center">
      <div className="mx-auto max-w-3xl px-8 v3-reveal">
        <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#0A0A0A] mb-8 tracking-tighter leading-[1.05]">
          You wholesaled 5 cars last month that should have been retailed.
        </h2>
        <p className="text-lg sm:text-xl text-[#78716C] mb-14 font-light max-w-xl mx-auto leading-relaxed">
          We already showed you ten of your own cars. Bring three more you wholesaled recently and
          we&apos;ll run the math on those too.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:jason@genz.com?subject=GenZ%20Protect%20-%20Schedule%20a%20Call"
            onClick={() => trackEvent("Final CTA Click")}
            className="inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-bold bg-[#0A0A0A] text-white transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            Book 15 Min With Jason
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium text-[#A8A29E]">
            <a href="tel:5203310883" className="hover:text-[#0A0A0A] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> 520.331.0883
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D6D3D1]" />
            <a href="mailto:jason@genz.com" className="hover:text-[#0A0A0A] transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> jason@genz.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="py-14 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <img src={LOGO_URL} alt="GenZ Protect" className="h-5 w-auto brightness-0 invert opacity-40" />
        <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.15em]">
          Confidential. Built for decision-makers.
        </p>
        <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.15em]">
          © 2026 GenZ Automotive
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════ */

export default function HighlineV3() {
  useReveal();

  return (
    <div className="font-sans antialiased bg-white text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Pitch />
        <Calculator />
        <RiskBuffer />
        <OpenStories />
        <Inventory />
        <Coverage />
        <Stats />
        <WhoIsJason />
        <FinalMinimalCTA />
      </main>
      <Footer />
    </div>
  );
}
