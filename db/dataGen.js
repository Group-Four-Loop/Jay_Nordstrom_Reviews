const db = require('./index.js');
const mongoose = require('mongoose');
const { reviewSchema, itemsSchema, productsSchema } = require('./schemas.js');

const faker = require('faker');
const {randNumGen, sweepstakes, itemType} = require('./helper.js');

const Products = mongoose.model('Products', productsSchema);

const generateReview = () => {

  const review = {};

  review.stars = randNumGen(5);

  review.title = faker.lorem.sentence();
  review.text = faker.lorem.paragraph();
  review.username = faker.internet.userName();
  review.date = faker.date.past(); //worry about date format later
  review.sweepstakes = sweepstakes();

  return review;
};

const reviewsPerItem = () => {
  const reviewsArr = [];

  let numOfReviews = randNumGen(100);

  for (var i = 0; i <= numOfReviews; i += 1) {
    let reviewCard = generateReview();

    if (numOfReviews !== reviewsArr.length) {
      reviewsArr.push(reviewCard);
    }
  }
  return reviewsArr;
};

const itemsPerProduct = () => {
  const itemsArr = [];

  for (var i = 0; i <= 100; i += 1) {
    let item = {};
    item.id = i;
    item.reviews = reviewsPerItem();
    itemsArr.push(item);
  }
  return itemsArr;
};

const products = () => {
  const products = [];

  for (var i = 1; i <= 3; i += 1) {
    let product = {};
    if (i === 1) {
      product.type = 'shirts';
    } else if (i === 2) {
      product.type = 'shoes';
    } else if (i === 3) {
      product.type = 'pants';
    }
    product.id = i;
    product.items = itemsPerProduct();
    products.push(product);
  }
  return products;
};

Products.collection.insertMany(products());

module.exports = { Products };




