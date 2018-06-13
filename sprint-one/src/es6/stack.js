class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, counter) {
    this.storage = {};
    this.counter = 0;
  }

  push(string) {
    this.storage[this.counter++] = string;
  }

  pop() {
    if (this.counter > 0) {
      var popped = this.storage[--this.counter];
      delete this.storage[this.counter];
      return popped;
    }
  }

  size() {
    return this.counter;
  }
}