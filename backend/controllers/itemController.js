const Item = require('../models/ItemModel')

// get all item
const getItems = async (req, res) => {
    const items = await Item.find({}).sort({createdAt: -1})

    res.status(200).json(items)
}

// get a single item
const getItem = async (req, res) => {
    const { id } = req.params

    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({error: 'No such item'})
    } 

    res.status(200).json(item)
}

// create a new item
const createItem = async (req, res) => {
    const {content, type} = req.body
    //add doc to db
    try {
        const item = await Item.create({content, type})
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout 

// update a workout

module.exports = {
    getItems,
    getItem,
    createItem
}