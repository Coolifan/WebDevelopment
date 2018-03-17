var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://pixabay.com/get/e036b80a20fc1c22d2524518b7444795ea76e5d004b0144394f0c679a6edb1_340.jpg",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa", 
        image: "https://pixabay.com/get/e833b3092cf5033ed1584d05fb1d4e97e07ee3d21cac104497f1c07ca7e5b5bf_340.jpg",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor", 
        image: "https://pixabay.com/get/eb30b00d21f7033ed1584d05fb1d4e97e07ee3d21cac104497f1c07ca7e5b5bf_340.jpg",
        description: "blah blah blah"
    }
]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        //Remove comments
        Comment.remove({}, function(err) {
            if (err) {
                console.log(err);
            }
            console.log("removed comments!");
            //Add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                        // Create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);  
                                    campground.save(); 
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    });  
    
}

module.exports = seedDB;