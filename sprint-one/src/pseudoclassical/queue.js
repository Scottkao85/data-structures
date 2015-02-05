var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.last = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(val){
  this.storage[this.last] = val;
  this.last++;
};

Queue.prototype.dequeue = function(){
  if(this.last - this.first > 0){
    var result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    // return result;
  }
  return result;
};

Queue.prototype.size = function(){
  return this.last - this.first;
};
