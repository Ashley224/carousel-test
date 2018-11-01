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
			numberOfImagesOnCarousel: 0,
			startIndex: 0,
			fetchError: false,
			err: ''
		};
		this.makeCarousel = this.makeCarousel.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	async componentDidMount() {
		this.makeCarousel();
		window.addEventListener("resize", this.makeCarousel);
		try {
			const imageData = await this.imageFetchServiceInstance.getData();
			this.setState({ imageData: imageData.data.hits, loaded: true });
		  } catch(err) {
			this.setState({fetchError: true, err: err.message});
		}
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.makeCarousel);
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
		this.setState({startIndex});
    }
    
	handleNext () {
		let startIndex = this.state.startIndex + this.state.numberOfImagesOnCarousel;
		this.setState({startIndex});
    }
    
  	render() {
		if(this.state.fetchError) {
			return <div> Internal Server Error: {this.state.err} </div>
		} else if(!this.state.loaded) {
			return <div> Loading.... </div>
		}
		let imageArray = 
        this.state.imageData.slice(this.state.startIndex,
            this.state.numberOfImagesOnCarousel + this.state.startIndex);
		return (
      	<div>
			<Canvas 	
                imageArray={imageArray} 
                startIndex={this.state.startIndex}
                handlePrev={this.handlePrev}
                handleNext={this.handleNext}
                numberOfImagesOnCarousel={this.state.numberOfImagesOnCarousel}
                isPrevDisabled={(this.state.startIndex <= 0)}
                isNextDisabled=
                {(this.state.startIndex >=
                (this.state.imageData.length - this.state.numberOfImagesOnCarousel))}/>
		</div>
    	);
  	}
}

export default Carousel;
