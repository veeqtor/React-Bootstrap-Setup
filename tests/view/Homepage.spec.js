import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../../src/view/Homepage';

describe('App component rendering', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.length).toBe(1);
  });
});
