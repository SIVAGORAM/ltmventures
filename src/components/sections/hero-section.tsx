import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/common/animated-section"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-22 sm:pt-24 md:pt-26 lg:pt-28 pb-1 sm:pb-3 md:pb-4 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-center">
        
        {/* ── Left Content Column (5 cols on lg) ── */}
        <AnimatedSection className="flex flex-col items-start gap-3 sm:gap-4 lg:col-span-5 relative z-20">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#4F8A10]">
              LTM VENTURES INDIA LLP
            </span>
            <div className="h-[2px] w-8 sm:w-10 bg-[#4F8A10]"></div>
          </div>
          
          <h1 className="font-heading font-bold text-[32px] sm:text-[42px] md:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.08] text-[#102448]">
            Building Meaningful<br />
            <span className="text-[#4F8A10]">Financial</span><br />
            Experiences<span className="text-[#4F8A10]">.</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-[440px]">
            LTM Ventures India LLP is focused on building innovative financial solutions and empowering individuals to make confident decisions for a stronger financial future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 mt-1 w-full sm:w-auto">
            <a 
              href="https://www.wealthystep.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#4F8A10] hover:bg-[#43770D] text-white rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm md:text-[15px] font-semibold inline-flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md group"
            >
              Explore WealthyStep <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link 
              href="/about" 
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#102448] border border-[#CBD5E1] rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm md:text-[15px] font-semibold inline-flex items-center justify-center transition-colors"
            >
              Learn About Us
            </Link>
          </div>

          {/* Mobile Quote Card — Shown cleanly on mobile/tablet (< 1024px) below buttons */}
          <div className="lg:hidden w-full bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-sm border border-[#E9EDF2] mt-1 select-none">
            <div className="flex items-start gap-3">
              <div className="text-[#4F8A10] font-serif text-2xl font-black leading-none shrink-0">"</div>
              <div className="flex flex-col">
                <p className="font-heading font-bold text-xs sm:text-sm text-[#102448] leading-snug">
                  We build financial solutions for a better tomorrow.
                </p>
                <div className="w-5 h-[2px] bg-[#4F8A10] my-1"></div>
                <div className="text-[10px] font-medium text-[#64748B]">
                  LTM Ventures India LLP
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* ── Right Integrated Column (7 cols on lg): 3D Chart Graphic ── */}
        <AnimatedSection className="lg:col-span-7 relative w-full h-[180px] xs:h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]">
          
          {/* Master 3D Chart Graphic */}
          <div className="relative w-full h-full lg:-left-12 xl:-left-20 select-none pointer-events-none">
            <Image 
              src="/hero_3d_chart.png"
              alt="LTM Ventures Financial Growth"
              fill
              priority
              draggable={false}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              className="object-contain object-bottom lg:object-left-bottom select-none pointer-events-none"
            />
          </div>

          {/* Desktop Floating Quote Card — Shown only on desktop (≥ 1024px) */}
          <div className="hidden lg:block absolute right-2 xl:right-4 top-[8%] bg-white/95 backdrop-blur-md rounded-2xl p-5 xl:p-6 shadow-2xl z-30 w-[210px] xl:w-[230px] border border-[#E9EDF2] animate-float-card select-none">
            <div className="text-[#4F8A10] font-serif text-2xl xl:text-3xl font-black leading-none mb-2">"</div>
            <p className="font-heading font-bold text-xs xl:text-sm text-[#102448] leading-snug mb-3">
              We build financial solutions for a better tomorrow.
            </p>
            <div className="w-6 h-[2px] bg-[#4F8A10] mb-2"></div>
            <div className="text-[10px] xl:text-[11px] font-medium text-[#64748B]">
              LTM Ventures India LLP
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
