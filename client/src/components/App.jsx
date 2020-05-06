import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ReviewsList from './reviewsList.jsx';

//FIGURE OUT STYLED-COMPONENTS ASAP
// const reviewsContainer = styled.div`
//   padding: 30px 0 40px;
//   border-top: 1px solid ;
//   border-top-color: rgb(227, 227, 227);
// `;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/products')
      .then((response) => {
        console.log(response);
        this.setState({reviews: response.data})
      })
      .catch((error) => {
        console.log('failed to get reviews: ', error);
      });
  }


  render() {
    return (
      <div>
        <div>
          <ReviewsList reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}




export default App;