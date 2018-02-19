const Task = function(params){
  this.description = params.description;
  this.difficulty = params.difficulty;
  this.urgency = params.urgency;
  this.reward = params.reward;
  this.completed = params.complete || false;
};

Task.prototype.markAsCompleted = function(){
  this.completed = true;
};


module.exports = Task;
