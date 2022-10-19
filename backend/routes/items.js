const express = require('express')
const { 
    createItem, 
    getItems,
    getItem,
    deleteItem,
    updateItem
} = require('../controllers/itemController')

const router = express.Router()

//GET all items
router.get('/', getItems)

//GET a single items
router.get('/:id', getItem)

//POST a new item
router.post('/', createItem)

//DELETE an item
router.delete('/:id', deleteItem)

//UPDATE a new item
router.patch('/:id', updateItem)

// exporting the router with all the routes attached to it
module.exports = router