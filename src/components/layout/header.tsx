"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"
import { ChevronDown, ArrowRight } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Our Brand", href: "/brand", hasDropdown: true },
  { name: "Vision & Mission", href: "/vision-mission", hasDropdown: false },
  { name: "Why LTM Ventures", href: "/why-ltm", hasDropdown: false },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3.5 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1400px] mx-auto pointer-events-auto">
        <div
          className={cn(
            "bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[#E2E8F0] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between gap-4",
            isScrolled 
              ? "shadow-lg shadow-slate-900/5 border-slate-300/80 py-2 sm:py-2.5" 
              : "shadow-md shadow-slate-200/50"
          )}
        >
          {/* Left: Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center group shrink-0"
            aria-label="LTM Ventures Home"
          >
            <img 
              src="/ltmlogo2.svg" 
              alt="LTM Ventures India LLP" 
              className="h-8 sm:h-9 md:h-10 w-auto transition-transform group-hover:scale-[1.02] object-contain" 
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 mx-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === "/" && pathname === "/")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-[13px] xl:text-[14px] font-semibold transition-colors relative py-1 flex flex-col items-center group whitespace-nowrap",
                    isActive ? "text-[#4F8A10]" : "text-[#102448] hover:text-[#4F8A10]"
                  )}
                >
                  <div className="flex items-center gap-1">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  {isActive && (
                    <span className="w-5 h-[3px] bg-[#4F8A10] rounded-full mt-1" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: WealthyStep Flagship Brand External Link (Desktop) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="https://www.wealthystep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F1F8EA] hover:bg-[#E4F0D9] border border-[#D4E8C4] rounded-xl px-4 py-2 transition-all duration-300 group shadow-sm"
              title="Visit WealthyStep official website"
            >
              <img 
                src="/wealthysteplogo.svg" 
                alt="WealthyStep" 
                className="h-5 w-auto object-contain" 
              />
              <ArrowRight className="w-3.5 h-3.5 text-[#4F8A10] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Trigger (< 1024px) */}
          <div className="lg:hidden shrink-0">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  )
}
