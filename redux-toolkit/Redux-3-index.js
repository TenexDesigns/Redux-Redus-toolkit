const store = require('./store')

const cakeActions = require('./cakeSlice').cakeActions
const fetchusers = require ('./apicalls').fetchusers

console.log('Initial state',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("Update state",store.getState())
})

store.dispatch(fetchusers())
//store.dispatch(cakeActions.ordered(3))
//store.dispatch(cakeActions.ordered(9))
//store.dispatch(cakeActions.ordered(3))
//store.dispatch(cakeActions.restoked(3))

//unsubscribe()
