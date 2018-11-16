// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/MALIKWHITFIELD/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				console.log(res)
				draw(res.data.data)

			})
			.catch(logError)
	}

	addTodo(todo, getTodosCallback) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodosCallback()
			})
			.catch(logError)
	}

	toggleTodoStatus(todo, getTodosCallback) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todo._id, todo)
			.then(function (res) {
				getTodosCallback()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(id, getTodosCallback) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(id)
			.then(res => {
				getTodosCallback()
			})
	}

}
