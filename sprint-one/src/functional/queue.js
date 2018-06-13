var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (typeof value === 'string') {
      someInstance[end++] = value;
    }
  };

  someInstance.dequeue = function() {
    if (front < end) {
      var frontVal = someInstance[front];
      delete someInstance[front];
      front++;
      return frontVal;
    }
  };

  someInstance.size = function() {
    return end - front;
  };

  return someInstance;
};
