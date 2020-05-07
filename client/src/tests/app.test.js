import React from 'react';
import {shallow, mount} from 'enzyme';
import axios from 'axios';
import App from '../components/App.jsx';


describe('App Unit Test Commencing...', () => {
  test('do we have an app component?', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  jest.mock('axios', () => {
    const item = [{
      "reviews": [{
        "Stars": 3,
        "Title": "Cupiditate temporibus maxime enim sit.",
        "Text": "Dolorum est vitae rem voluptates veniam sit hic.Officiis ratione illum repellendus excepturi enim qui eos.Veniam voluptates nulla.Dolores nulla iusto ea ut.Voluptatem consequuntur error quaerat asperiores officiis ea sit est dolorum.",
          "Username": "Blair.Rice42",
        "Date": "2019 - 10 - 08T16: 08: 40.356Z",
        "Sweepstakes":""
      },
      {
          "Stars": 5,
          "Title": "Dolor quaerat cumque dolor veniam et.",
          "Text": "Non quis deleniti commodi ea nam consectetur est deserunt.Et voluptate quod sit ipsa sed est.Quidem tenetur ea consequatur et.Harum occaecati reiciendis omnis similique dolore.Non quam nam ut id qui.",
          "Username": "Toby_Marvin",
          "Date": "2019 - 08 - 16T00: 31: 53.850Z",
          "Sweepstakes":""
      },
        {
          "Stars": 5,
          "Title": "Fugit molestiae perspiciatis eaque nihil omnis aut dolore et quia.",
          "Text": "Occaecati commodi eos aut unde voluptates repellendus dolor.Modi et tempora eaque consequatur corrupti molestiae quia reprehenderit ipsum.Alias dolorem a temporibus ut dignissimos est rerum esse qui.",
          "Username": "Eloise_Marquardt",
          "Date": "2019 - 11 - 24T14: 12: 02.154Z",
          "Sweepstakes": "Sweepstakes entry"
        }
    ],
      "type": "shirt",
      "id": 100
    }]

    return {
      get: jest.fn(() => Promise.resolve(item))
    };
  })

  test('Are we invoking the right thing when the component mounts?', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  })
})