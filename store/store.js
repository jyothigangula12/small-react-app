import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import {addTodo} from './actions'
import ReactRedux from 'react-redux'
import thunk from 'redux-thunk'

import {studentsdata} from './reducer'


// Enable React DevTools Chrome plugin
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const middleware = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

// Create Store
const storeReducer = combineReducers({studentsdata})
const store = createStore(storeReducer, enhancer)
//store.dispatch(fetchEventsAsync())
//store.dispatch(loadCart())



store.subscribe(() => {console.log(store.getState())})

export default store       