var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function(string) {
  this.storage[this.counter++] = string;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var popped = this.storage[--this.counter];
    delete this.storage[this.counter];
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.counter;
};

