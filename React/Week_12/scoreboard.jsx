//React is a bunch of legos. The legos are called components. 
//A component is a fancy name for a class-like UI-thingy. 

// function Main(){
// 	// Main is giong to return a piece of JSX. Every react component
// 	// must return a single DOM element. 
// 	return (
// 		<h1> Sanity Check 2.0 </h1>
// 		)
// }

const Counter = React.createClass({

	getInitialState: function(){
		return{
			score: 0
		}
	},
	losePoint: function(){
		
		if(this.state.score > 0){
			const currentScore = this.state.score;
			const newScore = currentScore - 1;
			this.setState({
				score:newScore
			})
		}
	},
	addPoint: function(){
	
		const currentScore = this.state.score;
		const newScore = currentScore + 1;
		this.setState({
			score:newScore
		})
	},
	render: function(){
		return(
				<div className="counter">
					{/* HOW TO COMMENT*/}
					<button onClick={this.losePoint} className="btn btn-danger">-</button>
					<div className="team-score">{this.state.score}</div>
					<button onClick={this.addPoint} className="btn btn-success">+</button>
				</div>
			)
	}

});

// React components are automcatically pass 1 param. Props.
function Team(props){
	return (
		<div className={`team ${props.teamName}`}>
			<div className="team-name">
				<h3>{props.teamName}</h3>
			</div>
			<Counter />
		</div>
	)

}


// A component is a regular JAVASCRIPT UNTIL you get inside the return
// once inside you are swriting JSX
function Scoreboard(){
	// Main is giong to return a piece of JSX. Every react component
	// must return a single DOM element. 
	return (
		
		<div className="scoreboard">
			<div className="header">
				<h1>Celtics vs Cavs - Game {1+2}</h1>
			</div>
			<div className="teams">
				<Team teamName='Boston'/>
				<Team teamName='Cleveland'/>
			</div>
		</div>
		)
}

// the render method(inside reactDOM) takes 2 arguments:
// 	1.what.
// 	2.where
// 	React.createElement('h1', 'Sanity Check');

ReactDOM.render(
	// <h1>Sanity Check!</h1>,
	// <Main />,
	
	<Scoreboard />,
	document.getElementById('root')
)