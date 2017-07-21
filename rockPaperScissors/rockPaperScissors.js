/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  // TODO: your solution here
  /*var source = ['rock','paper','scissors'];
  var result = [];
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      for(let k = 0; k < n; k++){
        var temp = [source[i],source[j],source[k]];
        result.push(temp);
      }
    }
  }
  return result;*/
  var source = ['rock','paper','scissors'];
  var result = [];
  var makeSequences = function (rounds, temp){
    //console.log(temp);
    if(rounds === 0){
      result.push(temp);
      return;
    }
    for(var i = 0; i < source.length; i++){
      var current = source[i];
      makeSequences(rounds - 1, temp.concat(current));
    }
  }
  makeSequences(n, []);
  return result;
};
console.log(rockPaperScissors(3));