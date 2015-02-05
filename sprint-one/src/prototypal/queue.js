var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
console.log("newQueue: ",newQueue)
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
  this.storage[this.last] = val;
  this.last++;
};

queueMethods.dequeue = function(){
  if(this.last - this.first > 0){
    var result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return result;
  }

};
queueMethods.size = function(){
  return this.last-this.first;
};

var enqueue = Object.create(queueMethod)
