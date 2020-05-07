import React from 'react';
import {shallow} from 'enzyme';
import ReviewCard from './components/reviewCard.jsx';

describe('ReviewCard', () => {
  const reviewCard = {
    stars: 5,
    title: 'Title',
    // text: 'some text',
    // username: 'John_Doe',
    // date: 'a date',
    // sweepstakes: 'Sweepstakes'
  }

  it('displays the review stars', () => {
    const wrapper = shallow(<ReviewCard reviewCard={reviewCard} />)

    expect(wrapper.find('li').text().toEqual('Title'))
  })
})