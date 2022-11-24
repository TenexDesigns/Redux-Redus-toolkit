const redux = require('redux')
const immer = require('immer')
const produce = immer.produce
const reduxlogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const thunkmiddlewar = require('redux-thunk').default

const logger = reduxlogger.createLogger() //THIS IS A MIDDLE WARE,WE APPLY IT
//BU USING APPLY MIDDKLEWARE

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers





const initialcakeState = {
    numofCakes:3
}

const initialiceState = {
    numofIce:78
}

const CAKE_ORDER = 'CAKE_ORDER'
function ordercake(qty=1){
    {
        type:CAKE_ORDER;
        quantity:qty
    }

}

const ICE_ORDER = 'ICE_ORDER'
function ordercake(qty=1){
    {
        type:ICE_ORDER;
        quantity:qty
    }

}

const cakereducer = (state= initialcakeState,action)=>{
    switch (action.type) {
        case CAKE_ORDER:
            produce(state,(draft)=>{
                draft.addess.street = action.payload

            })
            
             
        default:
            state
    }
}


const icereducer = (state= initialiceState,action)=>{
    switch (action.type) {
        case ICE_ORDER:
            return{
            ...state,numofIce : state.numofIce + action.quantity

            }
            
             
        default:
            state
    }
}

const allreducers = combineReducers({
    cake:cakereducer,
    ice:icereducer
})

const store = createStore(allreducers,applyMiddleware(logger))
const unsub = store.subscribe(()=>{console.log("initial stae ",state.getState())})

//store.dispatch(ordercake())
//store.dispatch(ordercake())
//store.dispatch(ordercake())
//store.dispatch(ordercake())
const actions = bindActionCreators({ordercake},store.dispatch)

unsub()

