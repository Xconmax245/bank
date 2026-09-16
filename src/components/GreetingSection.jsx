import { Bell } from 'lucide-react'

export default function GreetingSection({ onShowPopup }) {
  return (
    <section
      className="flex items-start justify-between px-5 sm:px-8 pt-8 pb-6"
      data-aos="fade-down"
    >
      <div>
        <h1 
          className="text-[26px] sm:text-[32px] font-normal text-gray-900 leading-tight"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Good morning, Daniel
        </h1>
        <p className="text-[13px] sm:text-[15px] text-gray-800 mt-2">
          Today is {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="flex flex-col items-center gap-1 ml-4 pt-1 sm:pt-2">
        <div onClick={onShowPopup} className="relative cursor-pointer hover:bg-gray-50 rounded-full transition-colors">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
            <Bell size={22} strokeWidth={1.5} className="text-gray-800" />
          </div>
          <span className="absolute -top-1 -right-1 bg-[#D71E28] text-white text-[11px] sm:text-[12px] font-bold rounded-full w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center">
            2
          </span>
        </div>
        <span onClick={onShowPopup} className="text-[11px] sm:text-[12px] text-gray-800 font-medium cursor-pointer hover:underline">Notifications</span>
      </div>
    </section>
  )
}
