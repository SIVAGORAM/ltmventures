import { Shield, TrendingUp, Compass, HeartHandshake, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-10 md:py-12 bg-[#F8FAFC] border-b border-[#E9EDF2] select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#E67710] mb-1.5">
            PARENT COMPANY
          </span>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-3">
            About LTM Ventures India LLP
          </h2>

          <div className="w-10 h-[3px] bg-[#E67710] rounded-full mb-4"></div>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed">
            LTM Ventures India LLP is the parent company of WealthyStep, dedicated to providing innovative financial and insurance solutions.
          </p>

          {/* Sub-Brand Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 pt-5 border-t border-slate-200 w-full">
            <a 
              href="https://www.wealthystep.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-[#E67710] rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-3 transition-colors group"
            >
              <img src="/wealthysteplogo.svg" alt="WealthyStep" className="h-6 sm:h-7 w-auto object-contain" />
              <span className="text-xs text-[#64748B] border-l border-slate-200 pl-3 group-hover:text-[#102448]">Financial Solutions & Wealth Management</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export function VisionMissionSection() {
  return (
    <section id="vision" className="py-8 sm:py-10 md:py-12 bg-white border-b border-[#E9EDF2] select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <div className="w-12 h-12 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-[#E67710]" strokeWidth={1.75} />
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-3">
            Our Vision and Mission
          </h2>

          <div className="w-10 h-[3px] bg-[#E67710] rounded-full mb-4"></div>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed">
            We strive to empower individuals with financial knowledge and security, ensuring a legacy of mindful solutions and trustworthy insurance protection.
          </p>

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
    <section id="services" className="py-10 sm:py-12 md:py-14 bg-[#F8FAFC] select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E67710] mb-1.5 block">
            SOLUTIONS
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-2">
            Financial & Insurance Solutions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#64748B]">
            Empowering individuals through structured guidance and trustworthy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {services.map((s, index) => {
            const Icon = s.icon
            return (
              <div 
                key={index} 
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#102448]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#102448] mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
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
