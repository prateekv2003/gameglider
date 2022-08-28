import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from './components/home/Home'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App