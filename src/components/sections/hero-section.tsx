import { Users, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-white pt-24 sm:pt-28 md:pt-30 pb-8 sm:pb-10 md:pb-12 overflow-hidden select-none border-b border-[#E9EDF2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Trust Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-slate-200 rounded-full px-4 py-1.5 mb-4 sm:mb-5 shadow-sm">
          <Users className="w-4 h-4 text-[#102448]" />
          <span className="text-xs font-semibold text-[#102448] tracking-wide">
            Trusted by thousands of clients
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-[#102448] leading-[1.12] max-w-4xl mb-4 sm:mb-5">
          Empowering Your Financial<br />
          <span className="text-[#102448] underline decoration-[#E67710] decoration-4 underline-offset-8">Future Today</span>.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl mb-6 sm:mb-7">
          Discover <strong className="text-[#102448]">WealthyStep</strong> for mindful financial planning and insurance solutions.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#about" 
            className="bg-[#102448] hover:bg-[#18315C] text-white font-semibold text-xs sm:text-sm md:text-base rounded-xl px-7 py-3 shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Learn About LTM Ventures</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
