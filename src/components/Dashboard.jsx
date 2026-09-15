import { useState } from 'react'
import Header from './Header'
import GreetingSection from './GreetingSection'
import AccountOwner from './AccountOwner'
import AccountsSection from './AccountsSection'
import QuickActions from './QuickActions'
import AccountActivity from './AccountActivity'
import BottomNav from './BottomNav'
import FooterLegal from './FooterLegal'

export default function Dashboard() {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const showPopup = () => setPopupVisible(true)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Header onShowPopup={showPopup} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-3xl mx-auto bg-white shadow-sm sm:my-6 sm:rounded-xl overflow-hidden pb-16 sm:pb-0">
        <GreetingSection onShowPopup={showPopup} />
        <div className="h-px bg-gray-200 mx-4" />
        <AccountOwner onShowPopup={showPopup} />
        <div className="h-px bg-gray-200 mx-4" />
        <AccountsSection onShowPopup={showPopup} />
        <QuickActions onShowPopup={showPopup} />
        <div className="h-3 bg-gray-100" />
        <AccountActivity onShowPopup={showPopup} />
        <FooterLegal />
      </main>

      {/* Bottom Nav - Fixed on Mobile, hidden or bottom on Desktop */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white z-40 sm:hidden border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <BottomNav onShowPopup={showPopup} />
      </div>
      
      {/* Desktop Bottom Nav fallback (optional) */}
      <div className="hidden sm:block max-w-3xl mx-auto w-full bg-white rounded-b-xl border-t border-gray-200 mb-8 overflow-hidden">
         <BottomNav onShowPopup={showPopup} />
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center transform transition-all duration-300 scale-100"
            data-aos="zoom-in"
            data-aos-duration="200"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D71E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-2">Notice</h3>
            <p className="text-[15px] text-gray-600 mb-6 font-medium">Account under review</p>
            <button 
              onClick={() => setPopupVisible(false)} 
              className="bg-[#D71E28] hover:bg-[#B21E27] active:bg-[#8B1D24] transition-colors text-white w-full py-3.5 rounded-xl font-bold text-[16px] shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
