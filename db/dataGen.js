const db = require('./index.js');
const mongoose = require('mongoose');
const { reviewSchema, itemsSchema, productsSchema } = require('./schemas.js');

const faker = require('faker');
const {randNumGen, sweepstakes, itemType} = require('./helper.js');

const Items = mongoose.model('Items', itemsSchema);

const generateReview = () => {

  const review = {};

  review.stars = randNumGen(5);

  review.title = faker.lorem.sentence();
  review.text = faker.lorem.paragraph();
  review.username = faker.internet.userName();
  review.date = faker.date.past();
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

const items = () => {
  const items = [];

  for (var i = 1; i <= 3; i += 1) {
    if (i === 1) {
      for (var j = 0; j <= 32; j += 1) {
        let item = {};
        item.type = 'shirt';
        item.id = (i.toString() + j.toString());
        item.reviews = reviewsPerItem();
        items.push(item);
      }
    } else if (i === 2) {
      for (var j = 0; j <= 32; j += 1) {
        let item = {};
        item.type = 'shoes';
        let prefix = 5;
        item.id = (prefix.toString() + j.toString());
        item.reviews = reviewsPerItem();
        items.push(item);
      }
    } else if (i === 3) {
      for (var j = 0; j <= 32; j += 1) {
        let item = {};
        item.type = 'pants';
        let prefix = 9;
        item.id = (prefix.toString() + j.toString());
        item.reviews = reviewsPerItem();
        items.push(item);
      }
    }
  }
  return items;
};

Items.collection.insertMany(items());

const getAll = (callback) => {
  Items.find({}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
};

module.exports = { Items, getAll };