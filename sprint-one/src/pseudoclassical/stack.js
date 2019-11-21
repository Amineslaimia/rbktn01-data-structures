var Stack = function() {
	this.key = 1;
	this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.key] = value;
  this.key++;
}

Stack.prototype.pop = function(){
  var len = Object.keys(this.storage)[Object.keys(this.storage).length-1]
  var temp = this.storage[len];
  delete this.storage[len];
  return temp;
}

Stack.prototype.size = function() {
  if(Object.keys(this.storage).length === 0){
    return 0;
  }
  
  return Object.keys(this.storage).length
};

var newStack = Stack();


