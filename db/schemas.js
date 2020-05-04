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
  reviews: [reviewSchema]
});

const productsSchema = new mongoose.Schema({
  _id: Number,
  type: String,
  items: [itemsSchema]
});

module.exports = { reviewSchema, itemsSchema, productsSchema };