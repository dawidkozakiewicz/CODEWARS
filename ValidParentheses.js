/*Description:

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
//a very smart solution
/*
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}*/

//My solution
/*function validBraces(braces){
  var opposites={
      "(": ")",
      "{": "}",
      "[": "]"
      }
  if(braces.length % 2 !==0){ 
    return false;
  }
  if(braces.length===2){
    if(opposites[braces[0]]!==braces[1]){
      return false;
    }else{
      return true;
    }
  }else{
    for(var i=0; i<braces.length; i++){
      if(opposites[braces[i]]===braces[i+1]){
        var newBraces=braces.slice(0, i)+braces.slice(i+2);
        return validBraces(newBraces);
      }
    }
    return false;
  }
 
}
*/

//Another Solution using RegExp 

function validBraces(braces){
    while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
    return !braces.length;
   }
   //Another clever but ineffective solution
   function validBraces(braces){
     while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
       braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
     }
     return braces.length == 0;
   }