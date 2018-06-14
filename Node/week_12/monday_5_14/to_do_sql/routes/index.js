var express = require('express');
var router = express.Router();

//import mysql. we got this from npm
const mysql = require('mysql');
const db_creds = require('../config/config.js')
//set up a connection to use adn reuse
const connection = mysql.createConnection(db_creds);

//we made a connection above, now run it
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

	let message = req.query.msg;
	if(message === 'added'){
		message = 'Youre task was added';
	}
	if(message === 'delete'){
		message = 'Youre task was deleted';
	}
	if(message === 'Edit'){
		message = 'Youre task was updated';
	}
	
	const selectQuery = `SELECT task_name AS taskName, task_date as taskDate, id FROM tasks`;

	// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$ refreshing $$$$$$$$$$$$$$$$$$$$$$$$$$`)

	connection.query(selectQuery, (error, result)=>{
		if(error){throw error;}
		res.render('index', {message, 
							taskArray: result});
	});

});


router.post('/addItem', (req,res)=>{
	// res.send('We made it');
	//this contains variables that are submitted by post. I.e., if you have a form and 
	//POST, every input 
	const taskName = req.body.newTask;
	const taskDate = req.body.newTaskDate;
	// res...
	// 1. send
	// 2. render
	// 3. json
	//req.query is for get requests or query string
	//req.body is for data passed in via post
	// we know that someone submitted the form. WE know that because 
	// they are at the post, additem route. 

	//we got teh data the form sent out of 

	const insertQuery = `INSERT INTO tasks (task_name, task_date)  
						 VALUES(?,?)`;

	console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$ READY TO RUN THE QUERY $$$$$$$$$$$$$$$$$$$$$$$$$$`)

	connection.query(insertQuery, [taskName, taskDate], (error, results)=>{
		if(error) throw error;
		console.log(`====================ERROR,, REDIRECTING =====================`);
		res.redirect('/?msg=added');
	})

	// res.json(req.query);
})

router.get('/delete/:id', (req,res)=>{
	const idToDelete = req.params.id;

	const deleteQuery = `DELETE FROM tasks WHERE id=?`;

	connection.query(deleteQuery, [idToDelete], (error,results)=>{
		if(error){throw error;}
		res.redirect(`/?msg=delete`);
	})

})

router.get('/edit/:id', (req,res)=>{
	const idToEdit = req.params.id;

	res.render('edit', [taskId = idToEdit]);

})

router.post('/update/:id', (req,res)=>{
	const idToUpdate = req.params.id;

	const taskName = req.body.newTask;
	const taskDate = req.body.newTaskDate;

	const updateQuery = `UPDATE tasks SET task_name = ? , task_date = ? WHERE id = ?`

	connection.query(updateQuery,[taskName, taskDate, idToUpdate], (error, results)=>{
		if(error) throw error;

		res.redirect('/?msg=Edit')
	})
	

})

module.exports = router;
