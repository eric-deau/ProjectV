const express = require('express');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');

const port = process.env.PORT || 5000;
app.use(express.json());

require('dotenv').config();

app.get('/', (req, res) => {
    const getAct = () => {
        axios.get(`https://na.api.riotgames.com/val/content/v1/contents?${process.env.RIOT_API}`).then((response) => {
        console.log(response.data)
        }).catch((error) => {
        console.log(error)
        })
    }
    res.send(`${process.env.RIOT_API}`);
}
);

module.exports = app;