/*MEDIUM (1)
Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
Example 1:
Input: vowelChecker(‘b’)
Output: ‘This is not a vowel’
Example 2:
Input: vowelChecker(‘a’)
Output: ‘This is a vowel’
*/

function vowelChecker(x){
    x = x.toLowerCase();
    if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
        return x + ' is a vowel';
    } else {
        return x + ' is not a vowel';
    }
}
console.log(vowelChecker('a'));
console.log(vowelChecker('b'));
console.log(vowelChecker('A'));
console.log(vowelChecker('D'));
console.log(vowelChecker('E'));
