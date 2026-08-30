import { AnimatedSection } from "@/components/common/animated-section"
import { Users, ShieldCheck, Lightbulb, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Customer Focused",
    description: "We place people and their financial goals at the center of everything we build."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description: "We combine thoughtful financial thinking with a commitment to delivering meaningful value."
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We use technology and modern ideas to create better financial experiences."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Vision",
    description: "We focus on building sustainable solutions designed for long-term value and growth."
  }
]

export function WhyLtmPreviewSection() {
  return (
    <section className="bg-white pt-2 pb-6 sm:pt-3 sm:pb-8 md:pt-4 md:pb-10 relative overflow-hidden select-none" id="our-values">
      
      {/* ── Background Decorations ── */}
      {/* Top Left Dot Grid */}
      <div className="absolute top-2 left-6 sm:left-12 opacity-30 pointer-events-none hidden sm:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {Array.from({ length: 25 }, (_, i) => (
            <circle key={i} cx={10 + (i % 5) * 18} cy={10 + Math.floor(i / 5) * 18} r="2" fill="#102448" />
          ))}
        </svg>
      </div>

      {/* Top Right Concentric Arcs */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] pointer-events-none opacity-20 hidden md:block">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <circle cx="300" cy="0" r="280" stroke="#E67710" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="300" cy="0" r="200" stroke="#E67710" strokeWidth="1.5" />
          <circle cx="300" cy="0" r="120" stroke="#E67710" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-2 sm:mb-2.5">
            <div className="h-[2px] w-8 sm:w-10 bg-[#E67710]"></div>
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#E67710]">
              OUR VALUES
            </span>
            <div className="h-[2px] w-8 sm:w-10 bg-[#E67710]"></div>
          </div>

          <h2 className="font-heading font-bold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.08] text-[#102448]">
            Built Around<br />
            Meaningful Experiences<span className="text-[#E67710]">.</span>
          </h2>
        </AnimatedSection>

        {/* ── 4 Values Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((val, index) => {
            const Icon = val.icon
            return (
              <AnimatedSection
                key={index}
                className="bg-white border border-[#E9EDF2] border-b-4 border-b-[#E67710] rounded-[2rem] p-6 sm:p-7 md:p-8 
                           shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Decorative background shape inside card */}
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#FFF7ED]/80 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute top-6 right-6 opacity-25 pointer-events-none">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    {Array.from({ length: 9 }, (_, i) => (
                      <circle key={i} cx={6 + (i % 3) * 12} cy={6 + Math.floor(i / 3) * 12} r="1.5" fill="#E67710" />
                    ))}
                  </svg>
                </div>

                <div>
                  {/* Icon Badge */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FFF7ED] flex items-center justify-center mb-5 sm:mb-6 shadow-sm border border-[#FED7AA] group-hover:bg-[#E67710] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#E67710] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl md:text-[22px] text-[#102448] mb-2.5 sm:mb-3">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

      </div>
    </section>
  )
}
