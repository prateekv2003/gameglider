import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from './components/home/Home'
import Login from './components/login/Login'


const App = () => {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={ <Navbar/>}/>
          <Route path="/three" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App