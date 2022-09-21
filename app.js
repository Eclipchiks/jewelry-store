const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static(__dirname));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
  console.log("Server is started on port 3000");
});
