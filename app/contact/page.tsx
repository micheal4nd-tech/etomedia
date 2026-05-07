import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Etomedia",
  description: "Get in touch with the Etomedia team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight text-white pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-400 text-xl max-w-lg">
            Questions about a product, a partnership idea, or just want to say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold text-midnight mb-6">How can we help?</h2>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Product support",
                    desc: "Having an issue with one of our products? Let us know and we'll sort it.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                    ),
                  },
                  {
                    title: "Partnerships",
                    desc: "Interested in partnering with Etomedia or integrating our tools? We're open to the right conversations.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    ),
                  },
                  {
                    title: "General enquiries",
                    desc: "Anything else — brand questions, feedback, ideas, or just a conversation.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-midnight text-sm mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3">Direct email</p>
                <a
                  href="mailto:support@etomedia.co.uk"
                  className="text-gold font-medium hover:text-gold-light transition-colors"
                >
                  support@etomedia.co.uk
                </a>
                <p className="text-slate-400 text-xs mt-2">We aim to respond within 24 hours.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-midnight mb-6">Send us a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
