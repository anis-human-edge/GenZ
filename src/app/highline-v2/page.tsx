"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  ChevronDown,
  DollarSign,
  Gauge,
  Zap,
  BatteryCharging,
  Wrench,
  TrendingUp,
  Star,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";

const LOGO_URL =
  "https://xepoqvwvwgglwyjelqsw.supabase.co/storage/v1/object/public/Images/GenZ-logo-w-blue.png";

/* Brand colors extracted from logo */
const BRAND = {
  blue: "#4BA3D4",
  blueDark: "#3A8DBD",
  blueLight: "#E8F4FB",
  blueMuted: "#B8D9EE",
  silver: "#CDD2DE",
  silverLight: "#E8EAF0",
  slate: "#1E2A3A",
  slateDark: "#0F1923",
  slateLight: "#2A3A4E",
};

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("v2-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".v2-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Spotlight for dark cards ─── */
function useSpotlight(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".v2-spot");
    const handleMouse = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };
    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, [ref]);
}

/* ─── Animated Counter ─── */
function useCounter(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

/* ══════════════════════════════════════════════
   INVENTORY DATA
   ══════════════════════════════════════════════ */
const inventory = [
  { stock: "HL-4821", year: 2019, make: "BMW", model: "X5 xDrive40i", miles: 87_420, category: "Luxury SUV", risk: "High Mileage", wholesale: 24_500, retail: 31_200, vsc: 1_850, uplift: 6_700 },
  { stock: "HL-3297", year: 2020, make: "Mercedes-Benz", model: "GLE 350", miles: 112_300, category: "Luxury SUV", risk: "100K+ Miles", wholesale: 22_800, retail: 29_900, vsc: 1_950, uplift: 7_100 },
  { stock: "HL-5510", year: 2018, make: "Audi", model: "Q7 Premium Plus", miles: 134_750, category: "Luxury SUV", risk: "High Mileage", wholesale: 18_200, retail: 25_800, vsc: 1_800, uplift: 7_600 },
  { stock: "HL-2103", year: 2021, make: "Tesla", model: "Model Y Long Range", miles: 68_900, category: "Electric Vehicle", risk: "Battery Degradation", wholesale: 27_400, retail: 35_500, vsc: 2_000, uplift: 8_100 },
  { stock: "HL-6744", year: 2017, make: "Land Rover", model: "Range Rover Sport", miles: 156_200, category: "Luxury SUV", risk: "150K+ Miles", wholesale: 19_600, retail: 27_400, vsc: 1_750, uplift: 7_800 },
  { stock: "HL-1888", year: 2020, make: "Porsche", model: "Cayenne", miles: 91_300, category: "Exotic Vehicle", risk: "Exotic + High Miles", wholesale: 38_500, retail: 47_200, vsc: 2_000, uplift: 8_700 },
  { stock: "HL-7392", year: 2019, make: "Ford", model: "F-350 Super Duty", miles: 178_400, category: "Heavy Duty Truck", risk: "High Mileage + DRW", wholesale: 32_100, retail: 39_800, vsc: 1_900, uplift: 7_700 },
  { stock: "HL-0456", year: 2022, make: "Rivian", model: "R1S Adventure", miles: 42_100, category: "Electric Vehicle", risk: "EV Battery Risk", wholesale: 48_200, retail: 57_500, vsc: 2_000, uplift: 9_300 },
  { stock: "HL-9021", year: 2018, make: "Maserati", model: "Levante GranLusso", miles: 103_600, category: "Exotic Vehicle", risk: "Exotic + 100K+", wholesale: 21_300, retail: 29_500, vsc: 1_850, uplift: 8_200 },
  { stock: "HL-3150", year: 2021, make: "RAM", model: "3500 Limited", miles: 89_200, category: "Heavy Duty Truck", risk: "Commercial Use", wholesale: 44_700, retail: 52_900, vsc: 1_950, uplift: 8_200 },
];

/* ═══ Inline styles for v2 theme ═══ */
const v2Styles = `
  .v2-reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
  }
  .v2-visible { opacity: 1; transform: translateY(0); }
  .v2-stagger > .v2-reveal:nth-child(1) { transition-delay: 0ms; }
  .v2-stagger > .v2-reveal:nth-child(2) { transition-delay: 90ms; }
  .v2-stagger > .v2-reveal:nth-child(3) { transition-delay: 180ms; }
  .v2-stagger > .v2-reveal:nth-child(4) { transition-delay: 270ms; }
  .v2-stagger > .v2-reveal:nth-child(5) { transition-delay: 360ms; }
  .v2-stagger > .v2-reveal:nth-child(6) { transition-delay: 450ms; }
  .v2-stagger > .v2-reveal:nth-child(7) { transition-delay: 540ms; }
  .v2-stagger > .v2-reveal:nth-child(8) { transition-delay: 630ms; }
  .v2-stagger > .v2-reveal:nth-child(9) { transition-delay: 720ms; }
  .v2-stagger > .v2-reveal:nth-child(10) { transition-delay: 810ms; }

  .v2-spot {
    position: relative;
    overflow: hidden;
  }
  .v2-spot::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.4s;
    background: radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(75,163,212,0.08), transparent 60%);
    pointer-events: none;
  }
  .v2-spot:hover::after { opacity: 1; }

  .v2-btn {
    transition: transform 0.15s cubic-bezier(0.22,1,0.36,1), box-shadow 0.15s;
    will-change: transform;
  }
  .v2-btn:active { transform: scale(0.97); }

  @keyframes v2flow {
    0% { stroke-dashoffset: 24; }
    100% { stroke-dashoffset: 0; }
  }
  .v2-flow { stroke-dasharray: 8 4; animation: v2flow 1.2s linear infinite; }

  .v2-mono {
    font-family: "JetBrains Mono", "SF Mono", "Fira Code", ui-monospace, monospace;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }
`;

/* ═══ COMPONENTS ═══ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#benefits", label: "Benefits" },
    { href: "#inventory", label: "Inventory" },
    { href: "#roi", label: "ROI" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={LOGO_URL} alt="GenZ Protect" className="h-8 w-auto" style={{ filter: scrolled ? "brightness(0.3)" : "none" }} />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-3.5 py-2 text-sm font-medium rounded-lg transition-colors"
              style={{ color: scrolled ? BRAND.slate : "rgba(255,255,255,0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND.blue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? BRAND.slate : "rgba(255,255,255,0.8)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#connect"
          className="hidden md:inline-flex v2-btn items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
          style={{
            background: BRAND.blue,
            color: "#fff",
            boxShadow: "0 2px 12px rgba(75,163,212,0.3)",
          }}
        >
          Let&apos;s Connect
        </a>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen
            ? <X className="h-5 w-5" style={{ color: scrolled ? BRAND.slate : "#fff" }} strokeWidth={1.5} />
            : <Menu className="h-5 w-5" style={{ color: scrolled ? BRAND.slate : "#fff" }} strokeWidth={1.5} />
          }
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4" style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)" }}>
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg"
                style={{ color: BRAND.slate }}
              >{l.label}</a>
            ))}
            <a href="#connect" onClick={() => setMobileOpen(false)}
              className="v2-btn mt-2 flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: BRAND.blue }}
            >Let&apos;s Connect</a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero — Dark ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${BRAND.slateDark} 0%, ${BRAND.slate} 50%, ${BRAND.slateLight} 100%)` }}
    >
      {/* Blue glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${BRAND.blue}15 0%, transparent 70%)` }}
      />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${BRAND.blue}10 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div className="v2-reveal inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium mb-8"
            style={{ background: "rgba(75,163,212,0.12)", color: BRAND.blueMuted, border: `1px solid rgba(75,163,212,0.15)` }}
          >
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: BRAND.blue }} />
            Exclusive Proposal for Highline
          </div>

          <h1 className="v2-reveal text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-white">
            Unlock hidden
            <br />
            <span style={{ color: BRAND.blue }}>profit</span> in every unit.
          </h1>

          <p className="v2-reveal mt-8 text-xl sm:text-2xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            We analyzed your inventory and found significant revenue sitting
            untouched. Here&apos;s exactly how we turn risk into margin.
          </p>

          <div className="v2-reveal mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#inventory" className="v2-btn inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-white transition-all"
              style={{ background: BRAND.blue, boxShadow: "0 4px 24px rgba(75,163,212,0.35)" }}
            >
              See Your Inventory Analysis
              <ArrowRight className="h-4.5 w-4.5" strokeWidth={2} />
            </a>
            <a href="#overview" className="v2-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white/80 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              How It Works
            </a>
          </div>

          <div className="v2-reveal mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            {["No chargebacks after 90 days", "Never denied a covered repair", "Bank-approved"].map((t) => (
              <span key={t} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Overview — Light ─── */
function Overview() {
  return (
    <section id="overview" className="relative py-28 sm:py-36" style={{ background: "#FAFBFC" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="v2-reveal max-w-2xl mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>
            Why GenZ Protect
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]" style={{ color: BRAND.slate }}>
            Unbiased advice.<br />Cutting-edge solutions.
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#6B7280" }}>
            We operate across the full spectrum of products and services —
            building bridges between industry participants for unexpected
            financial outcomes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 v2-stagger">
          {[
            { icon: <Shield className="h-6 w-6" strokeWidth={1.5} />, title: "Exclusionary VSC", desc: "Specializing in high-risk & high-mileage vehicles that traditional providers won't touch." },
            { icon: <TrendingUp className="h-6 w-6" strokeWidth={1.5} />, title: "Revenue Bridge", desc: "We connect OEMs, dealer groups, and customers — unlocking backend gross across every silo." },
            { icon: <Zap className="h-6 w-6" strokeWidth={1.5} />, title: "Zero Disruption", desc: "We don't replace your current provider. We fill the gaps they leave — surgically." },
          ].map((c) => (
            <div key={c.title} className="v2-reveal group rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              style={{ background: "#fff", border: "1px solid #E5E7EB" }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                style={{ background: BRAND.blueLight, color: BRAND.blue }}
              >{c.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: BRAND.slate }}>{c.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#6B7280" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits — Dark ─── */
function Benefits() {
  const ref = useRef<HTMLElement>(null);
  useSpotlight(ref);

  const items = [
    { text: "No chargebacks after 90 days", sub: "Up to $2,000 gross protection" },
    { text: "100% internal labor rate", sub: "Maximize your service revenue" },
    { text: "List price on OEM new parts", sub: "Full replacement value" },
    { text: "50–100 mile dealer tie-back", sub: "Optional & adjustable radius" },
    { text: "40+ claim analysts ready", sub: "Dealer-friendly claims process" },
    { text: "Simple remittance & accounting", sub: "Streamlined back-office" },
    { text: "Seamless menu integration", sub: "Darwin, Reynolds, and more" },
    { text: "SCPP Available", sub: "Service contract payment plans" },
  ];

  return (
    <section id="benefits" ref={ref} className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: BRAND.slateDark }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${BRAND.blue}0A 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="v2-reveal max-w-xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>
            Dealer Benefits
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-white">
            Built for Highline&apos;s bottom line.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 v2-stagger">
          {items.map((b) => (
            <div key={b.text}
              className="v2-reveal v2-spot rounded-2xl px-7 py-6 flex items-start gap-4 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" strokeWidth={1.5} style={{ color: BRAND.blue }} />
              <div>
                <p className="text-base font-semibold text-white">{b.text}</p>
                <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Coverage — Light ─── */
function Coverage() {
  const coverageTypes = [
    "4 levels of Exclusionary and Comprehensive coverage",
    "Electric VSC — includes battery coverage",
    "Term + Miles & Term + Unlimited Miles",
    "Vehicles with up to 300,000 miles",
    "$0–$250 deductible options (disappearing)",
    "Coverage from signing, 30, 60 days — customizable",
  ];

  const special = [
    "Canadian-manufactured vehicles", "Commercial use vehicles", "Rideshare vehicles (Uber, Lyft)",
    "Lifted trucks up to 6\"", "Exotic vehicles (Ferrari, Lamborghini, Bentley)", "Trucks up to 6500 series",
    "Dual rear wheel trucks", "Branded / salvage / rebuilt / lemon titles", "$50/day rental & rideshare reimbursement",
  ];

  return (
    <section className="relative py-28 sm:py-36" style={{ background: "#FAFBFC" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="v2-reveal max-w-xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>Coverage</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]" style={{ color: BRAND.slate }}>
            We say yes when everyone else says no.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {/* Main coverage */}
          <div className="v2-reveal rounded-2xl p-8 lg:col-span-3" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: BRAND.blueLight, color: BRAND.blue }}>
                <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: BRAND.slate }}>Coverage Types</h3>
            </div>
            <div className="space-y-3.5">
              {coverageTypes.map((t) => (
                <div key={t} className="flex items-start gap-3 text-[15px]" style={{ color: "#4B5563" }}>
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* EV highlight */}
          <div className="v2-reveal rounded-2xl p-8 lg:col-span-2 relative overflow-hidden text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND.slate} 0%, ${BRAND.slateLight} 100%)` }}
          >
            <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${BRAND.blue}20 0%, transparent 70%)` }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(75,163,212,0.15)", color: BRAND.blue }}>
                  <BatteryCharging className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-md"
                  style={{ color: BRAND.blue, background: "rgba(75,163,212,0.12)" }}
                >Industry First</span>
              </div>
              <h3 className="text-lg font-bold mt-5 mb-3">Electric VSC</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                Comprehensive battery degradation and replacement coverage.
                Remove EV hesitation from Highline&apos;s buyers.
              </p>
              <div className="space-y-3">
                {["Full battery replacement", "Degradation protection", "Thermal management coverage", "Financeable & bank-approved"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special coverages */}
        <div className="v2-reveal rounded-2xl p-8 mt-5" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <p className="text-xs font-bold uppercase tracking-[0.12em] mb-7 text-center" style={{ color: "#9CA3AF" }}>
            Also Available For
          </p>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {special.map((s) => (
              <div key={s} className="flex items-start gap-2.5 text-[15px]" style={{ color: "#4B5563" }}>
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-1" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Inventory Analysis — Dark ─── */
function Inventory() {
  const ref = useRef<HTMLElement>(null);
  useSpotlight(ref);
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const totalUplift = inventory.reduce((s, v) => s + v.uplift, 0);
  const totalVSC = inventory.reduce((s, v) => s + v.vsc, 0);

  return (
    <section id="inventory" ref={ref} className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: BRAND.slateDark }}
    >
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${BRAND.blue}08 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="v2-reveal max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>
            Highline Inventory Analysis
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-white">
            Your units. Our coverage.{" "}
            <span style={{ color: BRAND.blue }}>Real numbers.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            We pulled a sample from your current inventory and modeled the exact
            revenue uplift GenZ Protect delivers on each unit.
          </p>
        </div>

        {/* Desktop table */}
        <div className="v2-reveal hidden lg:block rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Stock #", "Vehicle", "Miles", "Risk Factor", "Wholesale", "Retail + VSC", "VSC Gross", "Total Uplift"].map((h, i) => (
                  <th key={h} className={`px-5 py-4 text-[11px] font-bold uppercase tracking-[0.06em] ${i >= 4 ? "text-right" : "text-left"}`}
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventory.map((v, i) => (
                <tr key={v.stock}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="transition-colors duration-150"
                  style={{
                    background: hovered === i ? "rgba(75,163,212,0.04)" : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <td className="px-5 py-4 v2-mono text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>{v.stock}</td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-white">{v.year} {v.make} {v.model}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{v.category}</p>
                  </td>
                  <td className="px-5 py-4 v2-mono text-[13px] text-right" style={{ color: "rgba(255,255,255,0.5)" }}>{v.miles.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold"
                      style={{ background: "rgba(75,163,212,0.1)", color: BRAND.blue }}
                    >{v.risk}</span>
                  </td>
                  <td className="px-5 py-4 v2-mono text-[13px] text-right" style={{ color: "rgba(255,255,255,0.3)" }}>${v.wholesale.toLocaleString()}</td>
                  <td className="px-5 py-4 v2-mono text-[13px] text-right font-medium text-white">${v.retail.toLocaleString()}</td>
                  <td className="px-5 py-4 v2-mono text-[13px] text-right font-medium" style={{ color: "#34D399" }}>+${v.vsc.toLocaleString()}</td>
                  <td className="px-5 py-4 v2-mono text-[14px] text-right font-bold" style={{ color: BRAND.blue }}>+${v.uplift.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <td colSpan={6} className="px-5 py-5 text-sm font-semibold text-right" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Total across {inventory.length} units
                </td>
                <td className="px-5 py-5 v2-mono text-sm text-right font-bold" style={{ color: "#34D399" }}>+${totalVSC.toLocaleString()}</td>
                <td className="px-5 py-5 v2-mono text-base text-right font-bold" style={{ color: BRAND.blue }}>+${totalUplift.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-3 v2-stagger">
          {inventory.map((v, i) => (
            <div key={v.stock} className="v2-reveal rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <button className="w-full px-5 py-4 flex items-center justify-between text-left"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div>
                  <p className="text-sm font-medium text-white">{v.year} {v.make} {v.model}</p>
                  <p className="text-[11px] v2-mono mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{v.miles.toLocaleString()} mi</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="v2-mono text-sm font-bold" style={{ color: BRAND.blue }}>+${v.uplift.toLocaleString()}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300"
                    strokeWidth={1.5}
                    style={{ color: "rgba(255,255,255,0.3)", transform: expanded === i ? "rotate(180deg)" : "none" }}
                  />
                </div>
              </button>
              <div className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: expanded === i ? "200px" : "0", opacity: expanded === i ? 1 : 0 }}
              >
                <div className="px-5 pb-4 grid grid-cols-2 gap-3 text-[13px]">
                  {[
                    ["Risk", <span key="r" className="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold" style={{ background: "rgba(75,163,212,0.1)", color: BRAND.blue }}>{v.risk}</span>],
                    ["Stock", <span key="s" className="v2-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{v.stock}</span>],
                    ["Wholesale", <span key="w" className="v2-mono" style={{ color: "rgba(255,255,255,0.35)" }}>${v.wholesale.toLocaleString()}</span>],
                    ["Retail + VSC", <span key="rv" className="v2-mono font-medium text-white">${v.retail.toLocaleString()}</span>],
                    ["VSC Gross", <span key="vsc" className="v2-mono font-medium" style={{ color: "#34D399" }}>+${v.vsc.toLocaleString()}</span>],
                    ["Category", <span key="c" style={{ color: "rgba(255,255,255,0.5)" }}>{v.category}</span>],
                  ].map(([label, val]) => (
                    <div key={label as string}>
                      <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{label}</p>
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ROI — Light with blue accent ─── */
function ROI() {
  const totalUplift = inventory.reduce((s, v) => s + v.uplift, 0);
  const totalVSC = inventory.reduce((s, v) => s + v.vsc, 0);
  const avgUplift = Math.round(totalUplift / inventory.length);
  const annual = totalUplift * 12;

  const upliftC = useCounter(totalUplift);
  const annualC = useCounter(annual);
  const avgC = useCounter(avgUplift);

  const cards = [
    { label: "Monthly Uplift", value: upliftC, prefix: "$", suffix: "", sub: `across ${inventory.length} sample units`, ref: upliftC.ref, accent: false },
    { label: "Annual Projection", value: annualC, prefix: "$", suffix: "", sub: "projected at current volume", ref: annualC.ref, accent: true },
    { label: "Avg Uplift / Unit", value: avgC, prefix: "$", suffix: "", sub: "per vehicle retailed with VSC", ref: avgC.ref, accent: false },
  ];

  return (
    <section id="roi" className="relative py-28 sm:py-36" style={{ background: "#FAFBFC" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="v2-reveal text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>
            Highline ROI Projection
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]" style={{ color: BRAND.slate }}>
            The numbers speak for themselves.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 v2-stagger">
          {cards.map((c) => (
            <div key={c.label}
              className={`v2-reveal rounded-2xl p-8 text-center transition-all duration-300 ${c.accent ? "text-white" : ""}`}
              style={c.accent
                ? { background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueDark})`, boxShadow: "0 8px 32px rgba(75,163,212,0.2)" }
                : { background: "#fff", border: "1px solid #E5E7EB" }
              }
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] mb-3"
                style={{ color: c.accent ? "rgba(255,255,255,0.7)" : "#9CA3AF" }}
              >{c.label}</p>
              <p ref={c.ref} className="v2-mono text-4xl sm:text-5xl font-bold tracking-tight"
                style={{ color: c.accent ? "#fff" : BRAND.blue }}
              >{c.prefix}{c.value.count.toLocaleString()}{c.suffix}</p>
              <p className="text-[13px] mt-2" style={{ color: c.accent ? "rgba(255,255,255,0.6)" : "#9CA3AF" }}>{c.sub}</p>
            </div>
          ))}
        </div>

        {/* VSC Gross callout */}
        <div className="v2-reveal rounded-2xl p-8 mt-5 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "#fff", border: "1px solid #E5E7EB" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(52,211,153,0.1)", color: "#34D399" }}>
              <Star className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "#9CA3AF" }}>VSC Backend Gross</p>
              <p className="v2-mono text-2xl font-bold" style={{ color: "#34D399" }}>${totalVSC.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-sm text-center sm:text-right max-w-md" style={{ color: "#6B7280" }}>
            Pure backend on {inventory.length} units — reclaimed from vehicles Highline would have otherwise wholesaled.
          </p>
        </div>

        {/* Annual projection callout */}
        <div className="v2-reveal rounded-2xl p-10 mt-5 text-center relative overflow-hidden"
          style={{ background: BRAND.slateDark }}
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${BRAND.blue}15 0%, transparent 70%)` }}
          />
          <p className="relative text-xl sm:text-2xl font-semibold leading-relaxed text-white max-w-2xl mx-auto">
            <span className="v2-mono" style={{ color: BRAND.blue }}>${annual.toLocaleString()}/year</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>
              {" "}— reclaimed from units Highline would have wholesaled or sold without backend protection.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Process — Dark ─── */
function Process() {
  const steps = [
    { n: "01", title: "Inventory Audit", desc: "We analyze your full inventory and flag every eligible unit.", icon: <BadgeCheck className="h-5 w-5" strokeWidth={1.5} /> },
    { n: "02", title: "Menu Integration", desc: "Seamless integration into your F&I workflow — Darwin, Reynolds, or custom.", icon: <Wrench className="h-5 w-5" strokeWidth={1.5} /> },
    { n: "03", title: "Coverage Activation", desc: "Your team starts offering GenZ coverage on qualifying units immediately.", icon: <Zap className="h-5 w-5" strokeWidth={1.5} /> },
    { n: "04", title: "Revenue Growth", desc: "Watch backend gross climb as wholesale units become retail profit centers.", icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} /> },
  ];

  return (
    <section className="relative py-28 sm:py-36" style={{ background: BRAND.slateDark }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="v2-reveal max-w-xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>Implementation</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-white">
            Live in days. Not months.
          </h2>
        </div>

        <div className="relative">
          <svg className="absolute top-[52px] left-0 w-full h-8 hidden lg:block pointer-events-none"
            viewBox="0 0 1200 32" fill="none" preserveAspectRatio="none"
          >
            <path d="M 75 16 C 200 16, 200 16, 300 16 C 400 16, 400 16, 525 16 C 600 16, 600 16, 675 16 C 800 16, 800 16, 900 16 C 950 16, 950 16, 1125 16"
              stroke="rgba(75,163,212,0.12)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 75 16 C 200 16, 200 16, 300 16 C 400 16, 400 16, 525 16 C 600 16, 600 16, 675 16 C 800 16, 800 16, 900 16 C 950 16, 950 16, 1125 16"
              stroke="rgba(75,163,212,0.35)" strokeWidth="2" strokeLinecap="round" className="v2-flow" />
          </svg>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 v2-stagger">
            {steps.map((s) => (
              <div key={s.n} className="v2-reveal v2-spot rounded-2xl p-7 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="v2-mono text-[11px] font-bold px-2.5 py-1 rounded-lg"
                    style={{ color: BRAND.blue, background: "rgba(75,163,212,0.1)" }}
                  >{s.n}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: "rgba(75,163,212,0.08)", color: BRAND.blue }}
                  >{s.icon}</div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Connect — Light ─── */
function Connect() {
  return (
    <section id="connect" className="relative py-28 sm:py-36" style={{ background: "#FAFBFC" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="v2-reveal">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: BRAND.blue }}>Next Step</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]" style={{ color: BRAND.slate }}>
              Ready to capture the profit Highline is{" "}
              <span style={{ color: BRAND.blue }}>leaving on the table?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#6B7280" }}>
              10 minutes. No fluff. We&apos;ll walk through your specific
              inventory and map out the revenue projection.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "No disruption to your current provider",
                "No chargebacks after 90 days",
                "No declined covered repairs — ever",
                "No contracts or long-term commitment",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3 text-[15px]" style={{ color: "#4B5563" }}>
                  <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="v2-reveal rounded-2xl p-8 sm:p-10" style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
            <div className="flex items-center gap-4 mb-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ background: BRAND.blueLight, color: BRAND.blue }}
              >
                <Users className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: BRAND.slate }}>Jason Scott</p>
                <p className="text-sm" style={{ color: "#6B7280" }}>Chief Revenue Officer</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <a href="tel:5203310883"
                className="flex items-center gap-3 rounded-xl px-5 py-4 text-sm font-medium transition-all"
                style={{ border: "1px solid #E5E7EB", color: "#374151" }}
              >
                <Phone className="h-4.5 w-4.5" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                <span className="v2-mono">520.331.0883</span>
              </a>
              <a href="mailto:Jason@genz.com"
                className="flex items-center gap-3 rounded-xl px-5 py-4 text-sm font-medium transition-all"
                style={{ border: "1px solid #E5E7EB", color: "#374151" }}
              >
                <Mail className="h-4.5 w-4.5" strokeWidth={1.5} style={{ color: BRAND.blue }} />
                Jason@genz.com
              </a>
            </div>

            <div className="mt-7 pt-7" style={{ borderTop: "1px solid #E5E7EB" }}>
              <a href="#connect"
                className="v2-btn flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white w-full transition-all"
                style={{ background: BRAND.blue, boxShadow: "0 4px 20px rgba(75,163,212,0.3)" }}
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

/* ─── Footer — Dark ─── */
function Footer() {
  return (
    <footer className="py-8" style={{ background: BRAND.slateDark, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <img src={LOGO_URL} alt="GenZ" className="h-6 w-auto" />
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            Confidential — Prepared exclusively for Highline
          </p>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; 2026 GenZ Automotive
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══ PAGE ═══ */
export default function HighlineV2() {
  useReveal();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: v2Styles }} />
      <Nav />
      <Hero />
      <Overview />
      <Benefits />
      <Coverage />
      <Inventory />
      <ROI />
      <Process />
      <Connect />
      <Footer />
    </>
  );
}
