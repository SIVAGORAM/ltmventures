import { SectionContainer } from "@/components/common/section-container"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedSection } from "@/components/common/animated-section"

export function DigitalExperienceSection() {
  return (
    <SectionContainer className="bg-white overflow-hidden" id="digital-experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection className="flex flex-col">
          <SectionHeading 
            eyebrow="DIGITAL-FIRST EXPERIENCE"
            title="Modern Financial Solutions at Your Fingertips."
            description="Experience seamless, transparent, and technology-driven financial management. Our digital platforms are designed to give you complete visibility and control over your wealth and protection."
          />
          
          <ul className="flex flex-col gap-6 mt-10">
            {[
              {
                title: "Unified Dashboard",
                desc: "Get a holistic view of your entire financial journey in one place."
              },
              {
                title: "Real-Time Insights",
                desc: "Make informed decisions based on up-to-date data and analytics."
              },
              {
                title: "Secure & Compliant",
                desc: "Bank-grade security ensuring your data and assets are always protected."
              }
            ].map((feature, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-accent/10 flex items-center justify-center shrink-0">
                  <span className="w-3 h-3 rounded-full bg-lime-accent"></span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-primary-navy mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </AnimatedSection>
        
        <AnimatedSection className="w-full aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden relative bg-gradient-to-br from-light-surface to-[#E6E4EA] flex items-center justify-center p-8">
          {/* Abstract representation of a digital platform */}
          <div className="w-full max-w-sm h-full max-h-[400px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden relative z-10 border border-white/50">
            <div className="h-12 border-b border-border flex items-center px-4 gap-2 bg-[#fafafa]">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4 bg-white">
              <div className="w-32 h-6 rounded bg-light-surface"></div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 h-24 rounded-lg bg-gradient-to-br from-lime-accent/20 to-lime-accent/5 border border-lime-accent/20"></div>
                <div className="flex-1 h-24 rounded-lg bg-light-surface"></div>
              </div>
              <div className="w-full h-32 rounded-lg bg-light-surface"></div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-accent rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-accent rounded-full blur-[80px] opacity-20"></div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  )
}

