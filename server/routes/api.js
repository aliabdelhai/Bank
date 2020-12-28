const express = require('express');
const { createCollection } = require('../models/Transaction');
const router = express.Router()
const Transaction = require('../models/Transaction');


router.get('/transactions' , async (req, res) => {
    try {
        const transactions = 
        await Transaction.find({})
        res.send(transactions)
    } catch (error) {
        res.send(error)
    }
})

router.post('/transaction', async (req, res) => {
    try {
        const transaction = new Transaction(req.body)
        await transaction.save()
        res.send(transaction)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/transaction/:id', async (req, res) => {
    console.log(req.params)
    const transactionID = req.params.id
    console.log(transactionID )
    const transaction = await Transaction.findOneAndDelete({_id: transactionID})
    console.log(transaction)
    res.send(transaction)
})


module.exports = router
