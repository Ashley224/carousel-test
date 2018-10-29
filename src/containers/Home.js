import React, { Component } from 'react';
import ImageFetchService from '../core/services/ImageFetchService';
import Carousel from '../components/Carousel';
import '../assets/css/App.css';

class App extends Component {
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
			// this.state.numberOfImagesOnCarousel + startIndex
			this.setState({ imageData: imageData.data.hits, loaded: true });
			
			//this.calculateInitialIndexes(imageData.data.hits.length);
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
		//console.log(numberOfImagesOnCarousel);
		//let endIndex = this.state.numberOfImagesOnCarousel + this.state.startIndex;
		this.setState({numberOfImagesOnCarousel});
	}
	handlePrev () {
		let startIndex = this.state.startIndex - this.state.numberOfImagesOnCarousel;
		console.log(startIndex, 'prev');
		//let endIndex = this.state.numberOfImagesOnCarousel + this.state.startIndex;

		this.setState({startIndex});
	}
	handleNext () {
		let startIndex = this.state.startIndex + this.state.numberOfImagesOnCarousel;
		console.log(startIndex, 'next');
		//let endIndex = this.state.numberOfImagesOnCarousel + this.state.startIndex;
		this.setState({startIndex});
	}
  	render() {
		if(!this.state.loaded) {
			return <div> Loading.... </div>
		}
		//console.log(this.state.numberOfImagesOnCarousel);
		let imageArray = 
		this.state.imageData.slice(this.state.startIndex, this.state.numberOfImagesOnCarousel + this.state.startIndex);
		//console.log(imageArray);
    	return (
      	<div className="container-fluid">
			<div className="row">
				<h1 id="heading" className="col-sm-6  ml-sm-3 mt-3 mb-3"> Carousel Test</h1>
				 
			</div>
			<Carousel imageArray={imageArray} startIndex={this.state.startIndex}/>
			{(this.state.numberOfImagesOnCarousel > 1) ? <div className="row">
			<div className="col-sm-3 offset-sm-5 mt-3">
				<div className="row">
					<button type="button"
					className="col-sm-4 col-md-3 btn btn-info"
					onClick={this.handlePrev}
					disabled={(this.state.startIndex < this.state.numberOfImagesOnCarousel)} >Prev </button>
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

export default App;
