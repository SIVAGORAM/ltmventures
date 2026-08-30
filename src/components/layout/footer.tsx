import { ChevronRight } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Vision & Mission", href: "#vision" },
  { name: "Services", href: "#services" },
]

export function Footer() {
  return (
    <footer className="bg-[#071427] text-white pt-6 sm:pt-8 pb-5 relative overflow-hidden select-none border-t border-[#122747]">
      
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-5 sm:mb-6">
          
          {/* Column 1: Parent Company Logo & Description (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            
            {/* LTM Logo wrapped in crisp white container badge */}
            <a 
              href="#hero" 
              className="inline-block bg-white rounded-xl px-3 py-2 shadow-md border border-white/20 mb-3 group hover:scale-[1.02] transition-transform cursor-pointer"
              aria-label="LTM Ventures Home"
            >
              <img 
                src="/logo.svg" 
                alt="LTM Ventures India LLP" 
                className="h-8 sm:h-9 md:h-9.5 w-auto object-contain" 
              />
            </a>

            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-sm">
              LTM Ventures India LLP is the parent company of WealthyStep, dedicated to providing innovative financial and insurance solutions.
            </p>

            <div className="h-[2px] w-10 bg-[#E67710] mt-3"></div>
          </div>

          {/* Column 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start md:border-l md:border-[#122747] md:pl-8 lg:pl-12">
            <h4 className="font-heading font-bold text-sm text-white mb-2">
              Navigation
            </h4>

            <div className="h-[2px] w-8 bg-[#E67710] mb-3"></div>

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
            <h4 className="font-heading font-bold text-sm text-white mb-2">
              Our Brand
            </h4>

            <div className="h-[2px] w-8 bg-[#E67710] mb-3"></div>

            {/* WealthyStep Logo in White Badge */}
            <a 
              href="https://www.wealthystep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white rounded-xl px-3.5 py-2 shadow-md border border-white/20 group hover:scale-[1.03] transition-transform"
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
        <div className="border-t border-[#122747] pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} LTM Ventures India LLP. All rights reserved.</p>
          <p className="text-[11px] text-[#475569]">
            Parent Company of WealthyStep
          </p>
        </div>

      </div>
    </footer>
  )
}
