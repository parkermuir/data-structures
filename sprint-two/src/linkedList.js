var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var currHead = this.head;
    list.head = list.head.next;
    return currHead.value;
  };

  list.contains = function(target) {
    //maybe better to try using recursion here?
    var current = list.head;
    
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
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
 */
