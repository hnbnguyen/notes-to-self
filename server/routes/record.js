const express = require("express");

const recordRoutes = express.Router();
//connect to database
const dbo = require("../db/conn");
//convert id from string to objectID
const ObjectId = require("mongodb").ObjectId;

// getting an array of all records
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("notes-to-self");
    db_connect
    .collection("items")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// getting single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("items")
        .findOne(myquery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// creating a new record
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        content: req.body.content,
        type: req.body.type,
    };
    db_connect.collection("items").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

// this section update records by id
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id)};
    let newvalues = {
        $set: {
            content: req.body.content,
            type: req.body.type,
        },
    };
    db_connect
        .collection("records")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

// delete a record
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id)};
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = recordRoutes;