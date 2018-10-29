import React, { Component } from 'react';
import ImageFetchService from '../core/services/ImageFetchService';
import Canvas from '../components/Canvas';
import '../assets/css/App.css';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.imageFetchServiceInstance = new ImageFetchService();
		this.state = { 
			imageData: [],
			loaded: false,
			onScreenImageData: [],
			numberOfImagesOnCarousel: 0,
			startIndex: 0,
			endIndex: 0
		};
		this.makeCarousel = this.makeCarousel.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	async componentDidMount() {
		this.makeCarousel();
		window.addEventListener("resize", this.makeCarousel);
		const imageData = await this.imageFetchServiceInstance.getData();
		if (imageData) {
			this.setState({ imageData: imageData.data.hits, loaded: true });
		}
	}
	makeCarousel () {
		let {innerWidth} = window;
		let numberOfImagesOnCarousel;
		if (innerWidth < 576) {
			numberOfImagesOnCarousel = 1; 
		} else if(innerWidth < 768) {
			numberOfImagesOnCarousel = 2; 
		} else if(innerWidth < 990) {
			numberOfImagesOnCarousel = 3; 
		} else if(innerWidth < 1200) {
			numberOfImagesOnCarousel = 4;
		} else {
			numberOfImagesOnCarousel = 5; 
		};
		this.setState({numberOfImagesOnCarousel, startIndex: 0});
	}
	handlePrev () {
		let startIndex = this.state.startIndex - this.state.numberOfImagesOnCarousel;
		console.log(startIndex, 'prev');
		this.setState({startIndex});
	}
	handleNext () {
		let startIndex = this.state.startIndex + this.state.numberOfImagesOnCarousel;
		console.log(startIndex, 'next');
		this.setState({startIndex});
	}
  	render() {
		if(!this.state.loaded) {
			return <div> Loading.... </div>
		}
		let imageArray = 
		this.state.imageData.slice(this.state.startIndex, this.state.numberOfImagesOnCarousel + this.state.startIndex);
		return (
      	<div>
			<Canvas 	imageArray={imageArray} 
						startIndex={this.state.startIndex}
						handlePrev={this.handlePrev}
						handleNext={this.handleNext}
						numberOfImagesOnCarousel={this.state.numberOfImagesOnCarousel}
						isPrevDisabled={(this.state.startIndex < this.state.numberOfImagesOnCarousel)}
						isNextDisabled={(this.state.startIndex >= (this.state.imageData.length - this.state.numberOfImagesOnCarousel))}/>
			{(this.state.numberOfImagesOnCarousel > 1) ? <div className="row biege mt-3 pb-3">
			<div className="col-sm-3 offset-sm-5 mt-3">
				<div className="row">
					<button type="button"
					className="col-sm-4 col-md-3 btn btn-info"
					onClick={this.handlePrev}
					disabled={(this.state.startIndex <= 0)} >Prev </button>
					<button type="button"
					className="col-sm-4 col-md-3 offset-sm-1 btn btn-info"
					onClick={this.handleNext} 
					disabled={(this.state.startIndex >= (this.state.imageData.length - this.state.numberOfImagesOnCarousel))}>Next</button>
				</div>
			</div>
				</div> : null
			 }
			
		</div>
    	);
  	}
}

export default Carousel;
