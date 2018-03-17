// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() { //this -> span
		$(this).remove(); // now, this -> li, not span. Remove li
	});
	event.stopPropagation(); // stop event bubbling
})


$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		// create a new li and add to ul, append string of html 
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})

$("#toggle-form").click(function() {
	$("input[type='text']").fadeToggle();
})