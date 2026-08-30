import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowRight, LineChart, Compass, Target, Briefcase } from "lucide-react"
import { AnimatedSection } from "@/components/common/animated-section"

export const metadata: Metadata = {
  title: "Our Brand | WealthyStep - LTM Ventures India LLP",
  description: "Meet WealthyStep, our flagship brand focused on personalized financial planning, investment guidance, and goal-based wealth management.",
}

export default function BrandPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <section className="pt-22 sm:pt-24 md:pt-26 lg:pt-28 pb-0 relative overflow-hidden select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              <AnimatedSection className="lg:col-span-5 flex flex-col items-start gap-4 py-2 sm:py-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#E67710]">
                    OUR BRAND
                  </span>
                  <div className="h-[2px] w-8 sm:w-10 bg-[#E67710]"></div>
                </div>

                <h1 className="font-heading font-bold text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-tight text-[#102448]">
                  Meet WealthyStep<span className="text-[#E67710]">.</span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-lg">
                  WealthyStep is focused on helping individuals take meaningful steps toward their financial goals through personalized planning and goal-based strategies.
                </p>

                <a 
                  href="https://www.wealthystep.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#E67710] to-[#C25E00] hover:from-[#D96B00] hover:to-[#A85100] font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-[#E67710]/20 group mt-1"
                >
                  <span>Visit WealthyStep Website</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </AnimatedSection>
              
              <AnimatedSection className="lg:col-span-7 relative w-full h-[220px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#E67710]/10 via-[#102448]/5 to-transparent blur-3xl pointer-events-none" />
                <Image 
                  src="/hero_3d_chart.png"
                  alt="WealthyStep Financial Growth"
                  fill
                  draggable={false}
                  className="object-contain object-bottom lg:object-right-bottom select-none pointer-events-none"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="bg-[#102448] py-6 sm:py-8 md:py-10 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <a 
                href="https://www.wealthystep.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-xl px-4 py-2.5 shadow-md border border-white/20 mb-5 hover:scale-105 transition-transform"
                title="Visit WealthyStep official website"
              >
                <img 
                  src="/wealthysteplogo.svg" 
                  alt="WealthyStep" 
                  className="h-9 sm:h-11 w-auto object-contain" 
                />
              </a>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
                Plan Your Financial Journey With Confidence<span className="text-[#E67710]">.</span>
              </h2>

              <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
                WealthyStep brings together thoughtful financial planning, investment guidance, and goal-based strategies to help individuals make more confident decisions about their financial future.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* KEY AREAS SECTION */}
        <section className="py-6 sm:py-8 md:py-10 bg-[#F7F8FA] border-t border-[#E9EDF2]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <AnimatedSection className="text-center mb-6 sm:mb-8">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448]">Key Areas</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              
              <AnimatedSection className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#E9EDF2] border-b-4 border-b-[#E67710] flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 border border-[#FED7AA]">
                  <LineChart className="w-6 h-6 text-[#E67710]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#102448] mb-2">Financial Planning</h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    Helping individuals understand and organize their financial goals.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#E9EDF2] border-b-4 border-b-[#E67710] flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 border border-[#FED7AA]">
                  <Compass className="w-6 h-6 text-[#E67710]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#102448] mb-2">Investment Guidance</h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    Supporting informed investment decisions aligned with individual goals.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#E9EDF2] border-b-4 border-b-[#E67710] flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 border border-[#FED7AA]">
                  <Target className="w-6 h-6 text-[#E67710]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#102448] mb-2">Goal-Based Planning</h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    Creating clear strategies for short-term and long-term financial objectives.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#E9EDF2] border-b-4 border-b-[#E67710] flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 border border-[#FED7AA]">
                  <Briefcase className="w-6 h-6 text-[#E67710]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#102448] mb-2">Wealth Management</h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    Supporting the journey toward building and managing long-term wealth.
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
