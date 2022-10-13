require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const itemRoutes = require("./routes/items")

// express app 
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/items', itemRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})
