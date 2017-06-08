import React from 'react'
import { render } from 'react-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import store from '../store/store'
 class TodoList extends React.Component{
  constructor(props){
    super()
    console.log("Props from Todolist",props)
  }
    /*handleClick(){
    	this.props.delete()
    }*/
    
    
 	 render(){
       return (
       	<div>
        <ul>
        {this.props.todos.map((todo,i) => { return <li key={i}>{todo.todo}  </li>  })}
        </ul>
       	{/*<button onClick = {this.handleClick.bind(this)}>Delete</button>*/}
        
       	</div> 
 	 )}

 }

const mapStateToProps = (state) => ({todos: state.studentsdata}) // getting info from the store
//const mapDispatchToProps = (dispatch) => bindActionCreators({addEventToCartAsync , addTotalToCheckOutAsync}, dispatch) // sending info to the store
export default connect(mapStateToProps)(TodoList) // we connect both things from above


