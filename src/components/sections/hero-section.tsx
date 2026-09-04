import { Users, ArrowRight, ExternalLink, TrendingUp, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-white min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden select-none border-b border-[#E9EDF2]">
      
      {/* ── Background Soft Radial Glows ── */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E67710]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#102448]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
        
        {/* ── Left Content Column (6 cols on lg) ── */}
        <div className="flex flex-col items-start gap-3.5 lg:col-span-6 relative z-20">
          
          {/* Trust Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#E67710]" />
            <span className="text-[11px] sm:text-xs font-semibold text-[#102448] tracking-wide">
              Trusted by thousands of clients
            </span>
          </div>
          
          {/* Hero Headline */}
          <h1 className="font-heading font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[60px] leading-[1.15] text-[#102448]">
            Empowering Your Financial<br />
            <span className="text-[#102448] underline decoration-[#E67710] decoration-4 underline-offset-8">Future Today</span>.
          </h1>
          
          {/* Hero Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-[520px]">
            Discover <strong className="text-[#102448]">WealthyStep</strong> for mindful financial and insurance solutions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 w-full sm:w-auto">
            <a 
              href="#about" 
              className="w-full sm:w-auto bg-[#102448] hover:bg-[#18315C] text-white rounded-xl px-8 py-3.5 text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <span>Learn About LTM Ventures</span>
              <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href="https://www.wealthystep.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#102448] border border-[#CBD5E1] rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Explore WealthyStep</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Key Metric Highlights Bar - Mobile Responsive Grid without truncation */}
          <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 pt-5 mt-4 border-t border-slate-200/80 w-full max-w-[500px]">
            <div>
              <div className="text-base xs:text-lg sm:text-xl font-bold text-[#102448] font-heading whitespace-nowrap">Parent</div>
              <div className="text-xs text-[#64748B] font-medium whitespace-nowrap">Holding Entity</div>
            </div>
            <div>
              <div className="text-base xs:text-lg sm:text-xl font-bold text-[#E67710] font-heading whitespace-nowrap">WealthyStep</div>
              <div className="text-xs text-[#64748B] font-medium whitespace-nowrap">Flagship Brand</div>
            </div>
            <div className="col-span-2 xs:col-span-1">
              <div className="text-base xs:text-lg sm:text-xl font-bold text-[#102448] font-heading whitespace-nowrap">100%</div>
              <div className="text-xs text-[#64748B] font-medium whitespace-nowrap">Mindful Focus</div>
            </div>
          </div>

        </div>
        
        {/* ── Right Column: UNIQUE CUSTOM FINANCIAL GRAPHIC COMPOSITION (6 cols) ── */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center py-8 lg:py-0">
          
          {/* Main Card Container */}
          <div className="w-full max-w-[540px] bg-gradient-to-br from-white via-slate-50/90 to-[#FFF7ED]/50 rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200/90 relative overflow-hidden select-none">
            
            {/* Subtle Brand Accent Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#E67710]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#102448]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Holding Brand Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-xl bg-white p-1 shadow-md border border-slate-200/80 flex items-center justify-center shrink-0">
                  <img src="/logo.svg" alt="LTM Ventures" className="h-5 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-[#102448]">LTM Ventures India LLP</h3>
                  <p className="text-[10px] text-[#64748B]">Parent Company of WealthyStep</p>
                </div>
              </div>
              <span className="bg-[#FFF7ED] border border-[#FED7AA] text-[#E67710] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                Holding Group
              </span>
            </div>

            {/* Middle Section: Custom SVG Growth Curve & Interactive Modules */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-sm mb-3.5 relative">
              
              <div className="flex items-center justify-between mb-1.5 gap-2">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#E67710] shrink-0" />
                  <span className="text-xs font-bold text-[#102448] truncate">Financial Growth</span>
                </div>
                <span className="text-[10px] font-semibold text-[#E67710] bg-[#FFF7ED] px-2 py-0.5 rounded-md shrink-0">
                  Active Ecosystem
                </span>
              </div>

              {/* Dynamic Orange & Navy SVG Growth Curve Chart */}
              <div className="w-full h-20 relative my-1">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" fill="none">
                  <defs>
                    <linearGradient id="orangeNavyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E67710" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#E67710" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path d="M0 80 Q 75 60, 150 40 T 300 10 L 300 90 L 0 90 Z" fill="url(#orangeNavyGrad)" />
                  
                  {/* Trend line */}
                  <path d="M0 80 Q 75 60, 150 40 T 300 10" stroke="#E67710" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Data Points */}
                  <circle cx="75" cy="65" r="3.5" fill="#102448" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="150" cy="40" r="3.5" fill="#E67710" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="225" cy="22" r="3.5" fill="#102448" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="300" cy="10" r="4.5" fill="#E67710" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>

              {/* Stats Footer inside Card */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-center">
                <div className="bg-[#F8FAFC] p-1.5 rounded-xl">
                  <div className="text-[11px] font-bold text-[#102448]">WealthyStep</div>
                  <div className="text-[9px] text-[#64748B]">Consumer Wealth</div>
                </div>
                <div className="bg-[#F8FAFC] p-1.5 rounded-xl">
                  <div className="text-[11px] font-bold text-[#E67710]">Insurance</div>
                  <div className="text-[9px] text-[#64748B]">Mindful Protection</div>
                </div>
              </div>

            </div>

            {/* Bottom Direct CTA Link Module */}
            <a 
              href="https://www.wealthystep.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#071427] hover:bg-[#102448] text-white rounded-xl p-2.5 flex items-center justify-between transition-colors shadow-md group"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-[#E67710] shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white group-hover:text-[#FFA756] transition-colors">Visit WealthyStep Brand</div>
                  <div className="text-[9px] text-[#94A3B8]">www.wealthystep.com</div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

          </div>

          {/* Floating Glassmorphic Badge (Top Right) */}
          <div className="hidden sm:flex absolute -top-2 right-2 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-slate-200/90 items-center gap-2 animate-float-b1 z-30 select-none">
            <div className="w-7 h-7 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#E67710]">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#102448]">Mindful Focus</div>
              <div className="text-[10px] text-[#64748B]">Financial Solutions</div>
            </div>
          </div>

          {/* Floating Glassmorphic Badge (Bottom Left) */}
          <div className="hidden sm:flex absolute -bottom-2 left-2 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-slate-200/90 items-center gap-2 animate-float-b2 z-30 select-none">
            <div className="w-7 h-7 rounded-xl bg-[#071427] flex items-center justify-center text-[#E67710]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#102448]">Protection</div>
              <div className="text-[10px] text-[#64748B]">Insurance Solutions</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
