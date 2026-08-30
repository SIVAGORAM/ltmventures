import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] bg-white text-center px-4 pt-28 pb-16 select-none">
        <div className="w-16 h-16 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mb-6 text-[#E67710] font-heading font-bold text-2xl">
          404
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#102448] mb-4">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#64748B] max-w-md mb-8 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-[#E67710] hover:bg-[#D96B00] text-white font-semibold text-xs sm:text-sm rounded-xl px-6 py-3 shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </main>
      <Footer />
    </>
  )
}
