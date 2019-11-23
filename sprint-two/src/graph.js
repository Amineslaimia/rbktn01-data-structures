
// Instantiate a new graph
var Graph = function() {
	this.newGraph = [];
};

var Node = function(value){
	var node = {};
	node.value = value;
	node.edges = [];

	return node;
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.newGraph.push(Node(node));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var i = 0; i < this.newGraph.length; i++) {
		if(this.newGraph[i].value === node){
			return true
		}
	}
	return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for(var i = 0; i < this.newGraph.length; i++){
		if(this.newGraph[i].value === node){
			this.newGraph.splice(i, 1)
		} else {
			for(var j = 0; j < this.newGraph[i].edges.length; j++){
				if(this.newGraph[i].edges[j].value === node){
					this.newGraph[i].edges.splice(j, 1)
				}
			}
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i = 0; i < this.newGraph.length; i++){
		if(this.newGraph[i].value === fromNode){
			for(var j = 0; j < this.newGraph[i].edges.length; j++){
				if(this.newGraph[i].edges[j].value === toNode){
					return true;
				}
			}
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	var toObj;
	var fromObj;
	for(var i = 0; i < this.newGraph.length; i++){
		if(this.newGraph[i].value === toNode){
			toObj = this.newGraph[i];
		}
		if(this.newGraph[i].value === fromNode){
			fromObj = this.newGraph[i]
		}
	}
	toObj.edges.push(fromObj);
	fromObj.edges.push(toObj);
	
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var toObj;
	var fromObj;	
	if(this.hasEdge(fromNode, toNode)){
		for(var i = 0; i < this.newGraph.length; i++){
			if(this.newGraph[i].value === toNode){
				toObj = this.newGraph[i];
			}
			if(this.newGraph[i].value === fromNode){
				fromObj = this.newGraph[i]
			}
		}

		for(var i = 0; i < toObj.edges.length; i++){
			if(toObj.edges[i].value === fromNode){
				toObj.edges.splice(i, 1);
			}
		}

		for(var i = 0; i < fromObj.edges.length; i++){
			if(fromObj.edges[i].value === toNode){
				fromObj.edges.splice(i, 1);
			}
		}
	}	
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var i = 0; i < this.newGraph.length; i++){
		cb(this.newGraph[i].value);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode => O(1)
 * contains => O(n)
 * removeNode => O(n)
 * hasEdge => O(n**2)
 * addEdge => O(n)
 * removeEdge => O(n)
 * forEachNode => O(n**3)
 */

var graph2 = new Graph();