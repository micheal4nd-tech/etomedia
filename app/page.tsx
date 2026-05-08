import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const marqueeProducts = [
  { name: "Lumi Stories",        letter: "L", url: "https://lumistories.co.uk" },
  { name: "LinguaKids",          letter: "L", url: "https://linguakids.co.uk" },
  { name: "SylphCV",             letter: "S", url: "https://sylphcv.co.uk" },
  { name: "Keruxly",             letter: "K", url: "https://keruxly.com" },
  { name: "Finance Hub",         letter: "F", url: "https://zephy4.gumroad.com/l/pbxqg" },
  { name: "Budget Tracker",      letter: "B", url: "https://zephy4.gumroad.com/l/pwsfcu" },
  { name: "Habit Tracker",       letter: "H", url: "https://zephy4.gumroad.com/l/sfric" },
  { name: "Meal Planner",        letter: "M", url: "https://zephy4.gumroad.com/l/bnpks" },
];

const pillars = [
  {
    id: "family",
    label: "Children & Family",
    accent: "#0F766E",
    accentBg: "rgba(15,118,110,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    products: [
      { name: "Lumi Stories",  tagline: "Personalised AI bedtime stories for your child.", url: "https://lumistories.co.uk" },
      { name: "LinguaKids",    tagline: "Native-speaker language learning for children.",   url: "https://linguakids.co.uk" },
    ],
  },
  {
    id: "career",
    label: "Career & Professional",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    products: [
      { name: "SylphCV", tagline: "AI CV review scored across 10 criteria — what a careers coach does.", url: "https://sylphcv.co.uk" },
    ],
  },
  {
    id: "faith",
    label: "Faith & Community",
    accent: "#D4AF37",
    accentBg: "rgba(212,175,55,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    products: [
      { name: "Keruxly", tagline: "Sermon preparation with the depth of a seasoned theologian.", url: "https://keruxly.com" },
    ],
  },
  {
    id: "finance",
    label: "Productivity & Finance",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    products: [
      { name: "Personal Finance Hub",  tagline: "Financial planning structure of a professional advisor.",          url: "https://zephy4.gumroad.com/l/pbxqg" },
      { name: "Budget Tracker",        tagline: "Budget discipline and monthly clarity without a consultant.",       url: "https://zephy4.gumroad.com/l/pwsfcu" },
      { name: "Habit Tracker",         tagline: "Build habits and stay accountable — without a life coach.",        url: "https://zephy4.gumroad.com/l/sfric" },
      { name: "Weekly Meal Planner",   tagline: "Nutritional planning made simple.",                               url: "https://zephy4.gumroad.com/l/bnpks" },
    ],
  },
];

