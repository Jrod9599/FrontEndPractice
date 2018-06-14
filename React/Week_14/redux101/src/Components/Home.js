import React, {Component} from 'react';

//we need some glue! this component needs to knwo about teh store
// 	just because it is inside the provider, isnt enough. Reac-redux only exposes the store
// 	when it has to for performance. 
//To accomplish this, we use the connect method from 
// 	react-redux(the glue between React and redux)
import {connect} from 'react-redux'

class Home extends Component{

	render(){
		return(
			<h1> {this.props.homeText} </h1>
		)
	}
}

// we have connect. great. but we need a way to get 
// the stuff in the store to map to the props of this component
//it takes one param, state

// mapStateToProps = Map Redux State to this component props
function mapStateToProps(state){
	// The State PARAMETER  is teh root reducer
	// this function will return an object, each property
	// 	will be mapped to this components
	// 	props, each value will be a peice of state, or a property of teh rootreducer
	return {
		homeText: state.home,
	}
}

// inside of containers( a fancy term for component that knows about redux), 
// we dont export teh component we export connect.


export default connect(mapStateToProps)(Home);