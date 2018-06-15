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
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var temp = this.head;
      list.head = list.head.next;
      return temp.value;
    }
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

modules.export = linkedList;

/*
 * Complexity: What is the time complexity of the above functions?
 * add to tail seem slike it could get worse the longer the list gets
 * remove head seems v fast
 * contains seems really slow and potentially inefficient
 */
