import React from 'react'

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes