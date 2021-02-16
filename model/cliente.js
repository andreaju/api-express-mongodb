const mongoose = require('mongoose')

//cliente Schema
const Cliente = mongoose.model('Cliente', {
    cpf: {
        type: String,
        required:true
    },
    nome: {
        type: String,
        required:true
    },    
    telefone: {
        type: String,
        required:true
    },
})

module.exports = { Cliente }