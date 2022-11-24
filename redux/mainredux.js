const redux = require('redux')

const createstore = redux.createStore



//THIS IS AN ACTION ,an action is that with the type property{type:CAKE...} 

const CAKE_ORDERED = 'CAKE_ORDERED';
function ordercake(qty=1){
    {
        type:CAKE_ORDERED;
        quantity:qty
       
        //is most imprtant
        
    
    }
//create an ACTION CREATOR(which is a function that implements an action e.g fuction ordercake)

}

//REDUCERS  ----> Can be summed up as (prevstate,action)=>{newstate'this new state depend on action performed'}


// First set  a state
const initialstate ={
    nocakes:10
}

// Makke a reducer to handel the state

const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case CAKE_ORDERED: return{
            ...state,
            nocake:state.nocakes + action.quantity
        }
    }



}
 //THIS CREATES THE STORE
const store = createstore(reducer)// reducer passed into create store ...This holds 
//application state


//has access to the state via getState
console.log('initial state',store.getState())

// SUBSCRIBE TO STORE BY USING STORE. SUBSCRIBE
// subsribe allows for listenerss/action chnages on state

 // subscribe accespts a function
const unsubscribe = store.subscribe(()=> console.log("Updated state",store.getState()))


//dispatch allows update to state
//dispact accepts action as its parameter ,but also action creator
// If you have an action creator ,invoke thact function/action creator ,it will inturn 
//call the action instead of assing the action directly
store.dispatch(ordercake())
store.dispatch(ordercake())
store.dispatch(ordercake())// the dispatch take in an action

unsubscribe()
//UNSUBSCRIBE BY CALLING THE ABOVE FUNCTION (store it in a cinstant 
//,unsubscribe,then call it ...unsubscribe())