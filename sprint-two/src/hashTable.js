var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i = 0 ; i < this._limit ; i++) {
    this._storage[i] = [];
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0 ; j < this._storage[i].length ; j++){
    if(this._storage[i][j][0] === k) {
      return this._storage[i][j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j=0 ; j < this._storage[i].length ; j++) {
    if(this._storage[i][j][0] === k) {
      console.log("About to delete: ", this._storage[i][j]);
      delete this._storage[i][j];
      console.log("Altered bucket: ", this._storage[i]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
