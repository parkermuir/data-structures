var BinarySearchTree = function(value) {

  var instance = Object.create(bstMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;


  return instance;
};

var bstMethods = {};

bstMethods.insert = function(value) {

  var goLeft = (value < this.value);
  var goRight = (value > this.value);

  if (goLeft && this.left !== null) {
    this.left.insert(value);
  } else if (goLeft && this.left == null) {
    this.left = BinarySearchTree(value); 
  } else if (goRight && this.right !== null) {
    this.right.insert(value);
  } else if (goRight && this.right === null) {
    this.right = BinarySearchTree(value);
  }

};

bstMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  var goLeft = (value < this.value);
  var goRight = (value > this.value);

  if (goLeft && this.left !== null) {
    if (this.left.contains(value)) {
      return true;
    }
  } else if (goRight && this.right !== null) {
    if (this.right.contains(value)) {
      return true;
    }
  }

  return false;
};

bstMethods.depthFirstLog = function(cb) {
  //run the cb on this.value
  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
