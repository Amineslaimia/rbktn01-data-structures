var Tree = function(value) {
  var newTree = Object.create(treeMethods);
 
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me => K

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	for (var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target){
    	return true
    }
    if(check(this.children[i],target)){
    	return true
    }else{
    	continue
    }
	}
	return false
};


function check (child,target){
	if(child.children.length !== 0){
		for (var i = 0; i < child.children.length; i++) {
		 if(child.children[i].value === target){
		 	return true
		 }
		}
	}else{
		return false
	}
}


/*
 * Complexity: What is the time complexity of the above functions?
 addChild O(1)
 contains O(n)
 */
