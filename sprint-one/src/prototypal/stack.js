var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.key= 0;
  newStack.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.key] = value;
  this.key++;
};

stackMethods.pop = function(){
  this.key && this.key--;
  var result = this.storage[this.key];
  delete this.storage[this.key];
  return result;
};

stackMethods.size = function(){
  return this.key;
};
