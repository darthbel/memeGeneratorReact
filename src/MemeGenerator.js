import React, {Component} from "react"
import './index.css';

class MemeGenerator extends Component  {
	constructor() {
		super()

		this.state = {
			topCaption: "",
			bottomCaption: "",
			fontSize: 46,
			randomImg: "",
			allMemeImgs: []
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => { 
            	const {memes} = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })       
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleClick(event) {
    	const newRandomImg = this.state.allMemeImgs[Math.floor(Math.random()*this.state.allMemeImgs.length)].url
        this.setState({
            randomImg: newRandomImg
        })
        console.log(newRandomImg)
    }

	render() {
		return (
			<div className="container py-5">
			    <div className="row">
			      <form className="col-sm-6 memeForm">
			      	<div className="form-group">
			      		<label for="topCaption">Top Caption:</label>
			      		<input 
					      	className="form-control" 
					      	type="text" 
					      	name="topCaption" 
					      	value={this.state.topCaption} 
					      	placeholder="Start typing..." 
					      	onChange={this.handleChange} 
			      		/>
			      	</div>
			      	<div className="form-group">
			      		<label for="bottomCaption">Bottom Caption:</label>
			      		<input 
					      	className="form-control" 
					      	type="text" 
					      	name="bottomCaption" 
					      	value={this.state.bottomCaption} 
					      	placeholder="Start typing..." 
					      	onChange={this.handleChange} 
			      		/>
			      	</div>
			      	<div className="form-group">
			      		<label for="fontSize">Change Font Size (in pixels):</label>
				      	<input 
				      		className="form-control" 
				      		type="number" 
				      		name="fontSize" 
				      		value={this.state.fontSize}
				      		placeholder={this.state.fontSize}
				      		onChange={this.handleChange} 
				      	/>
			      	</div>
			      	<button 
			      		type="button" 
			      		name="btnRandomImg" 
			      		onClick={this.handleClick}
			      	>Get Another Random Image</button>


			      </form>
			      <div className="col-sm-6 meme">
			      		<img className="img-fluid w-100" src={this.state.randomImg} alt=""/>
			      		<div className="card-img-overlay d-flex flex-column text-break">
		      				<h2 
		      					className="topCaption text-white mb-auto" 
		      					style={{'fontSize': this.state.fontSize + 'px'}}>
		      					{this.state.topCaption.toUpperCase()}
		      				</h2>
		      				<h2 
			      				className="bottomCaption text-white" 
			      				style={{fontSize: this.state.fontSize  + 'px'}}>
			      				{this.state.bottomCaption.toUpperCase()}
		      				</h2>
			      		</div>
			      </div>
			    </div>
		    </div>
		)
	}
}

export default MemeGenerator;