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
} from "lucide-react";

const LOGO_URL =
  "https://xepoqvwvwgglwyjelqsw.supabase.co/storage/v1/object/public/Images/GenZ-logo-w-blue.png";

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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

/* ─── Animated Counter ─── */
function useCounter(target: number, duration = 1500) {
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
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
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

/* ══════════════════════════════════════════════════════════
   INVENTORY DATA — Highline VSC Examples
   ══════════════════════════════════════════════════════════ */
const inventoryData = [
  {
    stock: "HL-4821",
    year: 2019,
    make: "BMW",
    model: "X5 xDrive40i",
    miles: 87_420,
    vin: "5UXCR6C5*KLL*****",
    category: "Exotic / Luxury",
    risk: "High Mileage",
    wholesaleValue: 24_500,
    retailWithVSC: 31_200,
    vscGross: 1_850,
    totalUplift: 6_700,
  },
  {
    stock: "HL-3297",
    year: 2020,
    make: "Mercedes-Benz",
    model: "GLE 350",
    miles: 112_300,
    vin: "4JGFB4KB*LA*****",
    category: "Luxury SUV",
    risk: "100K+ Miles",
    wholesaleValue: 22_800,
    retailWithVSC: 29_900,
    vscGross: 1_950,
    totalUplift: 7_100,
  },
  {
    stock: "HL-5510",
    year: 2018,
    make: "Audi",
    model: "Q7 Premium Plus",
    miles: 134_750,
    vin: "WA1LAAF7*JD*****",
    category: "Luxury SUV",
    risk: "High Mileage",
    wholesaleValue: 18_200,
    retailWithVSC: 25_800,
    vscGross: 1_800,
    totalUplift: 7_600,
  },
  {
    stock: "HL-2103",
    year: 2021,
    make: "Tesla",
    model: "Model Y Long Range",
    miles: 68_900,
    vin: "5YJYGDEE*MF*****",
    category: "Electric Vehicle",
    risk: "Battery Degradation",
    wholesaleValue: 27_400,
    retailWithVSC: 35_500,
    vscGross: 2_000,
    totalUplift: 8_100,
  },
  {
    stock: "HL-6744",
    year: 2017,
    make: "Land Rover",
    model: "Range Rover Sport",
    miles: 156_200,
    vin: "SALWR2RE*HA*****",
    category: "Exotic / Luxury",
    risk: "150K+ Miles",
    wholesaleValue: 19_600,
    retailWithVSC: 27_400,
    vscGross: 1_750,
    totalUplift: 7_800,
  },
  {
    stock: "HL-1888",
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    miles: 91_300,
    vin: "WP1AA2AY*LA*****",
    category: "Exotic Vehicle",
    risk: "Exotic + High Miles",
    wholesaleValue: 38_500,
    retailWithVSC: 47_200,
    vscGross: 2_000,
    totalUplift: 8_700,
  },
  {
    stock: "HL-7392",
    year: 2019,
    make: "Ford",
    model: "F-350 Super Duty",
    miles: 178_400,
    vin: "1FT8W3BT*KE*****",
    category: "Heavy Duty Truck",
    risk: "High Mileage + DRW",
    wholesaleValue: 32_100,
    retailWithVSC: 39_800,
    vscGross: 1_900,
    totalUplift: 7_700,
  },
  {
    stock: "HL-0456",
    year: 2022,
    make: "Rivian",
    model: "R1S Adventure",
    miles: 42_100,
    vin: "7FCTGAAL*NN*****",
    category: "Electric Vehicle",
    risk: "EV Battery Risk",
    wholesaleValue: 48_200,
    retailWithVSC: 57_500,
    vscGross: 2_000,
    totalUplift: 9_300,
  },
  {
    stock: "HL-9021",
    year: 2018,
    make: "Maserati",
    model: "Levante GranLusso",
    miles: 103_600,
    vin: "ZN661YUA*JX*****",
    category: "Exotic Vehicle",
    risk: "Exotic + 100K+",
    wholesaleValue: 21_300,
    retailWithVSC: 29_500,
    vscGross: 1_850,
    totalUplift: 8_200,
  },
  {
    stock: "HL-3150",
    year: 2021,
    make: "RAM",
    model: "3500 Limited",
    miles: 89_200,
    vin: "3C63RRML*MG*****",
    category: "Heavy Duty Truck",
    risk: "Commercial Use",
    wholesaleValue: 44_700,
    retailWithVSC: 52_900,
    vscGross: 1_950,
    totalUplift: 8_200,
  },
];

/* ═══ COMPONENTS ═══ */

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div
        className={`nav-float rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-[#09090b]/80 shadow-lg shadow-black/20" : "bg-[#09090b]/50"
        }`}
        style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,${scrolled ? 0.08 : 0.04})` }}
      >
        <a href="/" className="flex items-center">
          <img src={LOGO_URL} alt="GenZ Protect" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "#overview", label: "Overview" },
            { href: "#benefits", label: "Benefits" },
            { href: "#inventory", label: "Inventory" },
            { href: "#roi", label: "ROI" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[13px] font-medium text-muted-fg hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#connect"
          className="btn-physical inline-flex items-center rounded-xl bg-primary px-4 py-2 text-[13px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors"
        >
          Let&apos;s Connect
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function PitchHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="light-leak bg-primary/80 top-[-200px] left-[-100px]" />
      <div className="light-leak bg-blue-500/30 bottom-[-200px] right-[-150px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-muted-fg mb-6"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            Exclusive Proposal for Highline
          </div>

          <p className="reveal text-[13px] font-semibold uppercase tracking-[0.12em] text-primary mb-4">
            Prepared by GenZ Protect
          </p>

          <h1 className="reveal text-[clamp(2.2rem,5.5vw,4rem)] font-semibold tracking-tight leading-[1.05]">
            Unlock <span className="text-primary">hidden profit</span> in
            every unit on your lot.
          </h1>

          <p className="reveal mt-6 text-lg text-muted-fg leading-relaxed max-w-xl">
            We analyzed your inventory and found significant revenue sitting
            untouched. Here&apos;s exactly how GenZ Protect turns your
            highest-risk units into your highest-margin deals.
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#inventory"
              className="btn-physical inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-semibold text-[#09090b] hover:bg-primary-dark transition-colors"
            >
              See Your Inventory Analysis
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#overview"
              className="btn-physical inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-medium text-foreground hover:bg-white/[0.04] transition-colors"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Overview / About GenZ ─── */
function Overview() {
  return (
    <section id="overview" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Why GenZ Protect
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Unbiased advice. Cutting-edge solutions.
          </h2>
          <p className="mt-4 text-muted-fg leading-relaxed">
            We created GenZ Protect to help automotive customers stay at the
            forefront of industry changes. We operate across the full spectrum
            of products and services — building bridges between industry
            participants and business silos for unexpected financial outcomes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 stagger">
          {[
            {
              icon: <Shield className="h-5 w-5" strokeWidth={1.5} />,
              title: "Exclusionary VSC",
              description:
                "Specializing in high-risk & high-mileage vehicles that traditional providers won't touch.",
            },
            {
              icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />,
              title: "Revenue Bridge",
              description:
                "We connect OEMs, dealer groups, and customers — unlocking backend gross across every silo.",
            },
            {
              icon: <Zap className="h-5 w-5" strokeWidth={1.5} />,
              title: "Zero Disruption",
              description:
                "We don't replace your current provider. We fill the gaps they leave — surgically.",
            },
          ].map((item) => (
            <div key={item.title} className="reveal glass-card noise spotlight-card rounded-2xl p-7">
              <div className="icon-container mb-5">{item.icon}</div>
              <h3 className="text-[15px] font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-fg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Dealer Benefits ─── */
function DealerBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  useSpotlight(sectionRef);

  const benefits = [
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
    <section id="benefits" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="light-leak bg-primary/40 top-1/2 right-[-200px] -translate-y-1/2" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Dealer Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Built for Highline&apos;s bottom line.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 stagger">
          {benefits.map((b) => (
            <div
              key={b.text}
              className="reveal spotlight-card glass-card noise rounded-2xl px-6 py-5 flex items-start gap-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-success mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[15px] font-medium">{b.text}</p>
                <p className="text-[13px] text-muted-fg mt-0.5">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Coverage Grid (Bento) ─── */
function CoverageGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  useSpotlight(sectionRef);

  const coverageTypes = [
    "4 levels of Exclusionary and Comprehensive coverage",
    "Electric VSC — includes battery coverage",
    "Term + Miles & Term + Unlimited Miles",
    "Vehicles with up to 300,000 miles",
    "$0–$250 deductible options (disappearing)",
    "Coverage from date of signing, 30, 60 days — customizable",
  ];

  const specialCoverage = [
    "Canadian-manufactured vehicles",
    "Commercial use vehicles",
    "Rideshare vehicles (Uber, Lyft)",
    "Lifted trucks up to 6\"",
    "Exotic vehicles (Ferrari, Lamborghini, Bentley)",
    "Trucks up to 6500 series",
    "Dual rear wheel trucks",
    "Branded / salvage / rebuilt / lemon titles",
    "$50/day rental & rideshare reimbursement",
  ];

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            We say yes when everyone else says no.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {/* Coverage Types — 3 cols */}
          <div className="reveal spotlight-card glass-card noise rounded-2xl p-7 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-container">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold">Coverage Types</h3>
            </div>
            <div className="space-y-3">
              {coverageTypes.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-muted-fg">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success mt-0.5" strokeWidth={1.5} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* EV Highlight — 2 cols */}
          <div className="reveal spotlight-card glass-card noise rounded-2xl p-7 lg:col-span-2 relative overflow-hidden">
            <div className="light-leak bg-primary/40 top-[-80px] right-[-80px] !w-[250px] !h-[250px]" />
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
              <p className="text-sm text-muted-fg leading-relaxed mb-5">
                Comprehensive battery degradation and replacement coverage.
                Remove EV hesitation from Highline&apos;s buyers — unlock a new
                backend revenue stream.
              </p>
              <div className="space-y-3">
                {["Full battery replacement", "Degradation protection", "Thermal management coverage", "Financeable & bank-approved"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={1.5} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special Coverages — full width */}
        <div className="reveal glass-card noise rounded-2xl p-7 mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-fg mb-6 text-center">
            Also Available For
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {specialCoverage.map((item) => (
              <div key={item} className="reveal flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" strokeWidth={1.5} />
                <span className="text-muted-fg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Inventory Analysis Table ─── */
function InventoryAnalysis() {
  const sectionRef = useRef<HTMLElement>(null);
  useSpotlight(sectionRef);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const totalUplift = inventoryData.reduce((sum, v) => sum + v.totalUplift, 0);
  const totalVSCGross = inventoryData.reduce((sum, v) => sum + v.vscGross, 0);

  return (
    <section id="inventory" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="light-leak bg-primary/50 top-0 left-1/4" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Highline Inventory Analysis
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Your units. Our coverage.{" "}
            <span className="text-primary">Real numbers.</span>
          </h2>
          <p className="mt-4 text-muted-fg leading-relaxed">
            We pulled a sample from your current inventory and modeled the exact
            revenue uplift GenZ Protect delivers on each unit.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="reveal hidden lg:block glass-card noise rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Stock #
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Vehicle
                  </th>
                  <th className="px-4 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Miles
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Risk Factor
                  </th>
                  <th className="px-4 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Wholesale
                  </th>
                  <th className="px-4 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Retail + VSC
                  </th>
                  <th className="px-4 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    VSC Gross
                  </th>
                  <th className="px-6 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-muted">
                    Total Uplift
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((v, i) => (
                  <tr
                    key={v.stock}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`border-b border-border/50 transition-colors duration-200 ${
                      hoveredRow === i ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="px-6 py-4 mono-num text-[13px] text-muted-fg">
                      {v.stock}
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-[14px] font-medium">
                        {v.year} {v.make} {v.model}
                      </p>
                      <p className="text-[11px] text-muted mt-0.5">{v.category}</p>
                    </td>
                    <td className="px-4 py-4 mono-num text-[13px] text-muted-fg text-right">
                      {v.miles.toLocaleString()}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        {v.risk}
                      </span>
                    </td>
                    <td className="px-4 py-4 mono-num text-[13px] text-muted text-right">
                      ${v.wholesaleValue.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 mono-num text-[13px] text-foreground text-right font-medium">
                      ${v.retailWithVSC.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 mono-num text-[13px] text-success text-right font-medium">
                      +${v.vscGross.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 mono-num text-[14px] text-primary text-right font-semibold">
                      +${v.totalUplift.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border">
                  <td colSpan={6} className="px-6 py-5 text-[13px] font-semibold text-muted-fg text-right">
                    Total across {inventoryData.length} units
                  </td>
                  <td className="px-4 py-5 mono-num text-[14px] text-success text-right font-semibold">
                    +${totalVSCGross.toLocaleString()}
                  </td>
                  <td className="px-6 py-5 mono-num text-[16px] text-primary text-right font-bold">
                    +${totalUplift.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3 stagger">
          {inventoryData.map((v, i) => (
            <div key={v.stock} className="reveal glass-card noise rounded-2xl overflow-hidden">
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left"
                onClick={() => setExpandedRow(expandedRow === i ? null : i)}
              >
                <div>
                  <p className="text-[14px] font-medium">
                    {v.year} {v.make} {v.model}
                  </p>
                  <p className="text-[11px] text-muted mt-0.5 mono-num">
                    {v.miles.toLocaleString()} mi
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="mono-num text-[14px] font-semibold text-primary">
                    +${v.totalUplift.toLocaleString()}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted transition-transform duration-300 ${
                      expandedRow === i ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expandedRow === i ? "200px" : "0px",
                  opacity: expandedRow === i ? 1 : 0,
                }}
              >
                <div className="px-5 pb-4 grid grid-cols-2 gap-3 text-[13px]">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">Risk</p>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                      {v.risk}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">Stock</p>
                    <p className="mono-num text-muted-fg">{v.stock}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">Wholesale</p>
                    <p className="mono-num text-muted">${v.wholesaleValue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">Retail + VSC</p>
                    <p className="mono-num font-medium">${v.retailWithVSC.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">VSC Gross</p>
                    <p className="mono-num text-success font-medium">+${v.vscGross.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">Category</p>
                    <p className="text-muted-fg">{v.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Summary ─── */
function ROISummary() {
  const totalUplift = inventoryData.reduce((sum, v) => sum + v.totalUplift, 0);
  const totalVSCGross = inventoryData.reduce((sum, v) => sum + v.vscGross, 0);
  const avgUplift = Math.round(totalUplift / inventoryData.length);
  const projectedAnnual = totalUplift * 12;

  const upliftCounter = useCounter(totalUplift);
  const annualCounter = useCounter(projectedAnnual);
  const avgCounter = useCounter(avgUplift);

  return (
    <section id="roi" className="relative py-24 sm:py-32">
      <div className="light-leak bg-primary/60 bottom-0 left-1/3" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Highline ROI Projection
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            The numbers speak for themselves.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger">
          <div className="reveal glass-card noise rounded-2xl p-7 text-center">
            <div className="icon-container mx-auto mb-4">
              <DollarSign className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-fg mb-2">
              Monthly Uplift
            </p>
            <p ref={upliftCounter.ref} className="mono-num text-3xl font-semibold text-primary tracking-tight">
              ${upliftCounter.count.toLocaleString()}
            </p>
            <p className="text-[12px] text-muted mt-1">
              across {inventoryData.length} sample units
            </p>
          </div>

          <div className="reveal glass-card noise rounded-2xl p-7 text-center">
            <div className="icon-container mx-auto mb-4">
              <TrendingUp className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-fg mb-2">
              Annual Projection
            </p>
            <p ref={annualCounter.ref} className="mono-num text-3xl font-semibold text-primary tracking-tight">
              ${annualCounter.count.toLocaleString()}
            </p>
            <p className="text-[12px] text-muted mt-1">
              projected at current volume
            </p>
          </div>

          <div className="reveal glass-card noise rounded-2xl p-7 text-center">
            <div className="icon-container mx-auto mb-4">
              <Gauge className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-fg mb-2">
              Avg Uplift / Unit
            </p>
            <p ref={avgCounter.ref} className="mono-num text-3xl font-semibold text-foreground tracking-tight">
              ${avgCounter.count.toLocaleString()}
            </p>
            <p className="text-[12px] text-muted mt-1">
              per vehicle retailed with VSC
            </p>
          </div>

          <div className="reveal glass-card noise rounded-2xl p-7 text-center">
            <div className="icon-container mx-auto mb-4">
              <Star className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-fg mb-2">
              VSC Backend Gross
            </p>
            <p className="mono-num text-3xl font-semibold text-success tracking-tight">
              ${totalVSCGross.toLocaleString()}
            </p>
            <p className="text-[12px] text-muted mt-1">
              pure backend on {inventoryData.length} units
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className="reveal glass-card noise rounded-2xl p-8 sm:p-10 mt-8 text-center relative overflow-hidden">
          <div className="light-leak bg-primary/50 top-0 right-0 !w-[300px] !h-[300px]" />
          <p className="relative text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            <span className="text-primary font-semibold">
              ${projectedAnnual.toLocaleString()} per year
            </span>{" "}
            <span className="text-muted-fg">
              — reclaimed from units Highline would have otherwise wholesaled or
              sold without backend protection.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Process / How We Work Together ─── */
function Process() {
  const steps = [
    {
      step: "01",
      title: "Inventory Audit",
      description: "We analyze your full inventory and flag every unit eligible for GenZ coverage.",
      icon: <BadgeCheck className="h-5 w-5" strokeWidth={1.5} />,
    },
    {
      step: "02",
      title: "Menu Integration",
      description: "Seamless integration into your existing F&I workflow — Darwin, Reynolds, or custom.",
      icon: <Wrench className="h-5 w-5" strokeWidth={1.5} />,
    },
    {
      step: "03",
      title: "Coverage Activation",
      description: "Your team starts offering GenZ coverage on qualifying units immediately.",
      icon: <Zap className="h-5 w-5" strokeWidth={1.5} />,
    },
    {
      step: "04",
      title: "Revenue Growth",
      description: "Watch backend gross climb as wholesale units become retail profit centers.",
      icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
            Implementation
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Live in days. Not months.
          </h2>
        </div>

        <div className="relative">
          {/* Animated connector */}
          <svg
            className="absolute top-[52px] left-0 w-full h-8 hidden lg:block pointer-events-none"
            viewBox="0 0 1200 32"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 75 16 C 200 16, 200 16, 300 16 C 400 16, 400 16, 525 16 C 600 16, 600 16, 675 16 C 800 16, 800 16, 900 16 C 950 16, 950 16, 1125 16"
              stroke="rgba(200,169,81,0.12)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 75 16 C 200 16, 200 16, 300 16 C 400 16, 400 16, 525 16 C 600 16, 600 16, 675 16 C 800 16, 800 16, 900 16 C 950 16, 950 16, 1125 16"
              stroke="rgba(200,169,81,0.35)"
              strokeWidth="2"
              strokeLinecap="round"
              className="flow-line"
            />
          </svg>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger">
            {steps.map((s) => (
              <div key={s.step} className="reveal glass-card noise rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="mono-num text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                    {s.step}
                  </span>
                  <div className="icon-container !w-9 !h-9 !rounded-lg">{s.icon}</div>
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-fg leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Connect / CTA ─── */
function Connect() {
  return (
    <section id="connect" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="light-leak bg-primary/50 top-0 left-1/3" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
              Next Step
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
              Ready to capture the profit Highline is{" "}
              <span className="text-primary">leaving on the table?</span>
            </h2>
            <p className="mt-4 text-muted-fg leading-relaxed">
              10 minutes. No fluff. We&apos;ll walk through your specific
              inventory, show you the exact units we can cover, and map out
              the revenue projection for your dealership.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "No disruption to your current provider",
                "No chargebacks after 90 days",
                "No declined covered repairs — ever",
                "No contracts or long-term commitment",
              ].map((b) => (
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
                <p className="text-[13px] text-muted-fg">Chief Revenue Officer</p>
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
                href="#connect"
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
            Confidential — Prepared exclusively for Highline
          </p>
          <p className="text-[13px] text-muted">&copy; 2026 GenZ Automotive</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══ PAGE ═══ */
export default function HighlinePitch() {
  useReveal();

  return (
    <>
      <Nav />
      <PitchHero />
      <Overview />
      <DealerBenefits />
      <CoverageGrid />
      <InventoryAnalysis />
      <ROISummary />
      <Process />
      <Connect />
      <Footer />
    </>
  );
}
