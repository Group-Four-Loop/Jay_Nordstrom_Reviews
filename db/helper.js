const randNumGen = n => Math.floor(Math.random() * Math.floor(n)) + 1;

const sweepstakes = () => {
  var toggle = randNumGen(2);
  if (toggle === 1) {
    return 'Sweepstakes entry';
  } else if (toggle === 2) {
    return '';
  }
};

const itemType = () => {
  var itemNum = randNumGen(3);

  if (itemNum === 1) {
    return 'shirt';
  } else if (itemNum === 2) {
    return 'shoes';
  } else if (itemNum === 3) {
    return 'pants';
  }
};


module.exports = { randNumGen, sweepstakes, itemType };