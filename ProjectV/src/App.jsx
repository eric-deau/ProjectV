import { useState } from 'react'
import Navbar from './components/Navbar'
import Register from "./pages/Register";
import Home from "./pages/Home";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import dotenv from 'dotenv'

function App() {
  // const getAct = () => {
  //   axios.get(`https://na.api.riotgames.com/val/content/v1/contents?${process.env.RIOT_API}`).then((response) => {
  //     console.log(response.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }
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
      <button onClick={() => getAct()}>Get Act</button>
    </>
  )
}

export default App
