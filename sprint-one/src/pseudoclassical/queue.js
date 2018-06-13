var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.first = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function(string) {
  this.storage[this.last++] = string;
};

Queue.prototype.dequeue = function() {
  if (this.first < this.last) {
    var firstItem = this.storage[this.first];
    delete this.storage[this.first++];
    return firstItem;
  }
};

Queue.prototype.size = function() {
  return this.last - this.first;
};


