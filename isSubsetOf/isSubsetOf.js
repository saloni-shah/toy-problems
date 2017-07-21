/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
//First Method
var each = function(collection, iterator) {
  if(Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      iterator(collection[key], key, collection);
    }
  } 
};
Array.prototype.isSubsetOf = function (arr) {
  // your code here
  let target = this;
  var status = true;
  each(target, (value) => {
    if(typeof value === 'object'){
      if(!arr.includes(JSON.stringify(value))){
        status = false;
      }
    } else {
      if(!arr.includes(value)){
        status = false;
      }
    }
  });
  return status;
  
};
//Another Method
/*var objectify = function(arr){
  var obj = {};
  arr.forEach(function(value){
    obj[value] = 1;
  });
  return obj;
}
Array.prototype.isSubsetOf = function (arr) {
  var obj = objectify(arr);
  return this.reduce(function(acc, value) {
    if(!obj[value]){
      return false;
    }
    return acc;
  }, true);
};*/
var a = ['commit','push']
console.log(a.isSubsetOf(['commit','rebase','push','blame'])); // true

// NOTE: You should disregard duplicates in the set.
var b = ['merge','reset','reset']
console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true 

var c = [{a:'abc'}]
console.log(c.isSubsetOf([{a:'abc'},{b:'abc'}])); 