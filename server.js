
var express = require("express");
var app = express();


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var path = require("path");


require(path.join(__dirname, "app", "routing", "apiRoutes"))(app, path);


require(path.join(__dirname, "app", "routing", "htmlRoutes"))(app, path);


app.set("port", process.env.PORT || 8080);


app.listen(app.get("port"), function(){
    console.log("Listening on port " + app.get("port"));
});