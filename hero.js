const Task = require('./task');

const Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
};

Hero.prototype.talk = function(){
  return `I am ${this.name}`;
}

Hero.prototype.addTask = function(newTask){
  this.tasks.push(newTask);
}

Hero.prototype.completeTask = function(completedTask){
  completedTask.completed = true;

}

Hero.prototype.eat = function(food){
  if (this.favouriteFood == food){
    this.health += food.replenishmentValue * 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
}

Hero.prototype.sortTasksByDifficulty = function(){
    this.tasks.sort(function(task1, task2){
      return task2.difficulty - task1.difficulty;
    });
}

Hero.prototype.sortTasksByUrgency = function(){
  this.tasks.sort(function(task1, task2){
    return task2.urgency - task1.urgency;
  });
}

Hero.prototype.getIncompleteTasks = function(){
  return this.tasks.filter(function(task){
    return task.completed === false;
  });
}

Hero.prototype.getCompletedTasks = function(){
  return this.tasks.filter(function(task){
    return task.completed === true;
  });
}

  // return this.tasks.reverse();


module.exports = Hero;
