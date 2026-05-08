import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const pillars = [
  {
    id: "family",
    label: "Children & Family",
    accent: "#0F766E",
    accentBg: "rgba(15,118,110,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    products: [
      {
        name: "Lumi Stories",
        tagline: "Personalised AI bedtime stories for your child.",
        detail: "The capability of a professional children's book author — for any parent.",
        url: "https://lumistories.co.uk",
      },
      {
        name: "LinguaKids",
        tagline: "Native-speaker language learning for children.",
        detail: "Phonetics, audio, and flashcards that remove the need for an expensive tutor.",
        url: "https://linguakids.co.uk",
      },
    ],
  },
  {
    id: "career",
    label: "Career & Professional",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    products: [
      {
        name: "SylphCV",
        tagline: "AI-powered CV review scored across 10 criteria.",
        detail: "ATS compatibility, impact language, formatting — what a £200/hr careers coach does.",
        url: "https://sylphcv.co.uk",
      },
    ],
  },
  {
    id: "faith",
    label: "Faith & Community",
    accent: "#D4AF37",
    accentBg: "rgba(212,175,55,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    products: [
      {
        name: "Keruxly",
        tagline: "Sermon preparation with the depth of a seasoned theologian.",
        detail: "Research, outlines, illustrations, and slides — all in one intelligent companion.",
        url: "https://keruxly.com",
      },
    ],
  },
  {
    id: "finance",
    label: "Productivity & Finance",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    products: [
      {
        name: "Personal Finance Hub",
        tagline: "Financial planning structure of a professional advisor.",
        detail: "Budgeting, savings goals, and spending clarity — without the consultant fees.",
        url: "https://zephy4.gumroad.com/l/pbxqg",
      },
      {
        name: "Habit Tracker",
        tagline: "Habit coaching without the life coach.",
        detail: "Build momentum, track streaks, and stay accountable — on your own terms.",
        url: "https://zephy4.gumroad.com/l/sfric",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-midnight text-white min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
        {/* Subtle gold radial glow */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.07] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="section-label">Etomedia</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.08]">
              Extraordinary{" "}
              <span className="text-gold">Capability</span>
              <br />
              for Ordinary People.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              AI-powered tools for parents, professionals, entrepreneurs, and faith leaders.
              We build what used to belong only to professionals — and put it directly in your hands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-gold text-base px-8 py-3.5">
                Explore the Ecosystem
              </Link>
              <Link href="/pass" className="btn-ghost text-base px-8 py-3.5">
                Join the Pass
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-slate-800 relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-800">
            {[
              { number: "8+", label: "AI Products" },
              { number: "4", label: "Capability Pillars" },
              { number: "£2.99", label: "Entry Price" },
              { number: "1", label: "Mission" },
            ].map((s) => (
              <div key={s.label} className="text-center md:px-8">
                <p className="text-2xl font-bold text-gold font-display">{s.number}</p>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Ecosystem ── */}
      <section className="py-24 bg-warm-white" id="products">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-midnight">
              One brand. Eight tools.<br />Four pillars.
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto text-lg">
              Every Etomedia product does the same thing: removes a gatekeeper and puts the capability in your hands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {/* Pillar header */}
                <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3" style={{ background: pillar.accentBg }}>
                  <span style={{ color: pillar.accent }}>{pillar.icon}</span>
                  <h3 className="font-bold text-midnight text-base">{pillar.label}</h3>
                </div>
                {/* Products */}
                <div className="divide-y divide-slate-100">
                  {pillar.products.map((product) => (
                    <a
                      key={product.name}
                      href={product.url}
                      target={product.url.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 px-6 py-5 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-midnight text-sm group-hover:text-gold transition-colors">
                          {product.name}
                        </p>
                        <p className="text-slate-500 text-sm mt-0.5">{product.tagline}</p>
                      </div>
                      <svg
                        width="16" height="16"
                        viewBox="0 0 16 16" fill="none"
                        className="flex-shrink-0 mt-0.5 text-slate-300 group-hover:text-gold transition-colors"
                      >
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
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Etomedia was built from a simple observation: the most useful knowledge — the kind that actually moves people forward — is locked behind expensive professionals, complex systems, and institutions that weren&apos;t built for everyone.
              </p>
              <Link href="/about" className="btn-ghost">
                Read the founder story
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "◆", title: "Democratise Capability", desc: "Remove gatekeepers. Give everyone access to professional-level tools." },
                { icon: "○", title: "Built in Public", desc: "Every product was built by one person with an idea and a conviction." },
                { icon: "▲", title: "Practical Over Flashy", desc: "Tools that actually work — not demos. Not concepts." },
                { icon: "✦", title: "Community First", desc: "Built for diaspora entrepreneurs, working parents, faith leaders, and ambitious people everywhere." },
              ].map((v) => (
                <div key={v.title} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <p className="text-gold text-xl mb-3">{v.icon}</p>
                  <p className="text-white font-semibold text-sm mb-1">{v.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Etomedia Pass Teaser ── */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
          >
            {/* Gold glow accent */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, #D4AF37 0%, transparent 70%)" }}
            />
            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                  Coming Soon
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  The Etomedia Pass.
                </h2>
                <p className="text-slate-300 text-xl mb-2">One subscription. All the tools.</p>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  Lumi Stories, LinguaKids, SylphCV, Keruxly, and the full Finance toolkit — everything Etomedia builds, for one monthly price. No tool fees. No one-off purchases. Just capability, delivered.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/pass" className="btn-gold px-8 py-3.5 text-base">
                    Join the Waitlist
                  </Link>
                  <p className="text-slate-500 text-sm">
                    £29.99/month when we launch · Free to join the list
                  </p>
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
            <p className="text-slate-400 mb-8">
              Practical insights, tool updates, and founder stories — delivered to your inbox. No spam, ever.
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
