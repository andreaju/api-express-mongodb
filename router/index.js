const express = require('express')
const router = express.Router()

const cliente  = require('./cliente')
const fornecedor  = require('./fornecedor') 

router.use(cliente)
router.use(fornecedor)


module.exports = router

