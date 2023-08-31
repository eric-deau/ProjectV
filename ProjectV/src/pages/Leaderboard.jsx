import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import EpisodeDropdown from '../components/EpisodeDropdown';

const Leaderboard = () => {
    const [episode, setEpisode] = React.useState([])
    const [selectedItem, setSelectedItem] = React.useState('')
    const [open, setOpen] = React.useState(false);

    const handleSelectEpisode = (e) => {
        setSelectedItem(e.target.value)
    }

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuClose = () => {
        setOpen(false);
    };
    
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
            <EpisodeDropdown open={open} trigger={<button onClick={handleOpen}>Dropdown</button>} episodes={episode} handleSelectEpisode={handleSelectEpisode} selectedItem={selectedItem} />
            {/* <EpisodeDropdown episodes={episode} handleSelect={handleSelect} /> */}
            {/* <EpisodeDropdown episodes={episode} handleSelectEpisode={handleSelectEpisode} selectedItem={selectedItem} /> */}
        </div>
    );
}

export default Leaderboard;