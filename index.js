const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())




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


app.listen(3000)