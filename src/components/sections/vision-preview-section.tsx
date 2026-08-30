import Link from "next/link"
import Image from "next/image"
import { Eye, Target, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/common/animated-section"

export function VisionPreviewSection() {
  return (
    <section className="bg-white pt-2 pb-2 sm:pt-4 sm:pb-4 md:pt-6 md:pb-6 overflow-hidden select-none" id="vision-preview">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          
          {/* ── Left Content Column (5 cols) ── */}
          <AnimatedSection className="lg:col-span-5 flex flex-col gap-5 sm:gap-7 z-10">
            
            {/* 1. OUR VISION BLOCK */}
            <div className="flex items-start gap-3.5 sm:gap-5">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 border border-[#FED7AA] shadow-sm">
                <Eye className="w-5 h-5 sm:w-7 sm:h-7 text-[#E67710]" strokeWidth={1.75} />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#E67710]">
                    OUR VISION
                  </span>
                  <div className="h-[2px] w-8 bg-[#E67710]"></div>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-xl md:text-[22px] leading-snug text-[#102448]">
                  To build meaningful financial experiences that empower individuals to make confident decisions and create stronger financial futures.
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  We envision a world where everyone has the knowledge, tools, and confidence to achieve their financial goals and live a better tomorrow.
                </p>
              </div>
            </div>

            {/* Divider Line with Center Dot */}
            <div className="relative w-full flex items-center justify-center">
              <div className="w-full h-[1px] bg-[#E9EDF2]"></div>
              <div className="absolute w-2 h-2 rounded-full bg-[#CBD5E1]"></div>
            </div>

            {/* 2. OUR MISSION BLOCK */}
            <div className="flex items-start gap-3.5 sm:gap-5">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 border border-[#FED7AA] shadow-sm">
                <Target className="w-5 h-5 sm:w-7 sm:h-7 text-[#E67710]" strokeWidth={1.75} />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#E67710]">
                    OUR MISSION
                  </span>
                  <div className="h-[2px] w-8 bg-[#E67710]"></div>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-xl md:text-[22px] leading-snug text-[#102448]">
                  To combine innovation, technology, and customer-focused thinking to develop financial solutions that are simple, meaningful, and accessible.
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  We are committed to continuous innovation and building trusting relationships that help individuals plan, grow, and secure their financial future with clarity.
                </p>
              </div>
            </div>

          </AnimatedSection>

          {/* ── Right Master 3D Graphic Composition (7 cols) ── */}
          <AnimatedSection className="lg:col-span-7 relative w-full h-[200px] xs:h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px]">
            {/* Soft Ambient Radial Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#E67710]/10 via-[#102448]/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full h-full select-none pointer-events-none">
              <Image 
                src="/ourvision.png"
                alt="Our Vision and Mission LTM Ventures"
                fill
                priority
                draggable={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 850px"
                className="object-contain object-bottom lg:object-right-bottom select-none pointer-events-none mix-blend-multiply contrast-[1.03]"
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
