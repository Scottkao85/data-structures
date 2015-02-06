var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null && list.tail === null){
      list.head = Node(value);
      list.tail = list.head;
      // list.tail points to the new Node(value) we're creating
    }else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }


  };

  list.removeHead = function(){
    if(list.head !== null) {
      var result = list.head.value;
      var temp = list.head;
      list.head = list.head.next;
      delete temp;
    }
    return result;
  };

  list.contains = function(target){
    var searchList = function(target, node) {
      if( node.next === null ){
        return false;
      } else if( node.value === target ){
        return true;
      } else {
        searchList(target, node.next);
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
