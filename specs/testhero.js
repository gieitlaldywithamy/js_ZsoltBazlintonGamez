const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food')

describe('Hero', function() {
  let hero;
  let tablet;
  let omelette;

  beforeEach(function(){
    tablet = new Food('tablet', 6);
    omelette = new Food('omelette', 15);
    hero = new Hero('Ethel McDonald', 40, tablet);
  });

  it('has a name', function(){
    assert.strictEqual(hero.name, "Ethel McDonald");
  });

  it('has health', function(){
    assert.strictEqual(hero.health, 40);
  });

  it('has a favourite food', function(){
    assert.strictEqual(hero.favouriteFood, tablet);
  });

  it('can talk', function(){
    assert.strictEqual(hero.talk(), 'I am Ethel McDonald');
  });

  it('has a collection of tasks which starts empty', function(){
    assert.strictEqual(hero.tasks.length, 0);
  });

//   A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
});
