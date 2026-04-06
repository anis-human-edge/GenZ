"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  BatteryCharging,
  TrendingUp,
  Circle,
  Menu,
  X
} from "lucide-react";

// ─── Analytics Mock ─────────────────────────────────────────────
const trackEvent = (eventName: string, props?: any) => {
  console.log(`[HubSpot Tracking] EVENT: ${eventName}`, props);
};

const LOGO_URL = "https://xepoqvwvwgglwyjelqsw.supabase.co/storage/v1/object/public/Images/GenZ-logo-w-blue.png";

const BRAND = {
  bg: "#FFFFFF",
  bgMuted: "#F9FAFf",
  border: "#E5E7EB",
  textMain: "#050505",
  textMuted: "#6B7280",
  accent: "#0055FF", // Sleek ultra-blue
};

// ─── UTILITIES ──────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("v3-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".v3-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

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
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
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

// ─── COMPONENTS ─────────────────────────────────────────────────

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${BRAND.border}` : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-8 flex h-24 items-center justify-between">
        <a href="/" className="flex items-center">
          {/* Using CSS filter block to revert the logo back to dark if it was white/inverted previously */}
          <img src={LOGO_URL} alt="GenZ Protect" className="h-7 w-auto filter grayscale opacity-90 hover:grayscale-0 transition-all" />
        </a>

        <div className="hidden md:flex items-center gap-12">
          <nav className="flex gap-10">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-[14px] font-medium text-[#6B7280] hover:text-[#050505] transition-colors"
                onClick={() => trackEvent("Nav Click", { link: l.label })}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#book" onClick={() => trackEvent("CTA Click", { location: "Nav" })}
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3 bg-[#050505] text-white text-[14px] font-semibold transition-transform hover:scale-105">
            Book In 15
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6 text-[#050505]" /> : <Menu className="h-6 w-6 text-[#050505]" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 px-8 py-8 shadow-2xl">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[#050505] font-medium text-lg">
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="mt-4 bg-[#050505] text-white font-medium py-4 text-center rounded-xl">
              Book In 15
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-8 w-full v3-reveal">
        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 ml-1">
          Built for dealers who hate leaving money at auction
        </p>

        <h1 className="text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.95] tracking-tighter text-[#050505] mb-12 max-w-[90%]">
          Retail 5 to 6 more cars a month your current provider <span className="text-gray-300 italic font-serif tracking-tight pr-4">won't touch.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="text-2xl sm:text-3xl leading-snug text-gray-500 font-light">
              We don&apos;t replace your provider. We cover the cars they won&apos;t.
              <span className="block mt-4 text-[#050505] font-normal">
                The deals you currently send to auction become the backend you wish you had.
              </span>
            </p>
          </div>
          
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#math" onClick={() => trackEvent("Hero CTA", { action: "Math" })}
              className="inline-flex items-center justify-center gap-4 rounded-full px-10 py-5 bg-[#050505] text-white text-lg font-medium transition-transform hover:scale-105 active:scale-95 w-full">
              Show Me The Math
            </a>
            <a href="#book" onClick={() => trackEvent("Hero CTA", { action: "Book" })}
              className="inline-flex items-center justify-center gap-4 rounded-full px-10 py-5 bg-white border border-gray-200 text-[#050505] text-lg font-medium transition-colors hover:bg-gray-50 w-full">
              Book 15 Min With Jason
            </a>
          </div>
        </div>
      </div>
      
      {/* Massive subtle background element */}
      <div className="absolute top-[20%] right-[-10%] opacity-[0.02] pointer-events-none text-[30rem] font-bold leading-none tracking-tighter selection:bg-transparent">
        VSC
      </div>
    </section>
  );
}

function Pitch() {
  return (
    <section className="py-32 sm:py-48 bg-[#F9FAFf] border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-5xl px-8 text-center v3-reveal">
        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-12">
          The 10-Second Version
        </p>

        <h2 className="text-3xl sm:text-5xl leading-[1.3] font-medium text-[#6B7280] tracking-tight">
          Every month, your store <span className="text-[#050505]">wholesales decent cars</span> because your provider won't cover them. High mileage, rideshare, lifted, branded. The recon math doesn't work. Finance has nothing to sell. <span className="text-[#050505]">We cover those cars.</span> You retail them. You pocket ~$2,000 in backend per unit. Five to six units a month adds up to <span className="text-[#050505] border-b-2 border-black pb-1">$120,000 a year left behind.</span>
        </h2>
      </div>
    </section>
  );
}

function Calculator() {
  const [units, setUnits] = useState(5);
  const [gross, setGross] = useState(2000);

  const monthly = units * gross;
  const annual = monthly * 12;
  const threeYear = annual * 3;

  return (
    <section id="math" className="py-32 sm:py-48 bg-white border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-6xl px-8">
        
        <div className="mb-24 v3-reveal">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#050505] mb-6">Your Math.</h2>
          <p className="text-2xl text-gray-500 font-light max-w-2xl">
            How much are you leaving at auction every year? Move the sliders.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center v3-reveal">
          
          {/* Controls - Left side */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-sm font-medium text-gray-500">Units wholesaled per month</label>
                <span className="text-4xl font-light tracking-tighter text-[#050505]">{units}</span>
              </div>
              <input type="range" min="1" max="30" step="1" value={units} onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-px bg-gray-200 rounded-none appearance-none cursor-pointer slider-cinematic" />
            </div>

            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-sm font-medium text-gray-500">Avg backend gross / unit</label>
                <span className="text-4xl font-light tracking-tighter text-[#050505]">${gross.toLocaleString()}</span>
              </div>
              <input type="range" min="1000" max="2500" step="100" value={gross} onChange={(e) => setGross(Number(e.target.value))}
                className="w-full h-px bg-gray-200 rounded-none appearance-none cursor-pointer slider-cinematic" />
              <p className="text-[12px] mt-4 text-gray-400">Most GenZ dealers see $1,800 to $2,200.</p>
            </div>
          </div>

          {/* Outputs - Right side */}
          <div className="lg:col-span-7">
            <div className="p-12 sm:p-16 bg-[#F9FAFf] border border-gray-100 rounded-[2rem]">
              <div className="mb-12">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Annual Reclaimed</p>
                <p className="text-6xl sm:text-8xl font-light tracking-tighter text-[#050505]">
                  ${annual.toLocaleString()}
                </p>
              </div>

              <div className="flex gap-12 sm:gap-24 border-t border-gray-200 pt-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Monthly Impact</p>
                  <p className="text-2xl sm:text-3xl font-light text-[#050505]">${monthly.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">3-Year Impact</p>
                  <p className="text-2xl sm:text-3xl font-light text-[#050505]">${threeYear.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <p className="text-[13px] leading-relaxed text-gray-400 mt-8 max-w-lg">
              * Conservative number. Real upside climbs further when factoring rental reimbursement, service drive retention, and trade-cycle continuity you recover.
            </p>
          </div>

        </div>
      </div>
      <style>{`
        .slider-cinematic::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #050505;
          cursor: pointer;
          border: none;
          transition: transform 0.1s;
        }
        .slider-cinematic::-webkit-slider-thumb:active {
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}

