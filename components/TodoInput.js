import React from 'react'
import { render } from 'react-dom'
import TodoList from './TodoList'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import store from '../store/store'
import {addTodo} from '../store/actions'
 
 class TodoInput extends React.Component{
     constructor(props) {
		super()
		this.state = {todo : ""}
	  	console.log("From TodoInput",this.state) 
	}
	delete(event){
		debugger
		//delete letter and set state
		this.setState({
			todo : this.state.todo.substring(0,this.state.todo.length-1)
		})
	}
    handleChange(event){
    	this.setState({
    		todo : event.target.value
    	})
   }
    handleSubmit(event){
    	
    	this.props.addTodo(this.state.todo, ()=>{console.log('action dispatched!!!!')})
    }
 	 render(){
       return (
       	<div>
       	   
	       	<input type ="text"
	       	       name = "text1"
	       	       placeholder = "Enter Todo"
	       	       value = {this.state.input}
	       	       onChange = {this.handleChange.bind(this)}/>
	 	    <button onClick = {this.handleSubmit.bind(this)}>Submit</button>       
	 	    {/*<TodoList delete = {this.delete.bind(this)}/>*/}
        </div>
 	 )}

 }
//export default TodoInput

//const mapStateToProps = (state) => ({events: state.EventData ,cartObj: state.CartData}) // getting info from the store
const mapDispatchToProps = (dispatch) => bindActionCreators({addTodo}, dispatch) // sending info to the store
export default connect(null, mapDispatchToProps)(TodoInput) // we connect both things from above

