import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { AnimatedSection } from "@/components/common/animated-section"
import { Eye, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Vision & Mission | LTM Ventures India LLP",
  description: "Our Vision & Mission at LTM Ventures India LLP: building meaningful financial experiences through innovation and customer-focused technology.",
}

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <section className="pt-22 sm:pt-24 md:pt-26 lg:pt-28 pb-4 sm:pb-6 md:pb-8 relative select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Vision & Mission Blocks */}
              <AnimatedSection className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
                
                {/* 1. OUR VISION */}
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F1F8EA] flex items-center justify-center shrink-0 border border-[#E4F0D9] shadow-sm">
                    <Eye className="w-5 h-5 sm:w-7 sm:h-7 text-[#4F8A10]" strokeWidth={1.75} />
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#4F8A10]">
                        OUR VISION
                      </span>
                      <div className="h-[2px] w-8 bg-[#4F8A10]"></div>
                    </div>

                    <h1 className="font-heading font-bold text-base sm:text-xl md:text-[22px] leading-snug text-[#102448]">
                      To build meaningful financial experiences that empower individuals to make confident decisions and create stronger financial futures.
                    </h1>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      We envision a world where everyone has the knowledge, tools, and confidence to achieve their financial goals and live a better tomorrow.
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="relative w-full flex items-center justify-center">
                  <div className="w-full h-[1px] bg-[#E9EDF2]"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-[#CBD5E1]"></div>
                </div>

                {/* 2. OUR MISSION */}
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F1F8EA] flex items-center justify-center shrink-0 border border-[#E4F0D9] shadow-sm">
                    <Target className="w-5 h-5 sm:w-7 sm:h-7 text-[#4F8A10]" strokeWidth={1.75} />
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#4F8A10]">
                        OUR MISSION
                      </span>
                      <div className="h-[2px] w-8 bg-[#4F8A10]"></div>
                    </div>

                    <h2 className="font-heading font-bold text-base sm:text-xl md:text-[22px] leading-snug text-[#102448]">
                      To combine innovation, technology, and customer-focused thinking to develop financial solutions that are simple, meaningful, and accessible.
                    </h2>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      We are committed to continuous innovation and building trusting relationships that help individuals plan, grow, and secure their financial future with clarity.
                    </p>
                  </div>
                </div>

              </AnimatedSection>
              
              {/* Right Column: 3D Stage Image */}
              <AnimatedSection className="lg:col-span-7 relative w-full h-[200px] xs:h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] select-none pointer-events-none">
                <Image 
                  src="/ourvision.png"
                  alt="Our Vision and Mission LTM Ventures"
                  fill
                  priority
                  draggable={false}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain object-bottom lg:object-right-bottom select-none pointer-events-none mix-blend-multiply contrast-[1.03]"
                />
              </AnimatedSection>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
