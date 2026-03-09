"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Shield,
  ShieldCheck,
  TrendingUp,
  Car,
  Zap,
  Wrench,
  Users,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  Clock,
  DollarSign,
  Gauge,
  BatteryCharging,
  Truck,
  Star,
  Menu,
  X,
} from "lucide-react";

/* ─── Header ─── */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">
            GenZ<span className="text-accent">Protect</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#problem" className="hover:text-primary transition-colors">
            The Problem
          </a>
          <a href="#engine" className="hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#coverage" className="hover:text-primary transition-colors">
            Coverage
          </a>
          <a
            href="#calculator"
            className="hover:text-primary transition-colors"
          >
            ROI Calculator
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5203310883"
            className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            520.331.0883
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-3 text-sm font-medium text-muted">
            <a
              href="#problem"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              The Problem
            </a>
            <a
              href="#engine"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              How It Works
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              Coverage
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              ROI Calculator
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              FAQ
            </a>
            <a
              href="tel:5203310883"
              className="flex items-center gap-1.5 py-2"
            >
              <Phone className="h-4 w-4" /> 520.331.0883
            </a>
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a3354] to-[#0f2440] text-white">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/10">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Trusted by 150+ Dealerships
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
              Stop wholesaling{" "}
              <span className="text-accent">retail-worthy</span> profit.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              We&apos;re not another warranty company. GenZ is a surgical risk
              buffer that lets you say yes to the cars your current provider
              won&apos;t touch — so you keep the deal, protect the customer, and
              capture backend gross.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-bold text-primary-dark shadow-lg hover:bg-accent-dark transition-colors"
              >
                Book 10-Min Sync
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#engine"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm">
              {[
                "No chargebacks after 90 days",
                "Never denied a covered repair",
                "Bank-approved",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CRO Contact Card */}
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-lg font-bold">Jason Scott</p>
                  <p className="text-sm text-white/70">
                    Chief Revenue Officer
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="tel:5203310883"
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  520.331.0883
                </a>
                <a
                  href="mailto:Jason@genz.com"
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  Jason@genz.com
                </a>
              </div>

              <p className="mt-6 text-sm text-white/60 leading-relaxed">
                Quick. No fluff. Just the data on how we plug your leaks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Market Problem ─── */
function MarketProblem() {
  const problems = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Wholesale Waste",
      description:
        "You're sending decent units to auction because recon is too high and one repair kills the deal. That $6,000 car? The store down the street retailed it — with a warranty.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Lost Credit Buyers",
      description:
        "High-credit, cash-ready buyers want coverage on older units. When there's nothing to offer, they walk — or worse, buy and torch your CSI after the first repair.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Service Drive Defection",
      description:
        "Uber driver shows up. High-mileage car. Your advisor shrugs — no coverage to offer. Customer leaves, finds a local shop, maybe leaves a bad review. Never comes back.",
    },
    {
      icon: <BatteryCharging className="h-6 w-6" />,
      title: "EV Hesitation",
      description:
        "Used EVs are getting wholesaled because no warranty company will touch degraded batteries. Zero backend, maximum risk. Meanwhile, EV volume keeps climbing.",
    },
  ];

  return (
    <section id="problem" className="bg-section-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            The Market Problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your inventory is{" "}
            <span className="text-primary">leaking profit.</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Traditional reinsurance and coverage models have dead zones. Every
            unit you wholesale because you &ldquo;can&apos;t cover it&rdquo; is
            money left on the table.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-white border border-border p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const stats = [
    { value: "150+", label: "Dealerships Trust Us", icon: <Star className="h-5 w-5" /> },
    { value: "0", label: "Denied Covered Repairs — Ever", icon: <ShieldCheck className="h-5 w-5" /> },
    { value: "$0", label: "Chargebacks After 90 Days", icon: <DollarSign className="h-5 w-5" /> },
    { value: "300K", label: "Miles Accepted", icon: <Gauge className="h-5 w-5" /> },
  ];

  return (
    <section className="bg-primary text-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-accent">
                {s.icon}
              </div>
              <p className="text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Auto-Pilot Profit Engine ─── */
function ProfitEngine() {
  const steps = [
    {
      step: "01",
      title: "Dealer Certification",
      description:
        "Move away from generic brands. Certify every unit under your own dealership name — from 1 to 300,000 miles.",
      icon: <BadgeCheck className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Service Anchor",
      description:
        "Every backend customer automatically gets our 90-Day Roadside program. Tie-back keeps them coming to your shop.",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Automated Outreach",
      description:
        "GenZ specialists reach out to activate benefits on your behalf. No effort from your team. Instant engagement.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Passive Revenue",
      description:
        "We upsell extended protection, maintenance plans, and appearance packages. When they buy, you receive full margin.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  return (
    <section id="engine" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            The Auto-Pilot Profit Engine
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Backend revenue.{" "}
            <span className="text-primary">Zero extra effort.</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            We generate profit for your dealership without adding a single task
            to your desk staff&apos;s day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative group">
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-full hidden h-0.5 w-full bg-gradient-to-r from-primary/20 to-transparent lg:block" />
              )}

              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                    {s.step}
                  </span>
                  <div className="text-primary">{s.icon}</div>
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary to-[#1a3354] p-8 sm:p-10 text-white text-center">
          <p className="text-lg sm:text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
            <span className="text-accent font-bold">The result:</span> Your
            dealership earns backend on deals it never even touched — while your
            team stays focused on what they do best.
          </p>
          <a
            href="#book"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-base font-bold text-primary-dark hover:bg-accent-dark transition-colors"
          >
            See It In Action
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Precision Protection ─── */
function PrecisionProtection() {
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
    <section id="coverage" className="bg-section-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Precision Protection
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We say yes when{" "}
            <span className="text-primary">everyone else says no.</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            We don&apos;t replace your current provider. We fill the gaps they
            won&apos;t touch.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Coverage Accepted */}
          <div className="rounded-2xl bg-white border border-border p-8 shadow-sm">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-success" />
              Coverage Accepted
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {coverageItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* EV Coverage */}
          <div className="rounded-2xl bg-gradient-to-br from-primary to-[#0f2440] p-8 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <BatteryCharging className="h-6 w-6 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/15 px-2 py-0.5 rounded">
                Industry First
              </span>
            </div>
            <h3 className="text-xl font-bold">Electric VSC</h3>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              The industry&apos;s first explicit battery degradation and
              replacement coverage. Remove hesitation from used EV buyers and
              unlock a new backend revenue stream your competitors can&apos;t
              offer.
            </p>
            <div className="mt-6 space-y-3">
              {evFeatures.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 rounded-2xl bg-white border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold text-center mb-8">
            Built for your bottom line
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bottomLine.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{item}</span>
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
    <section id="calculator" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              ROI Calculator
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              How much are you{" "}
              <span className="text-primary">leaving at auction?</span>
            </h2>
          </div>

          <div className="mt-12 rounded-2xl border-2 border-primary/10 bg-gradient-to-b from-white to-muted-bg p-8 sm:p-12">
            <div className="text-center">
              <label className="text-lg font-semibold">
                Units saved from wholesale per month
              </label>
              <div className="mt-6 flex items-center gap-6">
                <span className="text-sm font-medium text-muted w-6">1</span>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm font-medium text-muted w-6">50</span>
              </div>
              <p className="mt-4 text-5xl font-bold text-primary">
                {units} <span className="text-xl font-medium text-muted">units/mo</span>
              </p>
            </div>

            <div className="mt-10 rounded-xl bg-primary p-8 text-white text-center">
              <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
                Annual Reclaimed Gross Potential
              </p>
              <p className="mt-2 text-5xl font-bold sm:text-6xl">
                ${annualGross.toLocaleString()}
              </p>
              <p className="mt-2 text-sm text-white/60">
                Based on $2,000 average backend gross protection per unit saved
                from wholesale.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-primary-dark shadow-lg hover:bg-accent-dark transition-colors"
              >
                Let&apos;s Find Your Number
                <ArrowRight className="h-5 w-5" />
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
      question: '"We already have a provider."',
      answer:
        "Good — we're not replacing them. GenZ is a surgical layer used when your current reinsurance isn't ideal. We handle the units they won't touch: 200k+ miles, rideshare, branded titles, lifted trucks. Your core provider stays exactly where it is.",
    },
    {
      question: '"We don\'t sell many high-mileage cars."',
      answer:
        "Even one bad cancellation on a 200k-mile car can spike chargebacks. We're filling that specific gap — and helping you say yes to trades you'd otherwise send straight to auction.",
    },
    {
      question: '"Will the banks approve it?"',
      answer:
        "They already do. GenZ is bank-approved across the board — no special coding, no delays, no red tape. Your F&I team can drop it into deals instantly and get funded faster.",
    },
    {
      question: '"Not interested in more products."',
      answer:
        "Neither are we. This isn't about adding products — it's about protecting the system you've already built and capturing profit you're currently giving away.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-section-alt py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Common Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Common Questions We Hear
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-border shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-semibold pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Book the Call ─── */
function BookCall() {
  const bullets = [
    "No disruption to your current provider",
    "No chargebacks after 90 days",
    "No declined covered repairs — ever",
    "No contracts or long-term commitment to start",
  ];

  return (
    <section id="book" className="bg-gradient-to-br from-primary via-[#1a3354] to-[#0f2440] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s see how many units you&apos;re{" "}
              <span className="text-accent">leaving on the table.</span>
            </h2>
            <p className="mt-4 text-lg text-white/75 leading-relaxed">
              10 minutes. No fluff. Just the data on how we plug your profit
              leaks — without disrupting anything you already have in place.
            </p>

            <div className="mt-8 space-y-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-white/90">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-8 sm:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <p className="text-lg font-bold">Jason Scott</p>
                <p className="text-sm text-white/70">
                  Chief Revenue Officer, GenZ Automotive
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:5203310883"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 font-semibold hover:bg-white/15 transition-colors"
              >
                <Phone className="h-5 w-5 text-accent" />
                520.331.0883
              </a>
              <a
                href="mailto:Jason@genz.com"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 font-semibold hover:bg-white/15 transition-colors"
              >
                <Mail className="h-5 w-5 text-accent" />
                Jason@genz.com
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href="#book"
                className="flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-primary-dark hover:bg-accent-dark transition-colors w-full"
              >
                <Clock className="h-5 w-5" />
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
    <footer className="bg-[#0a1628] text-white/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-base font-bold text-white">
              GenZ<span className="text-accent">Protect</span>
            </span>
          </div>

          <p className="text-sm">
            &copy; 2026 GenZ Automotive. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
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
  return (
    <>
      <Header />
      <Hero />
      <MarketProblem />
      <TrustBar />
      <ProfitEngine />
      <PrecisionProtection />
      <ROICalculator />
      <FAQ />
      <BookCall />
      <Footer />
    </>
  );
}
