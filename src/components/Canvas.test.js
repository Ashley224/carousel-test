import React from 'react';
import Canvas from './Canvas';

import {shallow} from 'enzyme';
const handlePrev= jest.fn();
describe('Canvas', () => {
    it('sends props', () => {
        const numberOfImagesOnCarousel = 2;
        const imageArray = [{
            "user_id": 2946451,
            "largeImageURL": 
            "https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104491f0c97ba7e5b6b0_1280.jpg",
        }, {
            "user_id": 2946452,
            "largeImageURL": 
            "https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104491f0c97ba7e5b6b0_1280.jpg",
        }];
        const wrapper = shallow(<Canvas numberOfImagesOnCarousel={numberOfImagesOnCarousel}
                                        imageArray={imageArray}/>);
        expect(wrapper).toMatchSnapshot();
    });
   
});