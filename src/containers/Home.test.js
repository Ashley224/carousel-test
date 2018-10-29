import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {shallow} from 'enzyme';
it('renders without crashing', () => {
  const wrapper = shallow(<Home />);
  const heading = <h1 className="col-sm-6 col-10 offset-1 ml-sm-3 mt-3 mb-3 headings"> Carousel Test</h1>;
  expect(wrapper.contains(heading).toEqual(true));
});
