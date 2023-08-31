import ListOfAgents from "../components/ListOfAgents";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [agents, setAgents] = useState([])

    useEffect(() => {
    const getAgents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/")
        console.log(res.data)
        setAgents(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAgents()
  }, [])
    return (
        <div>
            <h1>Home</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate quibusdam voluptatum, quae voluptatibus, eum
                exercitationem, quas doloremque voluptatem doloribus quia
                consectetur. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                Quisquam, quod.
            </p>
            <ListOfAgents agents={agents} />
        </div>
    );
};

export default Home;