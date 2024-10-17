import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'
import '../src/styles.css'

export default function HomeLayout() {
  
  return (
    <div className="HomeLayout">
      
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    
  )
}