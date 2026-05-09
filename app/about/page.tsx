import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Etomedia",
  description:
    "The story behind Etomedia — built for the people who have always been overlooked.",
};

const values = [
  {
    title: "Capability First",
    desc: "Every product must make the user more capable. If it doesn't, it's not Etomedia.",
    icon: "◆",
  },
  {
    title: "Built for the Overlooked",
    desc: "Diaspora communities, first-generation entrepreneurs, working parents, faith leaders. We build for them because we are them.",
    icon: "●",
  },
  {
    title: "Ruthless Simplicity",
    desc: "Complex things made simple. Never the other way around. If a product requires a manual, it failed.",
    icon: "▲",
  },
  {
    title: "Authentic to the Bone",
    desc: "No corporate pretending. This brand was built by one person, with a conviction. That vulnerability is a strength.",
    icon: "✦",
  },
  {
    title: "Build to Scale",
    desc: "Every product works without you in the room. Good design is intelligent design.",
    icon: "○",
  },
  {
    title: "Practical Over Theoretical",
    desc: "Useful over flashy. Tools that work in real life, for real people, right now.",
    icon: "▪",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight text-white pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="section-label">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08]">
              Built for the people I&apos;ve always been one of.
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Etomedia is a portfolio of AI-powered tools built on one belief: access to capability should never depend on who you know, what you studied, or how much money you have.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Pull quote / sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-midnight rounded-2xl p-8">
                  <p className="text-gold text-4xl font-bold mb-1">"</p>
                  <p className="text-white text-lg font-medium leading-relaxed italic">
                    The best tools, the most useful knowledge — they were locked behind expensive professionals and institutions that weren&apos;t built for everyone.
                  </p>
                  <p className="text-gold text-4xl font-bold text-right mt-1">"</p>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-white font-semibold text-sm">The Founder</p>
                    <p className="text-slate-500 text-xs mt-0.5">Etomedia</p>
                  </div>
                </div>

                {/* Mission & Vision cards */}
                <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
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
              </div>
            </div>

            {/* Main story */}
            <div className="lg:col-span-8">
              <div className="prose prose-slate max-w-none">
                <div className="text-slate-700 space-y-6 text-[1.0625rem] leading-[1.8]">
                  <p>
                    I grew up knowing I was capable of more — but for a long time, the tools to prove it weren&apos;t designed for people like me.
                  </p>
                  <p>
                    I came to the UK from Nigeria and built a career in programme management, working alongside some of the country&apos;s largest organisations — government departments, public services, institutions of real scale. But wherever I went, I kept seeing the same pattern: the knowledge that actually moved people forward, the tools that changed outcomes — they were locked away.
                  </p>
                  <p>
                    A professionally written CV. A personalised children&apos;s book. Language learning with native audio. The financial discipline of a trained advisor. Sermon research with genuine theological depth. None of these capabilities were inaccessible because they were too complex. They were inaccessible because the professionals who held them charged hundreds of pounds per hour.
                  </p>
                  <p className="text-midnight font-semibold text-xl leading-snug border-l-4 border-gold pl-6 py-1">
                    That gap bothered me enough to start building.
                  </p>
                  <p>
                    Etomedia began as an idea and became a portfolio. Eight AI-powered products, built across four pillars — children and family, career and professional, faith and community, productivity and finance. Each one designed to remove a gatekeeper. Each one built on the same conviction: that access to capability should not depend on how much money you have, who you know, or where you started.
                  </p>
                  <p>
                    Lumi Stories gives a parent who has never written a book the ability to create a personalised, beautifully crafted bedtime story for their child. SylphCV scores a CV across ten criteria — exactly what a £200-an-hour careers coach does. LinguaKids delivers native-speaker audio and phonetics to children whose parents can&apos;t afford a private tutor. Keruxly gives every preacher the research depth of a trained theologian. The Finance Hub gives someone on a regular salary the financial planning structure of a professional advisor.
                  </p>
                  <p>
                    I didn&apos;t have venture capital. I didn&apos;t have a team. I had an idea, a conviction, and the tools to build it — and I built it anyway.
                  </p>
                  <p>
                    Etomedia is named after my family. It carries my name — Etoedia — and the word for the medium through which we reach people: digital products, content, technology. It is personal. It is intentional. And it is built to outlast me.
                  </p>
                  <p>
                    This is for the parent who stayed up late writing a story their child will remember. For the professional who&apos;s been sending CVs into silence. For the preacher who prepares every week with nothing but time and faith. For the first-generation entrepreneur who&apos;s been building without a map.
                  </p>
                  <p className="text-midnight font-semibold">
                    This is Etomedia. Built for the people who have always been overlooked.
                  </p>
                  <p className="text-slate-500 text-sm pt-2">— The Founder, Etomedia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-midnight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-4xl font-bold text-white">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <p className="text-gold text-2xl mb-4">{v.icon}</p>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-midnight mb-4">Ready to explore the tools?</h2>
          <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
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
