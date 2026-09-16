import { useState } from 'react'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

export default function SignIn({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = (e) => {
    e.preventDefault()
    
    // Exact match for the requested name
    if (username.trim() === 'Daniel R. Caine' && password === 'caine$001') {
      setError('')
      setIsLoading(true)
      setTimeout(() => {
        onLogin()
      }, 1500) // 1.5 second loading delay
    } else {
      setError('The username and password combination you entered does not match our records.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-[#D71E28] py-4 px-6 flex justify-center items-center shadow-md">
        <span
          className="text-white font-bold text-[24px] uppercase"
          style={{ fontFamily: '"Times New Roman", Times, serif', letterSpacing: '0.04em' }}
        >
          WELLS FARGO
        </span>
      </header>

      {/* Main Form Area */}
      <main className="flex-1 w-full max-w-md mx-auto p-4 pt-8">
        <div 
          className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 sm:p-8"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <h1 className="text-[22px] font-bold text-gray-900 mb-6 text-center">
            Sign In
          </h1>

          {error && (
            <div className="bg-[#FFF0F0] border border-[#D71E28] text-[#D71E28] text-sm px-4 py-3 rounded mb-5 flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[16px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#064789] focus:border-transparent transition-shadow"
                placeholder="Enter username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-4 pr-12 py-3 text-[16px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#064789] focus:border-transparent transition-shadow"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Save Username Toggle */}
            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="saveUsername"
                className="w-5 h-5 accent-[#064789] rounded border-gray-300 cursor-pointer"
              />
              <label htmlFor="saveUsername" className="text-[14px] text-gray-700 cursor-pointer select-none">
                Save username
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#D71E28] hover:bg-[#B21E27] active:bg-[#8B1D24] disabled:opacity-75 disabled:cursor-wait text-white font-bold py-3.5 rounded-lg text-[16px] transition-colors mt-2 shadow-sm flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 size={20} className="animate-spin" />}
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Helper Links */}
          <div className="mt-6 space-y-3 text-center">
            <a href="#" className="block text-[14px] text-[#064789] hover:underline font-medium">
              Forgot Username or Password?
            </a>
            <a href="#" className="block text-[14px] text-[#064789] hover:underline font-medium">
              Enroll in Wells Fargo Online®
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 px-4 text-center border-t border-gray-200">
        <p className="text-[12px] text-gray-500 max-w-sm mx-auto leading-relaxed">
          Equal Housing Lender <br/>
          © 2026 Wells Fargo Bank, N.A. All rights reserved. Member FDIC.
        </p>
      </footer>
    </div>
  )
}
