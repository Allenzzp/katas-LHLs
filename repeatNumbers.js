//Kata 8 - Repeating Numbers
const repeatNumbers = function(data) {
  const result = [];
  for (let array of data) {
    let repeatNum = array[0];
    let repeatTimes = array[1];
    let subResult = "";
    for (let i = 1; i <= repeatTimes; i++) {
      subResult += repeatNum;
    }
    result.push(subResult);
  }
  return result.toString();
  
};

//test cases
// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
  
