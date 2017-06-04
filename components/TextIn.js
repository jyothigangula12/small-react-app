import React from 'react'
import { render } from 'react-dom'
import TextDisplay from './TextDisplay'
 
 class TextIn extends React.Component{
     constructor(props) {
		super()
		this.state = {input : ""}
	  	console.log("From Admin",this.state) 
	}
	delete(event){
		debugger
		//delete letter and set state
		this.setState({
			input : this.state.input.substring(0,this.state.input.length-1)
		})
	}
    handleChange(event){
    	this.setState({
    		input : event.target.value
    	})
    }

 	 render(){
       return (
       	<div>
	       	<input type ="text"
	       	       name = "text1"
	       	       placeholder = "Enter Text"
	       	       value = {this.state.input}
	 	           onChange={this.handleChange.bind(this)}/>
	 	    <TextDisplay text={this.state.input} delete = {this.delete.bind(this)}/>
        </div>
 	 )}

 }
export default TextIn
