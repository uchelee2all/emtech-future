import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, Brain, Cpu, Shield, Coins, GraduationCap, Rocket, Globe2,
  Zap, BookOpen, Award, Wallet, Users, ArrowRight, Check, Menu, X,
  Mail, Twitter, Linkedin, Send, Instagram, Youtube, ChevronDown,
  Network, LineChart, Trophy, Briefcase, MessageSquare, Smartphone,
  Code2, Database, Lock, TrendingUp, Palette, Megaphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import africaNet from "@/assets/africa-network.jpg";
import students from "@/assets/students.jpg";
import appHome from "@/assets/app-home.jpg";
import appWallet from "@/assets/app-wallet.jpg";
import appBookshop from "@/assets/app-bookshop.jpg";
import appAchievements from "@/assets/app-achievements.jpg";
import appProfile from "@/assets/app-profile.jpg";
import appStaking from "@/assets/app-staking.jpg";
import appProgress from "@/assets/app-progress.jpg";
import appSupport from "@/assets/app-support.jpg";
import partnerCNE from "@/assets/partner-cne.png";
import partnerUABA from "@/assets/partner-uaba.jpg";
import partnerNBA from "@/assets/partner-nbaweek.jpg";
import partnerFintech from "@/assets/partner-fintechngr.jpg";

