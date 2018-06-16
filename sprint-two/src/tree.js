// var _ = require ('underscore');

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.counter = 0;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = {};
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);

  tree.parent = this;
  this.children[this.counter++] = tree;

};

treeMethods.contains = function (target) {
  var doesContain = false;

  var checkNode = function(node) {
    if (node.value === target) {
      doesContain = true;
    }
    
    for (var child in node.children) {
      checkNode(node.children[child]);
    }
  };

  checkNode(this);
  return doesContain;
};

treeMethods.removeFromParent = function() {
  //remove from parent, dissassociates the tree with parent in both directions 
  for (var childNum in this.parent.children) {
    var childNode = this.parent.children[childNum];
    if (childNode.value === this.value) {
      delete this.parent.children[childNum];
    }
  }

  this.parent = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addchild O(1)
 * contains O(n)
 * removeFromParent O(n)
 */
