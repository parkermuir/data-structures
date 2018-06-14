var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //input any string, update set with that string via keyname potentially
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = null;
  }
};

setPrototype.contains = function(item) {
  //take any string and return a boolean if it can be found in the set
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  //remove any string via key
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add -- O(1)
contains -- O(1)
remove -- O(1)
 */
