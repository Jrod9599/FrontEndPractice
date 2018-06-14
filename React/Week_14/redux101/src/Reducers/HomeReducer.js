// A reducer is a function.
// That function returns a piece of state. A piece of sate is just an object.

//All reducershave 2 params in their signature
	// 1. current value of it's state (obj)
		// 1b. thanks to ES6, yo uwill usually want to provide 
		// 1a. a defulat value for state, in case its not set
	// 2. info that came from the dispatcher
export default function(state = "Home Page Text", action){
	if(action.type === "UPDATE_HOME"){
		return action.payload
	}

	return state;
}