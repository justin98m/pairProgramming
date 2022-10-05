/* MEDIUM (2)
Create a function that accepts two strings, then determines whether or not the first string 
is an anagram of the second string by returning a boolean. 
Example:
Input: String 1: So dark the con of man
 String 2: Madonna of the Rocks
Output: True
Input: String 1: Things are good
	  String 2: Dogs eat ants
Output: False
*/
function isAnagram(string1, string2) {
    //remove whitespace and lowercase characters
    string1  = string1.split(" ").join("").toLowerCase();
    string2 = string2.split(" ").join("").toLowerCase();
    //Check if the strings w/o spaces are same length 
    if(string1.length != string2.length) return false;
    //then check if the same amount of each character exist in other string 
    //by deletign character from both strings as they appear 
    stringLengths = string1.length;
    let string1Arr = string1.split("");
    let string2Arr = string2.split("");
    while(string2Arr.length !== 0 ){
        //check from matching character
        if(string1Arr.includes(string2Arr[0])){
            //find position of character and remove it from string array            
            string1Arr.splice(string1Arr.indexOf(string2Arr[0]), 1);
            string2Arr.splice(0,1);
        } else {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("So dark the con of man", "Madonna of the Rocks"));//true
console.log(isAnagram('Things are good','Dogs eat ants'));//false
console.log(isAnagram('race car','racecar'));//true