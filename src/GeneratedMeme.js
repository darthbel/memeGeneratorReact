import React from "react"
import './index.css';

// Meme that is generated
function GeneratedMeme(props) {
	return(
			<div className="col-sm-6 meme">
	      		<img className="img-fluid w-100" src={props.imgSrc} alt=""/>
	      		<div className="card-img-overlay d-flex flex-column text-break">
      				<h2 
      					className="topCaption text-white mb-auto" 
      					style={{'fontSize': props.fontSize + 'px'}}>
      					{props.topCaption.toUpperCase()}
      				</h2>
      				<h2 
	      				className="bottomCaption text-white" 
	      				style={{fontSize: props.fontSize  + 'px'}}>
	      				{props.bottomCaption.toUpperCase()}
      				</h2>
	      		</div>
	      	</div>
		)
}

export default GeneratedMeme