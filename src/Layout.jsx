import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Navbar"
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout