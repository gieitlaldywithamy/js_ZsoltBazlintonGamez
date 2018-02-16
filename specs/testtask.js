const assert = require('assert');
const Task = require('../task');

// A task has a description
// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed

describe('Task', function(){
  let task;

  beforeEach(function(){
    task = new Task('hitchhike to barcelona', 3, 5, 'printing press');
  });

  it('has a description', function(){
    assert.strictEqual(task.description, 'hitchhike to barcelona');
  });

  it('has a difficulty level', function(){
    assert.strictEqual(task.difficulty, 3);
  });

  it('has an urgency level', function(){
    assert.strictEqual(task.urgency, 5);
  });

  it('has a reward', function(){
    assert.strictEqual(task.reward, 'printing press');
  });

  it('starts uncompleted', function(){
    assert.strictEqual(task.completed, false);
  })
});
