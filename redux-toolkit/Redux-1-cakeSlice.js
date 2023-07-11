const createSlice =require('@reduxjs/toolkit').createSlice


const state1 ={
    cakes:56
}

//<!--create slice handles one ,two and thre in redux---1>
//i.e creates action constants,create actions and action  creators,and create ruducers//


//NOTE***>>><!--actions are give names bases on name specified in create slice and action specifird inreducer--->
//E.g below the action names are 'cake/orderd' and 'cake/restoked'
//i.e slice  name folowed by slash and action type specified in reducer e.g 'cake/ordered'


const cakeslice = createSlice({     //the creaate slice function take an object that has name ,initial stae and reducers that define actions
    name:"cake",
    initialState:state1,
    reducers:{
        ordered:(state,action)=>{
            state.cakes = state.cakes - action.payload

        },
        restoked:(state,action)=>{
            state.cakes = state.cakes + action.payload

        }

    }

})

module.exports = cakeslice.reducer  //is used to export reducer
module.exports.cakeActions = cakeslice.actions
                //^This is one Exported i..e the cake actions ,and is used to access cake slice ations outside the file//
