import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Booking from './Pages/Booking'
import './App.css'
import './index.css'
import Account from './Pages/Account'
import Reserves from "./Pages/Reserves";
import MainLayout from './Layout/MainLayout'
import Policy from "./Pages/Policy";
import HotelRooms from './Pages/HotelRooms'

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Booking />} />
        <Route path='account' element={<Account />} />
        <Route path='reserves' element={<Reserves />} />
        <Route path='policy' element={<Policy />} />
        <Route path='book/hotel/:_id' element={<HotelRooms />} />
      </Route>

    </Routes>
  </Router>
  )
}

export default App
