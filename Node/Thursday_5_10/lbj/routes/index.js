var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


	const atlTeams = [
		`braves`,
		`Falcons`,
		`United`,
	]

	// res.render takes 2 args:
		// 1. teh name of teh view to load
		// 2. an object to send to that view
  // res.render('index', { title: 'Express' });
  	res.render('index', { atlTeams });
});

router.get('/football', (req,res)=>{
	const atlTeams = ['falcons', 'braves', 'united', 'hawks'];
	res.render('index', { atlTeams });
})
module.exports = router;
