const Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonous = false;
};
module.exports = Food;
