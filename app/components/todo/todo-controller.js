import TodoService from "./todo-service.js";


let todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function countTodos(todos) {
	if (todos.length == 0) {
		document.getElementById('todo-title').innerText = "We have nothing to do today. Let's enjoy it."
	} else if (todos.length == 1) {
		document.getElementById('todo-title').innerText = "We only have 1 thing to do today, get 'er done."
	}
	else if (todos.length <= 5) {
		document.getElementById('todo-title').innerText = 'We only have ' + todos.length + ' things to do, easy money.'
	} else if (todos.length > 5) {
		document.getElementById('todo-title').innerText = "We have " + todos.length + " things to do, let's get on it."
	}
}



function draw(todos) {
	countTodos(todos);
	var template = ``
	// template += `
	// // 	<div class="col-4">
	// // 	<div class="card">
	// // 	<div class="card-body cardStyle">
	// // <h3 class="card-title"><strong> Our Missions Today. We Got This! </strong></h3>
	// // 	</div>
	// // 	</div>
	// // 	</div>
	// `
	console.log(todos)

	todos.forEach(todo => {
		template += `
		<div class="card cardStyle d-flex">
			<div>
				<input class="todo-checkbox"type="checkbox" ${todo.completed ? "checked" : ''} id="${todo._id}"onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
				<label class="${todo.completed ? "selected" : ''}" >${todo.description}</label>
			</div>
			<button class="btn btn-sm"><i class="fas fa-thumbs-up hover" onclick="app.controllers.todoController.removeTodo('${todo._id}')"></i></button>
		</div>
`		// <button class="buttonStyle w-50 justify-self-center " onclick="app.controllers.todoController.removeTodo('${todo._id}')"> Atta Boy </button>
		// </div>
	});
	template += `<form onsubmit="app.controllers.todoController.addTodoFromForm(event)" class="formStyle"> 
<input type="text" name="todo">
</form>`

	document.getElementById('todo').innerHTML = template
}


export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		console.log(form)
		var todo = {
			description: form.todo.value
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		let todoUpdate = {
			// @ts-ignore
			completed: document.getElementById(todoId).checked,
			_id: todoId
		}
		todoService.toggleTodoStatus(todoUpdate, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
