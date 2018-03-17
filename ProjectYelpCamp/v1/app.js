var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144395f9c67aa3efb2_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144395f9c67aa3efb2_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f0c87ea4e9b7bf_340.jpg"}
]

app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});