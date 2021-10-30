const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = {
        name: 'Nahid',
        age: 25,
        city: 'Dhaka'
    }
    res.send(data)
})

const users = ['nahid', 'zahid', 'mridul','forhad']

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const name = users[id]
    const obj = {id, name}

    console.log(req.query)

    res.send(obj)
})

app.post('/adduser', (req, res) => {
    const user = req.body
    res.send(user)
})


app.listen(3000)