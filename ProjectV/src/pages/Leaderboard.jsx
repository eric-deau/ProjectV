import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import EpisodeDropdown from '../components/EpisodeDropdown';

const Leaderboard = () => {
    const [episode, setEpisode] = React.useState([])
    
    useEffect(() => {
        const getEpisode = async () => {
            try {
                const res = await axios.post("http://localhost:5000/leaderboard")
                console.log(res.data)
             setEpisode(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getEpisode()
    }, [])
    return (
        <div>
            <h1>Leaderboard</h1>
            <EpisodeDropdown episodes={episode} />
        </div>
    );
}

export default Leaderboard;