const assert = require('assert');
const Food = require('../food');

describe('Food', function(){
  let food;

  beforeEach(function(){
    food = new Food('bombas', 10);
  });

  it('should have a name', function(){
    assert.strictEqual(food.name, 'bombas');
  });

  it('should have a replenishment value', function(){
    assert.strictEqual(food.replenishmentValue, 10);
  });
});
