const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food');
const Rat = require('../rat');
const TaskEnum = require('../task_enum');

describe('Hero', function() {
  let hero;
  let tablet;
  let omelette;
  let rat;
  let task1;
  let task2;
  let task3;
  let taskdetail;

  beforeEach(function(){
    tablet = new Food('tablet', 6);
    omelette = new Food('omelette', 15);
    hero = new Hero('william wallace', 40, tablet);
    rat = new Rat();
    taskDetail = {
      description: "raid scone",
      difficulty: TaskEnum.DIFFICULTY.HARD,
      urgency: TaskEnum.URGENCY.LOW,
      reward: "take king as prisoner"
    }
    task1 = new Task(taskDetail);
    taskDetail = {
      description: "collect arrows",
      difficulty: TaskEnum.DIFFICULTY.EASY,
      urgency: TaskEnum.URGENCY.MEDIUM,
      reward: "more weapons"
    }
    task2 = new Task(taskDetail);
    taskDetail = {
      description: "destroy bridge",
      difficulty: TaskEnum.DIFFICULTY.MEDIUM,
      urgency: TaskEnum.URGENCY.MEDIUM,
      reward: "20 archers"
    }
    task3 = new Task(taskDetail);
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

  it('has a score that starts at 0', function(){
    assert.deepEqual(hero.bag, new Map());
  })

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
      //why is this working?
      assert.deepEqual(hero.tasks, [task1, task2, task3]);
      hero.sortTasks("difficulty");
      assert.deepEqual(hero.tasks, [task1, task3, task2]);
    });

    it('can sort tasks by urgency', function(){
      hero.sortTasks(TaskEnum.URGENCY);
      assert.deepEqual(hero.tasks, [task1, task2, task3]);
      // assert.deepEqual(hero.tasks, [task2, task3, task1]);
    });
  });

});
