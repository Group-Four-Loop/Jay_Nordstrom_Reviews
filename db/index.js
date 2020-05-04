const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nordstrom', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', function() {
  (console, 'connection error: ');
})

db.on('open', function() {
  console.log('successful connection');
})

db.on('disconnected', function() {
  console.log('disconnected');
})

module.exports = { db };