// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("What is your age?");
// var fullname = firstName + " " + lastName;
// alert("Hello, " + firstName);
// console.log("Your full name is " + fullname);
// console.log("Your are " + age + " years old");

function isEven(num) {
	return num % 2 === 0;
}

function factorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

function kebabToSnake(str) {
	var newstr = str.replace(/-/g, '_');
	return newstr;
}