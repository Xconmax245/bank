import { DollarSign, ArrowDownUp, Camera, Compass, Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: DollarSign, label: 'Accounts', active: true },
  { icon: ArrowDownUp, label: 'Pay & Transfer', active: false },
  { icon: Camera, label: 'Deposit', active: false },
  { icon: Compass, label: 'Explore', active: false },
  { icon: Menu, label: 'Menu', active: false },
]

export default function BottomNav() {
  const [active, setActive] = useState(0)

  return (
    <nav className="shrink-0 flex items-end justify-around border-t border-gray-200 bg-[#FAFAFA] pt-2 pb-2">
      {navItems.map((item, i) => {
        const Icon = item.icon
        const isActive = active === i
        return (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex flex-col items-center gap-[2px] flex-1 px-1 py-1"
          >
            <div
              className={`w-7 h-7 rounded-[4px] flex items-center justify-center ${
                isActive ? 'bg-[#D71E28]' : ''
              }`}
            >
              <Icon
                size={18}
                strokeWidth={2}
                className={isActive ? 'text-white' : 'text-gray-900'}
              />
            </div>
            <span
              className={`text-[10px] font-bold text-center leading-tight mt-0.5 ${
                isActive ? 'text-[#D71E28]' : 'text-gray-900'
              }`}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
