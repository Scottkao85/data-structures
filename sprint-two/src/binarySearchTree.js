var BinarySearchTree = function(value){
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.value = value;
  newBST.left = undefined;
  newBST.right = undefined;

  return newBST;
};

/*
compare inserted value to current value
  if its smaller, check for left child
    if child
      recurse func
    else
      insert
  if its larger, insert right
    if child
      recurse func
    else
      insert
*/
// O(log(N))
BinarySearchTree.prototype.insert = function(value){
  // if value is smaller than this.value
    // if left has child
      // recurse with left child
    // else
      // set left pointer to BinarySearchTree(value)
  if( value < this.value ) {
    if( this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  // if value is larger than this.value
    // if right has child
      // recurse
    // else
      // set right pointer to BinaryTreeValue(value)
  }else if ( value > this.value ) {
    if( this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

/*
Start with top tree
check if target is same as this.value
check if target is less than this.value
  recuse on left tree
if larger
  recurse on right tree
*/
// O(Log(N))
BinarySearchTree.prototype.contains = function(target){
  var result = false;
  var BSTSearch = function(target, tree) {
    if (target === tree.value){
      result = true;
    }else if ( target < tree.value && tree.left !== undefined) {
      tree.left.contains(target);
    }else if ( target > tree.value && tree.right !== undefined){
      tree.right.contains(target);
    }
    return result;
  };
  if (this.value === target) {
    return true;
  }else if (target < this.value) {
    return BSTSearch(target, this.left);
  }else {
    return BSTSearch(target, this.right);
  }
};

/*
Starting with first tree
Do something to the first value
If left tree exists
  Recurse on left tree
If right tree exists
  Recruse on the right tree
*/
// O(N);
BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left !== undefined){
    this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined){
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


