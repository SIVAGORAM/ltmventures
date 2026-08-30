"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/config/navigation"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1F8EA] hover:bg-[#4F8A10] border border-[#D4E8C4] flex items-center justify-center text-[#4F8A10] hover:text-white transition-colors duration-300 shadow-sm cursor-pointer">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Mobile Menu</span>
      </SheetTrigger>

      <SheetContent 
        side="right" 
        className="w-[300px] xs:w-[320px] sm:w-[360px] flex flex-col bg-[#071427] text-white border-l border-[#1A3866] p-6 shadow-2xl select-none"
      >
        {/* Drawer Header */}
        <SheetHeader className="text-left border-b border-[#122747] pb-5 mb-2">
          <SheetTitle className="flex items-center justify-between">
            <div className="bg-white rounded-xl px-3 py-1.5 shadow-md border border-white/20 inline-block">
              <img 
                src="/ltmlogo2.svg" 
                alt="LTM Ventures India LLP" 
                className="h-8 w-auto object-contain" 
              />
            </div>
          </SheetTitle>
        </SheetHeader>
        
        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-2 mt-4 flex-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href === "/" && pathname === "/")
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 group",
                  isActive 
                    ? "bg-[#4F8A10]/20 text-[#4F8A10] border border-[#4F8A10]/40 font-bold" 
                    : "text-slate-200 hover:text-white hover:bg-[#0D2446]"
                )}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      isActive ? "bg-[#4F8A10] shadow-[0_0_8px_#4F8A10]" : "bg-slate-600 group-hover:bg-[#4F8A10]"
                    )}
                  />
                  <span>{item.name}</span>
                </div>
                <ChevronRight 
                  className={cn(
                    "w-4 h-4 transition-transform group-hover:translate-x-1",
                    isActive ? "text-[#4F8A10]" : "text-slate-500 group-hover:text-slate-300"
                  )} 
                />
              </Link>
            )
          })}
        </nav>

        {/* Drawer Bottom Feature CTA Card */}
        <div className="mt-auto pt-4 border-t border-[#122747] flex flex-col gap-2.5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] text-center">
            OUR FLAGSHIP BRAND
          </div>
          
          <a
            href="https://www.wealthystep.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full bg-gradient-to-r from-[#4F8A10] to-[#3B6A0C] hover:from-[#43770D] hover:to-[#31570A] text-white font-semibold rounded-2xl p-3.5 flex flex-col items-center justify-center gap-2 shadow-lg shadow-[#4F8A10]/25 transition-all group border border-[#5CA014]/30 cursor-pointer"
          >
            <div className="bg-white rounded-xl px-3 py-1.5 shadow-md flex items-center justify-center">
              <img 
                src="/wealthysteplogo.svg" 
                alt="WealthyStep" 
                className="h-6 w-auto object-contain" 
              />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-white tracking-wide">
              <span>Explore WealthyStep</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>

      </SheetContent>
    </Sheet>
  )
}
