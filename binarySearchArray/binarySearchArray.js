/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
  var searchIndexOfElement = function(left, right){
    if(right - left >= 0) {
      var mid = parseInt((left+right)/2);
      if(target > array[mid]){
        return searchIndexOfElement(mid+1, right);
      } else if(target < array[mid]){
        return searchIndexOfElement(left, mid-1);
      } else if(target === array[mid]){
        return mid;
      }
    }
  }
  return searchIndexOfElement(0,array.length-1);
};

