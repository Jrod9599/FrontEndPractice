import React, { Component } from 'react';
import axios from 'axios';

class SingleMovie extends Component{

	constructor(){
		super();
		this.state = {
			movie: {},
			buttonClass: "btn btn-primary"
		}
		this.addFav = this.addFav.bind(this);
	}

	componentDidMount(){
		const mid = this.props.match.params.movieId;
		const movieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`;
        axios.get(movieUrl).then((movieData)=>{
            console.log(movieData);
            this.setState({
                movie: movieData.data
            })
        })
	}

	addFav(){
		const movieId = this.props.match.params.movieId;
		const addFavorite = axios({
			method: 'POST',
			url: `http://localhost:3030/addFav`,
			data: {
				movieId,
				token: localStorage.getItem('token');
			}
		})
		addFavorite.then((favoriteResponce)=>{
			console.log(favoriteResponce.data);
			if(favoriteResponce.data.msg === "favAdded"){
				this.setState({
					buttonClass: "btn btn-success"
				})
			}else if(favoriteResponce.data.msg === "badToken"){
				this.props.history('/login')
			}
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.movie.title}</h1>
				<h3>{this.state.movie.tagline}</h3>
				<button className={this.state.buttonClass} onClick={this.addFav}>Add to my favorites</button>
			</div>
		)
	}

}

export default SingleMovie;