var Set = function() {
  var set = Object.create(setPrototype);
  
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this[item] = null;
};

setPrototype.contains = function(item) {
	if(this[item] === undefined){
		return false
	}
	return true
};

setPrototype.remove = function(item) {
	delete this[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add => O(1)
 * contains => O(1)
 * remove => O(1) 
 */
