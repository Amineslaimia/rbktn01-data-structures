var Stack = function() {
  var someInstance = {};
  var key = 1;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    var len = Object.keys(storage)[Object.keys(storage).length-1]
    var temp = storage[len];
    delete storage[len];
    return temp;
  };

  someInstance.size = function() {
    if(Object.keys(storage).length === 0){
      return 0;
    }

    return Object.keys(storage).length
  };

  return someInstance;
};
