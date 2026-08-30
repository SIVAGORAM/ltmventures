import { SectionContainer } from "@/components/common/section-container"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedSection } from "@/components/common/animated-section"

export function EcosystemSection() {
  return (
    <SectionContainer paddingY="default" className="bg-primary-navy text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-lime-accent/10 to-cta-green/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <SectionHeading 
            eyebrow="The Ecosystem"
            title="A Unified Approach to Wealth."
            description="Our ecosystem is designed to provide comprehensive support for your financial journey through our specialized brand."
            alignment="center"
            className="mb-20 text-white"
          />
        </AnimatedSection>
        
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="relative flex flex-col items-center">
            {/* Core */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,255,255,0.05)] relative">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-white">LTM</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60 mt-1">Ventures</div>
              </div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_3s_ease-in-out_infinite]"></div>
            </div>
            
            {/* Connection Line */}
            <div className="h-24 w-px bg-gradient-to-b from-white/30 to-lime-accent/50 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-white rounded-full animate-[bounce_2s_infinite]"></div>
            </div>
            
            {/* WealthyStep Side */}
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-lime-accent/20 to-cta-green/10 border border-lime-accent/30 p-6 md:p-8 backdrop-blur-sm relative group hover:border-lime-accent/60 transition-colors">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-accent text-primary-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                Wealth Management
              </div>
              
              <div className="text-center mt-2">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">WealthyStep</h3>
                <p className="text-white/70 text-sm">
                  Strategic financial planning and investment advisory for long-term growth.
                </p>
              </div>
            </div>
            
          </div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  )
}

