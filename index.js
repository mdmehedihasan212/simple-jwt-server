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
    const user = req.body;
    console.log(user);
    if (user.email === 'mdmehedihasan384@gmail.com' && user.password === '123456') {
        const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        res.send({
            success: true,
            token: token
        })
    }
    else {
        res.send({ success: false })
    }
})

app.listen(port, () => {
    console.log('Simple JWT Server Running!', port);
})