import { SectionContainer } from "@/components/common/section-container"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedSection } from "@/components/common/animated-section"

export function AboutSection() {
  return (
    <SectionContainer className="bg-white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection className="w-full aspect-[4/3] rounded-[24px] overflow-hidden relative bg-light-surface flex items-center justify-center">
          {/* Placeholder for premium image */}
          <div className="text-muted-foreground flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-border bg-white/50 mb-4 flex items-center justify-center shadow-sm">
              <span className="font-heading font-bold text-2xl text-primary-navy">LTM</span>
            </div>
            <p>Premium Corporate Visual</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="flex flex-col">
          <SectionHeading 
            eyebrow="About LTM Ventures"
            title="Creating a Stronger Financial Future."
            description={
              <div className="flex flex-col gap-6">
                <p>
                  LTM Ventures India LLP is the parent company behind WealthyStep. We focus on creating accessible, technology-driven financial solutions that help individuals make informed decisions about their wealth.
                </p>
                <p>
                  Through our brand, we bring together financial planning and investment guidance to support people at different stages of their financial journey.
                </p>
              </div>
            }
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <div className="font-heading font-bold text-4xl text-primary-navy mb-2">1</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Specialized Brand</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl text-primary-navy mb-2">1000+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Clients Served</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  )
}

