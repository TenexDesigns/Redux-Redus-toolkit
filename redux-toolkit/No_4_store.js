const configureStore= require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./cakeSlice') 
const userReducer = require('./apicalls')



const store = configureStore({
    reducer:{
        cake:cakeReducer,
        user:userReducer

    }

})

module.exports = store
