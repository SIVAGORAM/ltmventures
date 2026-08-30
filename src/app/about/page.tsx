import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { AnimatedSection } from "@/components/common/animated-section"
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | LTM Ventures India LLP",
  description: "Learn about LTM Ventures India LLP, creating a stronger financial future through innovation, technology, and customer-focused thinking.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <section className="pt-22 sm:pt-24 md:pt-26 lg:pt-28 pb-0 relative select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              <AnimatedSection className="lg:col-span-5 flex flex-col items-start gap-4 py-2 sm:py-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#E67710]">
                    ABOUT LTM VENTURES
                  </span>
                  <div className="h-[2px] w-8 sm:w-10 bg-[#E67710]"></div>
                </div>

                <h1 className="font-heading font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.08] text-[#102448]">
                  Creating a Stronger<br />Financial Future<span className="text-[#E67710]">.</span>
                </h1>

                <div className="h-[3px] w-10 sm:w-12 bg-[#E67710] rounded-full my-0.5 sm:my-1"></div>

                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-[460px]">
                  LTM Ventures India LLP is focused on building meaningful financial experiences through innovation, technology, and customer-focused thinking.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="lg:col-span-7 relative w-full h-[220px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] select-none pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#E67710]/10 via-[#102448]/5 to-transparent blur-3xl pointer-events-none" />
                <Image 
                  src="/aboutus.png"
                  alt="About LTM Ventures Financial Growth"
                  fill
                  draggable={false}
                  className="object-contain object-bottom lg:object-right-bottom select-none pointer-events-none mix-blend-multiply contrast-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="bg-[#F7F8FA] py-6 sm:py-8 md:py-10 border-y border-[#E9EDF2] select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-3 sm:mb-5">
                Our Journey Begins<br />With a Clear Purpose.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed text-left sm:text-center">
                <p>
                  At LTM Ventures India LLP, we believe financial experiences should be more meaningful, accessible, and easier to understand.
                </p>
                <p>
                  Our journey is driven by a commitment to innovation and the goal of creating solutions that support individuals as they plan, invest, and grow.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* WHAT WE BELIEVE SECTION */}
        <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-12 bg-white select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <AnimatedSection className="text-center mb-6 sm:mb-10">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448]">What We Believe</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <AnimatedSection className="bg-white border border-[#E9EDF2] border-b-4 border-b-[#E67710] p-6 sm:p-8 rounded-[2rem] shadow-sm text-center group hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E67710] transition-colors duration-300">
                  <Lightbulb className="w-7 h-7 text-[#E67710] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#102448] mb-3">Innovation</h3>
                <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed">
                  We believe innovation creates opportunities for better financial experiences.
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-white border border-[#E9EDF2] border-b-4 border-b-[#E67710] p-6 sm:p-8 rounded-[2rem] shadow-sm text-center group hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E67710] transition-colors duration-300">
                  <ShieldCheck className="w-7 h-7 text-[#E67710] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#102448] mb-3">Trust</h3>
                <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed">
                  We believe trust is built through transparency, consistency, and meaningful value.
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-white border border-[#E9EDF2] border-b-4 border-b-[#E67710] p-6 sm:p-8 rounded-[2rem] shadow-sm text-center group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E67710] transition-colors duration-300">
                  <TrendingUp className="w-7 h-7 text-[#E67710] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#102448] mb-3">Growth</h3>
                <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed">
                  We believe every meaningful financial decision can contribute to a stronger future.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
