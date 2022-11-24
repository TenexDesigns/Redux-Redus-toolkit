const config = require('@reduxjs/toolkit').configureStore
const reduslogger = require('redux-logger')
const reducers = require('./cakeslice')
const reducer1 = require('./ice')


const logger = reduslogger.createLogger() 




const store = config({
    reducer:{
        cake1:reducers,
        ice:reducer1
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


module.exports = store