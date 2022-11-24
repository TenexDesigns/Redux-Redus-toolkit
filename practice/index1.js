const cakeActions = require('./cakeslice').cakeActions
const iceActions = require('./ice').iceActions
const store = require('./store')

console.log("Initial state",store.getState())


const unsub =store.subscribe(()=>{
    console.log("Update state",store.getState())
})

store.dispatch(cakeActions.increment(1))
store.dispatch(cakeActions.increment(1))
store.dispatch(iceActions.decrement(1))
store.dispatch(iceActions.decrement(1))


unsub()


















