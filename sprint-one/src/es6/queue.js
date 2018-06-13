class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, first, last) {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(string) {
    this.storage[this.last++] = string;
  }

  dequeue() {
    if (this.first < this.last) {
      var firstItem = this.storage[this.first];
      delete this.storage[this.first++];
      return firstItem;
    }
  }

  size() {
    return this.last - this.first;
  }
}