function RiskBuffer() {
  const tableData = [
    { name: "Clean low-mileage trades", current: "Covered natively", genz: "We intentionally stay out" },
    { name: "100k-300k mile trades", current: "Denied or flagged", genz: "Fully covered" },
    { name: "Rideshare vehicles", current: "Excluded instantly", genz: "Fully covered" },
    { name: "Lifted trucks (up to 6\")", current: "Excluded", genz: "Fully covered" },
    { name: "Used EVs / Battery", current: "Excluded", genz: "Fully covered + degradation" },
    { name: "Branded / Salvage titles", current: "Excluded instantly", genz: "Fully covered" }
  ];

  return (
    <section id="why-us" className="py-32 sm:py-48 bg-white border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="v3-reveal sticky top-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#050505] mb-8 leading-[1.1]">
              We aren't here<br/>to replace anyone.
            </h2>
            <p className="text-2xl text-gray-500 font-light leading-relaxed mb-8">
              Your provider works great on clean trades. Keep them. Keep your reinsurance. We operate exclusively in the dead zone.
            </p>
            <p className="text-lg font-medium text-[#050505] border-l-2 border-black pl-6 italic">
              "We don't fight your provider. We cover the cars your provider runs from."
            </p>
          </div>

          <div className="v3-reveal space-y-px bg-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-2 p-6 bg-[#F9FAFf]">
               <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Current Provider</div>
               <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#050505]">GenZ Protect</div>
            </div>

            {/* Rows */}
            {tableData.map((row, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 bg-white p-6 sm:p-8 hover:bg-gray-50 transition-colors group">
                <div className="mb-2 sm:mb-0 pr-4">
                  <p className="text-[14px] font-bold text-[#050505] mb-1">{row.name}</p>
                  <p className="text-[13px] text-gray-400">{row.current}</p>
                </div>
                <div className="sm:border-l border-gray-100 sm:pl-8 flex items-center">
                  <p className={`text-[14px] font-medium ${row.genz.includes('stay out') ? 'text-gray-400' : 'text-[#050505]'}`}>
                    {row.genz}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function OpenStories() {
  const stories = [
    {
      title: "The Disappearing F&I Manager",
      quote: "Where did F&I go?",
      setup: "Customer agrees to buy a $7,500 SUV with 184,000 miles. Deal goes to F&I. Forty-five minutes later, your manager hasn't come back.",
      body: "Because there's nothing to sell. No VSC. The bank capped the deal. Your F&I manager is hiding because the menu is empty. CSI takes a hit when it knocks at 200k. The deal made zero.",
      fix: "With GenZ, F&I has real coverage to sell on every car. Real backend. No dead deals."
    },
    {
      title: "The Wholesale Rescue",
      quote: "That trade is on a competitor's lot.",
      setup: "You took in a 2018 Range Rover with 156,000 miles. Your manager looked at the recon estimate and wholesaled it for $19,600.",
      body: "A competitor down the road retailed it for $27k with a warranty. Made $7,800 front-end and ~$1,800 backend. You made nothing. The car you wholesaled paid someone else's rent.",
      fix: "GenZ covers that Range Rover. Your manager stops sending profit down the road."
    },
    {
      title: "The Service Defection",
      quote: "I'll take it somewhere else.",
      setup: "A rideshare driver pulls in with a 2019 Camry, 142k miles, needing a coverage option. Your advisor says no VSC covers rideshare.",
      body: "They leave. Pay cash elsewhere. Post a 1-star Google review. You lost the revenue, the future trade, and the referral in one 5-minute interaction.",
      fix: "GenZ covers rideshare. The Camry stays in your drive. CSI stays pristine."
    }
  ];

  return (
    <section id="stories" className="pb-32 sm:pb-48 bg-white">
      {/* We use massive horizontal scrolling aesthetics via pure padding for a storybook feel */}
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-24 v3-reveal">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Sound familiar?</p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#050505] leading-tight">
            Three scenarios playing out<br/>on your lot right now.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-12 relative v3-reveal">
           {stories.map((s, i) => (
             <div key={i} className="flex flex-col group">
               <div className="mb-8 p-6 bg-[#F9FAFf] border border-gray-100 rounded-3xl min-h-[140px] flex items-center">
                 <h3 className="text-2xl font-bold tracking-tight text-[#050505] leading-[1.3]">&ldquo;{s.quote}&rdquo;</h3>
               </div>
               
               <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-4">{s.title}</p>
               <p className="text-sm text-gray-500 font-medium italic mb-4 leading-relaxed">{s.setup}</p>
               <p className="text-base text-gray-600 leading-relaxed font-light mb-8 flex-1">{s.body}</p>
               
               <div className="pt-6 border-t border-gray-200">
                 <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#050505] mb-2">The Fix</p>
                 <p className="text-sm text-[#050505] leading-relaxed font-medium">{s.fix}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
         
  const pillars = [
    {
      title: "Coverage Levels",
      items: ["4 levels of exclusionary & comp", "Term + Miles / Unlimited", "Vehicles up to 300,000 miles", "$0 to $250 disappearing deductible", "Start: signing, 30, or 60 days"]
    },
    {
      title: "What We Cover",
      items: ["Branded, salvage, lemon titles", "Lifted trucks up to 6 inches", "Trucks up to 6500 series, DRW", "Rideshare & Commercial use", "Exotics (Ferrari, Lamborghini)", "Canadian-manufactured"]
    },
    {
      title: "Built for F&I",
      items: ["Darwin & Reynolds integration", "100% internal labor rate", "List price on OEM parts", "No chargebacks after 90 days", "Up to $2,000 gross protection", "SCPP available"]
    }
  ];

  return (
    <section id="coverage" className="py-32 sm:py-48 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-8">
        
        <div className="grid lg:grid-cols-2 gap-24 items-start v3-reveal">
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              The menu built for<br/>the vehicles that built<br/>your wholesale lane.
            </h2>
            <p className="text-xl text-gray-400 font-light">Pick the level. Pick the term. Built strictly around how you sell.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {pillars.map((p, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold mb-6 text-white pb-4 border-b border-white/20">{p.title}</h3>
                <ul className="space-y-4">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-[14px] text-gray-400 font-light leading-relaxed">
                      <span className="text-gray-600 block">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* EV Box */}
        <div className="mt-24 p-12 sm:p-20 border border-white/10 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent v3-reveal">
           <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] mb-8">Industry First</span>
           <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Electric VSC</h3>
                <p className="text-lg text-gray-400 font-light mb-8 max-w-2xl">
                  The first VSC with real battery degradation and replacement coverage built in. Used EVs become a profit center.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-300 font-medium tracking-wide">
                  <span>• Full battery replacement</span>
                  <span>• Degradation protection</span>
                  <span>• Thermal management</span>
                  <span>• Bank-approved</span>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <BatteryCharging className="h-24 w-24 text-white opacity-20" strokeWidth={1} />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function Stats() {
  const stat1 = useCounter(150, 1500);
  const stat2 = useCounter(0, 1500);
  const stat3 = useCounter(0, 1500);
  const stat4 = useCounter(300, 1500);

  return (
    <section className="py-32 sm:py-48 bg-white border-b border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-24 v3-reveal">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">The Proof</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#050505]">
            Numbers we're proud of.<br/><span className="text-gray-400 font-medium">And the ones we're not afraid to share.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 v3-reveal">
           {[
             { val: stat1.count, suffix: "+", l: "Dealerships Running GenZ", ref: stat1.ref },
             { val: stat2.count, pre: "$", l: "Chargebacks After 90 Days", ref: stat2.ref },
             { val: stat3.count, l: "Denied Covered Repairs. Ever.", ref: stat3.ref },
             { val: stat4.count, suffix: "K", l: "Max Miles Covered", ref: stat4.ref },
           ].map((s, i) => (
             <div key={i} className="text-center p-8">
                <p ref={s.ref} className="text-6xl sm:text-7xl font-light tracking-tighter text-[#050505] mb-4">
                  {s.pre}{s.val}{s.suffix}
                </p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.1em]">{s.l}</p>
             </div>
           ))}
        </div>

        <div className="grid md:grid-cols-3 gap-16 v3-reveal">
           {[
              { title: "Bank-approved across the board.", body: "No callbacks. No 'we don't recognize this VSC'. The major lenders already know us and approve us in deal flow natively." },
              { title: "Real claims process. Real humans.", body: "40+ claim analysts on staff. No 'press 7 for warranty'. Your service department gets paid at internal labor rate effortlessly." },
              { title: "No chargebacks after 90 days.", body: "Up to $2,000 gross protection per contract. Your F&I team writes the deal, and 90 days later the money is permanently yours." }
           ].map((p,i) => (
             <div key={i}>
               <Circle className="h-3 w-3 fill-[#050505] mb-6" />
               <h4 className="text-xl font-bold text-[#050505] mb-4">{p.title}</h4>
               <p className="text-base text-gray-500 font-light leading-relaxed">{p.body}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function WhoIsJason() {
  return (
    <section className="py-32 bg-[#F9FAFf]">
       <div className="mx-auto max-w-6xl px-8 flex flex-col md:flex-row items-center gap-20 v3-reveal">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 rounded-[2rem] overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('https://xepoqvwvwgglwyjelqsw.supabase.co/storage/v1/object/public/Images/Jason.jpeg')] bg-cover bg-center" />
          </div>
          <div className="w-full md:w-2/3">
             <h2 className="text-5xl font-bold tracking-tight text-[#050505] mb-2">Jason Scott</h2>
             <p className="text-lg font-medium text-gray-500 mb-8">CRO • 25+ Years in Automotive</p>
             
             <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed mb-10 max-w-2xl">
               Jason isn't a pitch man. He spent his career inside dealer groups, finance offices, and reinsurance tables. He knows what the F&I manager is hiding. He knows why units are bleeding at auction. The 15 minutes you spend with him is a peer-to-peer strategy conversation.
             </p>

             <ul className="space-y-4 mb-12">
                {["Built and led F&I strategy at top dealer groups", "Speaker at NADA & industry standard events", "Author of the 20-tactic dealer playbook"].map((t,i) => (
                  <li key={i} className="flex gap-4 items-center text-sm font-medium text-gray-900 tracking-wide">
                     <CheckCircle2 className="h-5 w-5 text-gray-400" /> {t}
                  </li>
                ))}
             </ul>

             <a href="#book" className="inline-block rounded-full px-8 py-4 bg-[#050505] text-white text-sm font-semibold transition-transform hover:scale-105">
                Book 15 Min With Jason
             </a>
          </div>
       </div>
    </section>
  )
}

function FinalMinimalCTA() {
  return (
    <section id="book" className="py-40 bg-white text-center">
      <div className="mx-auto max-w-4xl px-8 v3-reveal">
        <h2 className="text-5xl sm:text-7xl font-bold text-[#050505] mb-8 tracking-tighter leading-[1.05]">
          You wholesaled 5 cars last month that should have been retailed.
        </h2>
        <p className="text-2xl text-gray-500 mb-16 font-light max-w-2xl mx-auto">
          Bring your three latest wholesale units. We'll show you the exact revenue GenZ would have extracted from each one.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <button onClick={() => trackEvent("Final CTA Click")}
            className="inline-flex items-center gap-4 rounded-full px-12 py-6 text-lg font-bold bg-[#050505] text-white transition-transform hover:scale-105">
            Book 15 Min With Jason
          </button>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 text-sm font-medium text-gray-500">
            <a href="tel:5203310883" className="hover:text-[#050505] transition-colors flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" /> 520.331.0883
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
            <a href="mailto:jason@genz.com" className="hover:text-[#050505] transition-colors flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" /> jason@genz.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-8">
         <img src={LOGO_URL} alt="GenZ Protect" className="h-6 w-auto filter brightness-0 invert opacity-50" />
         <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">Confidential. Built for decision-makers.</p>
         <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">© 2026 GenZ Automotive</p>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────
export default function HighlineV3() {
  useReveal();
  
  // Clean scroll behavior styling
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      html { scroll-behavior: smooth; }
      body { background: #FFFFFF; color: #050505; }
      .v3-reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1);
      }
      .v3-visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="font-sans antialiased text-[#050505] selection:bg-[#050505] selection:text-white pb-0">
      <Nav />
      <main>
        <Hero />
        <Pitch />
        <Calculator />
        <RiskBuffer />
        <OpenStories />
        <Coverage />
        <Stats />
        <WhoIsJason />
        <FinalMinimalCTA />
      </main>
      <Footer />
    </div>
  );
}
