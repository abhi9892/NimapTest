var express = require("express");
var app = express();
var cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const port = 3000;

mongoose.connect("mongodb://localhost:27017/NimapDataBase", { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log('DB connected');
    }).catch(err => {
        console.log(err);
    });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", function (req, res, next) {
    res.send("welcome to node api");
})

app.use("/category", require("./Controller/CategoryController"));
app.use("/product", require("./Controller/ProductContoller"));

app.listen(port, () => {
    console.log("server run on this port", `${port}`);
});