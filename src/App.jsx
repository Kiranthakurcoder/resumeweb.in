
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loginpage from './components/pages/loginpage'
import RegisterPage from './components/pages/RegisterPage'

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

