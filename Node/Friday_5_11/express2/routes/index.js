var express = require('express');
var router = express.Router();

let bandMembers = [

	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',
	'Nicky Stixx',
];

console.log(bandMembers);


/* GET home page. */
router.get('/', function(req, res, next) {
	//in teh router/controller our car is bandmembers
	//in the view, the same thign will be called theBand
  res.render('index', { theBand: bandMembers });
});

router.get('/add/:member',(req,res,next)=>{
	//req.params is an object with a property for 
	//every :something in teh path name
	const newMember = req.params.member;
	// res.send(newMember);
	bandMembers.push(newMember);
	res.redirect('/');

})

router.get('/remove/:member', (req,res,next)=>{
	const member2Remove = req.params.member;
	const indexToSplice = bandMembers.indexOf(member2Remove);

	if(indexToSplice > 1){
		bandMembers.splice(indexToSplice, 1);
	}
	res.redirect('/');
})

module.exports = router;
