var Stack = function() {
	var newObj = Object.create(stackMethods);

	newObj.storage = {};
	newObj.key = 1;

	return newObj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.key] = value;
  this.key++;
}

stackMethods.pop = function(){
	var len = Object.keys(this.storage)[Object.keys(this.storage).length-1]
  var temp = this.storage[len];
  delete this.storage[len];
  return temp;
}

stackMethods.size = function() {
  if(Object.keys(this.storage).length === 0){
    return 0;
  }
  
  return Object.keys(this.storage).length
};


