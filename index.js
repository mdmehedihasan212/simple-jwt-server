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

const verifyJWT = (req, res, next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
        return res.status(401).send({ message: 'unauthorized' })
    }
    const decoded = authHeaders.split(' ')[1]
    console.log(decoded);

}

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

app.get('/orders', verifyJWT, (req, res) => {

    res.send([{ id: 1, order: 'sunglass' }, { id: 2, order: 'watch' }])
})

app.listen(port, () => {
    console.log('Simple JWT Server Running!', port);
})