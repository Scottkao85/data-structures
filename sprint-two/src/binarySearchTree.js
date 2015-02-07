var BinarySearchTree = function(value){
  var newBST = Object.create(BinarySearchTree);
  newBST.value = [value];
  newBST.left = undefined;
  newBST.right = undefined;



  return newBST;

};

BinarySearchTree.prototype.insert = function(value){
  if(value < this.value ){

  }

};

// BinarySearchTree.prototype.contains = function(){

// };

// BinarySearchTree.prototype.depthFirstLog = function(){

// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
