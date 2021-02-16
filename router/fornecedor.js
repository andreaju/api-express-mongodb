const express = require('express')
const router = express.Router()


const { Fornecedor } = require('../model/fornecedor')

router.get('/api/fornecedores', (req, res) => {
    Fornecedor.find({}, (err, data) => {
        if (!err) {
            //res.send(data)
            res.status(200).json({ code: 200, totalRgistros: data.length, fornecedores: data })
        } else {
            console.log(err)
        }
    })
})

router.post('/api/fornecedor/add', (req, res) => {
    const fornecedor = new Fornecedor({
        cpf: req.body.cpf,
        nome: req.body.nome,
        telefone: req.body.telefone
    })

    fornecedor.save((err, data) => {
        if (!err) {
            res.status(200).json({
                code: 200,
                message: 'fornecedor adicionado com sucesso!',
                fornecedorAdicionado: data
            })
        }
    })
})

//get single fornecedor
router.get('/api/fornecedor/:id', (req, res) => {
    Fornecedor.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})

//update fornecedor
router.put('/api/fornecedor/edit/:id', (req, res) => {
    const fornecedor = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        telefone: req.body.telefone
    }

    Fornecedor.findByIdAndUpdate(req.params.id, { $set: fornecedor }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'fornecedor atualizado com sucesso!', fornecedorAtualizado: data })
        } else {
            console.log(err)
        }
    })
})

//delete fornecedor
router.delete('/api/fornecedor/:id', (req, res) => {
    Fornecedor.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: "fornecedor removido com sucesso", fornecedorRemovido: data })
        } else {
            console.log(err)
        }
    })
})

module.exports = router