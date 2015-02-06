var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

//  O(1) Constant
  list.addToTail = function(value){
    if (list.head === null && list.tail === null){
      list.head = Node(value);
      list.tail = list.head;
    }else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

//  O(1)
  list.removeHead = function(){
    if(list.head !== null) {
      var result = list.head.value;
      list.head = list.head.next;
    }
    return result;
  };

//  O(N)
  list.contains = function(target){
    var searchList = function(target, node) {
      if( node.value === target ){
        return true;
      } else if( node.next === null ){
        return false;
      } else {
        return searchList(target, node.next);
      }
    };
    return searchList(target, list.head);
  };

  return list;
};


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
