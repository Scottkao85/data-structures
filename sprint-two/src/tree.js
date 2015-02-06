var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

// O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

// O(N) Note: Terminates on target, executes <= N
treeMethods.contains = function(target){
  var shortCircuit = false;
  var searchTree = function(target, theChildren){
    for(var i = 0; i < theChildren.length; i++){
      if(theChildren[i].value === target){
        shortCircuit = true;
        break;
      }
      else if(theChildren[i].children.length > 0) { //( result !== true ) {
        searchTree(target, theChildren[i].children);
      }
    }
  };
  if( this.value === target) {
    return true;
  }
  searchTree(target, this.children);

  if( !shortCircuit ){
    return false;
  } else {
    return true;
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
