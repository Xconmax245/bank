import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return isAuthenticated ? <Dashboard /> : <SignIn onLogin={() => setIsAuthenticated(true)} />
}
