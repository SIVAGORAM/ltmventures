import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedSection } from "@/components/common/animated-section"
import { Lightbulb, TrendingUp, Users, Target, ArrowRight, MapPin, Briefcase, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers | LTM Ventures India LLP",
  description: "Build something meaningful with LTM Ventures India LLP. Explore career opportunities in wealth management, engineering, and product design.",
}

const perks = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Work on meaningful ideas and modern solutions."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Learn, develop, and grow with new opportunities."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work with people who value ideas, teamwork, and shared success."
  },
  {
    icon: Target,
    title: "Impact",
    description: "Contribute to products and experiences that can make a meaningful difference."
  }
]

const jobs = [
  {
    title: "Senior Financial Advisor",
    department: "Wealth Management",
    location: "Mumbai, India (Hybrid)",
    type: "Full-Time"
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bengaluru, India (Remote)",
    type: "Full-Time"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-Time"
  }
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <section className="bg-white pt-22 sm:pt-24 md:pt-26 lg:pt-28 pb-8 sm:pb-12 relative border-b border-[#E9EDF2] select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
            <AnimatedSection className="max-w-4xl mx-auto flex flex-col items-center">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#102448] mb-4 sm:mb-6 leading-tight">
                Build Something<br />Meaningful With Us<span className="text-[#E67710]">.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                Join LTM Ventures India LLP and be part of a team focused on innovation, technology, and creating better financial experiences.
              </p>
              <Link 
                href="#open-positions" 
                className="bg-[#E67710] hover:bg-[#D96B00] text-white font-semibold text-xs sm:text-sm rounded-xl px-8 py-3.5 shadow-md shadow-[#E67710]/20 transition-all inline-flex items-center gap-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#F7F8FA] select-none">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <AnimatedSection className="text-center mb-8 sm:mb-12">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448]">Why Work With Us</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {perks.map((perk, index) => (
                <AnimatedSection 
                  key={index} 
                  className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#E9EDF2] border-b-4 border-b-[#E67710] text-center"
                >
                  <div className="w-13 h-13 rounded-full bg-[#FFF7ED] flex items-center justify-center mx-auto mb-5 border border-[#FED7AA]">
                    <perk.icon className="w-6 h-6 text-[#E67710]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#102448] mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="open-positions" className="py-8 sm:py-12 md:py-16 bg-white select-none">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
            <AnimatedSection className="mb-8 sm:mb-10 text-center sm:text-left">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#102448] mb-2">Open Positions</h2>
              <p className="text-[#64748B] text-xs sm:text-sm md:text-base">Find the right role for you and join our mission.</p>
            </AnimatedSection>
            
            <div className="flex flex-col gap-4 sm:gap-6">
              {jobs.map((job, index) => (
                <AnimatedSection 
                  key={index} 
                  className="bg-white border border-[#E9EDF2] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:border-[#E67710]/40 hover:shadow-md transition-all group"
                >
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-[#102448] mb-3 group-hover:text-[#E67710] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#64748B]">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#E67710]" /> {job.department}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#E67710]" /> {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#E67710]" /> {job.type}
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.wealthystep.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#FFF7ED] hover:bg-[#E67710] text-[#E67710] hover:text-white border border-[#FED7AA] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all self-start md:self-auto shadow-sm"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
