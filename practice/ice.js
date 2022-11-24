const createslice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('./cakeslice').cakeActions

const initialState={
    noice:45
}


const ice = createslice({
    name:"ice1",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.noice = state.noice + action.payload

        },
        decrement:(state,action)=>{
            state.noice = state.noice - action.payload

        }
    },

    //the extra reducers has two methods of implmentation
    //extrareducers:{ ['cake/ordered'i.e action type to respond to]:(state,action)=>{state.icecream =state.icreasm - 1' this reducer can only change its state,but it can change in response to an externa importe action i.e cake/ordered'}



    //The second one has a function .We specify builders as an argument
    //We use the builders.addcse method to specify an imported action type
    //then pecify a function like reducer to mutate or change the state of the state this reducer has access to i.e number of ice
    
    extraReducers:(builders)=>{
        builders.addCase(cakeActions.increment,(state)=>{
            state.noice--

        })

    }

})

module.exports = ice.reducer
module.exports.iceActions = ice.actions