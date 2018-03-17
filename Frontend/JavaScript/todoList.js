window.setTimeout(function() {

	var todos = [];
	var input = prompt("What would you like to do?");


	while (input !== "quit") {
		if (input === "list") {
			listTodos();
		} else if (input === "new") {
			addTodo();
		} else if (input === "delete") {
			deleteTodo();
		}
		input = prompt("What would you like to do?");
	}
	console.log("Quitting...")


	function listTodos() {
		console.log("********");
		todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		});
		console.log("********");
	}

	function addTodo() {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added Todo");
	}

	function deleteTodo() {
		var i = prompt("Enter index of todo to delete");
		todos.splice(i, 1);
		console.log("Deleted Todo");
	}
}, 500);

	