export default function HomePage() {
  const doubled = [...marqueeProducts, ...marqueeProducts];

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-midnight text-white min-h-screen flex flex-col pt-16 relative overflow-hidden">

        {/* Atmospheric glow orbs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="orb-1 absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full"
            style={{ background: "#D4AF37", filter: "blur(120px)", opacity: 0.07 }}
          />
          <div
            className="orb-2 absolute top-[40%] right-[10%] w-[380px] h-[380px] rounded-full"
            style={{ background: "#D4AF37", filter: "blur(100px)", opacity: 0.05 }}
          />
          <div
            className="orb-3 absolute bottom-[20%] left-[40%] w-[300px] h-[300px] rounded-full"
            style={{ background: "#1D4ED8", filter: "blur(90px)", opacity: 0.06 }}
          />
        </div>

        {/* Blurred backdrop shape — centred behind headline */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[480px] pointer-events-none"
          style={{ background: "#0F172A", filter: "blur(90px)", opacity: 0.85 }}
        />

        {/* ── Main content ── */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="section-label mb-6 block">Etomedia</span>
            <h1 className="font-bold leading-[1.04] tracking-[-0.025em] mb-6"
                style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}>
              <span className="text-white">Extraordinary</span>
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(to right, #B8960A, #D4AF37, #E8CB5A, #D4AF37, #B8960A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Capability.
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
               style={{ color: "rgba(248,250,252,0.72)" }}>
              AI-powered tools for parents, professionals, entrepreneurs, and faith leaders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/products" className="btn-gold text-base px-8 py-3.5">
                Explore the Ecosystem
              </Link>
              <Link href="/pass" className="btn-ghost text-base px-8 py-3.5">
                Join the Pass
              </Link>
            </div>
          </div>
        </div>

        {/* ── Product Marquee ── */}
        <div className="pb-10 relative z-10">
          <div className="max-w-6xl mx-auto px-6 flex items-center gap-10">
            <p className="flex-shrink-0 text-xs text-slate-500 leading-relaxed hidden sm:block">
              Eight products.<br />One purpose.
            </p>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee gap-10" style={{ display: "flex" }}>
                {doubled.map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2.5 text-slate-400 hover:text-gold transition-colors group"
                  >
                    <span
                      className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ color: "#D4AF37" }}
                    >
                      {p.letter}
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap">{p.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Ecosystem ── */}
      <section className="py-24" style={{ background: "#0B1120" }} id="products">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              One brand. Eight tools.<br />Four pillars.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg" style={{ color: "rgba(148,163,184,0.9)" }}>
              Every Etomedia product does the same thing: removes a gatekeeper and puts the capability in your hands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#111827", border: "1px solid rgba(51,65,85,0.6)" }}
              >
                {/* Pillar header */}
                <div
                  className="px-6 py-4 flex items-center gap-3 border-b"
                  style={{ background: pillar.accentBg, borderColor: "rgba(51,65,85,0.4)" }}
                >
                  <span style={{ color: pillar.accent }}>{pillar.icon}</span>
                  <h3 className="font-bold text-white text-sm">{pillar.label}</h3>
                </div>

                {/* Products */}
                <div className="divide-y" style={{ borderColor: "rgba(51,65,85,0.4)" }}>
                  {pillar.products.map((product) => (
                    <a
                      key={product.name}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark-row group flex items-start justify-between gap-4 px-6 py-5"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-white group-hover:text-gold transition-colors">
                          {product.name}
                        </p>
                        <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>{product.tagline}</p>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                           className="flex-shrink-0 mt-0.5 transition-colors"
                           style={{ color: "#334155" }}>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-ghost px-8 py-3">
              See full product list
            </Link>
          </div>
        </div>
      </section>

      {/* ── Founder Teaser ── */}
      <section className="bg-midnight py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Story Behind It</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the people I&apos;ve always been one of.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(148,163,184,0.9)" }}>
                Etomedia was built from a simple observation: the most useful knowledge — the kind that actually moves people forward — is locked behind expensive professionals, complex systems, and institutions that weren&apos;t built for everyone.
              </p>
              <Link href="/about" className="btn-ghost">
                Read the founder story
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "◆", title: "Democratise Capability",  desc: "Remove gatekeepers. Give everyone access to professional-level tools." },
                { icon: "○", title: "Built in Public",          desc: "Every product was built by one person with an idea and a conviction." },
                { icon: "▲", title: "Practical Over Flashy",   desc: "Tools that actually work — not demos. Not concepts." },
                { icon: "✦", title: "Community First",          desc: "Built for diaspora entrepreneurs, working parents, faith leaders, and ambitious people everywhere." },
              ].map((v) => (
                <div key={v.title} className="rounded-xl p-5" style={{ background: "rgba(30,41,59,0.5)", border: "1px solid rgba(51,65,85,0.5)" }}>
                  <p className="text-gold text-xl mb-3">{v.icon}</p>
                  <p className="text-white font-semibold text-sm mb-1">{v.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Etomedia Pass Teaser ── */}
      <section className="py-24" style={{ background: "#0B1120" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
          >
            <div
              aria-hidden
              className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, #D4AF37 0%, transparent 70%)" }}
            />
            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                      style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}>
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                  Coming Soon
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Etomedia Pass.</h2>
                <p className="text-slate-300 text-xl mb-2">One subscription. All the tools.</p>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  Everything Etomedia builds — for one monthly price.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/pass" className="btn-gold px-8 py-3.5 text-base">Join the Waitlist</Link>
                  <p className="text-slate-500 text-sm">£29.99/month when we launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 bg-midnight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <span className="section-label">The Capability Brief</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              A free email for ambitious people.
            </h2>
            <p className="mb-8" style={{ color: "rgba(148,163,184,0.9)" }}>
              Practical insights, tool updates, and founder stories — delivered to your inbox.
            </p>
            <div className="flex justify-center">
              <NewsletterForm dark />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
