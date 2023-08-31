import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Register from "./pages/Register";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";

import ListOfAgents from './components/ListOfAgents'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import dotenv from 'dotenv'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
      {/* <ListOfAgents agents={agents} /> */}
      {/* <button onClick={() => getAgent()}>Get Agent</button> */}
    </>
  )
}

export default App
