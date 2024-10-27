const express = require('express')
const userRoute = express.Router()

userRoute.use('*', (req,res)=>res.json({msg : 'User route'}))

module.exports = userRoute