When working with Redux, combining multiple reducers is done using the combineReducers function provided by the Redux library.
  This function allows you to combine individual reducers into a single root reducer, which can then be used to create the Redux store.
  Heres an explanation of how to combine multiple reducers with code samples:

Create individual reducers:
First, you need to create separate reducer functions for different parts of your application state.
  Each reducer is responsible for handling a specific slice of the state. Heres an example of two individual reducers:


// counterReducer.js
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;

// todoReducer.js
const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

export default todoReducer;
Combine reducers using combineReducers:
In a separate file, import the combineReducers function from the Redux library and combine your individual reducers into a single root reducer. 
  Each individual reducer will handle its own slice of the state. Heres an example of combining the above reducers:


// rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});

export default rootReducer;
In this example, the combineReducers function takes an object where each key represents a slice of the state and its corresponding value is the reducer responsible for handling that slice.

Create the Redux store:
Finally, you can create the Redux store using the combined root reducer. This store will hold the complete application state and dispatch actions to update the state. Heres an example of creating the store:

javascript
Copy code
// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
In this example, the createStore function is used to create the Redux store, and the combined rootReducer is passed as an argument.

By combining the reducers using combineReducers, you ensure that each individual reducer handles its designated slice of the state. When actions are dispatched, the corresponding reducer will update its slice of the state accordingly. This modular approach allows for better organization and maintainability of your Redux codebase.
