const Rat = require('../rat');
const Food = require('../food');
const assert = require('assert');

describe('Rat', function(){
  let rat;
  let food1;

  beforeEach(function(){
    rat = new Rat();
    food1 = new Food('bombas', 10);
  });

  it('when rat touches food, it becomes poisonous', function(){
    rat.touch(food1);
    assert.strictEqual(food1.poisonous, true);
  });
});
