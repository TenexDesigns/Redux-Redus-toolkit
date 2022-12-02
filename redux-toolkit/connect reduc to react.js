//This file is usually index.js where the app component is
//We use the Provider to connect react to redux
// we wrap the app componet with the provider
//we pass our store as a prop to the provider, so as to make the store availble to  the componetnts in react


import  React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {Provider} from 'react-redux'
import store from './.store'


ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))