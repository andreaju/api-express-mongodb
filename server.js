const express = require('express')
const app = express()

//camada midleware
app.use(express.json())
const dotenv = require('dotenv').config({ path: './config/config.env' })
const database = require('./config/db')

app.use('/', require('./router'))
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS")
    next()
})

//iniciando servidor na porta indicada
app.listen(process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})