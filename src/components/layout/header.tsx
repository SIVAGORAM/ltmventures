"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"
import { ChevronDown } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero", hasDropdown: false },
  { name: "About Us", href: "#about", hasDropdown: true },
  { name: "Vision & Mission", href: "#vision", hasDropdown: false },
  { name: "Services", href: "#services", hasDropdown: true },
]

export function Header() {
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
            href="#hero" 
            className="flex items-center group shrink-0"
            aria-label="LTM Ventures Home"
          >
            <img 
              src="/ltmlogo2.svg" 
              alt="LTM Ventures India LLP" 
              className="h-8 sm:h-9 md:h-10 w-auto transition-transform group-hover:scale-[1.02] object-contain" 
            />
          </Link>

          {/* Center: Desktop Navigation Links (Restored Old Navbar Style) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] xl:text-[14px] font-semibold text-[#102448] hover:text-[#E67710] transition-colors relative py-1 flex items-center gap-1 group whitespace-nowrap"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Trigger (< 1024px) */}
          <div className="lg:hidden shrink-0">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  )
}
