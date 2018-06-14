// var _ = require ('underscore');

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.counter = 0;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = {}; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[this.counter++] = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
