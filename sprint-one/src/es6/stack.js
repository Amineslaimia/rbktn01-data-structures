class Stack {
  constructor() {
  	this.key = 1;
  	this.storage = {};
  }

  push(value){
  	this.storage[this.key] = value;
  	this.key++;
  }

  pop(){
  	var len = Object.keys(this.storage)[Object.keys(this.storage).length-1]
    var temp = this.storage[len];
    delete this.storage[len];
    return temp;
  }

  size(){
  	if(Object.keys(this.storage).length === 0){
    	return 0;
  	}
  
 		return Object.keys(this.storage).length
  }

}

var stack1 = new Stack();