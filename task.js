const Task = function(description, difficulty, urgency, reward, completed){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
};

Task.prototype.markAsCompleted = function(){
  this.completed = true;
};

module.exports = Task;
