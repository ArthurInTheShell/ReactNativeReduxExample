import { reducer } from './reducer';
import { createStore } from 'redux';

// Define the initial state of our store
const initialState = { count: 0 }

// Create a store, passing our reducer function and our initial state
export const store = createStore(reducer, initialState)

