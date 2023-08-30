// const express = require('express');
const app = require('./app')

const port = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main() {
    await app.listen(port);
    console.log(`Server listening on port ${port}`);
}