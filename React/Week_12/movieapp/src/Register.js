import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

  constructor(){
  	super();
  	this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(event){
  	event.preventDefault();
  	console.log("Test")
  	// axios.post(`http://localhost:3030/register`).then((registerData)=>{
  	// 	console.log(registerData);
  	// })


  	//axios is how we make our ajax requests
  	//in other words, how React talks to express/spring
  	const email = document.getElementById('email').value;
  	const password = document.getElementById('pwd').value;
  	console.log(password);
  	console.log(email);
  	const registerRequest = axios({
  		method: "POST",
  		url: "http://localhost:3030/register",
  		data: {email, password}
  	})

  	registerRequest.then((registerData)=>{
  		console.log(registerData);
  		if(registerData.data.msg === "registerSuccess"){
  			/*localStoraage is the new cookie. Cookies are inheritly insecure. They
  			also can only hold 4k. they are sent in their entirety on every request.
  			local storeage can hold 5mb, tha data is not sent to teh server (unless you tell it
  			too ) local
  			local storage is just a hashmap */
  			localStorage.setItem('token', registerData.data.token)
  			this.props.match.history.push('/')
  		}
  	})
  }

  render(){
    return(
	<form onSubmit={this.handleRegister}>
	<h1>Register Page</h1>
	  <div className="form-group">
	    <label for="email">Email address:</label>
	    <input type="email" className="form-control" id="email" />
	  </div>

	  <div className="form-group">
	    <label for="pwd">Password:</label>
	    <input type="password" className="form-control" id="pwd" />
	  </div>

	  <div className="checkbox">
	    <label><input type="checkbox" /> Remember me</label>
	  </div>

	  <button type="submit" className="btn btn-default">Register</button>
	</form>
    ) 
  }
}

export default Register;

