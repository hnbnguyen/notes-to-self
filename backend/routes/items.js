const express = require('express')
const Item = require('../models/ItemModel')

const router = express.Router()

//GET all items
router.get('/', (req, res) => {
    res.json({mssg: 'GET all items'})
})

//GET a single items
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single item'})
})

//POST a new item
router.post('/', async (req, res) => {
    const {content, type} = req.body
    try {
        const item = await Item.create({content, type})
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE an item
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an item'})
})

//UPDATE a new item
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an item'})
})

// exporting the router with all the routes attached to it
module.exports = router