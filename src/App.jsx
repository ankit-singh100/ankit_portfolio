import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/experience' element={<Experience />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
  )
}

export default App
