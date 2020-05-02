const faker = require('faker');
const {randNumGen, sweep} = require('./helper.js');

const review = {};

review.stars = randNumGen(5);

review.title = faker.lorem.sentence();
review.text = faker.lorem.paragraph();
review.username = faker.internet.userName();
review.date = faker.date.past(); //worry about date format later
review.sweepstakes = sweep();

console.log(review);