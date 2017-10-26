var express =  require("express");

var fs = require("fs");

var app = express();

app.get("/emp",function (req,res) {
    fs.readFile(__dirname+"/emp.json",function (err,data) {
        res.send(data.toString());
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");