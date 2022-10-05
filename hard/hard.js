/*Write a function that takes in a string and returns a boolean value whether or not the string contains
 a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return 
 a true value
 
Example 1:
Input: str = “{hello world}” brackets(srt)
Output: True

Example 2:
Input: str = “{hello world]” brackets(srt)
Output: False


str = [hellor (there) { here is a (bracket)}]
*/


function brackets (str){
    if (str.includes('{')){
        //does the end bracket exist and is it after the opening bracket?
        if(str.indexOf('}') === -1 || str.indexOf('}') < str.indexOf('{')){
            return false;
        }
    }
    if (str.includes('[')){
        if(str.indexOf(']') === -1 || str.indexOf(']') < str.indexOf('[')){
            return false;
        }
    }
    if (str.includes('(')){
        if(str.indexOf(')') === -1 || str.indexOf(')') < str.indexOf('(')){
            return false;
        }
    }
      return true;
}

console.log(brackets("{hello world}")); //true 
console.log(brackets("[hellor (there) {")) ; //false 