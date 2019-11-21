var Queue = function() {
  var someInstance = {};
  var key = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) { 
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var temp = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]]
    return temp;
  };

  someInstance.size = function() {
    if (Object.keys(storage).length === 0){
      return 0;
    }
    return Object.keys(storage).length
  };

  return someInstance;
};
