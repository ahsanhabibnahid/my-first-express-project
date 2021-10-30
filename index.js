const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('i know node js')
})


app.listen(3000)