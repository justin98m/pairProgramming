// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
 
// Example 1:
// Input: gcd_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gcd_two_numbers(78,126)
// Output: 6

function gcd_two_numbers(num1,num2){
    //set max demoninator to 1; 
    let max = 1;
    //determine smaller of two inputs 
    let smallestNum = num1 < num2 ? num1 : num2;
    
    //loop
    for(let i = 1; i <= smallestNum; i++){
        if(num1 % i == 0 && num2 % i == 0){
            max = i;
        }
    }
    return max;
}
console.log(gcd_two_numbers(12,6));//6
console.log(gcd_two_numbers(100,10));//10
console.log(gcd_two_numbers(50,27));//1
console.log(gcd_two_numbers(16,42));//2
console.log(gcd_two_numbers(2984,45));//1
console.log(gcd_two_numbers(336,360)); // 24
console.log(gcd_two_numbers(78,126)) // 6