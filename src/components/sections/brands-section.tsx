import { Calendar, TrendingUp, Target, ShieldCheck, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/common/animated-section"
import { WealthyStepMark } from "@/components/icons/wealthystep-mark"
import { CoinGrowthIllustration } from "@/components/sections/coin-growth-illustration"

const features = [
  { icon: Calendar, title: "Financial Planning", desc: "Organize your finances and plan for what matters most." },
  { icon: TrendingUp, title: "Investment Guidance", desc: "Make informed investment decisions with clarity." },
  { icon: Target, title: "Goal-Based Planning", desc: "Build strategies aligned with your short and long-term goals." },
  { icon: ShieldCheck, title: "Wealth Management", desc: "Take a structured approach to grow and manage your wealth." },
]

export function BrandsSection() {
  return (
    <section className="w-full bg-white pt-2 sm:pt-4 pb-0 mb-0" id="brands">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <AnimatedSection
          className="relative rounded-3xl border border-[#DCEAC9] bg-gradient-to-br from-[#F6FAF0] via-white to-[#F1F8EA]
                     px-6 md:px-10 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden shadow-sm"
        >
          {/* Brand block */}
          <div className="lg:col-span-3 lg:pr-8 lg:border-r border-[#DCEAC9] flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <WealthyStepMark className="w-8 h-8" />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-lg text-[#102448]">WealthyStep</span>
                <span className="text-[10px] font-semibold tracking-widest text-[#4F8A10] uppercase">
                  Wealth Management
                </span>
              </div>
            </div>

            <h3 className="font-heading font-bold text-2xl md:text-[28px] leading-tight text-[#102448]">
              Plan. Invest. <span className="text-[#4F8A10]">Grow.</span>
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed">
              WealthyStep helps individuals take meaningful steps toward their financial goals through
              personalized planning, investment insights, and smarter wealth management experiences.
            </p>

            <a
              href="https://www.wealthystep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-lg border border-[#4F8A10]
                         text-[#4F8A10] bg-white hover:bg-[#F1F8EA] px-5 py-2.5 text-sm font-semibold transition-colors group shadow-sm"
            >
              <span>Explore WealthyStep</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Feature columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-4 lg:px-8">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F1F8EA] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#102448]" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-heading font-semibold text-[13px] md:text-sm text-[#102448]">
                    {f.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed max-w-[140px]">
                    {f.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Coin illustration */}
          <div className="hidden lg:flex lg:col-span-3 h-[200px] items-center justify-center">
            <CoinGrowthIllustration />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
