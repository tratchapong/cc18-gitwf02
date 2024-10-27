const express = require('express')
const authRoute = express.Router()

authRoute.use('*', (req,res)=>res.json({msg : 'Auth route'}))

module.exports = authRoute