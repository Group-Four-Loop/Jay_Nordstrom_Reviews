import React from 'react';
import ReviewCard from './reviewCard.jsx';

const ReviewsList = ({reviews}) => {
  console.log('all reviews ===>', reviews);
  return (
    <div className="reviewsList">
      {reviews.map((review, i) =>
        <ReviewCard
        review={review}
        key={i}
        title={review.title}

        />
      )}
    </div>
  )
};

export default ReviewsList;