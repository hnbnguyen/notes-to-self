const express = require('express')
const { 
    createItem, 
    getItems,
    getItem
} = require('../controllers/itemController')

const router = express.Router()

//GET all items
router.get('/', getItems)

//GET a single items
router.get('/:id', getItem)

//POST a new item
router.post('/', createItem)

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