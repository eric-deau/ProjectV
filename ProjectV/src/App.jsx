import { useState } from 'react'
import Navbar from './components/Navbar'
import Register from "./pages/Register";
import Home from "./pages/Home";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
