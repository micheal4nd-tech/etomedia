import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Etomedia Pass — Coming Soon",
  description:
    "One subscription for every Etomedia tool. Join the waitlist for the Etomedia Pass — launching soon.",
};

const included = [
  {
    name: "Lumi Stories",
    desc: "Unlimited personalised AI bedtime stories.",
    icon: "📖",
  },
  {
    name: "LinguaKids",
    desc: "Native-speaker language learning for your children.",
    icon: "🌍",
  },
  {
    name: "SylphCV",
    desc: "AI-powered CV reviews whenever you need them.",
    icon: "📄",
  },
  {
    name: "Keruxly",
    desc: "Full sermon preparation access for preachers.",
    icon: "✝️",
  },
  {
    name: "Finance Hub + Tools",
    desc: "Budget tracker, habit tracker, meal planner, and ROI copilot.",
    icon: "📊",
  },
  {
    name: "Everything We Build Next",
    desc: "Every future Etomedia product, included from day one.",
    icon: "✦",
  },
];

const faqs = [
  {
    q: "When does the Pass launch?",
    a: "We're building toward launch. Everyone on the waitlist will be emailed first — and founding members will get a locked-in discount rate for life.",
  },
  {
    q: "What's the price?",
    a: "The Etomedia Pass will be £29.99/month. Founding members who join the waitlist will receive an exclusive early-adopter rate.",
  },
  {
    q: "Can I still use individual products now?",
    a: "Yes — all Etomedia products are live and available individually today. The Pass simply bundles them all for one monthly price.",
  },
  {
    q: "Is the waitlist free?",
    a: "Completely free. No payment details needed. We'll email you when it's ready.",
  },
];

export default function PassPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight text-white pt-36 pb-0 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[600px] h-[500px] opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, #D4AF37 0%, transparent 65%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Coming Soon
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-[1.06]">
              The Etomedia Pass.
            </h1>
            <p className="text-2xl text-slate-300 mb-4 font-light">
              One subscription. All the tools.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Every Etomedia product — Lumi Stories, LinguaKids, SylphCV, Keruxly, and the full Finance toolkit — for one monthly price. No per-tool fees. No one-off purchases. Just extraordinary capability, delivered.
            </p>
          </div>
        </div>

        {/* Price strip */}
        <div className="border-t border-slate-800 relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center gap-8">
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-0.5">Launch price</p>
              <p className="text-4xl font-bold text-white">£29.99<span className="text-slate-500 text-lg font-normal">/month</span></p>
            </div>
            <div className="w-px h-10 bg-slate-700 hidden md:block" />
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-0.5">Founding members</p>
              <p className="text-gold font-semibold">Locked-in early rate · For life</p>
            </div>
            <div className="w-px h-10 bg-slate-700 hidden md:block" />
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-0.5">Cancel anytime</p>
              <p className="text-white font-semibold">No commitment required</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">What&apos;s Included</span>
            <h2 className="text-4xl font-bold text-midnight">Everything Etomedia builds — in one place.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-gold/40 hover:shadow-md hover:shadow-gold/5 transition-all"
              >
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="font-bold text-midnight mb-1.5">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="py-20 bg-midnight" id="waitlist">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <span className="section-label">Join the Waitlist</span>
              <h2 className="text-4xl font-bold text-white mb-3">Be first to know.</h2>
              <p className="text-slate-400">
                Drop your email and we&apos;ll notify you the moment the Pass launches — plus founding members get an exclusive rate locked in for life.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-midnight">Questions</h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-6">
                  <p className="font-semibold text-midnight mb-2">{faq.q}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
