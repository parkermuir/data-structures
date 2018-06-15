
//has function provided is getIndexBelowMaxForKey

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var temp = this._storage.get(index);
  if (temp === undefined) {
    var temp = {};
  }
  temp[k] = v;
  this._storage.set(index, temp);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var values = this._storage.get(index);

  return values[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  delete temp[k];
  this._storage.set(index, temp);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


