import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Register from './components/login/Register'
import PlayerDashboard from './components/player-dashboard/PlayerDashboard'
// import SideNav from './components/player-dashboard/SideNav'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import ER404 from './components/404/404'


const App = () => {
  // console.log(window.location.href.);
  const auth = true;

  return (
    <>
      {
        auth ?
          <BrowserRouter>
            {/* <SideNav /> */}
            <Header/>
            <div className="page-content custom-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/Register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<ER404 />} />
              </Routes>
              
            </div>
            <Footer/>
          </BrowserRouter>
          :
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<ER404 />} />
            </Routes>
          </BrowserRouter>


      }
    </>
  )
}

export default App