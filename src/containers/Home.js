import React, { Component } from 'react';
import Carousel from './Carousel';
import '../assets/css/App.css';

class Home extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
      	<div className="container-fluid">
			<div className="row biege">
				<h1 className="col-sm-6 col-10 offset-1 ml-sm-3 mt-3 mb-3 headings"> Carousel Test</h1>
			</div>
			<Carousel />
		</div>)
  	}
}

export default Home;
