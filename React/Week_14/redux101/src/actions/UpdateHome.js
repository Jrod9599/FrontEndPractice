// This is a redux action.
// An action exports a function (just like a reducer does)
// that function must return an object
// that object must have a property of "type"
// the object can have any other stuff

export default function(){
	return {
		type: 'UPDATE_HOME',
		payload: 'User clicked the button'
	}
}

