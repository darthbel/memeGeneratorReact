import React, {Component} from "react"
import './index.css';
import GeneratedMeme from './GeneratedMeme'

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
			<div className="container memeGeneratorContainer py-5">
			    <div className="row">
			      	<form className="col-sm-6 memeForm pb-4">
				      	<div className="form-group">
				      		<label htmlFor="topCaption">Top Caption:</label>
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
				      		<label htmlFor="bottomCaption">Bottom Caption:</label>
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
				      		<label htmlFor="fontSize">Change Font Size (in pixels):</label>
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
			      	<GeneratedMeme 
			      		imgSrc={this.state.randomImg}
			      		topCaption={this.state.topCaption}
			      		bottomCaption={this.state.bottomCaption}
			      		fontSize={this.state.fontSize}
			      	/>
			    </div>
		    </div>
		)
	}
}

export default MemeGenerator;