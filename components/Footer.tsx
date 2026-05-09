import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "Lumi Stories", url: "https://lumistories.co.uk" },
  { name: "LinguaKids", url: "https://linguakids.co.uk" },
  { name: "SylphCV", url: "https://sylphcv.co.uk" },
  { name: "Keruxly", url: "https://keruxly.com" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand col */}
          <div className="md:col-span-5">
            <Image
              src="/logo.png"
              alt="Etomedia"
              width={150}
              height={38}
              className="h-7 w-auto mb-5 opacity-90"
            />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI-powered tools that give ordinary people the capabilities that used to belong only to professionals.
            </p>
            <p className="text-sm text-slate-500 mt-5">
              <a href="mailto:support@etomedia.co.uk" className="hover:text-gold transition-colors">
                support@etomedia.co.uk
              </a>
            </p>
          </div>

          {/* Products col */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm hover:text-gold transition-colors">
                  View all products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company col */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/pass" className="hover:text-gold transition-colors">Etomedia Pass</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social col */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Follow
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://instagram.com/etomedia" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/etomedia" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@etomedia" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://x.com/etomedia" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Etomedia. All rights reserved.</p>
          <p>etomedia.co.uk</p>
        </div>
      </div>
    </footer>
  );
}
