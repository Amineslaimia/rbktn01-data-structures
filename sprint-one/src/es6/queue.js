class Queue {
  constructor() {
  	this.key = 1;
  	this.storage = {};
  }

  enqueue(value) {
  	this.storage[this.key] = value;
	this.key++;
  }

  dequeue() {
  	if(Object.keys(this.storage).length === 0){
		return 'NO!';
	} else {
	    var temp = this.storage[Object.keys(this.storage)[0]];
	    delete this.storage[Object.keys(this.storage)[0]];
	    return temp;	
	}
  }

  size(value) {
  	if(Object.keys(this.storage).length === 0){
		return 0;
	}
	return Object.keys(this.storage).length;
  }

}

var newQue = new Queue()