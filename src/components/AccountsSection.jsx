import { PenLine, PiggyBank, MoreVertical } from 'lucide-react'

const accounts = [
  {
    id: 1,
    label: 'EVERYDAY CHECKING',
    number: '...1234',
    balance: '$3,895,250.70',
    icon: PenLine,
    iconBg: 'bg-[#B21E27]',
    delay: 0,
  },
  {
    id: 2,
    label: 'WAY2SAVE® SAVINGS',
    number: '...5678',
    balance: '$1,273.50',
    icon: PiggyBank,
    iconBg: 'bg-[#2A7B2C]',
    delay: 80,
  },
]

function AccountCard({ account, onShowPopup }) {
  const Icon = account.icon
  return (
    <div
      onClick={onShowPopup}
      className="flex items-center gap-3 mx-4 mb-3 px-3 py-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer active:bg-gray-50 group"
      data-aos="fade-up"
      data-aos-delay={account.delay}
    >
      {/* Icon circle */}
      <div
        className={`${account.iconBg} w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform`}
      >
        <Icon size={22} color="white" strokeWidth={1.5} />
      </div>

      {/* Account info */}
      <div className="flex-1 min-w-0 ml-1">
        <p className="text-[13px] font-medium tracking-wide text-[#8B1D24] leading-tight">
          {account.label}
        </p>
        <p className="text-[13px] text-gray-700 mt-1">{account.number}</p>
      </div>

      {/* Balance */}
      <div className="text-right mr-1">
        <p className="text-[18px] font-bold text-gray-900 leading-tight">
          {account.balance}
        </p>
        <p className="text-[11px] text-gray-700 mt-1">Available balance</p>
      </div>

      {/* More button */}
      <button className="p-1 -mr-2" onClick={(e) => { e.stopPropagation(); onShowPopup?.(); }}>
        <MoreVertical size={20} className="text-gray-900" strokeWidth={2} />
      </button>
    </div>
  )
}

export default function AccountsSection({ onShowPopup }) {
  return (
    <section className="pt-4 sm:pt-6 pb-2">
      <div className="flex items-center justify-between px-5 sm:px-8 mb-3">
        <h2 className="text-[17px] sm:text-[19px] font-bold text-gray-900">Accounts</h2>
        <a href="#" onClick={(e) => { e.preventDefault(); onShowPopup?.(); }} className="text-[13px] sm:text-[14px] text-[#064789] hover:underline">
          Edit accounts order
        </a>
      </div>
      <div className="sm:px-4 md:grid md:grid-cols-2 md:gap-4">
        {accounts.map((a) => (
          <AccountCard key={a.id} account={a} onShowPopup={onShowPopup} />
        ))}
      </div>
    </section>
  )
}
