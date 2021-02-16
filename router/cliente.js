const express = require('express')
const router = express.Router()

const {Cliente} = require('../model/cliente')

//obtendo coleção de clientes
router.get('/api/Clientes', (req, res)=>{
    Cliente.find({},(err, data)=>{
        if (!err) {
            res.send(data)
        } else {
            console.log(err)
        }

    })
})

// obtendo um cliente
router.get('/api/cliente/:id', (req, res)=>{
    Cliente.findById(req.params.id, (err, data)=>{
        if (!err) {
            res.status(200).json({code:200, message:'consulta realizada com sucesso', data:data})
        } else {
            res.send(err)
        }
    })
})

//inserindo um cliente
router.post('/api/cliente/add', (req, res)=>{
    const cliente = new Cliente({
        cpf: req.body.cpf,
        nome: req.body.nome,
        telefone: req.body.telefone
    })

    cliente.save((err,data)=>{
        if (!err) {
            res.status(200).json({ code:200, message:'cliente salvo com sucesso', data:data})
        } else {
            res.send(err)
        }
    })

})

//excluindo um cliente
router.delete('/api/cliente/:id', (req, res)=>{
    Cliente.findByIdAndDelete(req.params.id, (err, data)=>{
       if (!err) {
           res.status(200).json({ code:200, message:'cliente excluido com sucesso!', clienteRemovido: data})
       }  else {
           console.log(err)
       }
    })
})

//alterando um cliente
router.put('/api/cliente/edit/:id', (req, res)=>{
    const cliente = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        telefone: req.body.telefone
    }

    Cliente.findByIdAndUpdate(req.params.id, {$set:cliente}, { new:true}, (err, data)=>{
        if (!err) {
            res.status(200).json({ code:200, message:'cliente atualizado com sucesso!', clienteAtualizado: data})
        } else {
            console.log(err)
        }
    })
})

module.exports = router