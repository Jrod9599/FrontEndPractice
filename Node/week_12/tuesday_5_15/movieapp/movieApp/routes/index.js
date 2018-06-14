var express = require('express');
//get request. we have this because we npm installed it. we need it to make the http request
var request = require('request'); //npm install --save request
//set up router from express module
var router = express.Router();

const apiBaseUrl = 'http://api.themoviedb.org/3';
//get our credentials from our non-git file to keep them safe from teh scary internet
const creds = require('../config/creds');
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${creds.api_key}`;
// const imageBaseUrl = 'http://image.tmbd.org/t/p/w300';
const imageBaseUrl = `http://image.tmdb.org/t/p/w300`;

/* GET home page. */
router.get('/', function(req, res, next) {
  //goto the movie api and get the current playing data\
  request.get(nowPlayingUrl,(error, responce, movieData)=>{
  		const parsedData = JSON.parse(movieData);
  		 res.render('index', { nowPlayingData: parsedData.results,
  		 						imageBaseUrl, });
  });
});

router.get('/movie/:movieId', (req,res)=>{
	// res.json(req.parms);
	const movieId = req.params.movieId;
	// build the api url for this movieData
	const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${creds.api_key}`;
	request.get(thisMovieUrl, (error, responce, movieData)=>{
		const parsedData = JSON.parse(movieData);
		// res.json(parsedData);
		res.render('single-movie', {currentMovie: parsedData,
									imageBaseUrl})
	})
})

module.exports = router;
