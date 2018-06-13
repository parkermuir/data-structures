var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.first = 0;
  instance.last = 0;

  return instance;

};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  this.storage[this.last++] = string;
};

queueMethods.dequeue = function() {
  if (this.first < this.last) {
    var frontItem = this.storage[this.first];
    delete this.storage[this.first++];
    return frontItem;
  }
};

queueMethods.size = function() {
  return this.last - this.first;
};

