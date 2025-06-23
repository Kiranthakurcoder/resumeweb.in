
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './Auth/Contact'
import Loginpage from '../src/Auth/Loginpage'
import RegisterPage from './Auth/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={< Loginpage/>} />

    </Routes>
  )
}

export default App

