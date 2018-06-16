
//has function provided is getIndexBelowMaxForKey

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    var bucket = [[k, v]];
    this._storage.set(index, bucket);
  } else {
    var bucket = this._storage.get(index);

    var bucketIndex = -1;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucketIndex = i;
      } 
    }

    if (bucketIndex > -1) {
      bucket[bucketIndex][1] = v;
    } else {
      bucket[bucket.length] = [k, v];
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  console.log('Inside retrieve : ', bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  bucket.forEach(function (item, i) {
    if (item[0] === k) {
      bucket.splice(i, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(1) ~ O(n)
 * retrieve - O(1) ~ O(n)
 * remove - O(1) ~ O(n)
 */


