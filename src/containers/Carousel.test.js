import React from 'react';
import Home from './Home';
import Carousel from './Carousel';
import {shallow, mount} from 'enzyme';
import ImageFetchService from '../core/services/ImageFetchService';
const getData = jest.fn(() => Promise.resolve('test'));
describe('Home', () => {
    
    it('calls componentDidMount before rendering', () => {
        let mockFetch = jest.fn()
        Carousel.prototype.componentDidMount = mockFetch;
        mount(<Carousel />);
        expect(mockFetch).toBeCalled();
    });
    it('should render correctly with no props', () => {
        const component = shallow(<Carousel/>);
        expect(component).toMatchSnapshot();
     });
    it('should call makeCarousel during componentDidMount', () => {
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        expect(makeCarousel).toHaveBeenCalled();
    });
    it('makeCarousel should set numberOfImages in Carousel state ', () => {
        let innerWidth = 768;
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        //wrapper.setState({numberOfImagesOnCarousel: 2});
        expect(wrapper.state('numberOfImagesOnCarousel')).toEqual(4);
    });
    it('handlePrev should set startIndex in Carousel state ', () => {
        const handlePrev = jest.spyOn(Carousel.prototype, 'handlePrev');
        const wrapper = mount(<Carousel />);
        wrapper.setState({startIndex: 2, numberOfImagesOnCarousel: 1});
        wrapper.instance().handlePrev();
        expect(wrapper.state('startIndex')).toEqual(1);
    });
    it('handleNext should set startIndex in Carousel state ', () => {
        const handleNext = jest.spyOn(Carousel.prototype, 'handleNext');
        const wrapper = mount(<Carousel />);
        wrapper.setState({startIndex: 2, numberOfImagesOnCarousel: 1});
        wrapper.instance().handleNext();
        expect(wrapper.state('startIndex')).toEqual(3);
    });
    it('renders loader when data is fetching asynchronously', () => {
        const wrapper = mount(<Carousel />);
        expect(wrapper.find('div').text()).toEqual(' Loading.... ');
    });
});