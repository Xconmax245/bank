import { Menu } from 'lucide-react'

export default function Header({ onShowPopup }) {
  return (
    <header className="flex items-center justify-between px-5 sm:px-8 py-4 bg-[#D71E28]">
      {/* Wells Fargo wordmark */}
      <div className="flex-1" />
      <span
        className="text-white font-bold text-[22px] sm:text-[24px] uppercase"
        style={{ fontFamily: '"Times New Roman", Times, serif', letterSpacing: '0.04em' }}
      >
        WELLS FARGO
      </span>
      <div className="flex-1 flex justify-end">
        <button onClick={onShowPopup} className="p-1 hover:opacity-80 transition-opacity">
          <Menu size={32} color="white" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  )
}
