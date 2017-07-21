/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  var uniquePaths = 0;
  var findPaths = function(i,j){
    if(i === n-1 && j=== n-1){
      uniquePaths++;
      return;
    }
    if(i < 0 || i >=n || j < 0 || j >=n){
      return;
    }
    if(board.hasBeenVisited(i,j)){
      return;
    } else {
      board.togglePiece(i,j);
      return robotPaths(n,board,i,j+1);
      return robotPaths(n,board,i+1,j);
    }
  }
  findPaths(0, 0);
  return uniquePaths;
};

var board = makeBoard(4);
console.log(board);
console.log(robotPaths(4,board,0,0));

