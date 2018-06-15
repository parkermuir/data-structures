

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //needs an identifier
  //needs a collection of it's edges
  this.nodes[node] = null;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  delete this.edges[node];

  for (var edge in this.edges) {
    if (this.edges[edge].hasOwnProperty(node)) {
      delete this.edges[edge][node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode].hasOwnProperty(toNode)) {
    return true;
  } else if (this.edges[fromNode].hasOwnProperty(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.edges.hasOwnProperty(fromNode)) {
    this.edges[fromNode] = {};
  }

  if (!this.edges.hasOwnProperty(toNode)) {
    this.edges[toNode] = {};
  }
  
  this.edges[fromNode][toNode] = null;
  this.edges[toNode][fromNode] = null;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this.nodes) {
    cb(node);
  }
};

/*
Complexity: What is the time complexity of the above functions?

addNode -- O(1)
contains -- O(1)
removeNode -- O(1)
hasEdge -- O(1)
addEdge -- O(1)
removeEdge -- O(1)
forEachNode -- O(n)


 
 
 
 
 
 
 */


