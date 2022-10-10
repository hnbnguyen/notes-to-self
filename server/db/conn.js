const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        console.log(client)
        client.connect(function (err, db) {
            console.log(db)
            if (db)
            {
                _db = db.db("notes-to-self");
                console.log("Successfully connected to MongoDB");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};
