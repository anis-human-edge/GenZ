"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  Zap,
  Wrench,
  Users,
  ChevronDown,
  ArrowRight,
  BadgeCheck,
  Clock,
  DollarSign,
  Gauge,
  BatteryCharging,
  Menu,
  X,
  CheckCircle2,
  Star,
} from "lucide-react";

const LOGO_URL =
  "https://kuqvupztguryktcfaiwu.supabase.co/storage/v1/object/public/Images/GenZ-logo-w.png";

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Spotlight Mouse Tracker ─── */
function useSpotlight(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".spotlight-card");

    const handleMouse = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    };

    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, [ref]);
}

/* ─── Header ─── */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#engine", label: "How It Works" },
    { href: "#coverage", label: "Coverage" },
    { href: "#calculator", label: "ROI" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div
        className={`nav-float rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/80 shadow-lg shadow-black/20"
            : "bg-[#09090b]/50"
        }`}
        style={{
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,${scrolled ? 0.08 : 0.04})`,
        }}
      >
        <a href="#" className="flex items-center">
          <img src={LOGO_URL} alt="GenZ Protect" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[13px] font-medium text-muted-fg hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:5203310883"
            className="text-[13px] font-medium text-muted-fg hover:text-foreground transition-colors"
          >
            520.331.0883
          </a>
          <a
            href="#book"
            className="btn-physical inline-flex items-center rounded-xl bg-primary px-4 py-2 text-[13px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden p-1.5 text-muted-fg hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-float mt-2 rounded-2xl bg-[#09090b]/90 p-4" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-muted-fg hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="btn-physical flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-[#09090b]"
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light leaks */}
      <div className="light-leak bg-primary/80 top-[-200px] left-[-100px]" />
      <div className="light-leak bg-blue-500/50 bottom-[-200px] right-[-100px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-muted-fg mb-8"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Trusted by 150+ dealerships
          </div>

          <h1 className="reveal text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.05]">
            Stop wholesaling
            <br />
            <span className="text-primary">retail-worthy</span> profit.
          </h1>

          <p className="reveal mt-6 text-lg sm:text-xl text-muted-fg leading-relaxed max-w-xl">
            A surgical risk buffer for the cars your current provider
            won&apos;t touch. Keep the deal. Protect the customer. Capture
            backend gross.
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#book"
              className="btn-physical inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors"
            >
              Book 10-Min Sync
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#engine"
              className="btn-physical inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-medium text-foreground hover:bg-white/[0.04] transition-colors"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}
            >
              See How It Works
            </a>
          </div>

          <div className="reveal mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-muted-fg">
            {[
              "No chargebacks after 90 days",
              "Never denied a covered repair",
              "Bank-approved",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" strokeWidth={1.5} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const stats = [
    { value: "150+", label: "Dealerships", icon: <Star className="h-5 w-5" strokeWidth={1.5} /> },
    { value: "0", label: "Denied Repairs", icon: <ShieldCheck className="h-5 w-5" strokeWidth={1.5} /> },
    { value: "$0", label: "Chargebacks 90d+", icon: <DollarSign className="h-5 w-5" strokeWidth={1.5} /> },
    { value: "300K", label: "Miles Accepted", icon: <Gauge className="h-5 w-5" strokeWidth={1.5} /> },
  ];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 stagger">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal glass-card noise rounded-2xl p-6 text-center"
            >
              <div className="icon-container mx-auto mb-3">{s.icon}</div>
              <p className="mono-num text-3xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-1 text-[13px] text-muted-fg">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Market Problem ─── */
function MarketProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  useSpotlight(sectionRef);

  const problems = [
    {
      icon: <DollarSign className="h-5 w-5" strokeWidth={1.5} />,
      title: "Wholesale Waste",
      description:
        "Decent units sent to auction because one repair kills the deal. That $6K car? The store down the street retailed it — with a warranty.",
    },
    {
      icon: <Users className="h-5 w-5" strokeWidth={1.5} />,
      title: "Lost Credit Buyers",
      description:
        "High-credit, cash-ready buyers want coverage on older units. Nothing to offer? They walk — or buy and torch your CSI after the first repair.",
    },
    {
      icon: <Wrench className="h-5 w-5" strokeWidth={1.5} />,
      title: "Service Drive Defection",
      description:
        "High-mileage car. No coverage to offer. Customer leaves, finds a local shop, maybe leaves a bad review. Never comes back.",
    },
    {
      icon: <BatteryCharging className="h-5 w-5" strokeWidth={1.5} />,
      title: "EV Hesitation",
      description:
        "Used EVs wholesaled because no warranty company touches degraded batteries. Zero backend, maximum risk.",
    },
  ];

  return (
    <section id="problem" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Your inventory is leaking profit.
          </h2>
          <p className="mt-4 text-muted-fg leading-relaxed">
            Traditional coverage models have dead zones. Every unit you
            wholesale because you can&apos;t cover it is money left on the table.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 stagger">
          {problems.map((p) => (
            <div
              key={p.title}
              className="reveal spotlight-card glass-card noise rounded-2xl p-7"
            >
              <div className="icon-container mb-5">{p.icon}</div>
              <h3 className="text-[15px] font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-fg leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Profit Engine / How It Works ─── */
function ProfitEngine() {
  const steps = [
    {
      step: "01",
      title: "Dealer Certification",
      description:
        "Certify every unit under your own dealership name — from 1 to 300,000 miles.",
      icon: <BadgeCheck className="h-5 w-5" strokeWidth={1.5} />,
    },
    {
      step: "02",
      title: "Service Anchor",
      description:
        "Every backend customer gets our 90-Day Roadside program. Tie-back keeps them in your shop.",
      icon: <Wrench className="h-5 w-5" strokeWidth={1.5} />,
    },
    {
      step: "03",
      title: "Automated Outreach",
      description:
        "GenZ specialists activate benefits on your behalf. No effort from your team.",
      icon: <Zap className="h-5 w-5" strokeWidth={1.5} />,
    },
    {
      step: "04",
      title: "Passive Revenue",
      description:
        "We upsell protection, maintenance, and appearance packages. When they buy, you get full margin.",
      icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="engine" className="relative py-24 sm:py-32">
      <div className="light-leak bg-primary/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Backend revenue. Zero extra effort.
          </h2>
          <p className="mt-4 text-muted-fg leading-relaxed">
            We generate profit for your dealership without adding a single task
            to your desk staff&apos;s day.
          </p>
        </div>

        {/* Workflow with animated connectors */}
        <div className="relative">
          {/* Animated SVG connector (desktop) */}
          <svg
            className="absolute top-[52px] left-0 w-full h-8 hidden lg:block pointer-events-none"
            viewBox="0 0 1200 32"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 75 16 C 200 16, 200 16, 300 16 C 400 16, 400 16, 525 16 C 600 16, 600 16, 675 16 C 800 16, 800 16, 900 16 C 950 16, 950 16, 1125 16"
              stroke="rgba(200,169,81,0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 75 16 C 200 16, 200 16, 300 16 C 400 16, 400 16, 525 16 C 600 16, 600 16, 675 16 C 800 16, 800 16, 900 16 C 950 16, 950 16, 1125 16"
              stroke="rgba(200,169,81,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              className="flow-line"
            />
          </svg>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger">
            {steps.map((s) => (
              <div key={s.step} className="reveal glass-card noise rounded-2xl p-7 relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="mono-num text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                    {s.step}
                  </span>
                  <div className="icon-container !w-9 !h-9 !rounded-lg">{s.icon}</div>
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-fg leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Result callout */}
        <div className="reveal mt-8 glass-card noise rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="light-leak bg-primary/60 top-0 right-0 !w-[300px] !h-[300px]" />
          <p className="relative text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            <span className="text-primary font-semibold">The result:</span>{" "}
            <span className="text-muted-fg">
              Your dealership earns backend on deals it never touched — while
              your team stays focused on what they do best.
            </span>
          </p>
          <a
            href="#book"
            className="relative btn-physical mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-[15px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors"
          >
            See It In Action
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Precision Protection ─── */
function PrecisionProtection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSpotlight(sectionRef);

  const coverageItems = [
    "Up to 300,000 miles",
    "Rideshare (Uber/Lyft)",
    "Branded / Rebuilt / Salvage titles",
    "Lifted trucks up to 6\"",
    "Exotic vehicles",
    "Trucks up to 6500 series",
    "Dual rear wheel trucks",
    "Commercial use vehicles",
    "Lemon-law buybacks",
    "Canadian-manufactured",
  ];

  const evFeatures = [
    "Full battery replacement",
    "Degradation protection",
    "Thermal management coverage",
    "Financeable & bank-approved",
  ];

  const bottomLine = [
    "No chargebacks after 90 days",
    "Up to $2,000 gross protection",
    "100% internal labor rate",
    "List price on OEM parts",
    "50–100 mile dealer tie-back",
    "$0–$250 deductible options",
    "Seamless menu integration",
    "40+ claim analysts ready",
    "$50/day rental reimbursement",
  ];

  return (
    <section id="coverage" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            We say yes when everyone else says no.
          </h2>
          <p className="mt-4 text-muted-fg leading-relaxed">
            We don&apos;t replace your current provider. We fill the gaps they
            won&apos;t touch.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-5">
          {/* Coverage Accepted — 3 cols */}
          <div className="reveal spotlight-card glass-card noise rounded-2xl p-7 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-container">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold">Coverage Accepted</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 stagger">
              {coverageItems.map((item) => (
                <div key={item} className="reveal flex items-center gap-2.5 text-sm text-muted-fg">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" strokeWidth={1.5} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* EV Coverage — 2 cols */}
          <div className="reveal spotlight-card glass-card noise rounded-2xl p-7 lg:col-span-2 relative overflow-hidden">
            <div className="light-leak bg-primary/40 top-[-100px] right-[-100px] !w-[300px] !h-[300px]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="icon-container">
                  <BatteryCharging className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                  Industry First
                </span>
              </div>
              <h3 className="text-[15px] font-semibold mt-4 mb-2">Electric VSC</h3>
              <p className="text-sm text-muted-fg leading-relaxed mb-6">
                The first explicit battery degradation and replacement coverage.
                Remove hesitation from used EV buyers.
              </p>
              <div className="space-y-3">
                {evFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={1.5} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line — full width bento */}
        <div className="reveal glass-card noise rounded-2xl p-7 mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-fg mb-6 text-center">
            Built for your bottom line
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {bottomLine.map((item) => (
              <div key={item} className="reveal flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-muted-fg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Calculator ─── */
function ROICalculator() {
  const [units, setUnits] = useState(10);
  const annualGross = units * 2000 * 12;

  return (
    <section id="calculator" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl">
          <div className="reveal text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
              ROI Calculator
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
              How much are you leaving at auction?
            </h2>
          </div>

          <div className="reveal glass-card noise rounded-2xl p-8 sm:p-10">
            <div className="text-center">
              <label className="text-sm font-medium text-muted-fg">
                Units saved from wholesale per month
              </label>

              <div className="mt-8 flex items-center gap-4">
                <span className="mono-num text-[13px] text-muted w-6 text-right">1</span>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full"
                />
                <span className="mono-num text-[13px] text-muted w-6">50</span>
              </div>

              <p className="mt-6">
                <span className="mono-num text-5xl font-semibold tracking-tight text-primary">
                  {units}
                </span>
                <span className="ml-2 text-sm text-muted-fg">units/mo</span>
              </p>
            </div>

            <div className="mt-10 rounded-xl p-8 text-center relative overflow-hidden"
              style={{ background: "rgba(200,169,81,0.06)", boxShadow: "inset 0 0 0 1px rgba(200,169,81,0.1)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-fg">
                Annual Reclaimed Gross Potential
              </p>
              <p className="mono-num mt-3 text-5xl sm:text-6xl font-semibold tracking-tight text-primary">
                ${annualGross.toLocaleString()}
              </p>
              <p className="mt-3 text-[13px] text-muted">
                Based on $2,000 avg backend gross per unit saved from wholesale.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#book"
                className="btn-physical inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors"
              >
                Find Your Number
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      question: "We already have a provider.",
      answer:
        "Good — we're not replacing them. GenZ is a surgical layer for the units they won't touch: 200k+ miles, rideshare, branded titles, lifted trucks. Your core provider stays exactly where it is.",
    },
    {
      question: "We don't sell many high-mileage cars.",
      answer:
        "Even one bad cancellation on a 200k-mile car can spike chargebacks. We fill that specific gap — and help you say yes to trades you'd otherwise send straight to auction.",
    },
    {
      question: "Will the banks approve it?",
      answer:
        "They already do. GenZ is bank-approved across the board — no special coding, no delays, no red tape. Your F&I team can drop it into deals instantly.",
    },
    {
      question: "Not interested in more products.",
      answer:
        "Neither are we. This isn't about adding products — it's about protecting the system you've already built and capturing profit you're currently giving away.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-5">
        <div className="reveal text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Common objections
          </h2>
        </div>

        <div className="space-y-3 stagger">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-[15px] font-medium pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-fg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Book Call ─── */
function BookCall() {
  const bullets = [
    "No disruption to your current provider",
    "No chargebacks after 90 days",
    "No declined covered repairs — ever",
    "No contracts or long-term commitment",
  ];

  return (
    <section id="book" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="light-leak bg-primary/50 top-0 left-1/3" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
              See how many units you&apos;re{" "}
              <span className="text-primary">leaving on the table.</span>
            </h2>
            <p className="mt-4 text-muted-fg leading-relaxed">
              10 minutes. No fluff. Just data on how we plug your profit leaks.
            </p>

            <div className="mt-8 space-y-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-muted-fg">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" strokeWidth={1.5} />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal glass-card noise rounded-2xl p-7 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold">Jason Scott</p>
                <p className="text-[13px] text-muted-fg">
                  Chief Revenue Officer
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="tel:5203310883"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-muted-fg hover:text-foreground hover:bg-white/[0.03] transition-all"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
              >
                <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="mono-num">520.331.0883</span>
              </a>
              <a
                href="mailto:Jason@genz.com"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-muted-fg hover:text-foreground hover:bg-white/[0.03] transition-all"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
              >
                <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                Jason@genz.com
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <a
                href="#book"
                className="btn-physical flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors w-full"
              >
                <Clock className="h-4 w-4" strokeWidth={2} />
                Schedule at genzprotect.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <img src={LOGO_URL} alt="GenZ" className="h-6 w-auto" />

          <p className="text-[13px] text-muted">
            &copy; 2026 GenZ Automotive
          </p>

          <div className="flex gap-6 text-[13px] text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <MarketProblem />
      <ProfitEngine />
      <PrecisionProtection />
      <ROICalculator />
      <FAQ />
      <BookCall />
      <Footer />
    </>
  );
}
