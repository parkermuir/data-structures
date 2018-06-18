
//has function provided is getIndexBelowMaxForKey

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var temp = tuple[1];
      tuple[1] = v;
      this._storage.set(index, bucket);
      return temp;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index, k);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var temp = tuple[1];
      bucket.splice(i, 1);
      return temp;
    }
  }

















  // var bucket = this._storage.get(index);
  // bucket.forEach(function (item, i) {
  //   if (item[0] === k) {
  //     bucket.splice(i, 1);
  //   }
  // });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(1) ~ O(n)
 * retrieve - O(1) ~ O(n)
 * remove - O(1) ~ O(n)
 */


