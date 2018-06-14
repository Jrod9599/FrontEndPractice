import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BootstrapNavBar extends Component{
	render(){

   return(

     <nav class="navbar navbar-inverse">
       <div class="container-fluid">
         <div class="navbar-header">
           <Link to="/" className="navbar-brand">WebSiteName</Link>
         </div>
         <ul class="nav navbar-nav">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
		      	<li><Link to="/favorites">Favorites</Link></li>           
         </ul>
       </div>
     </nav>
   )
 }
}

export default BootstrapNavBar;