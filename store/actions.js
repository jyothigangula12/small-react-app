
	const addTodo = (data) => {return{type: "ADD_TODO", data}}
   
   /* const addManyTodos = (todos) => {
	return (dispatch) => {
		for (let todo of todos) {
			dispatch(addTodo(todo))
		}
	}
}
*/
    export {addTodo }