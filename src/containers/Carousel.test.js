import React from 'react';
import Home from './Home';
import Carousel from './Carousel';
import {shallow, mount} from 'enzyme';
import ImageFetchService from '../core/services/ImageFetchService';
const getData = jest.fn(() => Promise.resolve('test'));
describe('Carousel', () => {
    
    it('calls componentDidMount before rendering', () => {
        let mockFetch = jest.fn()
        Carousel.prototype.componentDidMount = mockFetch;
        mount(<Carousel />);
        expect(mockFetch).toBeCalled();
    });
    it('calls componentWillUnmount before unMounting', () => {
        let mockFetch = jest.fn()
        Carousel.prototype.componentWillUnmount = mockFetch;
        const wrapper = shallow(<Carousel />);
        wrapper.unmount();
        expect(mockFetch.mock.calls.length).toBe(1);
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
    it('numberOfImages should be 1 for mobile views', () => {
        global.innerWidth = 320;
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        //wrapper.setState({numberOfImagesOnCarousel: 2});
        expect(wrapper.state('numberOfImagesOnCarousel')).toEqual(1);
    });
    it('numberOfImages should be 2 for small pads', () => {
        global.innerWidth = 600;
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        //wrapper.setState({numberOfImagesOnCarousel: 2});
        expect(wrapper.state('numberOfImagesOnCarousel')).toEqual(2);
    });
    it('numberOfImages should be 3 for width>768 but less than 990', () => {
        global.innerWidth = 768;
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        //wrapper.setState({numberOfImagesOnCarousel: 2});
        expect(wrapper.state('numberOfImagesOnCarousel')).toEqual(3);
    });
    it('numberOfImages should be 4 if medium sized Desktops ', () => {
        global.innerWidth = 995;
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        //wrapper.setState({numberOfImagesOnCarousel: 2});
        expect(wrapper.state('numberOfImagesOnCarousel')).toEqual(4);
    });
    it('numberOfImages should be 5 if big desktops ', () => {
        global.innerWidth = 1210;
        const makeCarousel = jest.spyOn(Carousel.prototype, 'makeCarousel');
        const wrapper = mount(<Carousel />);
        wrapper.instance().makeCarousel();
        //wrapper.setState({numberOfImagesOnCarousel: 2});
        expect(wrapper.state('numberOfImagesOnCarousel')).toEqual(5);
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