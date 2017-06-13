
	const addTodo = (data) => {return{type: "ADD_TODO", data}}
    const compleateTodo = (data) => {return{type: "COMPLETE_TODO", data}}
    const deleteTodo = (data) => {return{type: "DELETE_TODO", data}}
   /* const addManyTodos = (todos) => {
	return (dispatch) => {
		for (let todo of todos) {
			dispatch(addTodo(todo))
		}
	}
}
*/
    export {addTodo ,compleateTodo ,deleteTodo}