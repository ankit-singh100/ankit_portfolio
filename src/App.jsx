import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Experience from './pages/Experience'
import Work from './pages/Work'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import  AOS  from 'aos'
import "aos/dist/aos.css"
import HeroSection from './components/HeroSection'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    AOS.refresh();
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen" : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} setActiveSection={setActiveSection}/>
      <HeroSection darkMode={darkMode} setActiveSection={setActiveSection}/>
      <About darkMode={darkMode}/>
    </div>
  )
}

export default App
