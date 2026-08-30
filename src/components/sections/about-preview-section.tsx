import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/common/animated-section"

export function AboutPreviewSection() {
  return (
    <section className="bg-white pt-4 pb-0 sm:pt-6 sm:pb-0 md:pt-8 md:pb-0 overflow-hidden select-none" id="about-preview">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* ── Left Content Column (5 cols) ── */}
          <AnimatedSection className="lg:col-span-5 flex flex-col items-start gap-4 z-10 py-2 sm:py-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#E67710]">
                ABOUT LTM VENTURES
              </span>
              <div className="h-[2px] w-8 sm:w-10 bg-[#E67710]"></div>
            </div>
            
            <h2 className="font-heading font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.08] text-[#102448]">
              Creating a Stronger<br />
              Financial Future<span className="text-[#E67710]">.</span>
            </h2>

            <div className="h-[3px] w-10 sm:w-12 bg-[#E67710] rounded-full my-0.5 sm:my-1"></div>
            
            <div className="space-y-3 sm:space-y-4 text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed max-w-[460px]">
              <p>
                LTM Ventures India LLP is focused on building meaningful financial experiences through innovation, technology, and customer-focused thinking.
              </p>
              <p>
                Through <span className="font-bold text-[#E67710]">WealthyStep</span>, we aim to help individuals better understand, plan, and grow their financial future with greater clarity and confidence.
              </p>
            </div>
            
            <Link 
              href="/vision-mission"
              className="inline-flex items-center gap-2 text-[#E67710] font-bold text-sm sm:text-base hover:text-[#D96B00] transition-colors border-b-2 border-[#E67710] pb-1 mt-1 sm:mt-2 group"
            >
              <span>Discover Our Vision</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
          
          {/* ── Right Master Photorealistic 3D Graphic (7 cols) ── */}
          <AnimatedSection className="lg:col-span-7 relative w-full h-[220px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px]">
            {/* Soft Ambient Radial Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#E67710]/10 via-[#102448]/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full h-full select-none pointer-events-none">
              <Image 
                src="/aboutus.png"
                alt="About LTM Ventures Financial Growth"
                fill
                priority
                draggable={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                className="object-contain object-bottom lg:object-right-bottom select-none pointer-events-none mix-blend-multiply contrast-[1.03]"
              />
            </div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  )
}
