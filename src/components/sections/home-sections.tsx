import Image from "next/image"
import { Shield, TrendingUp, Compass, HeartHandshake, Target, Eye, Building2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-4 sm:py-6 md:py-8 bg-[#F8FAFC] border-b border-[#E9EDF2] select-none relative overflow-hidden">
      
      {/* Soft Ambient Background Decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E67710]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E67710] bg-[#FFF7ED] border border-[#FED7AA] px-3 py-1 rounded-full">
              PARENT COMPANY
            </span>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448]">
              About LTM Ventures India LLP
            </h2>

            <div className="w-10 h-[3px] bg-[#E67710] rounded-full my-0.5"></div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-[500px]">
              LTM Ventures India LLP is the parent company of WealthyStep, dedicated to providing innovative financial and insurance solutions.
            </p>

            {/* Sub-Brand Link Badge */}
            <div className="mt-2 pt-3 border-t border-slate-200/90 w-full">
              <a 
                href="https://www.wealthystep.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-white border border-slate-200 hover:border-[#E67710] rounded-2xl px-4 py-2.5 shadow-sm items-center gap-3.5 transition-all group hover:shadow-md"
              >
                <img src="/wealthysteplogo.svg" alt="WealthyStep" className="h-6 w-auto object-contain" />
                <div className="flex flex-col text-left border-l border-slate-200 pl-3.5">
                  <span className="text-xs font-bold text-[#102448] group-hover:text-[#E67710] transition-colors">WealthyStep Official Website</span>
                  <span className="text-[11px] text-[#64748B]">Financial Solutions & Wealth Management</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Premium 3D Illustration Card Container (6 cols) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#E67710]/12 via-[#102448]/5 to-transparent blur-3xl pointer-events-none" />

            <div className="w-full max-w-[500px] bg-gradient-to-br from-white via-slate-50 to-[#FFF7ED]/50 rounded-3xl p-3.5 sm:p-4 shadow-xl border border-slate-200/90 relative overflow-hidden select-none">
              
              <div className="relative w-full h-[220px] xs:h-[250px] sm:h-[280px] rounded-2xl overflow-hidden">
                <Image 
                  src="/aboutus.png"
                  alt="About LTM Ventures India LLP"
                  fill
                  priority
                  draggable={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 500px"
                  className="object-contain object-center select-none pointer-events-none mix-blend-multiply contrast-[1.04]"
                />
              </div>

              {/* Floating Bottom Badge */}
              <div className="mt-2.5 bg-white/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-200/80 flex items-center justify-between gap-3 text-xs text-[#102448] font-semibold shadow-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#E67710]" />
                  <span>Holding Group</span>
                </div>
                <span className="text-[11px] text-[#64748B] font-normal">LTM Ventures India LLP</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function VisionMissionSection() {
  return (
    <section id="vision" className="py-4 sm:py-6 md:py-8 bg-white border-b border-[#E9EDF2] select-none relative overflow-hidden">
      
      {/* Background Decorative Mesh Gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#102448]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-6 sm:mb-7">
          <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mb-2.5 text-[#E67710] shadow-sm">
            <Target className="w-5 h-5" strokeWidth={1.75} />
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-1.5">
            Our Vision and Mission
          </h2>

          <div className="w-10 h-[3px] bg-[#E67710] rounded-full mb-2.5"></div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl">
            We strive to empower individuals with financial knowledge and security, ensuring a legacy of mindful solutions and trustworthy insurance protection.
          </p>
        </div>

        {/* 2 Distinct Vision & Mission Highlight Cards with Premium 3D Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Our Vision */}
          <div className="bg-gradient-to-br from-white via-slate-50/50 to-[#FFF7ED]/40 p-5 sm:p-6 rounded-3xl border border-[#FED7AA]/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#E67710] mb-3 shadow-sm group-hover:bg-[#E67710] group-hover:text-white transition-colors duration-300">
                <Eye className="w-5 h-5" strokeWidth={1.75} />
              </div>
              
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67710] block mb-1">
                OUR VISION
              </span>

              <h3 className="font-heading font-bold text-base sm:text-lg text-[#102448] mb-1.5 leading-snug">
                Creating Meaningful Financial Experiences
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                To build financial solutions that empower individuals to make confident decisions, achieve long-term goals, and build a stronger financial future with clarity and trust.
              </p>
            </div>

            {/* Premium 3D Vision Illustration Container */}
            <div className="relative w-full h-[160px] sm:h-[180px] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-[#FFF7ED]/30 border border-slate-200/80 shadow-inner">
              <Image 
                src="/ourvision.png"
                alt="Our Vision"
                fill
                draggable={false}
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-contain object-center select-none pointer-events-none mix-blend-multiply contrast-[1.04]"
              />
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="bg-gradient-to-br from-white via-slate-50/50 to-[#FFF7ED]/40 p-5 sm:p-6 rounded-3xl border border-[#FED7AA]/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#E67710] mb-3 shadow-sm group-hover:bg-[#E67710] group-hover:text-white transition-colors duration-300">
                <Target className="w-5 h-5" strokeWidth={1.75} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67710] block mb-1">
                OUR MISSION
              </span>

              <h3 className="font-heading font-bold text-base sm:text-lg text-[#102448] mb-1.5 leading-snug">
                Combining Innovation & Customer-First Thinking
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                To leverage technology, modern ideas, and customer-centered design to develop financial solutions that are simple, accessible, transparent, and built for lasting value.
              </p>
            </div>

            {/* Premium 3D Mission Illustration Container */}
            <div className="relative w-full h-[160px] sm:h-[180px] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-[#FFF7ED]/30 border border-slate-200/80 shadow-inner">
              <Image 
                src="/hero_3d_chart.png"
                alt="Our Mission"
                fill
                draggable={false}
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-contain object-center select-none pointer-events-none mix-blend-multiply contrast-[1.04]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

const services = [
  {
    icon: Compass,
    title: "Financial Solutions",
    description: "Secure your legacy with tailored financial strategies and insurance solutions for every need."
  },
  {
    icon: TrendingUp,
    title: "Investment Solutions",
    description: "Navigate your financial journey with expert guidance and personalized strategies for success."
  },
  {
    icon: Shield,
    title: "Wealth Management Expertise",
    description: "Empowering you to make mindful investment decisions for a prosperous financial future."
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Insurance Services",
    description: "Offering promises of protection that safeguard what matters most in your life."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-4 sm:py-6 md:py-8 bg-[#F8FAFC] select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E67710] mb-1 block">
            SOLUTIONS
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-1.5">
            Financial & Insurance Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Empowering individuals through structured guidance and trustworthy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {services.map((s, index) => {
            const Icon = s.icon
            return (
              <div 
                key={index} 
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 border-b-4 border-b-[#E67710] shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center shrink-0 text-[#E67710] group-hover:bg-[#E67710] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5.5 h-5.5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#102448] mb-1 group-hover:text-[#E67710] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
