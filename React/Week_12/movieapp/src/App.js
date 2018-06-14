import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Poster from './Poster';
import About from './About';
import MovieSearch from './MovieSearch';
import SingleMovie from './SingleMovie';
import BootstrapNavBar from './BootStrapNavBar';
import Login from './Login';
import Register from './Register';
import $ from 'jquery';

// add react router
// BrowserRouter as router in the main component in ur app now
// Link is the new <a href "">

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  //constructor runs once. when teh object component is created
  constructor(props){
    // call super in order to pass up to React. Component what it needs
    super(props);
    // After super, we can use the word "this"
    //set the initial state of var: this.state.moviePosters to []
    this.state = {
      moviePosters: []
    }
    this.newUserSearch = this.newUserSearch.bind(this);
  }

  //special lifecycle method
  // will run as soon as the FIRST render runs
  // this is where AJAX goes
  componentDidMount(){
    console.log("The Component Has Mounted!");
    const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      })
    })
  }

  newUserSearch(movieTitle){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${movieTitle}`
    $.getJSON(url, (movieData)=>{
      this.setState({
        moviePosters: movieData.results
      })
    })
  }

  // Every React Component MUST have a render 
  render() {

    if(this.state.moviePosters.length === 0){
      <h1>Loading...</h1>
    }

    const posters = this.state.moviePosters.map((aMovie, index)=>{
      const imagePath =  `http://image.tmdb.org/t/p/w300${aMovie.poster_path}`;
      return (
          <Poster movie={aMovie} poster={imagePath}/>     
        )
    });
    console.log("Render is running...")
    //return a single DOM element (jsx_)
    return (
      // ROUTER GOES AROUND EVERYTHING
      <Router>
        <div className="App">

          <Route path="/" component={BootstrapNavBar}/>
          <Route path="/" component={SearchBar} />
          <Route path="/about" render={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/*You dont alway shave to give it a component. 
          You can gice it all a callback which can render components*/}
          <Route exact path="/" render={()=>{
            return (<div>
              {posters}
            </div>)
          }} />

          <Route path="/search/:searchTerm" component={MovieSearch} />

          <Route path="/movie/:movieId" component={SingleMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
