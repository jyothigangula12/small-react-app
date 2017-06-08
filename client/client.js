import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import {addTodo} from '../store/actions'

//import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import store from '../store/store'
store.subscribe(() => {console.log("from getstate",store.getState())})
//store.dispatch(addTodo())

 render(
 <Provider store = {store}>
   <App/>
  </Provider>,
   document.getElementById('app'))
