// Come up with 4 different ways to select the first <p> tag
// document.getElementById("first");
// document.querySelector("#first");
// document.getElementsByClassName("special")[0];
// document.querySelector(".special");
// document.querySelectorAll(".special")[0];
// document.getElementsByTagName("p")[0];
// document.querySelector("p");
// document.querySelectorAll("p")[0];

var button = document.querySelector("button");
var para = document.getElementById("result");
button.addEventListener("click", function() {
	para.style.color = "pink";
	para.textContent = "someone clicked";
});