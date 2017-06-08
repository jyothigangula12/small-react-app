import React from 'react'
import { render } from 'react-dom'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

 class App extends React.Component{

 	 render(){
       return (
       	<div>
       	<div>Todo List</div>
 	    <TodoInput/>
 	    <TodoList/>
 	    </div>
 	 )}

 }
export default App
