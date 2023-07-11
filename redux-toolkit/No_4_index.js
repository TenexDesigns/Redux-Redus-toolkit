const store = require('./n.store')
const cakeActions = require('./n.cakeSlice').cakeActions

------------*****For Api calls/ Ascync Function*********------!

I HAVE COOMENTED IT OUT TO VIOID CONFUSION

    const fetchusers = require ('./apicalls').fetchusers
    store.dispatch(fetchusers())

we commment out unsubscribe because fetch users is an async function
we decooment it when using other action types



console.log('Initial state',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("Update state",store.getState())
})





store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.ordered(9))
store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.restoked(3))

unsubscribe()
