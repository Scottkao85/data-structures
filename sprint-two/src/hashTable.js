var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i = 0 ; i < this._limit ; i++) {
    this._storage[i] = [];
  }
};
//O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].push([k,v]);
};

//O(1) ....but O of j operation
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0 ; j < this._storage[i].length ; j++){
    if(this._storage[i][j][0] === k) {
      return this._storage[i][j][1];
    }
  }
  return null;
};
//O(1) could use linked-list(extra credit)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j=0 ; j < this._storage[i].length ; j++) {
    if(this._storage[i][j][0] === k) {
      this._storage[i].splice(j,1);
      j--;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
