/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var result = [];
  // TODO: Implement me!
  for(var i=0;i<matrix.length;i++){
    if(i === 0){
      for(var j=0;j<matrix[i].length;j++){
        result.push(matrix[i][j]);
      }
    } else {
      result.push(matrix[i][matrix[i].length-1]);
    }
    if(i === matrix.length-1){
      for(var j=matrix[i].length-2;j>=0;j--){
        result.push(matrix[i][j]);
      }
    }
  }

  for(var l=matrix.length-2;l>0;l--){
    for(var j=0;j<matrix[l].length-1;j++){
      result.push(matrix[l][j]);
    }
  }
  return result;
};

console.log(spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]));
