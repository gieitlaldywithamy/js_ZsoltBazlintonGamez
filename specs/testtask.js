const assert = require('assert');
const Task = require('../task');
const TaskEnum = require('../task_enum');

describe('Task', function(){
  let task;

  beforeEach(function(){
    const taskDetail = {
      description: "hitchhike to barcelona",
      difficulty: TaskEnum.DIFFICULTY.MEDIUM,
      urgency: TaskEnum.URGENCY.MEDIUM,
      reward: "printing press"
    }
    task = new Task(taskDetail);
  });

  it('has a description', function(){
    assert.strictEqual(task.description, 'hitchhike to barcelona');
  });

  it('has a difficulty level', function(){
    assert.strictEqual(task.difficulty, 2);
  });

  it('has an urgency level', function(){
    assert.strictEqual(task.urgency, 2);
  });

  it('has a reward', function(){
    assert.strictEqual(task.reward, 'printing press');
  });

  it('starts uncompleted', function(){
    assert.strictEqual(task.completed, false);
  });

  it('can be marked as completed', function(){
    task.markAsCompleted();
    assert.strictEqual(task.completed, true);
  })
});
