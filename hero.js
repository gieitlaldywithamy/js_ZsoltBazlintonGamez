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

Hero.prototype.eat = function(food){
  if (this.favouriteFood == food){
    this.health += food.replenishmentValue * 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
}
module.exports = Hero;
