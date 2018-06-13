var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.counter = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  this.storage[this.counter++] = string;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var popped = this.storage[--this.counter];
    delete this.storage[this.counter];
    return popped;
  }
  
};

stackMethods.size = function() {
  return this.counter;
};