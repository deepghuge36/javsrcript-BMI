//jshint esversion :6
const express = require("express");
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmiCalculator", function (req, res) {
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);
   var result = (weight / (height / 100 * height / 100));

   res.send("the bmi is " + result);
});

app.listen(3000, function () {
   console.log("the server is runnimg for bmi");
});


