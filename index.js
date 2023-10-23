import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import axios from "axios"
//action name constant
const inc = 'increment'
const dec = 'decrement'
const init = 'init'
const incByAmt = 'incrementByAmount'

//creating a store
const store = createStore(combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }), 
    applyMiddleware(logger.default, thunk.default)
)

//making history array for checking the state change change history
let history = []


//Creating a reducer
function accountReducer(state={amount: 1}, action){
    switch (action.type) {
        case init:
            return { amount: action.payload }
            break;
        case inc:
            return { amount: state.amount + 1 }
            break;
        case dec:
            return { amount: state.amount - 1 }
            break;
        case incByAmt:
            return { amount: state.amount + action.payload }
            break;
        default:
            return state
            break;
    }
}
function bonusReducer(state = {points: 0}, action){
    switch (action.type) {
        case incByAmt:
            if (action.payload >= 100) {
                return { points : state.points + 1 }
            }
            return state            
            break;
        default: 
            return state
    }
}

//runs when state changes
// store.subscribe(()=>{
    //     history.push(store.getState())
    //     console.log(history);
// })

//API call

//action creater
function getUser(id){
    return async (dispatch)=>{
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(initUser(data.amount))
    }
}
function initUser(value){
    return ({type: init, payload: value})
}
function increment(){
    return {type: inc}
}
function decrement(){
    return {type: dec}
}
function incrementByAmount(payload){
    return { type: incByAmt, payload: payload }
}
    
setInterval(()=>{
    // store.dispatch(getUser(2))
    store.dispatch(incrementByAmount(100))
}, 4000)
    
//Checking the state value (global state)
// console.log(store.getState())

//creating a action {type: "increment"}
//dispatch is used to trigger an action
// store.dispatch({type: "increment"})

// console.log(store.getState())