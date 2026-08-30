import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedSection } from "@/components/common/animated-section"
import { Users, Lightbulb, TrendingUp, ShieldCheck, Laptop, Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Why LTM Ventures | LTM Ventures India LLP",
  description: "Discover why LTM Ventures India LLP is built around customer-centered thinking, innovation with purpose, and long-term value creation.",
}

const reasons = [
  {
    icon: Users,
    title: "Customer-Centered Thinking",
    description: "We place people and their financial goals at the center of everything we build, ensuring our solutions actually meet real-world needs."
  },
  {
    icon: Lightbulb,
    title: "Innovation With Purpose",
    description: "We don't innovate just for the sake of it. Every new technology or idea we implement is designed to create a better financial experience."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    description: "Our focus is always on building sustainable, scalable solutions designed to generate and protect value over the long term."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experiences",
    description: "Trust is earned through transparency, reliability, and consistently delivering meaningful value to those who depend on us."
  },
  {
    icon: Laptop,
    title: "Meaningful Technology",
    description: "We harness the power of modern financial technology to make wealth management more accessible and intuitive."
  },
  {
    icon: Compass,
    title: "Strong Vision",
    description: "Guided by a clear purpose to empower individuals to make confident decisions for a stronger financial future."
  }
]

export default function WhyLtmPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <section className="bg-white pt-22 sm:pt-24 md:pt-26 lg:pt-28 pb-4 sm:pb-6 md:pb-8 relative border-b border-[#E9EDF2] select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#102448] mb-3 sm:mb-4 leading-tight">
                Why LTM Ventures<span className="text-[#E67710]">?</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
                Because meaningful financial experiences require more than technology. They require understanding, trust, innovation, and a long-term commitment to people.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* REASONS GRID */}
        <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-16 bg-[#F7F8FA] select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {reasons.map((reason, index) => (
                <AnimatedSection 
                  key={index} 
                  className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#E9EDF2] border-b-4 border-b-[#E67710] hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 rounded-full bg-[#FFF7ED] flex items-center justify-center mb-5 border border-[#FED7AA] group-hover:bg-[#E67710] transition-colors duration-300">
                      <reason.icon className="w-6 h-6 text-[#E67710] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#102448] mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
