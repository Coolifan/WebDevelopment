var obj = {
	name: "Chunk",
	age: 45,
	isCool: true,
	friends: ["bob", "tina"],
	add: function (x,y) {
		return x+y;
	}
}

var dogSpace = {};
dogSpace.speak = function() {
	return "WOOF";
}

var catSpace = {};
catSpace.speak = function() {
	return "MEOW";
}

// dogSpace.speak();
// catSpace.speak();

var comments = {};
comments.data = ["Good job", "bye", "lame..."];
function print(arr) {
	arr.forEach(function(el) {
		console.log(el);
	});
}

comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	});
}