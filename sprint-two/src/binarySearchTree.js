var BinarySearchTree = function(value) {
	var newBinTree = Object.create(binaryTreeMethods)
	newBinTree.value = value;
	newBinTree.left = null;
	newBinTree.right = null;
	
	return newBinTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
	if (value < this.value) {
	    if (this.left === null) {
	      this.left = BinarySearchTree(value);
	    } else {
      	  this.left.insert(value);
    	}
  	} else if (value > this.value) {
    	if (this.right === null) {
     	 this.right = BinarySearchTree(value);
    	} else {
     	 this.right.insert(value);
   	 }
 	}
}

binaryTreeMethods.contains = function(value){
	if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }
}

binaryTreeMethods.depthFirstLog = function(callback){
	
}



/*
 * Complexity: What is the time complexity of the above functions?
 *
 *
 *
 */
