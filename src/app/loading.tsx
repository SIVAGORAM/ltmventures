export default function Loading() {
  return (
    <div className="flex-1 min-h-[60vh] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-[#E9EDF2] border-t-[#E67710] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#64748B] tracking-wider uppercase">Loading...</span>
      </div>
    </div>
  )
}
