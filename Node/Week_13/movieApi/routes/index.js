var express = require('express');
var router = express.Router();
//mysql module translate from node to sql and back
const mysql = require('mysql');
const creds = require('../config/creds');
const connection = mysql.createConnection(creds);
connection.connect();

const bcrypt = require('bcrypt-nodejs');
// include rand-token so we have a toekn to give React
const randToken = require('rand-token');

router.post('/register', (req,res)=>{
	// console.log(req);
	const password = req.body.password;
	const hashpassword = bcrypt.hashSync(password);
	const email = req.body.email;
	console.log(email,password,hashpassword);
	//we now have the users email and password

	const insertUserQuery = `INSERT INTO users
							(email, password, token)
							VALUES (?,?,?)`;
	const token = randToken.uid(60);
	connection.query(insertUserQuery, [email, hashpassword, token],(error,results)=>{
		if(error){
			throw error;
		}
		res.json({
			token,
			msg: "registerSuccess"
		});
	})

})

router.post('/addFav', (req,res)=>{
	res.json(req.body);
	const movieToAdd = req.body.movieId;
	const userToken = req.body.token;

	var uId;
	const getUser = 'SELECT id from users WHERE token = ?'
	connection.query(getUser, [userToken], (error, results)=>{
		if(error){throw error;}
		if(results.length > 0){
			//You could do a select quick to make sure teh user is valid.
			const insertQuery = `INSERT INTO favorites (mid, uid)
						 VALUES (?,?)`;
			connection.query(insertQuery, [movieToAdd, results[0].id, (error, results2)=>{
				res.json({
					msg:"favAdded"
				})
			}])
		}
		else{
			// You dont want to sell me death sticks
			// you want to go home and rethink your life
			// in other words. your toekn is bogus. GOodbye
			res.json({
				msg:"badToken"
			})
		}
	});


})

module.exports = router;
