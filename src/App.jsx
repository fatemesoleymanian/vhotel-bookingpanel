import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Booking from './Pages/Booking'
import './App.css'
import './index.css'

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Booking />} />
    </Routes>
  </Router>
  )
}

export default App
