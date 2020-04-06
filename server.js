var express = require("express");

var path = reequire("path");

var fs = require("fs");

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app,use(express.static("assets"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "notes.html"));
})

app.listen(PORT, function(){
    console.log("App is running on PORT: " + PORT);
})