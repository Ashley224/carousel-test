import React from 'react';
import Home from './Home';
import Carousel from './Carousel';
import {shallow, mount} from 'enzyme';
describe('Home', () => {
    
    it('calls componentDidMount before rendering', () => {
        let mockFetch = jest.fn()
        const wrapper = shallow(<Carousel />);
        Carousel.prototype.componentDidMount = mockFetch;
        mount(<Carousel />);
      
        expect(mockFetch).toBeCalled();
    });
    // it('should call makeCarousel during componentDidMount', () => {
    //     const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
    //     const wrapper = mount(<Carousel />);
    //     expect(makeCarousel).toHaveBeenCalledTimes(1);
    // });
});