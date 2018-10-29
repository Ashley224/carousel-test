import React from 'react';
import '../assets/css/App.css';
import  Arrow from '../assets/images/arrow.svg';


export default function Carousel (props) {
	//console.log(Background);
	return <div className="row">
      		{(props.imageArray.length > 1) ? Object.keys(props.imageArray).map(row => {
				  return (
			  <div className=" overflow-x-hide col-sm-6 col-md-4 col-lg-2 mx-auto">
				<img src={props.imageArray[row].largeImageURL}  className="singleImage" alt="Not Loaded"/>
				<h5> {`Image ${props.startIndex + parseInt(row) + 1}`}</h5>
			</div>
				  )}) : <div className="overflow-x-hide col-xs-5 offset-xs-1">
				  <img src={props.imageArray[0].largeImageURL}  className="singleImage" alt="Not Loaded"/>
					<button type="button"
					className="btna1"
					onClick={(e) => props.handlePrev()}
					disabled={props.isPrevDisabled} 
				 ><img src={Arrow} className="arrow" alt="Not Loaded" /></button>
					<button type="button"
					className="btna2"
					onClick={(e) => props.handleNext()}
					disabled={props.isNextDisabled} 
					 > <img src={Arrow} className="arrow" alt="Not Loaded" /></button>
			</div>}
      	</div>;
 }


