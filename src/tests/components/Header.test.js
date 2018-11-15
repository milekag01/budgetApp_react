import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';         //since we are using enzyme-to-json/serializer, we do not need to import and use (enzyme-to-json) since it will be used automatically
import Header from '../../components/Header';

test('should render header correctly',() => {
    const wrapper = shallow(<Header />);
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

