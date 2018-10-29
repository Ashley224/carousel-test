import React from 'react';
import Proptypes from "prop-types";
import '../assets/css/App.css';
import Arrow from '../assets/images/arrow.svg';
import Constants from '../core/constants';
function Canvas(props) {
	if(props.numberOfImagesOnCarousel > 1)
		return (
		<div>
		<div className="row mt-3">
			{Object.keys(props.imageArray).map((row) => {
				return (
					<div key={row} className=" overflow-x-hide col-sm-6 col-md-4 col-lg-2 mx-auto">
						<img src={props.imageArray[row].largeImageURL}
							className="singleImage"
							alt="Not Loaded" />
						<h5> {`Image ${props.startIndex + parseInt(row) + 1}`}</h5>
					</div>
				)
			})} 
			</div>
			<div className="row biege mt-3 pb-3">
				<div className="col-sm-3 offset-sm-5 mt-3">
					<div className="row">
						<button type="button"
						className="col-sm-4 col-md-3 btn btn-info"
						onClick={(e) => props.handlePrev()}
						disabled={props.isPrevDisabled} >{Constants.prevLabel} </button>
						<button type="button"
						className="col-sm-4 col-md-3 offset-sm-1 btn btn-info"
						onClick={(e) => props.handleNext()}
						disabled={props.isNextDisabled}> {Constants.nextLabel} </button>
					</div>
				</div>
			</div> 	
		</div>); 
	else {
		return (
		<div className="row mt-3"> 
			<div className="overflow-x-hide col-11 mx-auto">
			<img src={props.imageArray[0].largeImageURL} 
				className="singleImage" 
				alt="Not Loaded" />
			<button type="button"
				className="btn1"
				onClick={(e) => props.handlePrev()}
				disabled={props.isPrevDisabled}
			>
				<img src={Arrow} className="arrow1" alt="Not Loaded" />
			</button>
			<button type="button"
				className="btn2"
				onClick={(e) => props.handleNext()}
				disabled={props.isNextDisabled}
			> 
				<img src={Arrow} className="arrow2" alt="Not Loaded" />
			</button>
			<h4 className="mt-3 headings"> {`Image ${props.startIndex + 1}`} </h4>
		</div>
	</div>)
	}
}

Canvas.propTypes = {
	numberOfImagesOnCarousel: Proptypes.number,
	imageArray: Proptypes.array
}
 export default Canvas;