const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: Number,
  stars: Number,
  title: String,
  text: String,
  username: String,
  sweepstakes: String
});

const itemsSchema = new mongoose.Schema({
  _id: Number,
  type: String,
  reviews: [reviewSchema]
});


module.exports = { reviewSchema, itemsSchema };