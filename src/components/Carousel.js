import React from 'react';
import '../assets/css/App.css';


export default function Carousel (props) {
	return <div className="row">
      		{(props.imageArray.length) ? Object.keys(props.imageArray).map(row => {
				  return (
			  <div className=" overflow-x-hide col-sm-6 col-md-4 col-lg-2 mx-auto">
				<img src={props.imageArray[row].largeImageURL}  className="singleImage"/>
				<h5> {`Image ${props.startIndex + parseInt(row) + 1}`}</h5>
			</div>
				  )}) : null }
      	</div>;
 }


