import { createStore ,applyMiddleware } from "redux";
import {  createWrapper ,HYDRATE} from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import combinedReducer from './reducers/index'
  
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, 
        ...action.payload, 
      }
     
      return nextState
    } else {
      return combinedReducer(state, action)
    }
  }
  const initStore = ({isServer}) => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
  }
  
  export const wrapper = createWrapper(initStore)