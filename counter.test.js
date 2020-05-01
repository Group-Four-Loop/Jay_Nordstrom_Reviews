//import dependencies
import React from 'react';
import Counter from './counter';

//shallow function of enzyme: doesnt fully render element to dom, instead it becomes a json object of what would have been rendered
import {shallow} from 'enzyme'

describe('Counter component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />)
    const countState = wrapper.state().count
    expect(countState).toEqual(0)
  })
})