var Queue = function() {
  var newObj = {};
  newObj.storage = {};
  newObj.key = 1;
  newObj.size = size;
  newObj.enqueue = enqueue;
  newObj.dequeue = dequeue;

  extend(newObj, queueMethods);
  return newObj;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

var enqueue = function(value){
	this.storage[this.key] = value;
	this.key++;
}

var size = function(){
	if(Object.keys(this.storage).length === 0){
		return 0;
	}
	return Object.keys(this.storage).length;
}

var dequeue = function() {
	if(Object.keys(this.storage).length === 0){
		return 'NO!';
	} else {
	    var temp = this.storage[Object.keys(this.storage)[0]];
	    delete this.storage[Object.keys(this.storage)[0]];
	    return temp;	
	}
	
};



