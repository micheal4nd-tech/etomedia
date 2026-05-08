import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Etomedia",
  description:
    "Explore the full Etomedia ecosystem — AI-powered tools across children & family, career, faith, and productivity.",
};

const pillars = [
  {
    id: "family",
    label: "Children & Family",
    tagline: "Professional capability for every parent and child.",
    accent: "#0F766E",
    accentBg: "rgba(15,118,110,0.06)",
    borderColor: "rgba(15,118,110,0.2)",
    products: [
      {
        name: "Lumi Stories",
        url: "https://lumistories.co.uk",
        tagline: "Personalised AI bedtime stories, created in seconds.",
        capability: "Professional children's book authorship",
        badge: "Live",
        badgeColor: "#0F766E",
      },
      {
        name: "LinguaKids",
        url: "https://linguakids.co.uk",
        tagline: "Native-speaker language learning for children with audio and phonetics.",
        capability: "Language tutoring",
        badge: "Live",
        badgeColor: "#0F766E",
      },
    ],
  },
  {
    id: "career",
    label: "Career & Professional",
    tagline: "Put professional-grade career tools in your hands.",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    borderColor: "rgba(29,78,216,0.2)",
    products: [
      {
        name: "SylphCV",
        url: "https://sylphcv.co.uk",
        tagline: "AI CV review scored across 10 criteria: ATS compatibility, impact language, formatting, and more.",
        capability: "Professional careers coaching",
        badge: "Live",
        badgeColor: "#1D4ED8",
      },
    ],
  },
  {
    id: "faith",
    label: "Faith & Community",
    tagline: "Equip every preacher with the depth of a seasoned theologian.",
    accent: "#D4AF37",
    accentBg: "rgba(212,175,55,0.06)",
    borderColor: "rgba(212,175,55,0.2)",
    products: [
      {
        name: "Keruxly",
        url: "https://keruxly.com",
        tagline: "Sermon research, outlines, illustrations, and slides — all in one intelligent companion for preachers.",
        capability: "Theological research & sermon preparation",
        badge: "Live",
        badgeColor: "#D4AF37",
      },
    ],
  },
  {
    id: "finance",
    label: "Productivity & Finance",
    tagline: "The financial discipline and productivity structure of a professional advisor.",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.06)",
    borderColor: "rgba(124,58,237,0.2)",
    products: [
      {
        name: "Personal Finance Hub",
        url: "https://zephy4.gumroad.com/l/pbxqg",
        tagline: "A complete financial planning toolkit — budgeting, savings goals, and spending clarity.",
        capability: "Professional financial advisory",
        badge: "Gumroad",
        badgeColor: "#7C3AED",
      },
      {
        name: "Monthly Budget Tracker",
        url: "https://zephy4.gumroad.com/l/pwsfcu",
        tagline: "Budget discipline and monthly financial clarity without a consultant.",
        capability: "Financial consulting",
        badge: "Gumroad",
        badgeColor: "#7C3AED",
      },
      {
        name: "Monthly Habit Tracker",
        url: "https://zephy4.gumroad.com/l/sfric",
        tagline: "Build habits, track streaks, and stay accountable — without a life coach.",
        capability: "Life coaching",
        badge: "Gumroad",
        badgeColor: "#7C3AED",
      },
      {
        name: "Weekly Meal Planner",
        url: "https://zephy4.gumroad.com/l/bnpks",
        tagline: "Nutritional planning and meal structure made simple.",
        capability: "Nutritional planning",
        badge: "Gumroad",
        badgeColor: "#7C3AED",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">The Ecosystem</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 max-w-2xl">
            Eight tools.<br />One purpose.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Every Etomedia product does the same thing: removes a gatekeeper and gives ordinary people access to capabilities that professionals charge hundreds of pounds to provide.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.id}>
              {/* Pillar header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-midnight">{pillar.label}</h2>
                  <p className="text-slate-500 mt-1">{pillar.tagline}</p>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full self-start md:self-auto"
                  style={{ background: pillar.accentBg, color: pillar.accent, border: `1px solid ${pillar.borderColor}` }}
                >
                  {pillar.products.length} {pillar.products.length === 1 ? "Product" : "Products"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pillar.products.map((product) => (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ background: pillar.accentBg, color: pillar.accent }}
                      >
                        {product.badge}
                      </span>
                      <svg
                        width="16" height="16"
                        viewBox="0 0 16 16" fill="none"
                        className="text-slate-300 group-hover:text-gold transition-colors mt-0.5"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-midnight text-base mb-1.5 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{product.tagline}</p>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs text-slate-400">
                        Gives you the capability of a{" "}
                        <span className="font-medium" style={{ color: pillar.accent }}>
                          {product.capability}
                        </span>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pass CTA */}
      <section className="bg-midnight py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Etomedia Pass</span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Want access to everything?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
            The Etomedia Pass gives you one subscription for all eight tools — and everything we build next.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pass" className="btn-gold px-8 py-3.5 text-base">
              Join the Waitlist
            </Link>
            <Link href="/contact" className="btn-ghost px-8 py-3.5 text-base">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
