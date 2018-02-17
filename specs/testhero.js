const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food')

describe('Hero', function() {
  let hero;
  let tablet;
  let omelette;
  let task1;
  let task2;
  let task3;

  beforeEach(function(){
    tablet = new Food('tablet', 6);
    omelette = new Food('omelette', 15);
    hero = new Hero('william wallace', 40, tablet);
    task1 = new Task('raid Scone', 5, 2, 'take a king as prisoner')
    task2 = new Task('collect arrows', 3, 4, 'has more weapons');
  });

  it('has a name', function(){
    assert.strictEqual(hero.name, "william wallace");
  });

  it('has health', function(){
    assert.strictEqual(hero.health, 40);
  });

  it('has a favourite food', function(){
    assert.strictEqual(hero.favouriteFood, tablet);
  });

  it('can talk', function(){
    assert.strictEqual(hero.talk(), 'I am william wallace');
  });

  it('has a collection of tasks which starts empty', function(){
    assert.strictEqual(hero.tasks.length, 0);
  });

  it('can add tasks', function(){
      hero.addTask(task1);
      hero.addTask(task2);
      assert.deepEqual(hero.tasks, [task1, task2]);
  });

  it('can eat food and restore replenishmentValue', function(){
    hero.eat(omelette);
    assert.strictEqual(hero.health, 55);
  });

  it('can eat favourite food and restore by replenishmentValue * 1.5', function(){
    hero.eat(tablet);
    assert.strictEqual(hero.health, 49);
  });

//   A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
});
