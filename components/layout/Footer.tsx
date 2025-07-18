import Link from "next/link"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Flat Film Extrusion", href: "#flat-film" },
    { name: "Plastic Manufacturing", href: "#manufacturing" },
    { name: "Paper Industry Equipment", href: "#paper" },
    { name: "Plate Extrusion Systems", href: "#plate" },
    { name: "EVOH Barrier Films", href: "#evoh" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Global Presence", href: "#global" },
    { name: "News", href: "#news" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "Service", href: "#service" },
    { name: "Downloads", href: "#downloads" },
    { name: "FAQ", href: "#faq" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">DIAMAT</h3>
              <p className="text-sm">Maschinenbau GmbH</p>
            </div>
            <p className="text-sm mb-4">
              Leading German manufacturer of plastic machinery with over 40 years of excellence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Amperestraße 13, OT Sinbronn<br />
                  D-91550 Dinkelsbühl
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p>09851 / 57029-0</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p>diamat@diamat.com</p>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Service Email:</p>
              <a href="mailto:service@diamat.com" className="text-sm hover:text-white transition-colors">
                service@diamat.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Diamat Maschinenbau GmbH. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#imprint" className="hover:text-white transition-colors">
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}