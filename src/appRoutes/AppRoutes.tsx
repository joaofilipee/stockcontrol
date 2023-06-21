import React from 'react'

// react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from "../pages/Home/Home"

// context
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Products from '../pages/Products/Products'


function AppRoutes() {
  const { user } = useContext(UserContext)

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={user ? <Products /> : <Navigate to="/login"/>}/>
            <Route path='/login' element={user ? <Navigate to="/"/> : <Login />} />
            <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes