import Link from "next/link"
import { ChevronRight } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Vision & Mission", href: "#vision" },
  { name: "Services", href: "#services" },
]

export function Footer() {
  return (
    <footer className="bg-[#071427] text-white pt-8 md:pt-10 pb-6 relative overflow-hidden select-none border-t border-[#122747]">
      
      {/* ── Background Decorative Wavy Lines (Bottom Left) ── */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[350px] pointer-events-none opacity-20 hidden md:block">
        <svg viewBox="0 0 450 350" fill="none" className="w-full h-full">
          <path d="M-50 350C100 280 200 150 450 100" stroke="#E67710" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M-50 300C120 230 220 120 400 50" stroke="#E67710" strokeWidth="1.5" />
          <path d="M-50 250C140 180 240 90 350 0" stroke="#E67710" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* ── Main 3-Column Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
          
          {/* Column 1: Parent Company Logo, Description & Socials (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            
            {/* LTM Logo wrapped in crisp white container badge */}
            <Link 
              href="#hero" 
              className="inline-block bg-white rounded-xl px-3 py-2 shadow-md border border-white/20 mb-3 sm:mb-4 group hover:scale-[1.02] transition-transform"
            >
              <img 
                src="/ltmlogo2.svg" 
                alt="LTM Ventures India LLP" 
                className="h-8 sm:h-9 md:h-10 w-auto object-contain" 
              />
            </Link>

            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-sm mb-3 sm:mb-4">
              LTM Ventures India LLP is the parent company of WealthyStep, dedicated to providing innovative financial and insurance solutions.
            </p>

            <div className="h-[2px] w-10 bg-[#E67710] mb-3 sm:mb-4"></div>

            <span className="text-xs font-bold text-white mb-2.5 block">
              Follow Us
            </span>

            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#1C3B6C] bg-[#0A1B36] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E67710] hover:bg-[#E67710]/15 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#1C3B6C] bg-[#0A1B36] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E67710] hover:bg-[#E67710]/15 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start md:border-l md:border-[#122747] md:pl-8 lg:pl-12">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white mb-2">
              Navigation
            </h4>

            <div className="h-[2px] w-8 bg-[#E67710] mb-3 sm:mb-4"></div>

            <ul className="grid grid-cols-1 gap-2 w-full">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white text-xs sm:text-sm transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#E67710] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Brand (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:border-l md:border-[#122747] md:pl-8 lg:pl-12">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white mb-2">
              Our Brand
            </h4>

            <div className="h-[2px] w-8 bg-[#E67710] mb-3 sm:mb-4"></div>

            {/* WealthyStep Logo in White Badge */}
            <a 
              href="https://www.wealthystep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white rounded-xl px-3 py-1.5 shadow-md border border-white/20 group hover:scale-[1.03] transition-transform"
              title="Visit WealthyStep official website"
            >
              <img 
                src="/wealthysteplogo.svg" 
                alt="WealthyStep" 
                className="h-6 sm:h-7 w-auto object-contain" 
              />
            </a>
          </div>

        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div className="border-t border-[#122747] pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} LTM Ventures India LLP. All rights reserved.</p>
          <p className="text-[11px] text-[#475569]">
            Parent Company of WealthyStep
          </p>
        </div>

      </div>
    </footer>
  )
}
