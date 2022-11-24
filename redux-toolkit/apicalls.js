const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')
const createSlice = require('@reduxjs/toolkit').createSlice

const state1 ={
    loading:true,
    users:[],
    error:'',
}
  
////<!--create slice handles one ,two and thre in redux---1>
//i.e creates action constants,create actions and action  creators,and create ruducers//


//const  usersSlice = createSlice({
 //   name:"users",
//    initialState
//    reducers:{
//        fetchrequest:(state,action)=>{    
//            loading:true   
//        },




// In redux the fetch users is able to make api calls due to the thunk midddleware
//In resux-toolkit the fetch user api is able to do using  createAsync Thunk
//The create asyc function accepts two parametres ,action name and callback function thatcreates the payload


//Action name is  gotten as below// (to see this in use logger middleware) (refer to store file in practice folder)
//actions are give names bases on name specified in create slice and action specifird inreducer--->




//create async thunk handles error for us
//It also Generates pending (request),fullfiled(sucess) and rejected(error) action types for us.
//We can listen to this action types using  extra reduces in  usersSlice


//   <!-------------**************Our Async function************-------!>

const fetchusers=createAsyncThunk('users/fetchusers',()=>{
    return  axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>response.data.map((user)=>user.id))})

         //This give us a promise ,a promise is either pendig fullifled or rejected .
         //This are the promise lifecycle /action types we use extra reduces on in create slice
         
         //It also Generates pending (request),fullfiled(sucess) and rejected(error) action types for us.

         //In redux we use to do it manuasll i.e develop our own action creators and action types and link thenm up to the async fuction,but create async does  this for us
        //i.e It craeats our fetchuserRequested,fullfilled and error as pending ,fullfiiled and rejected which we access in our extra reducers



//const fetchusers= ()=>{
// return function(dispatch){
//
//      dispatch(fetchUsersRequested())
//    axios.get('https://jsonplaceholder.typicode.com/users')
//  .then((response)=>{
//    const users = response.data.map((users )=>users.id)
//  dispatch(fetchUsersSucces(users))
//})
//.catch((error)=>{
//  dispatch(fetchUsersFailure(error))
//})

   // }

//}
        
      




//createAsync  also Generates pending (request),fullfiled(sucess) and rejected(error) action types for us.
//We can listen to this action types using  extra reduces in  usersSlice

const  usersSlice = createSlice({
    name:"users",
    initialState:state1,
    extraReducers:(builder)=>{

        //we use builder to add casses to each of the promise life cycles (pendinf,fulfilled,rejected)
        // The firstt action typre /promise life cycle is fetchuser.pending
        builder.addCase(fetchusers.pending,(state)=>{
            state.loading = true

        }),
        builder.addCase(fetchusers.fulfilled,(state,action)=>{
            state.loading = false,
            state.users = action.payload,
            state.error = ''

        }),
        builder.addCase(fetchusers.rejected,(state,action)=>{
            state.loading = false,
            state.users =[],
            state.error = action.error.message

        })
      }
    })

    module.exports = usersSlice.reducer //export the reducers as the default export
    module.exports.fetchusers = fetchusers  //export the async function as the name export 