
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { allrestReducers } from './Reducers/AllrestReducer'
//import allrestReducer




const reducers =combineReducers({
 allrestReducers
})
const middleware =[thunk]

const store  =createStore(reducers,applyMiddleware(...middleware))
// createStore is the our method

export default store
