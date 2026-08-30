import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection, VisionMissionSection, ServicesSection } from "@/components/sections/home-sections"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LTM Ventures India LLP",
  "url": "https://ltmventures.com",
  "logo": "https://ltmventures.com/ltmlogo2.svg",
  "subOrganization": [
    {
      "@type": "Organization",
      "name": "WealthyStep",
      "url": "https://www.wealthystep.com/"
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden bg-white">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