export const Route = createFileRoute("/")({ component: Landing });

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "AI Learning", href: "#ai" },
  { label: "EMC Token", href: "#token" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-[var(--gradient-primary)] grid place-items-center glow-primary">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">EMTECH <span className="text-gradient">SCHOOL</span></div>
              <div className="text-[10px] text-muted-foreground">A CoinNewsExtra Product</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#cta" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl bg-[var(--gradient-primary)] text-white glow-primary hover:scale-[1.03] transition">
              Apply <ArrowRight className="w-4 h-4" />
            </a>
            <button className="lg:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 grid gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm rounded-lg hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Badge({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground/90">
      {Icon && <Icon className="w-3.5 h-3.5 text-[var(--electric)]" />}
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-drift" />
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full bg-accent/25 blur-[140px] animate-drift" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>A Product of</span>
              <span className="text-gold font-semibold">CoinNewsExtra</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Africa's <span className="text-gradient">AI & Blockchain</span> University for the Future Workforce
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
              Emtech School is a blockchain-powered online university helping Africans learn AI, Blockchain, Fintech, Robotics, Cybersecurity and Trading through live cohorts, AI-powered learning and blockchain-verified certifications.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { t: "100% Online University", i: Globe2 },
                { t: "AI Powered Learning", i: Brain },
                { t: "Blockchain Certificates", i: Shield },
                { t: "Learn-to-Earn Rewards", i: Coins },
                { t: "3-Month Diploma Cohorts", i: GraduationCap },
                { t: "Weekly Live Classes", i: Zap },
                { t: "Fiat & Crypto Payments", i: Wallet },
                { t: "Mobile-First", i: Smartphone },
              ].map((b) => <Badge key={b.t} icon={b.i}>{b.t}</Badge>)}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--gradient-primary)] text-white font-semibold glow-primary hover:scale-[1.03] transition">
                Apply for Next Cohort <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong text-foreground font-semibold hover:bg-white/10 transition">
                Explore Programs
              </a>
              <a href="#app" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-foreground font-semibold hover:bg-white/10 transition">
                <Smartphone className="w-4 h-4" /> Download App
              </a>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { k: "25+", v: "Emerging Tech Programs" },
                { k: "Live", v: "Weekly Sessions" },
                { k: "AI", v: "Learning Assistant" },
                { k: "On-Chain", v: "Credentials" },
                { k: "Earn", v: "While You Learn" },
                { k: "Pan-Africa", v: "Community" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-3">
                  <div className="text-xl font-bold text-gradient">{s.k}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-[var(--gradient-primary)] opacity-30 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden glass-strong p-2 glow-neon">
                <img src={hero} alt="African student learning AI and blockchain" width={1600} height={1024} className="w-full h-auto rounded-2xl object-cover" />
              </div>
              {/* Floating cards */}
              <div className="hidden sm:flex absolute -left-6 top-10 glass-strong rounded-2xl p-3 gap-3 items-center animate-float">
                <div className="w-10 h-10 rounded-xl bg-[var(--gradient-gold)] grid place-items-center"><Coins className="w-5 h-5 text-black" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">EMC Earned</div>
                  <div className="text-sm font-bold">+250 EMC</div>
                </div>
              </div>
              <div className="hidden sm:flex absolute -right-4 top-1/3 glass-strong rounded-2xl p-3 gap-3 items-center animate-float-lg">
                <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] grid place-items-center"><Award className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Verified</div>
                  <div className="text-sm font-bold">On-Chain Cert</div>
                </div>
              </div>
              <div className="hidden sm:flex absolute -left-4 bottom-8 glass-strong rounded-2xl p-3 gap-3 items-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-10 h-10 rounded-xl bg-accent/30 grid place-items-center animate-pulse-glow"><Brain className="w-5 h-5 text-accent" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">AI Tutor</div>
                  <div className="text-sm font-bold">Personalized Path</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PoweredBy() {
  const items = ["CoinNewsExtraTv", "Nigeria Blockchain & AI Week", "Africa Blockchain Festival", "Pan-African Innovation", "Web3 Ecosystem Partners", "Fintech Media Network"];
  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Sparkles className="w-3.5 h-3.5 text-gold" /> The Ecosystem</div>
            <h2 className="text-3xl sm:text-5xl font-bold">A Product of <span className="text-gold">CoinNewsExtra</span></h2>
            <p className="mt-4 text-muted-foreground">Africa's leading Blockchain, AI, Crypto and Fintech media ecosystem — focused on innovation, education and digital adoption across the continent.</p>
          </div>
        </Reveal>
        <div className="overflow-hidden glass-strong rounded-2xl py-6">
          <div className="marquee flex gap-12 whitespace-nowrap">
            {[...items, ...items].map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground/80">
                <div className="w-2 h-2 rounded-full bg-[var(--gradient-primary)]" />
                <span className="text-sm font-semibold tracking-wide uppercase">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="mt-8 glass rounded-2xl p-6 text-center text-sm text-muted-foreground">
            Emtech School launches with <span className="text-foreground font-semibold">ecosystem reach, industry access and distribution advantages</span> most EdTech startups do not have.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
            <img src={students} alt="African students collaborating" loading="lazy" width={1280} height={800} className="rounded-2xl w-full h-auto object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><GraduationCap className="w-3.5 h-3.5 text-primary" /> About</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">An Online University Built for <span className="text-gradient">Africa's Future Economy</span></h2>
            <p className="mt-5 text-muted-foreground">A next-generation blockchain-powered digital university designed to prepare Africans for the AI, fintech, blockchain and digital economy.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Practical digital skills","Industry-focused learning","Career pathways","Blockchain-verified certs","Live cohort programs","Learn-to-Earn rewards","AI-powered education","Job placement pathways"].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-primary/20 grid place-items-center shrink-0"><Check className="w-3 h-3 text-primary" /></div>
                  <span className="text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VisionMission() {
  const values = ["Innovation","Accessibility","Decentralized Learning","African Talent","Community Growth","Future Skills","Global Opportunities"];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Vision", icon: Rocket, body: "To become Africa's leading AI and Blockchain-powered digital university shaping the future workforce.", grad: "from-primary/30 to-transparent" },
            { t: "Mission", icon: Globe2, body: "To democratize access to emerging technology education through AI, blockchain and rewarding digital learning experiences.", grad: "from-accent/30 to-transparent" },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className={`relative glass-strong rounded-3xl p-8 overflow-hidden gradient-border`}>
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${c.grad} blur-3xl`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] grid place-items-center mb-4 glow-primary">
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{c.t}</h3>
                  <p className="mt-3 text-muted-foreground">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Core Values</div>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span key={v} className="px-3 py-1.5 rounded-full glass-strong text-sm font-medium gradient-border">{v}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgramStructure() {
  const steps = [
    { t: "Apply & Onboard", d: "Join the next 3-month diploma cohort." },
    { t: "Live Classes", d: "Weekly online sessions with expert lecturers." },
    { t: "Build Projects", d: "Real-world assignments & collaboration." },
    { t: "Exams & Mentorship", d: "Assessments and live Q&A mentorship." },
    { t: "Graduate On-Chain", d: "Earn blockchain-verified credentials & EMC rewards." },
  ];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><GraduationCap className="w-3.5 h-3.5 text-primary" /> Program Structure</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Diploma Cohorts Built for <span className="text-gradient">Real-World Skills</span></h2>
            <p className="mt-4 text-muted-foreground">Three months. Live lectures. Practical projects. Verifiable credentials.</p>
          </div>
        </Reveal>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="glass-strong rounded-2xl p-5 h-full hover:-translate-y-1 transition gradient-border">
                  <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] grid place-items-center text-white text-sm font-bold glow-primary">{i + 1}</div>
                  <div className="mt-4 font-semibold">{s.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  { t: "Artificial Intelligence", c: "Diploma", lvl: "Beginner → Advanced", inst: "Dr. A. Bello", dur: "12 wks", fee: "450 EMC", icon: Brain },
  { t: "Blockchain Development", c: "Diploma", lvl: "Intermediate", inst: "K. Adekunle", dur: "12 wks", fee: "500 EMC", icon: Network },
  { t: "Smart Contract Dev", c: "Cohort", lvl: "Advanced", inst: "T. Mensah", dur: "10 wks", fee: "480 EMC", icon: Code2 },
  { t: "Cybersecurity", c: "Diploma", lvl: "Beginner → Advanced", inst: "S. Okoro", dur: "12 wks", fee: "450 EMC", icon: Lock },
  { t: "Robotics", c: "Cohort", lvl: "Intermediate", inst: "Eng. F. Diop", dur: "10 wks", fee: "500 EMC", icon: Cpu },
  { t: "Fintech", c: "Diploma", lvl: "Beginner", inst: "M. Otieno", dur: "12 wks", fee: "420 EMC", icon: Wallet },
  { t: "Data Science", c: "Diploma", lvl: "Intermediate", inst: "Dr. N. Kamau", dur: "12 wks", fee: "460 EMC", icon: Database },
  { t: "Web3 Development", c: "Cohort", lvl: "Intermediate", inst: "L. Ibrahim", dur: "10 wks", fee: "480 EMC", icon: Globe2 },
  { t: "Programming", c: "Diploma", lvl: "Beginner", inst: "C. Eze", dur: "12 wks", fee: "380 EMC", icon: Code2 },
  { t: "Cloud Computing", c: "Cohort", lvl: "Intermediate", inst: "R. Tadesse", dur: "10 wks", fee: "440 EMC", icon: Database },
  { t: "Product Design", c: "Cohort", lvl: "Beginner", inst: "A. Yusuf", dur: "10 wks", fee: "400 EMC", icon: Palette },
  { t: "UI/UX Design", c: "Cohort", lvl: "Beginner → Advanced", inst: "T. Banda", dur: "10 wks", fee: "400 EMC", icon: Palette },
  { t: "Digital Marketing", c: "Cohort", lvl: "Beginner", inst: "I. Ojo", dur: "8 wks", fee: "350 EMC", icon: Megaphone },
  { t: "Journalism in Tech", c: "Workshop", lvl: "Beginner", inst: "P. Nwosu", dur: "6 wks", fee: "300 EMC", icon: BookOpen },
  { t: "Trading & Technical Analysis", c: "Diploma", lvl: "Intermediate", inst: "B. Achebe", dur: "12 wks", fee: "470 EMC", icon: TrendingUp },
  { t: "Crypto Trading", c: "Cohort", lvl: "Beginner → Advanced", inst: "F. Okafor", dur: "10 wks", fee: "450 EMC", icon: TrendingUp },
  { t: "Forex Trading", c: "Cohort", lvl: "Beginner", inst: "G. Mwangi", dur: "10 wks", fee: "420 EMC", icon: LineChart },
  { t: "Stock Market Trading", c: "Cohort", lvl: "Intermediate", inst: "H. Sow", dur: "10 wks", fee: "430 EMC", icon: LineChart },
  { t: "Institutional Trading", c: "Masterclass", lvl: "Advanced", inst: "K. Demir", dur: "8 wks", fee: "550 EMC", icon: Briefcase },
  { t: "DeFi & Digital Assets", c: "Cohort", lvl: "Intermediate", inst: "Z. Ndlovu", dur: "10 wks", fee: "480 EMC", icon: Coins },
  { t: "Risk & Portfolio Strategy", c: "Masterclass", lvl: "Advanced", inst: "Dr. S. Hadi", dur: "8 wks", fee: "520 EMC", icon: LineChart },
  { t: "Startup & Business Dev", c: "Bootcamp", lvl: "All Levels", inst: "Y. Camara", dur: "8 wks", fee: "400 EMC", icon: Rocket },
];

function Programs() {
  const [tab, setTab] = useState<"All" | "AI/Tech" | "Web3" | "Trading" | "Business">("All");
  const filt: Record<typeof tab, (p: (typeof PROGRAMS)[number]) => boolean> = {
    All: () => true,
    "AI/Tech": (p) => ["Artificial Intelligence","Cybersecurity","Robotics","Data Science","Programming","Cloud Computing","Product Design","UI/UX Design","Digital Marketing","Journalism in Tech"].includes(p.t),
    Web3: (p) => ["Blockchain Development","Smart Contract Dev","Web3 Development","DeFi & Digital Assets","Fintech"].includes(p.t),
    Trading: (p) => p.t.includes("Trading") || p.t.includes("DeFi") || p.t.includes("Risk") || p.t === "Forex Trading" || p.t === "Stock Market Trading",
    Business: (p) => ["Startup & Business Dev","Digital Marketing","Fintech"].includes(p.t),
  };
  return (
    <section id="programs" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><BookOpen className="w-3.5 h-3.5 text-primary" /> Programs</div>
              <h2 className="text-3xl sm:text-5xl font-bold">Future-Focused <span className="text-gradient">Programs</span></h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">AI and Blockchain powered diplomas, cohorts, masterclasses & bootcamps — all blockchain-certified.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["All","AI/Tech","Web3","Trading","Business"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${tab===t?"bg-[var(--gradient-primary)] text-white glow-primary":"glass hover:bg-white/10"}`}>{t}</button>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-8 glass-strong rounded-2xl p-4 sm:p-5 flex flex-wrap items-center gap-3 justify-center text-center gradient-border">
            <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] grid place-items-center glow-primary shrink-0"><Smartphone className="w-5 h-5 text-white" /></div>
            <div className="text-sm sm:text-base"><span className="font-semibold">Classes & registrations are done only on our Mobile App.</span> <span className="text-muted-foreground">Web app coming soon.</span></div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.filter(filt[tab]).map((p, i) => (
            <Reveal key={p.t} delay={(i % 6) * 60}>
              <div className="group relative glass-strong rounded-2xl p-5 h-full hover:-translate-y-1 transition overflow-hidden gradient-border">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/15 blur-3xl group-hover:bg-accent/25 transition" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] grid place-items-center glow-primary">
                    <p.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full glass">{p.c}</span>
                </div>
                <h3 className="relative mt-4 font-bold text-lg leading-tight">{p.t}</h3>
                <div className="relative mt-1 text-xs text-muted-foreground">{p.lvl} • {p.dur}</div>
                <div className="relative mt-4 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-accent font-semibold"><Brain className="w-3 h-3" /> AI & Blockchain Powered</span>
                  <span className="inline-flex items-center gap-1 text-gold font-semibold"><Shield className="w-3 h-3" /> On-chain</span>
                </div>
                <div className="relative mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Smartphone className="w-3.5 h-3.5 text-primary" /> Mobile App Only
                  </div>
                  <a href="#app" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition">Enroll <ArrowRight className="w-4 h-4" /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AILearning() {
  const items = ["Personalized learning paths","Course recommendations","Books & video suggestions","Progress tracking","Concept simplification","Study materials","Structured roadmaps","Diploma support journey"];
  return (
    <section id="ai" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Brain className="w-3.5 h-3.5 text-accent" /> AI Learning Assistant</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">AI-Powered Learning Built for <span className="text-gradient">Africa's Next Generation</span></h2>
            <p className="mt-5 text-muted-foreground">A personalized AI tutor that adapts to every student — making world-class education scalable, accessible, and engaging.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {items.map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-accent/20 grid place-items-center shrink-0"><Sparkles className="w-3 h-3 text-accent" /></div>
                  <span className="text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-8 bg-accent/30 blur-3xl rounded-full opacity-50" />
            <div className="relative glass-strong rounded-3xl p-6 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] grid place-items-center"><Brain className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="font-semibold">Emtech AI Tutor</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="glass rounded-2xl rounded-tl-sm p-3 text-sm">Hi Great 👋 — based on your goals, here is your personalized roadmap for this week.</div>
                <div className="glass rounded-2xl p-3 text-sm space-y-2">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Module 3: Smart Contract Patterns</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Live Q&A · Thu 7PM WAT</div>
                  <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent" /> Read: "Mastering Solidity" — ch. 4</div>
                </div>
                <div className="glass rounded-2xl rounded-tr-sm p-3 text-sm bg-primary/15">You're in the top 12% of your cohort. Keep going! +50 EMC awarded.</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 glass rounded-xl px-3 py-2.5 text-sm text-muted-foreground">Ask anything…</div>
                <button className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] grid place-items-center glow-primary"><Send className="w-4 h-4 text-white" /></button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Blockchain() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
            <img src={africaNet} alt="Blockchain network across Africa" loading="lazy" width={1280} height={800} className="rounded-2xl w-full h-auto" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Shield className="w-3.5 h-3.5 text-primary" /> Blockchain Infrastructure</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Blockchain-Verified <span className="text-gradient">Education Infrastructure</span></h2>
            <p className="mt-5 text-muted-foreground">Certificates and academic records are permanently stored and verified on-chain — building Africa's trusted digital credential layer.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Tamper-proof certificates","Fraud-resistant verification","Trusted employer validation","Global credibility","Permanent credentials","Decentralized verification"].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-primary/20 grid place-items-center shrink-0"><Check className="w-3 h-3 text-primary" /></div>
                  <span className="text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Token() {
  const utilities = ["Tuition payments","Book purchases","Student rewards","Graduation rewards","Community incentives","Staking rewards","Scholarships","Premium access","Future governance"];
  return (
    <section id="token" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Coins className="w-3.5 h-3.5 text-gold" /> EMC Token</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Introducing <span className="text-gold">EMC Token</span></h2>
            <p className="mt-4 text-muted-foreground">The utility token powering the Emtech School ecosystem. Pay tuition, earn rewards, stake, and unlock premium access.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="relative glass-strong rounded-3xl p-6 overflow-hidden gradient-border h-full">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--gradient-gold)] opacity-20 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Total EMC Balance</div>
                  <div className="mt-1 text-4xl sm:text-5xl font-bold">12,480 <span className="text-base text-muted-foreground">EMC</span></div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--gradient-gold)] grid place-items-center text-black font-black">$</div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { l: "Available", v: "9,800", c: "text-emerald-300" },
                  { l: "Staked", v: "2,500", c: "text-primary" },
                  { l: "Rewards", v: "180", c: "text-accent" },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-2xl p-3">
                    <div className={`text-2xl font-bold ${s.c}`}>{s.v}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[{l:"Stake EMC",i:Coins},{l:"Buy EMC",i:Wallet},{l:"Pay Tuition",i:GraduationCap},{l:"Redeem",i:Award}].map((b) => (
                  <button key={b.l} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--gradient-primary)] text-white text-sm font-semibold glow-primary hover:scale-[1.02] transition">
                    <b.i className="w-4 h-4" /> {b.l}
                  </button>
                ))}
              </div>
              <div className="mt-6 glass rounded-2xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--gradient-gold)] grid place-items-center text-black"><Sparkles className="w-4 h-4" /></div>
                <div className="text-sm">
                  <div className="font-semibold">10% off when paying with crypto</div>
                  <div className="text-muted-foreground text-xs">Fiat, stablecoins & wallet integrations supported.</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={150}>
            <div className="glass-strong rounded-3xl p-6 h-full gradient-border">
              <div className="font-semibold mb-4">Token Utilities</div>
              <div className="grid grid-cols-2 gap-2">
                {utilities.map((u) => (
                  <div key={u} className="glass rounded-xl px-3 py-2.5 text-xs flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-primary)]" /> {u}
                  </div>
                ))}
              </div>
              <div className="mt-5 glass rounded-2xl p-4">
                <div className="text-xs text-muted-foreground mb-2">Staking Tiers</div>
                <div className="space-y-2 text-sm">
                  {[{t:"Bronze",a:"2,500 EMC",apy:"5%"},{t:"Silver",a:"5,000 EMC",apy:"10%"},{t:"Gold",a:"10,000 EMC",apy:"15%"}].map((s)=>(
                    <div key={s.t} className="flex items-center justify-between glass rounded-lg px-3 py-2">
                      <span className="font-medium">{s.t}</span>
                      <span className="text-muted-foreground">{s.a}</span>
                      <span className="text-gold font-semibold">{s.apy} APY</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LearnEarn() {
  const tiers = [
    { t: "Distinction / 1st Class", r: "+1,000 EMC", c: "from-yellow-300/30 to-yellow-500/10", i: Trophy },
    { t: "Upper Credit", r: "+500 EMC", c: "from-primary/30 to-primary/10", i: Award },
    { t: "Lower Credit", r: "+250 EMC", c: "from-accent/30 to-accent/10", i: Award },
    { t: "Best Graduating Student", r: "Special Bonus", c: "from-yellow-300/30 to-pink-500/10", i: Trophy },
    { t: "Best Project Team", r: "EMC Grant", c: "from-emerald-400/30 to-primary/10", i: Rocket },
  ];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Trophy className="w-3.5 h-3.5 text-gold" /> Learn-to-Earn</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Learn. Perform. <span className="text-gold">Earn Rewards.</span></h2>
            <p className="mt-4 text-muted-foreground">Aligning incentives with educational success — students earn EMC for sign-ups, participation, assignments, grades and graduation.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((t, i) => (
            <Reveal key={t.t} delay={i*60}>
              <div className={`relative glass-strong rounded-2xl p-5 h-full overflow-hidden hover:-translate-y-1 transition`}>
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${t.c} blur-2xl`} />
                <div className="relative w-12 h-12 rounded-xl bg-[var(--gradient-gold)] grid place-items-center text-black"><t.i className="w-6 h-6" /></div>
                <div className="relative mt-3 font-semibold">{t.t}</div>
                <div className="relative mt-2 text-2xl font-bold text-gold">{t.r}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bookshop() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><BookOpen className="w-3.5 h-3.5 text-primary" /> Bookshop</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Tokenized <span className="text-gradient">Digital Bookshop</span></h2>
            <p className="mt-5 text-muted-foreground">E-books, hardcopies, audio books, AI & blockchain research, trading guides, finance and code — pay with EMC, fiat or crypto.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["E-books","Hardcopy","Audio","AI Research","Blockchain","Trading","Finance","Code"].map((t)=>(
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/30 blur-3xl rounded-full opacity-40" />
            <div className="relative rounded-[2.5rem] overflow-hidden glass-strong p-2 border border-white/10 max-w-xs mx-auto">
              <img src={appBookshop} alt="EMC bookshop app" loading="lazy" className="w-full h-auto rounded-[2rem]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Careers() {
  const items = ["Internships","Remote jobs","Career opportunities","Startup ecosystems","Talent pipelines"];
  return (
    <section id="careers" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Briefcase className="w-3.5 h-3.5 text-primary" /> Careers</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Education → Certification → <span className="text-gradient">Employment</span></h2>
            <p className="mt-4 text-muted-foreground">Connecting top graduates to fintech, AI, blockchain, Web3 & global innovation organizations.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t:"Learn", d:"Live cohorts, AI tutoring, real projects.", i:GraduationCap },
            { t:"Get Certified", d:"Blockchain-verified credentials.", i:Shield },
            { t:"Get Hired", d:"Direct pipelines to industry partners.", i:Briefcase },
          ].map((s,i)=>(
            <Reveal key={s.t} delay={i*100}>
              <div className="glass-strong rounded-2xl p-6 gradient-border h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--gradient-primary)] grid place-items-center glow-primary"><s.i className="w-6 h-6 text-white" /></div>
                <div className="mt-4 font-bold text-lg">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 glass rounded-2xl p-6 flex flex-wrap items-center gap-3 justify-center text-sm">
            {items.map((t)=>(<span key={t} className="px-3 py-1.5 rounded-full glass-strong">{t}</span>))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    { name: "CoinNewsExtra", logo: partnerCNE },
    { name: "Nigeria Blockchain & AI Week", logo: partnerNBA },
    { name: "FinTechNGR", logo: partnerFintech },
    { name: "United Africa Blockchain Association", logo: partnerUABA },
  ];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Network className="w-3.5 h-3.5 text-accent" /> Ecosystem</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Strategic <span className="text-gradient">Partnerships</span></h2>
            <p className="mt-4 text-muted-foreground">Building with global and local fintech, AI, blockchain and technology organizations.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="glass-strong rounded-2xl p-6 h-36 sm:h-40 flex items-center justify-center gradient-border hover:bg-white/5 transition group">
                <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain transition group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const screens = [
    { src: appHome, label: "Home" },
    { src: appProgress, label: "Progress" },
    { src: appBookshop, label: "Bookshop" },
    { src: appWallet, label: "Wallet" },
    { src: appStaking, label: "Staking" },
    { src: appAchievements, label: "Achievements" },
    { src: appProfile, label: "Profile" },
    { src: appSupport, label: "Support" },
  ];
  return (
    <section id="app" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><Smartphone className="w-3.5 h-3.5 text-accent" /> App Showcase</div>
            <h2 className="text-3xl sm:text-5xl font-bold">A <span className="text-gradient">Mobile-First</span> Learning Universe</h2>
            <p className="mt-4 text-muted-foreground">Wallet, staking, courses, achievements, support — all in one premium experience.</p>
          </div>
        </Reveal>
        <div className="relative">
          <div className="absolute -inset-10 bg-[var(--gradient-primary)] opacity-20 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {screens.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 80}>
                <div className={`group relative ${i % 2 ? "translate-y-6" : ""}`}>
                  <div className="absolute -inset-3 bg-[var(--gradient-primary)] opacity-0 group-hover:opacity-30 blur-2xl rounded-full transition" />
                  <div className="relative rounded-[2rem] overflow-hidden glass-strong p-1.5 border border-white/10 hover:-translate-y-2 transition animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                    <img src={s.src} alt={`Emtech app — ${s.label}`} loading="lazy" className="w-full h-auto rounded-[1.6rem] aspect-[9/19] object-cover object-top" />
                  </div>
                  <div className="mt-3 text-center text-xs text-muted-foreground font-medium">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["What is Emtech School?","Emtech School is a blockchain-powered online university focused on AI, Blockchain, Fintech, Trading and emerging technology education."],
  ["How long does each diploma cohort last?","Each cohort runs for 3 months with weekly live online classes."],
  ["Are certificates blockchain verified?","Yes. Certificates and academic records are securely stored and verified on blockchain."],
  ["Can students pay with cryptocurrency?","Yes. Students can pay with fiat or cryptocurrency and receive a 10% discount for crypto payments."],
  ["What is EMC Token?","EMC is the utility token powering rewards, tuition payments, staking and incentives within the ecosystem."],
  ["Are students rewarded for learning?","Yes. Students earn EMC rewards for participation, grades and graduation performance."],
  ["Are there live classes?","Yes. Students attend weekly live online sessions with lecturers and mentors."],
  ["Does Emtech School help students get jobs?","Yes. We are building partnerships with fintech, AI and blockchain companies to support internships and talent placement."],
  ["Is Emtech School mobile-friendly?","Yes. The platform is fully optimized for both mobile and desktop learning."],
  ["Is Emtech School global?","Yes. Students can learn from anywhere in the world."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 relative">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-4"><MessageSquare className="w-3.5 h-3.5 text-primary" /> FAQ</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map(([q, a], i) => (
            <Reveal key={q} delay={i*30}>
              <div className="glass-strong rounded-2xl overflow-hidden gradient-border">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-semibold">{q}</span>
                  <ChevronDown className={`w-5 h-5 transition shrink-0 ${open === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative glass-strong rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden gradient-border">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--gradient-primary)] opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs mb-6"><Sparkles className="w-3.5 h-3.5 text-gold" /> Next Cohort Open</div>
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">Africa's Future Workforce <span className="text-gradient">Starts Here</span></h2>
              <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">Join the next generation of African innovators learning AI, Blockchain, Fintech, Trading and Emerging Technologies.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--gradient-primary)] text-white font-semibold glow-primary hover:scale-[1.03] transition">Join Next Cohort <ArrowRight className="w-4 h-4" /></a>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong font-semibold hover:bg-white/10 transition">Apply Now</a>
                <a href="#app" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold hover:bg-white/10 transition"><Smartphone className="w-4 h-4" /> Download App</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10 relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] grid place-items-center glow-primary"><GraduationCap className="w-5 h-5 text-white" /></div>
              <div>
                <div className="font-bold">EMTECH <span className="text-gradient">SCHOOL</span></div>
                <div className="text-xs text-muted-foreground">Learn → Earn → Build the Future</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">Africa's AI & Blockchain University for the Future Workforce. A Product of CoinNewsExtra.</p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="mailto:Lee@Emtechschool.com" className="flex items-center gap-2 hover:text-primary transition"><Mail className="w-4 h-4" /> Lee@Emtechschool.com</a>
              <a href="mailto:Support@Emtechschool.com" className="flex items-center gap-2 hover:text-primary transition"><Mail className="w-4 h-4" /> Support@Emtechschool.com</a>
              <a href="https://EmtechSchool.com" className="flex items-center gap-2 hover:text-primary transition"><Globe2 className="w-4 h-4" /> EmtechSchool.com</a>
            </div>
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Send, Instagram, Youtube].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-xl glass-strong grid place-items-center hover:bg-white/10 hover:text-primary transition"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            {[
              { t: "Platform", l: ["About","Programs","EMC Token","Careers"] },
              { t: "Company", l: ["Partnerships","FAQ","Community","Contact"] },
              { t: "Learn", l: ["AI Learning","Blockchain","Trading","Bookshop"] },
              { t: "Legal", l: ["Privacy","Terms","Cookies","Disclosure"] },
            ].map((c) => (
              <div key={c.t}>
                <div className="text-foreground font-semibold mb-3">{c.t}</div>
                <ul className="space-y-2">
                  {c.l.map((x) => <li key={x}><a href="#" className="text-muted-foreground hover:text-foreground transition">{x}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Emtech School. A Product of CoinNewsExtra. All rights reserved.</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Built for Africa's future workforce</div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen relative">
      <Nav />
      <main>
        <Hero />
        <PoweredBy />
        <About />
        <VisionMission />
        <ProgramStructure />
        <Programs />
        <AILearning />
        <Blockchain />
        <Token />
        <LearnEarn />
        <Bookshop />
        <Careers />
        <Partners />
        <AppShowcase />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
