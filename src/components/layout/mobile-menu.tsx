"use client"

import * as React from "react"
import { Menu, ChevronRight } from "lucide-react"
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center text-[#102448] transition-colors duration-200 shadow-sm cursor-pointer">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Mobile Menu</span>
      </SheetTrigger>

      <SheetContent 
        side="right" 
        className="w-[280px] sm:w-[320px] flex flex-col bg-[#071427] text-white border-l border-[#1A3866] p-6 shadow-2xl select-none"
      >
        {/* Drawer Header */}
        <SheetHeader className="text-left border-b border-[#122747] pb-5 mb-2">
          <SheetTitle className="flex items-center justify-between">
            <div className="bg-white rounded-xl px-3 py-1.5 shadow-md border border-white/20 inline-block">
              <img 
                src="/logo.svg" 
                alt="LTM Ventures India LLP" 
                className="h-7 w-auto object-contain" 
              />
            </div>
          </SheetTitle>
        </SheetHeader>
        
        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-2 mt-4 flex-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm text-slate-200 hover:text-white hover:bg-[#0D2446] transition-all group"
            >
              <span>{item.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </nav>

        {/* Drawer Bottom Parent Company Note */}
        <div className="mt-auto pt-4 border-t border-[#122747] text-center">
          <p className="text-[11px] text-[#94A3B8] leading-relaxed">
            LTM Ventures India LLP — Parent Company of WealthyStep.
          </p>
        </div>

      </SheetContent>
    </Sheet>
  )
}
