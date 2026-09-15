import { Home } from 'lucide-react'

export default function FooterLegal() {
  return (
    <div className="px-4 pt-4 pb-6 text-center space-y-1">
      <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
        <Home size={10} />
        <span>Equal Housing Lender</span>
        <span className="mx-1">|</span>
        <span>Member FDIC</span>
      </div>
      <p className="text-[10px] text-gray-400">
        © 2026 Wells Fargo Bank, N.A. All rights reserved.
      </p>
    </div>
  )
}
