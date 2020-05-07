import React from 'react';

const ReviewCard = ({stars, title, text, username, date, sweepstakes}) => (
  <ul>
    <li>Stars: {stars}</li>
    <li>Title: {title}</li>
    <li>Text: {text}</li>
    <li>Username: {username}</li>
    <li>Date: {date}</li>
    <li>Sweepstakes: {sweepstakes}</li>
  </ul>
)

export default ReviewCard;