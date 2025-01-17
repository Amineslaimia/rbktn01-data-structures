

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
  	var entry = {};
  	entry[k] = v;
  	this._storage.set(index,entry)
  } else {
		this._storage.get(index)[k] = v
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   return this._storage.get(index)[k]
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 	delete this._storage.get(index)[k]
 	if(Object.keys(this._storage.get(index)).length === 0){
 		delete this._storage.get(index)
 	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert=> O(1)
 * retrieve=> O(1)
 * remove=> O(1)
 */


