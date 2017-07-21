/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key,value) {
    var index = getIndexBelowMaxForKey(key,storageLimit);
    if(storage[index] === undefined){
      var bucket = [];
      storage[index] = bucket;
    } 
    var keyVal = [];
    keyVal.push(key);
    keyVal.push(value);
    var flag = false;
    for(var i=0; i<storage[index].length; i++){
      if(storage[index][i][0] === key){
        flag = true;
        storage[index][i][1] = value;
        return;
      }
    }
    if(!flag){
      storage[index].push(keyVal);
    }
    // TODO: implement `insert()`

  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key,storageLimit);
    var bucket = storage[index];
    for(var i=0; i<bucket.length; i++){

      if(bucket[i]!== undefined && bucket[i][0] === key){
        return bucket[i][1];
      }
    }
    // TODO: implement `retrieve()`
  };

  result.remove = function(key,value) {
    // TODO: implement `remove()`
    var index = getIndexBelowMaxForKey(key,storageLimit);
    var bucket = storage[index];
    for(var i=0; i<bucket.length; i++){
      if(bucket[i][0] === key && bucket[i][1] === value){
        delete bucket[i];
      }
    }
  };

  return result;
};

// var hash = makeHashTable();
// hash.insert('a', 'is for apple');
// hash.insert('b', 'is for banana');
// console.log(hash.retrieve('a'));
// console.log(hash.retrieve('b'));
// hash.insert('a', 1);
// hash.insert('e', 2);
// hash.insert('i', 3);
// hash.insert('m', 4);
// console.log(hash.retrieve('a'));
// console.log(hash.retrieve('e'));
// console.log(hash.retrieve('i'));
// console.log(hash.retrieve('m'));
// hash.remove('a',1);
// console.log(hash.retrieve('a'));
// console.log(hash.retrieve('b'));