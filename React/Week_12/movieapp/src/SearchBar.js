import React, { Component } from 'react'

class SearchBar extends Component{

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//Every JS event gets the event obj
	handleSubmit(event){
		event.preventDefault();
		const searchTerm = event.target[0].value;
		this.props.history.push(`/search/${searchTerm}`);
	}
	handleChange(event){
		// event.preventDefault();
		// const searchTerm = event.target[0].value;
		// this.props.history.push(`/search/${searchTerm}`);
	}
	
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleChange} placeholder="Movie Name" />
				<button type="submit" className="btn btn-primary" >Search</button>
			</form>
		)
	}
}

export default SearchBar;