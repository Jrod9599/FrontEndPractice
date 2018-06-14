import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

//import the store from redux so react components can use it
import { createStore } from 'redux';

//imposrt the rootReducer so the store has some data
import reducers from './Reducers/index';
//Make a store for redux to use. Use createStore which we brought in above from redux. 
//Pass createStore the rootReducer which we jsut brought in as well.
//rootReducer is all of the little reducersin one place.

const theStore = createStore(reducers);

// HOORAY! WE HAVE A STORE WITH STUFF IN IT. REDUX, OUT. --LBJ

//WE need a way to get teh store to react. the module for the job is react-redux
//react-redux is the glue in between react and redux. 
// It's like the view controller in between teh model and the view.
//react-redux give us a component called PRovider.
// The provider component is around everything that needs the glue

// WE will still render teh app.component. BUT we will render it 
// inside of teh provider component.
// Provider componet takes a prop of store which will be the redux store we made above.
// The redux store was made by createStore and handing it the rootReducer

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);