// const express = require('express');
const app = require('./app')
const dotenv = require('dotenv');

const port = process.env.PORT || 5000;
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
    await app.listen(port);
    console.log(`Server listening on port ${port}`);
}