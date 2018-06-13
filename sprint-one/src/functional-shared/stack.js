var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.counter = 0;

  _.extend(instance, stackMethods);

  return instance;
};

stackMethods = {
  
  push: function(string) {
    this.storage[this.counter++] = string;
  },

  pop: function() {
    if (this.counter > 0) {
      var popped = this.storage[--this.counter];
      delete this.storage[this.counter];
      return popped;
    }
  },

  size: function() {
    return this.counter;
  }
};

