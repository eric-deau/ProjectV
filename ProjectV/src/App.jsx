import { useState } from 'react'
import Navbar from './components/Navbar'
import Register from "./pages/Register";
import Home from "./pages/Home";
import ListOfAgents from './components/ListOfAgents'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import dotenv from 'dotenv'
import FetchData from './FetchData';

function App() {
  const [agent, setAgent] = useState([])

  const getAgent = async () => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:5000/")
      console.log(res.data)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

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
      <FetchData />
      {/* <ListOfAgents agents={agents} /> */}
      {/* <button onClick={() => getAgent()}>Get Agent</button> */}
    </>
  )
}

export default App
