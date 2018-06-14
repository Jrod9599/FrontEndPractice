//Pure function, aka, dumb function
//Presentational component. It's job to present
//some HTML...its dumb and its good at its job

// function Coin(){
// 	return (<h1>Hello World</h1>)
// }


//create class is a helper funnction to help old browsers
//pretend to make classes
//classes are smart functions
// they are nto pure
// they change their output, based on teh applications state
const Coin = React.createClass({
		sides: [
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
		],
		getInitialState: function(){
			return{
				image: this.sides[0]
			}
		},
		flipCoin: function(){
			//In Here, we change this.state.image
			//Anything we change state, render will be called
			let newSide = 0;
			let randomSide = Math.round(Math.random());
			newSide = this.sides[randomSide]
			
			// WE NEVER EVER EVER EVER DO THIS:
			// this.state.image = newSide

			this.setState({
				image: newSide
			})
		},
		render: function(){
			return(
				<div>
					<button onClick={this.flipCoin}>Click To Flip</button>
					<img src={this.state.image} />
				</div>
			)
		} 
})
//Smart functions dont have a blanket return;
//they have a render method. the render method
//has the return statement. All rules apply(jsx, single elements)


ReactDOM.render(
	// <Coin />,
	document.getElementById('root')
)