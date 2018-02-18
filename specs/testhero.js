const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food');
const Rat = require('../rat');

describe('Hero', function() {
  let hero;
  let tablet;
  let omelette;
  let rat;
  let task1;
  let task2;
  let task3;

  beforeEach(function(){
    tablet = new Food('tablet', 6);
    omelette = new Food('omelette', 15);
    hero = new Hero('william wallace', 40, tablet);
    rat = new Rat();
    task1 = new Task('raid Scone', 5, 1, 'take king as prisoner')
    task2 = new Task('collect arrows', 3, 4, 'has more weapons');
    task3 = new Task('destroy bridge', 4, 2, '20 archers')
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

  it('can complete tasks', function(){
    hero.completeTask(task2);
    assert.strictEqual(task2.completed, true);
  });

  it('can eat food and restore replenishmentValue', function(){
    hero.eat(omelette);
    assert.strictEqual(hero.health, 55);
  });

  it('can eat favourite food and restore by replenishmentValue * 1.5', function(){
    hero.eat(tablet);
    assert.strictEqual(hero.health, 49);
  });

  it('can eat poisonous favourite food and restore by -replenishmentValue * 1.5', function(){
    rat.touch(tablet);
    hero.eat(tablet);
    assert.strictEqual(hero.health, 31);
  });

  it('when eats poisonous food loses health', function(){
    rat.touch(omelette);
    hero.eat(omelette);
    assert.strictEqual(hero.health, 25);
  });

  it('can see only incomplete tasks', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.completeTask(task2);
    assert.deepEqual(hero.getIncompleteTasks(), [task1, task3]);
  });

  it('can see only complete tasks', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.completeTask(task3);
    assert.deepEqual(hero.getCompletedTasks(), [task3]);
  });

  describe('sort tasks', function(){
    beforeEach(function(){
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
    });

    it('can sort tasks by difficulty', function(){
      assert.deepEqual(hero.tasks, [task1, task2, task3]);
      hero.sortTasksByDifficulty();
      assert.deepEqual(hero.tasks, [task1, task3, task2]);
    });

    it('can sort tasks by urgency', function(){
      hero.sortTasksByUrgency();
      assert.deepEqual(hero.tasks, [task2, task3, task1]);
    });
  });

});
