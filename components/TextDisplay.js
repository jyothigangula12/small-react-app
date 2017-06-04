import React from 'react'
import { render } from 'react-dom'

 class TextDisplay extends React.Component{
    handleClick(){
    	this.props.delete()
    }
 	 render(){
       return (
       	<div>
       	<div>I am going to display : {this.props.text}
       	<button onClick = {this.handleClick.bind(this)}>Delete</button>
       	</div>
       	</div> 
 	 )}

 }
export default TextDisplay
