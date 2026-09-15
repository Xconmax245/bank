import { ArrowDownUp, Camera, DollarSign, MoreHorizontal } from 'lucide-react'

const actions = [
  { icon: ArrowDownUp, label: 'Transfer\nmoney', delay: 0 },
  { icon: Camera, label: 'Deposit\nchecks', delay: 60 },
  { icon: DollarSign, label: 'Send money\nwith Zelle®', delay: 120 },
  { icon: MoreHorizontal, label: 'More', delay: 180 },
]

export default function QuickActions() {
  return (
    <section
      className="flex items-start justify-around px-4 sm:px-8 py-5 sm:py-8 border-t border-gray-100"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {actions.map((action, i) => {
        const Icon = action.icon
        return (
          <button
            key={i}
            className="flex flex-col items-center gap-2 flex-1 px-1 hover:opacity-80 transition-opacity active:opacity-70 group"
          >
            <div className="w-[48px] h-[48px] rounded-full border-[1.5px] border-gray-300 flex items-center justify-center bg-white group-hover:border-gray-400 transition-colors">
              <Icon size={20} className="text-gray-900" strokeWidth={1.5} />
            </div>
            <span className="text-[12px] font-medium text-center text-gray-900 leading-tight whitespace-pre-line">
              {action.label}
            </span>
          </button>
        )
      })}
    </section>
  )
}
