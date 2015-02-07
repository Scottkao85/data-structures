var Graph = function(){
  this.storage = {
  };
};

// O(1)
Graph.prototype.addNode = function(node){
  this.storage[node] = {
    "node" : node,
    "edges" : {}
  };
};

// O(1)
Graph.prototype.contains = function(node){
  return node in this.storage;
};

// O(1)
Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

// O(1)
Graph.prototype.hasEdge = function(fromNode, toNode){
  return toNode in this.storage[fromNode].edges;
};

// O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

// O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// O(N)
Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage){
    cb(this.storage[key].node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
