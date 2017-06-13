import React from 'react'
import { render } from 'react-dom'
import { Button ,ListGroup,ListGroupItem} from 'react-bootstrap'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {compleateTodo , deleteTodo} from '../store/actions'
import store from '../store/store'
 class TodoList extends React.Component{
  constructor(props){
    super()
    console.log("Props from Todolist",props)
  }

  handleCompleate(todo,event){
  	event.preventDefault()
      this.props.compleateTodo(todo, ()=>{console.log('action dispatched!!!!')})
  }

  handleDelete(todo,event){
     event.preventDefault()
      this.props.deleteTodo(todo, ()=>{console.log('action dispatched!!!!')})
  }  
    
 	 render(){
       return (
       	<div>
        <ul>
        {this.props.todos.map((todo,i) => { return <li key={i}>

                                              <ListGroup>
                                                <ListGroupItem>{todo.todo}</ListGroupItem>
                                              </ListGroup>

                                                    <Button bsStyle="primary" onClick = {this.handleCompleate.bind(this,todo.todo)}> Mark as compleated </Button>
                                                    <Button bsStyle="danger" onClick = {this.handleDelete.bind(this,todo.todo)}> Delete todo </Button> </li>  })}
        </ul>
       	{/*<button onClick = {this.handleClick.bind(this)}>Delete</button>*/}
         
       	</div> 
 	 )}

 }

const mapStateToProps = (state) => ({todos: state.studentsdata}) // getting info from the store
const mapDispatchToProps = (dispatch) => bindActionCreators({compleateTodo , deleteTodo}, dispatch) // sending info to the store
export default connect(mapStateToProps , mapDispatchToProps)(TodoList) // we connect both things from above


