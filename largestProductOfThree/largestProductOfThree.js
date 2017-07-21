/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var product = 1;
  if(array.length > 2){
    array = array.sort(function(a,b) { return b - a;});
    var max  = array[0] * array[1] * array[2];
    var min = array[array.length-1] * array[array.length-2] * array[0];
    product = max > min ? max : min;
  }
  return product;
};