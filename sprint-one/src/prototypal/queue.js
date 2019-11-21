var Queue = function() {
	var newObj = Object.create(queueMethods);

	newObj.storage = {};
	newObj.key = 1;

	return newObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.key] = value;
	this.key++;
}

queueMethods.dequeue = function(){
	if(Object.keys(this.storage).length === 0){
		return 'NO!';
	} else {
	    var temp = this.storage[Object.keys(this.storage)[0]];
	    delete this.storage[Object.keys(this.storage)[0]];
	    return temp;	
	}
}

queueMethods.size = function(){
	if(Object.keys(this.storage).length === 0){
		return 0;
	}
	return Object.keys(this.storage).length;
}

