const mongoose = require("mongoose")

const Schema = mongoose.Schema

const itemSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('Item', itemSchema)
