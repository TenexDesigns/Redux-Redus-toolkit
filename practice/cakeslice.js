const createslice = require('@reduxjs/toolkit').createSlice

const initialState={
    noCakes:5
}


const cake = createslice({
    name:"cake1",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.noCakes = state.noCakes + action.payload

        },
        decrement:(state,action)=>{
            state.noCakes = state.noCakes - action.payload

        }
    }
})

module.exports = cake.reducer
module.exports.cakeActions = cake.actions