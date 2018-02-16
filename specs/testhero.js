// A. Create a constructor to create a Hero character
//
// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete, which leads nicely to -

const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');

describe('Hero', function() {
  let hero;

  beforeEach(function(){
    hero = new Hero('Ethel McDonald', 40, 'tablet');
  });

  it('has a name', function(){
    assert.strictEqual(hero.name, "Ethel McDonald");
  });

  it('has a favourite food', function(){
    assert.strictEqual(hero.favouriteFood, 'tablet');
  });

  it('can talk', function(){
    assert.strictEqual(hero.talk(), 'I am Ethel McDonald');
  });

  it('has a collection of tasks which starts empty', function(){
    assert.strictEqual(hero.tasks.length, 0);
  });
});
