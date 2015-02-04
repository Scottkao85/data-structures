var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function(){
    if(last - first > 0){
      var result = storage[first];
      delete storage[first];
      first++;
    }
    return result;
    // key && key--;
    // var result = storage[0];
    // delete storage[0];
    // // // for(var key in storage){
    // //   storage[key-1] = storage[key];
    // // // }
    // return result;
  };

  someInstance.size = function(){
    return last - first;
  };

  return someInstance;
};
