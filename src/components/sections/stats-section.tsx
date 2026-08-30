import { Users, Building2, TrendingUp, ShieldCheck } from "lucide-react"
import { AnimatedSection } from "@/components/common/animated-section"

const stats = [
  {
    icon: Users,
    value: "1000+",
    title: "Happy Clients",
    subtitle: "Trust in our expertise"
  },
  {
    icon: Building2,
    value: "2+",
    title: "Strong Brands",
    subtitle: "Across wealth & protection",
    iconColor: "text-purple-accent" // The mockup has some purple icons
  },
  {
    icon: TrendingUp,
    value: "X+",
    title: "Financial Solutions",
    subtitle: "Tailored for your needs"
  },
  {
    icon: ShieldCheck,
    value: "10+",
    title: "Years of Experience",
    subtitle: "Delivering lasting value",
    iconColor: "text-purple-accent"
  }
]

export function StatsSection() {
  return (
    <section className="bg-white py-8 pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-6 border-b border-border pb-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#4C9E17]/10 flex items-center justify-center shrink-0">
                <stat.icon className={`w-7 h-7 ${stat.iconColor || "text-[#4C9E17]"}`} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-primary-navy leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm text-primary-navy mb-0.5">
                  {stat.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
