var Queue = function() {
	this.storage = {};
	this.key = 1;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.key] = value;
	this.key++;
};

Queue.prototype.dequeue = function(value) {
	if(Object.keys(this.storage).length === 0){
		return 'NO!';
	} else {
	    var temp = this.storage[Object.keys(this.storage)[0]];
	    delete this.storage[Object.keys(this.storage)[0]];
	    return temp;	
	}
};

Queue.prototype.size = function(value) {
	if(Object.keys(this.storage).length === 0){
		return 0;
	}
	return Object.keys(this.storage).length;
};

var newQue = new Queue();