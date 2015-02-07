

var Graph = function(){
  this.storage = {

  };
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {
    "node" : node,
    "edges" : {}
  };
};

Graph.prototype.contains = function(node){
  return node in this.storage;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return toNode in this.storage[fromNode].edges;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var test = new Graph();
var add = function(a,b){return a+b};
test.addNode(add);

