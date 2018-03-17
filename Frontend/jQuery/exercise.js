// Select all divs and give then a purple background
$("div").css("background", "purple");
// Select the divs with class "highlight" and make them 200 px wide
$(".highlight").css("width", "200px");
// Select the div with id "third" and give it an orange border
$("#third").css("border", "2px solid orange");
// Select the first div only and change its font color to pink 
$("div:first-of-type").css("color", "pink"); // built-in css selector faster
// $("div:first").css("color", "pink"); //slower 