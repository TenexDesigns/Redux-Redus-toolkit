const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkmiddleware = require('redux-thunk').default
const axios = require('axios')



const initialstate = {
    loading:false,
    users:[],
    error:''
}

//<!----------In redux toolkit ---one two and thre are hundled by createslice------!>
// The api call function in this redux is able to do so due to thunk miidelware in redux thunk---!>
//IN redux-toolkit the api call function  is able to do the same with creatAsync hunk in redux toolkit---!>





       //************ONE************//
// These are the constatnt of the action typres//
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


//*************TWO******* */

//Thses functions are the action creators

const fetchUsersRequested =()=>{

    //These objects with type are the actios i.e {type:Fetch,payload:uses}
    return {
        type:FETCH_USERS_REQUESTED 

    }
}

const fetchUsersSucces = (users)=>{
    //These objects with type are the actios i.e {type:Fetch,payload:uses}
    //the payload is passed as an argument throush the paranthesis of hthe function
    //this payload is passed to this action creatro when the action creator is called through a dispathc method
    //e.g dispact(fetchusersucc(payload))
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload:users
    }
}

const fetchUsersFailure = (error)=>{
    return{
        type:FETCH_USERS_FAILED,
        payload:error
    }
}

//**************THREE************* */

//thse are the reucers,they change the state in initial state

const reducer = (state=initialstate,action)=>{

    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return{
                loading:true
            }

        case FETCH_USERS_SUCCEEDED:
            return{
                loading:false,
                users:action.payload,
                error:''

            }  
        case FETCH_USERS_FAILED:
            return{
                loading:false,
                users:[],
                error:action.payload
            }  
      
    }

}


//*************************FOUR******************* */

//the fetch users is able to make api calls due to the thunk midddleware
//the fetch actions are called here and there are payloads passed here
//as argumnets between paranthesss when actiocreators are called throuch dispatch
//Thse arguments enable reducer to accces them throuch action.payload
//The action creators receive these arguments ad enable then to be accessible to reducers 
//By specifying them as payload

const fetchusers= ()=>{
    return function(dispatch){

        dispatch(fetchUsersRequested())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data.map((users )=>users.id)
            dispatch(fetchUsersSucces(users))
        })
        .catch((error)=>{
            dispatch(fetchUsersFailure(error))
        })

    }

}

const store = createStore(reducer,applyMiddleware(thunkmiddleware))// the thunk middleware enables api(axios )calls
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchusers())