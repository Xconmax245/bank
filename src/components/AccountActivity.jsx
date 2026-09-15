const transactions = [
  {
    date: 'Aug 10, 2026',
    title: 'DIRECT DEPOSIT',
    desc: 'Employer Payroll',
    status: 'Posted',
    amount: '+$4,250.00',
    positive: true,
    delay: 0,
  },
  {
    date: 'Aug 7, 2026',
    title: 'ZELLE TRANSFER TO',
    desc: 'Marcus Lee',
    status: 'Posted',
    amount: '-$150.00',
    positive: false,
    delay: 50,
  },
  {
    date: 'Aug 6, 2026',
    title: 'WALMART #2784',
    desc: 'Purchase',
    status: 'Posted',
    amount: '-$87.64',
    positive: false,
    delay: 100,
  },
  {
    date: 'Aug 4, 2026',
    title: 'SHELL OIL 57436',
    desc: 'Purchase',
    status: 'Posted',
    amount: '-$56.78',
    positive: false,
    delay: 150,
  },
  {
    date: 'Dec 15, 2025',
    title: 'DIRECT DEPOSIT',
    desc: 'Freelance Payment',
    status: 'Posted',
    amount: '+$1,200.00',
    positive: true,
    delay: 200,
  },
]

function TransactionRow({ tx }) {
  return (
    <div
      className="flex items-start py-4 border-b border-gray-200 last:border-0 gap-2"
      data-aos="fade-up"
      data-aos-delay={tx.delay}
    >
      {/* Date */}
      <span className="text-[13px] text-gray-800 w-[84px] shrink-0 pt-0.5 leading-tight">
        {tx.date}
      </span>

      {/* Description */}
      <div className="flex-1 min-w-0 pr-1">
        <p className="text-[13px] font-medium text-gray-900 leading-tight">
          {tx.title}
        </p>
        <p className="text-[13px] text-gray-700 mt-1 leading-tight">{tx.desc}</p>
      </div>

      {/* Status */}
      <span className="text-[13px] text-gray-700 w-[50px] text-center shrink-0 pt-0.5">
        {tx.status}
      </span>

      {/* Amount */}
      <span
        className={`text-[14px] font-semibold w-[85px] text-right shrink-0 pt-0.5 ${
          tx.positive ? 'text-[#197B30]' : 'text-gray-900'
        }`}
      >
        {tx.amount}
      </span>
    </div>
  )
}

export default function AccountActivity() {
  return (
    <section className="px-5 sm:px-8 pt-5 sm:pt-8 pb-4 bg-white">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[18px] font-bold text-gray-900">
          Account activity
        </h2>
        <a href="#" className="text-[13px] text-[#064789] hover:underline">
          View all
        </a>
      </div>

      <p className="text-[12px] text-gray-600 mb-2 font-medium uppercase tracking-wide">
        EVERYDAY CHECKING ...1234
      </p>
      <div className="h-[1px] bg-gray-200 mt-1 mb-1" />

      <div>
        {transactions.map((tx, i) => (
          <TransactionRow key={i} tx={tx} />
        ))}
      </div>

      <a
        href="#"
        className="text-[13px] text-[#064789] hover:underline mt-4 inline-block font-medium"
      >
        View all transactions
      </a>
    </section>
  )
}
