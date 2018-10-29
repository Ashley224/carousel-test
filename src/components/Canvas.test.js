import React from 'react';
import Canvas from './Canvas';
import Constants from '../core/constants';
import {shallow, mount} from 'enzyme';
const handlePrev= jest.fn();
describe('Canvas', () => {
    let imageArray;
    beforeEach(() => {
        imageArray = [{
            "user_id": 2946451,
            "largeImageURL": 
            "https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104491f0c97ba7e5b6b0_1280.jpg",
        }, {
            "user_id": 2946452,
            "largeImageURL": 
            "https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104491f0c97ba7e5b6b0_1280.jpg",
        }];
    })
    it('sends props', () => {
        const numberOfImagesOnCarousel = 2;
        const wrapper = shallow(<Canvas numberOfImagesOnCarousel={numberOfImagesOnCarousel}
                                        imageArray={imageArray}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('test previous button disablitiy', () => {
        const numberOfImagesOnCarousel = 1;const startIndex = 1;
        const wrapper = mount(<Canvas numberOfImagesOnCarousel={numberOfImagesOnCarousel}
                                        startIndex={startIndex}
                                        isPrevDisabled={true}
                                        imageArray={imageArray}/>);
        const container = wrapper.find("button.btn1");
        const containerProp = container.props();
        expect(containerProp.disabled).toEqual(true);
    });
    it('test next button disablitiy', () => {
        const numberOfImagesOnCarousel = 1;const startIndex = 1;
        const wrapper = mount(<Canvas numberOfImagesOnCarousel={numberOfImagesOnCarousel}
                                        startIndex={startIndex}
                                        isNextDisabled={true}
                                        imageArray={imageArray}/>);
        const container = wrapper.find("button.btn2");
        const containerProp = container.props();
        expect(containerProp.disabled).toEqual(true);
    });
    it('test mobile view', () => {
        const numberOfImagesOnCarousel = 1;const startIndex = 0;
        const props = {handlePrev: jest.fn(), isPrevDisabled: true}
        const wrapper = mount(<Canvas numberOfImagesOnCarousel={numberOfImagesOnCarousel}
                                        startIndex={startIndex}
                                        isNextDisabled={true}
                                        imageArray={imageArray}/>);
        expect(wrapper.find("div.row").text()).toEqual(' Image 1 ');
        
    });
    it('test desktop view', () => {
        const numberOfImagesOnCarousel = 2;const startIndex = 0;
        const props = {handlePrev: jest.fn(), isPrevDisabled: true}
        const wrapper = mount(<Canvas numberOfImagesOnCarousel={numberOfImagesOnCarousel}
                                        startIndex={startIndex}
                                        isNextDisabled={true}
                                        imageArray={imageArray}/>);
        expect(wrapper.find("button#prev").text()).toEqual('Prev ');
        
    });
});