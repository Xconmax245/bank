import Header from './Header'
import GreetingSection from './GreetingSection'
import AccountOwner from './AccountOwner'
import AccountsSection from './AccountsSection'
import QuickActions from './QuickActions'
import AccountActivity from './AccountActivity'
import BottomNav from './BottomNav'
import FooterLegal from './FooterLegal'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-3xl mx-auto bg-white shadow-sm sm:my-6 sm:rounded-xl overflow-hidden pb-16 sm:pb-0">
        <GreetingSection />
        <div className="h-px bg-gray-200 mx-4" />
        <AccountOwner />
        <div className="h-px bg-gray-200 mx-4" />
        <AccountsSection />
        <QuickActions />
        <div className="h-3 bg-gray-100" />
        <AccountActivity />
        <FooterLegal />
      </main>

      {/* Bottom Nav - Fixed on Mobile, hidden or bottom on Desktop */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white z-50 sm:hidden border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <BottomNav />
      </div>
      
      {/* Desktop Bottom Nav fallback (optional) */}
      <div className="hidden sm:block max-w-3xl mx-auto w-full bg-white rounded-b-xl border-t border-gray-200 mb-8 overflow-hidden">
         <BottomNav />
      </div>
    </div>
  )
}
