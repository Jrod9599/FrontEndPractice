import React, { Component } from 'react';


function Images(props){
	// Map through images
	var images = props.atlImages.map((imageURL)=>{
		return (<img src={imageURL} />)
	})

	return(
		<div>
			{images}
		</div>
	)
}

export default Images;