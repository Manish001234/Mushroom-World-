import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../AboutUs'
import Contact from '../Contact'
import Home from '../Home'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Contactus' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Allroutes