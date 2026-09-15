import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Dashboard from './components/Dashboard'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return <Dashboard />
}
