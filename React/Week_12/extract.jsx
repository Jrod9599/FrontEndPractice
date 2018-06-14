var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]

var myData = {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
}

function Comment(props) {

 const badges = props.data.userBadge.map((badgeTitle, index)=>{
 	return (
 		<Badge key={index} badgeTitle = {badgeTitle}/>
 		)
 })
 return (
	 <div className="Comment">
		<div className="UserInfo">
			 <img className="Avatar" src={props.data.author.avatarUrl} alt={props.data.author.name} />
			 <div className="UserInfo-name">
			 	{props.data.author.name}
			 </div>
		</div>
		<div className="Comment-body">
		 	 <h1>{props.data.commentHeading}</h1>
			 <div className="Comment-text">{props.data.text}</div>
			 <div className="Comment-date">{props.data.date} </div>
		</div>
		<div className="UserBadges">
			{badges}
		</div>
	 </div>
 );
}

function Badge(props){
	return (
		<div className="badge">{props.badgeTitle}</div>
	)
}

function Split(props){
	return(
		<div>
			<Comment data={data[0]} />
			<Comment data={data[1]} />
		</div>
	)
}

ReactDOM.render(
	<Split data={data}/>,
	document.getElementById('root')
)