import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Routes/Landing'
import NavBar from './Components/NavBar'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      {/* Vercel Analytics tracking */}
      <Analytics />
    </Router>
  )
}

export default App
