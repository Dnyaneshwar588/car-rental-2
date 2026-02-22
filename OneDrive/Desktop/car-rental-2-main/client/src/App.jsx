import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'
import CustomerLogin from './pages/CustomerLogin'
import OwnerLogin from './pages/owner/OwnerLogin'
import CombinedLogin from './pages/CombinedLogin'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const {showLogin, user} = useAppContext()
  const pathname = useLocation().pathname
  const isOwnerPath = pathname.startsWith('/owner') && pathname !== '/owner/login'
  const requireAuth = (element) => (user ? element : <Navigate to='/login' replace />)

  return (
    <>
     <Toaster />
      {showLogin && <Login/>}

      {!isOwnerPath && pathname !== '/login' && <Navbar/>}

    <Routes>
      <Route path='/' element={requireAuth(<Home/>)} />
      <Route path='/login' element={<CombinedLogin/>}/>
      <Route path='/customer/login' element={<CustomerLogin/>}/>
      <Route path='/owner/login' element={<OwnerLogin/>}/>
      <Route path='/car-details/:id' element={requireAuth(<CarDetails/>)} />
      <Route path='/cars' element={requireAuth(<Cars/>)} />
      <Route path='/my-bookings' element={requireAuth(<MyBookings/>)} />
      <Route path='/owner' element={requireAuth(<Layout />)}>
        <Route index element={<Dashboard />}/>
        <Route path="add-car" element={<AddCar />}/>
        <Route path="manage-cars" element={<ManageCars />}/>
        <Route path="manage-bookings" element={<ManageBookings />}/>
      </Route>
    </Routes>

    {!isOwnerPath && pathname !== '/login' && <Footer />}
    
    </>
  )
}

export default App
