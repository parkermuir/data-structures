var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var node = Node(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function () {
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

// modules.export = linkedList;

/*
 * Complexity: What is the time complexity of the above functions?
 * add to tail seem slike it could get worse the longer the list gets
 * remove head seems v fast
 * contains seems really slow and potentially inefficient
 */

var DoublyLinkedList = function () {
  var instance = {};
  instance.head = null; //pointer to first - thus never have previous
  instance.tail = null; //last/front - thus will never have next

  instance.addToTail = function (value) {
    var node = Node(value);
    node.value = value;
    node.next = null;
    node.prev = null;

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else if (this.head.next === null) {
      this.head.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      node.prev = this.tail;

      var temp = this.tail;
      temp.next = node;
      this.tail = node;

    }
  };

  instance.removeHead = function () {
    var temp = this.head.next;
    temp.prev = null;
    this.head = temp;

  };

  instance.contains = function (target) {
    var current = this.head;

    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  instance.addToHead = function (value) {
    var node = Node(value);
    node.next = this.head;
    this.head = node;
  };

  instance.removeTail = function () {
    this.tail = this.tail.prev;
    this.tail.next = null;
  };

  return instance;
};
