var Stack = function() {
  this.storage = {};
  this.key = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function(value){
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function(){
  this.key && this.key--;
  var result = this.storage[this.key];
  delete this.storage[this.key];
  return result;
};

Stack.prototype.size = function(){
  return this.key;
};
