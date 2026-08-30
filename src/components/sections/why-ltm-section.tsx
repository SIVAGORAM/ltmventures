import { SectionContainer } from "@/components/common/section-container"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedSection } from "@/components/common/animated-section"
import { ValueCard } from "@/components/common/value-card"

export function WhyLtmSection() {
  const values = [
    {
      title: "Trust & Transparency",
      description: "We operate with complete clarity, ensuring you always know where your financial journey is headed.",
    },
    {
      title: "Innovation First",
      description: "Leveraging technology to make complex financial and insurance decisions simpler and more accessible.",
    },
    {
      title: "Financial Expertise",
      description: "Built on a foundation of deep financial knowledge across wealth management and protection.",
    },
    {
      title: "Customer-Focused",
      description: "Every solution we offer is designed around real human needs, not just financial products.",
    },
    {
      title: "Long-Term Thinking",
      description: "We help you plan not just for tomorrow, but for a secure and prosperous future.",
    },
    {
      title: "Unified Ecosystem",
      description: "A single parent company orchestrating a comprehensive suite of financial solutions for you.",
    }
  ]

  return (
    <SectionContainer className="bg-light-surface" id="why-ltm">
      <AnimatedSection className="mb-16 max-w-3xl">
        <SectionHeading 
          eyebrow="Why LTM Ventures"
          title="A Foundation Built on Expertise and Trust."
          description="We are committed to delivering the highest standard of financial care across all our brands and services."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <AnimatedSection key={index} transition={{ delay: index * 0.1 }}>
            <ValueCard 
              number={`0${index + 1}`}
              title={value.title}
              description={value.description}
            />
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  )
}

