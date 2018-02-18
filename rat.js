const Rat = function(){

};

Rat.prototype.touch = function(food){
  food.poisonous = true;
}
module.exports = Rat;
