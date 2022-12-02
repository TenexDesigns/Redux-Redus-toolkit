const configureStore= require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./n.cakeSlice') 
const userReducer = require('./n.apicalls')



const store = configureStore({

    //In reduxtollkit thre is no need for combine reduces
    //the method below combines all reduces impported
    
    reducer:{
        cake:cakeReducer,
        user:userReducer

    },
    //This is how to apply a middleware ,but @redux/toolkit has a defaukt middleware use
    
    //middleware:(getDefaultMiddleware)=>{getDefaultMiddleware().concat(logger)}

})

module.exports = store