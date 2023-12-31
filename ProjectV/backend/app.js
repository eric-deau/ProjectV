const express = require('express');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5174'
}));

const port = process.env.PORT || 5000;
app.use(express.json());

require('dotenv').config();

app.get('/', async (req, res) => {
    console.log('Hello World!');
    try {
        const response = await axios.get(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${process.env.RIOT_API}`)
        console.log(response.data.characters)
        return res.status(200).json(response.data.characters)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
});

app.get('/leaderboard', async (req, res) => {
    console.log('Hello World!');
    try {
        const response = await axios.get(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${process.env.RIOT_API}`)
        console.log(response.data.acts)
        return res.status(200).json(response.data.acts)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
});

app.post('/leaderboard', async (req, res) => {
    console.log('Hello World!');
    try {
        const response = await axios.get(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${process.env.RIOT_API}`)
        console.log(response.data.acts)
        return res.status(200).json(response.data.acts)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
});



module.exports = app;