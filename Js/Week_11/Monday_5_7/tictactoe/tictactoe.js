// Go get everything with the class "square" and
// add it to teh array squares

const squares = document.getElementsByClassName("square");
// console.log(squares);
let whosTurn = 1;
let gameOver = false;
let PvC = false;

const messageDiv = document.getElementById("message");

let player1Squares = [];
let player2Squares = [];

const winningCombos = [
	['A1','B1','C1'], //ROW 1
	['A2','B2','C2'], //ROW 2
	['A3','B3','C3'], //ROW 3
	['A1','A2','A3'], //COLUMN 1
	['B1','B2','B3'], //COLUMN 2
	['C1','C2','C3'], //COLUMN 3
	['A1','B2','C3'], //DIAG 1
	['A3','B2','C1'] //DIAG 2
];

//Loop through all teh squares and add a listener to them.
//if the user clicks on them, mark the square
for(let i = 0; i < squares.length; i++){
	// console.log(squares[i]);
	squares[i].addEventListener('click', function(){ //use function to send arguments otherwise just returns null
		markSquare(squares[i].id)
	})
}


var isX = true;
function markSquare(squareID){
	// console.log("user clicked square");

	// if(document.getElementById(squareID).innerHTML === "-"){
	// 	if(isX){
	// 		isX = false;
	// 		document.getElementById(squareID).innerHTML = "X";
	// 	}
	// 	else{
	// 		isX = true;
	// 		document.getElementById(squareID).innerHTML = "O";	
	// 	}
	// }

	//two thigns happenw hen someone clicks on a square
	//1. we change the dom... this part is for the user
	//	a. check to see if user can mark the square
	//2. we change variables for JS
	//	b. give control of the board to another player 
	const clickedSquare = document.getElementById(squareID);
	if(!gameOver){
		if(clickedSquare.innerHTML !== "-"){
			messageDiv.innerHTML = 'Sorry that square is already taken';
		}
		else if(whosTurn === 1){
			
			clickedSquare.innerHTML = `X`;
			player1Squares.push(clickedSquare.id);
			checkWin(1, player1Squares);
			
			if(!gameOver){
				if(PvC){
					computerTurn();
				}
				else{
					whosTurn = 2;
				}
			}
		}
		else{
			whosTurn = 1;
			clickedSquare.innerHTML = 'O';
			player2Squares.push(clickedSquare.id);
			checkWin(2, player2Squares);
		}
	}
}


function checkWin(whoJustMarked, playerSquares){
	// 1. what squares they have
	// 2. are there 3 in a row
	// 3. who is this? 
	if(playerSquares.length < 3){

	}
	//if the player has all 3 squares in any row in 
	// teh winning combo  then they win!

	for(let i = 0; i < winningCombos.length; i++){
		let squareCount = 0;
		for(let j = 0; j < winningCombos[i].length; j++){
			const currentWinningSquare = winningCombos[i][j];

			if(playerSquares.indexOf(currentWinningSquare) > -1){
				squareCount++;
			}
		}
		if(squareCount === 3){
			gameOver = true;
			messageDiv.innerHTML = `PLAYER ${whoJustMarked} HAS WON!!`;
			for(let w = 0; w < winningCombos[i].length; w++){
				const thisSquare = document.getElementById(winningCombos[i][w]);
				thisSquare.className += ' winning-square';
			}
		}
	}

}

function computerTurn(){
	var computerRow = Math.ceil(Math.random() * 3); //a, b, c
	var computerColoum = Math.ceil(Math.random() * 3); //1,2,3

	switch(computerRow){
		case 1:
			computerRow = 'A';
			break;
		case 2:
			computerRow = 'B';
			break;
		case 3:
			computerRow = 'C';
			break;
	}

	const clickedSquare = document.getElementById(`${computerRow}${computerColoum}`);
	if(clickedSquare.innerHTML === "-"){
		whosTurn = 1;
		clickedSquare.innerHTML = 'O';
		player2Squares.push(clickedSquare.id);
		checkWin('computer', player2Squares);
	}
	else{
		computerTurn();
	}
}

document.getElementById("reset-button").addEventListener('click', function(){ 
	reset();
})

function reset(){
	
	document.getElementById("board").innerHTML = 
				`<div class="board-row">
					<button id="A1" class="square">-</button>
					<button id="B1" class="square">-</button>
					<button id="C1" class="square">-</button>	
				</div>
				<div class="board-row">
					<button id="A2" class="square">-</button>
					<button id="B2" class="square">-</button>
					<button id="C2" class="square">-</button>	
				</div>
				<div class="board-row">
					<button id="A3" class="square">-</button>
					<button id="B3" class="square">-</button>
					<button id="C3" class="square">-</button>	
				</div>`;

	for(let i = 0; i < squares.length; i++){
		squares[i].addEventListener('click', function(){
			markSquare(squares[i].id)
		})
	}

	gameOver = false;
	whosTurn = 1;
	player1Squares = [];
	player2Squares = [];
}

document.getElementById("PvC").addEventListener('click', function(){ 
	players();
})


function players(){
	if(document.getElementById("PvC").innerHTML === "PvC"){
		reset();
		PvC = true;
		document.getElementById("PvC").innerHTML = "PvP"
	}
	else{
		reset();
		PvC = false;
		document.getElementById("PvC").innerHTML = "PvC"
	}
}

