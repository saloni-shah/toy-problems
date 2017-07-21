/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var each = function(collection, iterator) {
  if(collection.length) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  }
};
var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var obj = {};
  each(string, (value) => {
    if(obj[value]){
      obj[value]++;
    } else {
      obj[value] = 1;
    }
  });
  for(var key in obj){
    if(obj[key] === 1){
      return key;
    }
  }
};