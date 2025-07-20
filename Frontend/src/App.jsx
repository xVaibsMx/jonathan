import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Routes/Landing'
import NavBar from './Components/NavBar'
import About from './Routes/About'
import Gallery from './Routes/Gallery'
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </Router>
  )
}

export default App
