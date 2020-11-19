const express = require("express"),
    app = express(),
    port = process.env.PORT || 27017,
    routes = require("./routes.js"),
    mongoose = require("mongoose"),
    User = require('./models/UserModel.js')

    mongoose.connect("mongodb://localhost/users_db", function(err) {
        if (err) throw err;
            console.log("Successfully connected");
    });

routes(app);
app.listen(port);