// This is our master reducer file
// it doesnt mannage any particular peice of state.
// It simply cotains all teh indiciauld peices of state from /
// from each reducer
// In other wordds... a single reducer contains a single object peice of state,
// the root reducer contains all teh reducers. 

// STATEMENT OF DECLARATION
// I, the rootReducer, neither know, nor give a rip about react. 
// Independent of (React, angular, vue). I only care about redux.

// import the combin Reducers object from redux so that we can  make a rootreducer out of them

import { combineReducers } from 'redux';

//import each individual reducer
import HomeReducer from './HomeReducer';

//build the root reducer using combinReducers that we got from redux above.
// combine reducer takes 1 args, an object

const rootReducer = combineReducers({
	home: HomeReducer
})

export default rootReducer;