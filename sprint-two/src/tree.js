var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var searchTree = function(target, tree){
    if (tree.value === target){
      result = true;
    // }else if(tree.children.length === 0){
    //   return false;
    }else {
      for(var i = 0; i < tree.children.length; i++){
        searchTree(target, tree.children[i]);
      }
    }
    searchTree(target, this);
    return result;
  };
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

// var pine = Tree('Parents');

// pine.value(); // 'Parents'



/*
 * Complexity: What is the time complexity of the above functions?
 */
