const randNumGen = n => Math.floor(Math.random() * Math.floor(n)) + 1;

const sweep = () => {
  var toggle = randNumGen(2);
  //var yayNay;
  if (toggle === 1) {
    return 'Sweepstakes entry';
  } else if (toggle === 2) {
    return '';
  }
};


module.exports = {randNumGen, sweep};