const mongoose = require('mongoose')

//Fornecedor Schema
const Fornecedor = mongoose.model('Fornecedor', {
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



module.exports = { Fornecedor }