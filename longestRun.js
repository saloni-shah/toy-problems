var longestRun = function(str) {
  var obj = {}; let max = 0; let ch = '';
  for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
    //console.log(obj[str[i]]);
    if(obj[str[i]] > max) {
      max = obj[str[i]];
      ch = str[i];
    }
  }
  let resultArr = [];
  resultArr.push(str.indexOf(ch),str.lastIndexOf(ch));
  return resultArr;
};
console.log(longestRun('abbbcc')); // [1, 3]
console.log(longestRun('aabbc'));  // [0, 1]
console.log(longestRun('abcd'));  