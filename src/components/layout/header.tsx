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
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-4 transition-all duration-300 pointer-events-none flex justify-center">
      <div className="w-full max-w-[840px] pointer-events-auto">
        <div
          className={cn(
            "bg-white/95 backdrop-blur-md rounded-full border border-[#FED7AA]/90 ring-1 ring-slate-200/50 px-5 sm:px-7 py-2.5 transition-all duration-300 flex items-center justify-between gap-6 shadow-lg shadow-[#102448]/5",
            isScrolled 
              ? "border-[#E67710]/40 ring-1 ring-[#E67710]/20 py-2 shadow-xl shadow-[#102448]/10" 
              : ""
          )}
        >
          {/* Left: Brand Logo */}
          <Link 
            href="#hero" 
            className="flex items-center group shrink-0"
            aria-label="LTM Ventures Home"
          >
            <img 
              src="/logo.svg" 
              alt="LTM Ventures India LLP" 
              className="h-7 sm:h-8 md:h-8.5 w-auto transition-transform group-hover:scale-[1.02] object-contain" 
            />
          </Link>

          {/* Right: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] xl:text-[14px] font-semibold text-[#102448] hover:text-[#E67710] transition-colors relative py-1 flex items-center gap-1 group whitespace-nowrap"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
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
