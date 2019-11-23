var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value)
    node.next = list.tail
    list.tail = node;
    if(list.head === null){
      list.head = node;
    }
  };

  list.removeHead = function() {
    var result;
    if(list.head === null){
      return;
    }else if(list.head === list.tail){
      result = list.head.value;
      list.head = null;
      list.tail = null;
     }
    else{
      var pointer = list.tail
      var temp = pointer;
       while(pointer !== list.head){
        temp = pointer
        pointer = pointer.next
      }
      result = list.head.value;
      list.head = temp
      temp.next = null
     }

    return result;
  };

  list.contains = function(target) {
    var pointer = list.tail
            
    if(list.head.value === target){
      return true;
    }

    while(pointer !== list.head){
      if(pointer.value === target){
        return true;
      }
      pointer = pointer.next
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail  => O(1)
 * removeHead => O(n)
 * contains   => O(n)
 */
