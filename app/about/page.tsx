import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Etomedia",
  description:
    "Etomedia builds AI-powered tools that give ordinary people the capabilities that used to belong only to professionals.",
};

const values = [
  {
    title: "Capability First",
    desc: "Every product must make the user more capable. If it doesn't, it's not Etomedia.",
    icon: "◆",
  },
  {
    title: "Designed for Everyone",
    desc: "Parents, professionals, entrepreneurs, faith leaders. We build tools that remove barriers, not reinforce them.",
    icon: "●",
  },
  {
    title: "Ruthless Simplicity",
    desc: "Complex things made simple. Never the other way around. If a product requires a manual, it failed.",
    icon: "▲",
  },
  {
    title: "Intelligent by Design",
    desc: "Every Etomedia product is built to work at scale — reliably, consistently, and without friction.",
    icon: "✦",
  },
  {
    title: "Practical Over Theoretical",
    desc: "Useful over flashy. Tools that work in real life, for real people, right now.",
    icon: "○",
  },
  {
    title: "Always Improving",
    desc: "We build, listen, and iterate. The product you use today will be better tomorrow.",
    icon: "▪",
  },
];

const pillars = [
  {
    label: "Children & Family",
    products: "Lumi Stories, LinguaKids",
    desc: "Giving every parent the capability of a professional author and language tutor.",
  },
  {
    label: "Career & Professional",
    products: "SylphCV",
    desc: "Putting professional-grade career tools directly in the hands of job seekers.",
  },
  {
    label: "Faith & Community",
    products: "Keruxly",
    desc: "Equipping every preacher with the research depth of a seasoned theologian.",
  },
  {
    label: "Productivity & Finance",
    products: "Finance Hub, Budget Tracker, Habit Tracker, Meal Planner",
    desc: "The structure and discipline of a professional advisor — without the fees.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight text-white pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="section-label">About Etomedia</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08]">
              Extraordinary capability.<br />For ordinary people.
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Etomedia is an AI technology company building a portfolio of tools that democratise professional-level capability. We believe access to the best tools should never be a privilege.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* Brand statement */}
                <div className="bg-midnight rounded-2xl p-8">
                  <p className="text-gold text-4xl font-bold mb-1">"</p>
                  <p className="text-white text-lg font-medium leading-relaxed italic">
                    The most valuable capabilities in the world — careers advice, financial planning, creative tools, research — should not be reserved for those who can afford them.
                  </p>
                  <p className="text-gold text-4xl font-bold text-right mt-1">"</p>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-gold text-xs font-bold uppercase tracking-widest">The Etomedia Principle</p>
                  </div>
                </div>

                {/* Mission & Vision */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1.5">Mission</p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      To design AI-powered products that give ambitious people the capabilities previously locked behind expensive professionals and complex systems.
                    </p>
                  </div>
                  <div className="pt-5 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1.5">Vision</p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      A world where your background is never a ceiling.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-2 gap-4">
                  {[
                    { number: "8+", label: "AI Products" },
                    { number: "4", label: "Pillars" },
                    { number: "£2.99", label: "Entry Price" },
                    { number: "1", label: "Mission" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-bold text-gold font-display">{s.number}</p>
                      <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="text-slate-700 space-y-6 text-[1.0625rem] leading-[1.8]">
                <h2 className="text-3xl font-bold text-midnight mb-2">The Gap We&apos;re Closing</h2>

                <p>
                  For decades, the most valuable professional tools — career coaching, financial planning, language tutoring, creative writing, theological research — have been locked behind high fees, institutional access, and geographic barriers. The people who needed them most were often the ones least able to access them.
                </p>
                <p>
                  AI changes that equation entirely. For the first time, it is possible to deliver professional-grade capability at a fraction of the traditional cost — and to do it at scale, on demand, for anyone.
                </p>

                <p className="text-midnight font-semibold text-xl leading-snug border-l-4 border-gold pl-6 py-1">
                  Etomedia was built to capitalise on that opportunity — and to put that capability directly in people&apos;s hands.
                </p>

                <p>
                  We build focused, intelligent tools across four pillars — children and family, career and professional, faith and community, and productivity and finance. Each product is built around a single question: what professional capability does this person need, and how do we give it to them simply, affordably, and reliably?
                </p>

                <h2 className="text-3xl font-bold text-midnight pt-4 mb-2">The Portfolio</h2>

                <p>
                  Lumi Stories gives any parent the ability to create a personalised, beautifully crafted children&apos;s story — the capability of a professional author, available in minutes. SylphCV analyses a CV across ten professional criteria, delivering the kind of detailed feedback that careers coaches charge hundreds of pounds per hour to provide. LinguaKids gives children access to native-speaker language learning with audio and phonetics, removing the need for expensive private tutors. Keruxly equips preachers with the research depth of a trained theologian, turning hours of preparation into minutes of intelligent, structured output.
                </p>
                <p>
                  Alongside these flagship apps, the Etomedia productivity suite — the Finance Hub, Budget Tracker, Habit Tracker, and Meal Planner — brings the structure and discipline of professional advisors to anyone who needs it, at a price that makes it genuinely accessible.
                </p>

                <h2 className="text-3xl font-bold text-midnight pt-4 mb-2">Where We&apos;re Going</h2>

                <p>
                  The Etomedia ecosystem is growing. The Etomedia Pass — launching soon — will bring every product together under a single subscription, making the full suite of tools available for one monthly price. Future products will continue to follow the same principle: identify a professional capability that people need but cannot easily access, and build the most intelligent, simple, and affordable version of it.
                </p>
                <p>
                  Every product we build is designed to outlast a single use — to become a tool people return to, recommend to others, and rely on as a permanent part of how they operate.
                </p>

                <p className="text-midnight font-semibold text-lg">
                  This is Etomedia — professional capability, made accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-midnight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">What We Build</span>
            <h2 className="text-4xl font-bold text-white">Four Pillars. One Purpose.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-gold font-bold text-base mb-1">{p.label}</h3>
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">{p.products}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-4xl font-bold text-midnight">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-gold text-2xl mb-4">{v.icon}</p>
                <h3 className="text-midnight font-bold mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-midnight">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to explore the tools?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
            Eight products. One mission. See what Etomedia can give you access to.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-gold px-8 py-3.5 text-base">
              Explore the Ecosystem
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
