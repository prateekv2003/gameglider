import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/login/Register'
import PlayerDashboard from './components/player-dashboard/PlayerDashboard'
import SideNav from './components/player-dashboard/SideNav'


const App = () => {
  // console.log(window.location.href.);
  const auth = true;

  return (
    <>
    {
     auth ?
      <BrowserRouter>
      <SideNav/>
        <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
        </div>
      </BrowserRouter>
:
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>

       
    }
    </>
  )
}

export default App