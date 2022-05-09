const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Simple JWT Explore!')
})

app.post('/login', (req, res) => {
    res.send({ success: true })
})

app.listen(port, () => {
    console.log('Simple JWT Server Running!', port);
})