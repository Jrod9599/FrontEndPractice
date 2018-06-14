import React, {Component} from 'react';
import { connect } from 'react-redux';

//this components job is to chagne redux state.
//it will need a dunction to do so. once teh function 
// runs, the dispatcher will let all reducers know.

import { bindActionCreators } from 'redux';
import UpdateHome from '../actions/UpdateHome';

class Button extends Component{

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		console.log("Button Clicked")
		this.props.updateHome();
	}

	render(){
		return(
			<button onClick={this.handleClick} className="btn btn-large btn-success">Click Me</button>
		)
	}
}

// GET DATA FROM REDUX
function mapStateToProps(state){
	return {}
}

//mapDispatchToProps takes whatever function that needs to be sent out to teh dispatcher,
//and dmakes them into props for this component
function mapDispatchToProps(dispatch){
	// bindActionCreators takes 2 args.
	// 	1. object: property of local prp name (this.props.whatever)
	// 		value: the callback or ACTION 
	// 	2. dispatcher

	return bindActionCreators({
		updateHome: UpdateHome
	}, dispatch)


}

//export default button
//dispatch function always comes second
//export connect(null, 
export default connect(mapStateToProps, mapDispatchToProps)(Button);