var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.sizeKey = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
};


stackMethods.push = function(val){
  this.storage[this.sizeKey] = val;
  this.sizeKey++;
};

stackMethods.pop = function(){
  this.sizeKey && this.sizeKey--;
  var result = this.storage[this.sizeKey];
  delete this.storage[this.sizeKey];
  return result;
};
stackMethods['size'] = function(){
  return this.sizeKey;
};

var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};

