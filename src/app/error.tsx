"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { RefreshCw } from "lucide-react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring if needed
    console.error("App boundary caught error:", error)
  }, [error])

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] bg-white text-center px-4 pt-28 pb-16 select-none">
        <div className="w-16 h-16 rounded-full bg-[#FEF2F2] border border-[#FEE2E2] flex items-center justify-center mb-6 text-[#DC2626] font-heading font-bold text-xl">
          !
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#102448] mb-4">
          Something went wrong
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] max-w-md mb-8 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page or navigating back to safety.
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-[#4F8A10] hover:bg-[#43770D] text-white font-semibold text-xs sm:text-sm rounded-xl px-6 py-3 shadow-md transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-white text-[#102448] border border-[#CBD5E1] font-semibold text-xs sm:text-sm rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
