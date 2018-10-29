import React, { Component } from 'react';
import '../assets/css/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.imageFetchServiceInstance = new ImageFetchService();
		
	}
	componentDidMount() {
		
	}
	
  	render() {
		
    	return (
      	<div className="container-fluid">
			<div className="row">
				<h1 id="heading" className="col-sm-6  ml-sm-3 mt-3 mb-3"> Carousel Test</h1>
			</div>
		</div>
    	);
  	}
}

export default App;
