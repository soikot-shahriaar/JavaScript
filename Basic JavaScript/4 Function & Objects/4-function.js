/*
 function parameter, function return
 1. no return no parameter
 2. has return no parameter
 3. no return has parameter
 4. has return has parameter
 5. multiple parameters
*/

/* 
function functionName(parameters){
    // function body
    //return
}
var returnValue = functionName(parameters value)
*/

function getAverage(assignment1, assignment2, assignment3) {
  const average = (assignment1 + assignment2 + assignment3) / 3;
  return average;
}
const assignment1Marks = 29;
const assignment2Marks = 58;
const assignment3Marks = 46;

var myAverage = getAverage(
  assignment1Marks,
  assignment2Marks,
  assignment3Marks
);
console.log(myAverage);
