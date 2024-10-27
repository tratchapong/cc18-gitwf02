require('dotenv').config()
const express = require('express')
const app = express()


app.use('*', (req,res) => res.json('server run'))

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log('Server on',port))