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

//worth hi-chews
//iterate across given array
  // callback each tree's value
  // if children left
    // store in children array
  // if children right
    // store in children array

// Can re-implement using QUEUEp9
BinarySearchTree.prototype.breadthFirstLog = function(callback){
  callback(this.value);
  var children = [];
  if(this.left !== undefined ){
    children.push(this.left);
  }
  if(this.right !== undefined){
    children.push(this.right);
  }
  var breadthFunc = function(callback, children){
    var nextChildren = [];
    for(var i = 0; i < children.length; i++){
      callback(children[i].value);
      if(children[i].left !== undefined){
        nextChildren.push(children[i].left);
      }
      if(children[i].right !== undefined){
        nextChildren.push(children[i].right);
      }
    }
    if( nextChildren.length > 0 ){
      breadthFunc(callback, nextChildren);
    }
  };
  breadthFunc(callback, children);
};

//worth lots of hi-chews

// Save every element to sorted array
  //for whole array
  // save the middle number
  // save left mid/right mid




BinarySearchTree.prototype.rebalanceTree = function(){
  var tempArr = [];
  var balancedArr = [];
  this.breadthFirstLog(function(value){ tempArr.push(value); });
  tempArr.sort(function(a,b){ return a-b; });

  while(tempArr.length > 0 ){
    if(tempArr.length < 3){
      balancedArr = balancedArr.concat(tempArr);
      break;
    }else{
      var mid = Math.floor(tempArr.length/2);
      var midL = Math.floor(tempArr.length * 0.25);
      var midR = Math.floor(tempArr.length * 0.75);
      balancedArr.push(tempArr[mid]);
      balancedArr.push(tempArr[midL]);
      balancedArr.push(tempArr[midR]);
      tempArr.splice(midR, 1);
      tempArr.splice(mid, 1);
      tempArr.splice(midL, 1);
    }
  }
  console.log("balanced Array: ", balancedArr);
  this.value = balancedArr[0];
  this.left = undefined;
  this.right = undefined;
  for(var i = 1; i < balancedArr.length; i++){
    this.insert(balancedArr[i]);
  }
};
//
/*
 * Complexity: What is the time complexity of the above functions?
 */


