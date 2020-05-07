import React from 'react';
import ReviewCard from './reviewCard.jsx';

const ReviewsList = ({reviews}) => {
  return (
    <div className="reviewsList">
      {reviews.map((review, i) =>
        <ReviewCard
        review={review}
        key={i}
        stars={review.stars}
        title={review.title}
        text={review.text}
        username={review.username}
        date={review.date}
        sweepstakes={review.sweepstakes}
        />
      )}
    </div>
  )
};

export default ReviewsList;