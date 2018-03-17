var button = document.querySelector("button");
// var body = document.querySelector("body");
var white = true;

// button.addEventListener("click", function() {	
// 	if (white) {
// 		document.body.style.background = "pink";
// 	} else {
// 		document.body.style.background = "white";
// 	}
// 	white = !white;
// })

button.addEventListener("click", function() {
	document.body.classList.toggle("pink");
})