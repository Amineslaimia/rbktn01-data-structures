var Stack = function() {
  var newObj = {};
  newObj.storage = {};
  newObj.key = 1;
  newObj.size = size;
  newObj.push = push;
  newObj.pop = pop;

  extend(newObj, stackMethods);
  return newObj;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var push = function(value){
  this.storage[this.key] = value;
  this.key++;
}

var pop = function(){
	var len = Object.keys(this.storage)[Object.keys(this.storage).length-1]
  var temp = this.storage[len];
  delete this.storage[len];
  return temp;
}

var size = function() {
  if(Object.keys(this.storage).length === 0){
    return 0;
  }
  
  return Object.keys(this.storage).length
};