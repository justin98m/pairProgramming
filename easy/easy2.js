/*
Create a function that checks an array for prime numbers then inserts any primes into a new array.                               

Example1:                                                                                                                                       
Input: numArray = [1,2,3,4,5,6,7,8,9,10]
Output: primeArray = [2,3,5,7]

Example 2:												
Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
Output: primeArray = [19 ,29 ,47 , 83
*/


function isPrime(num){
  if (num == 2 || num == 3)
    return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0)
    return false;  
  for (let i = 5; i * i <= num ; i+=6)
    if (num % i == 0 || num % (i + 2) == 0)
      return false;
  return true;
}


function filterPrime(arr){
    return arr.filter(num => isPrime(num));
}

console.log(filterPrime([1,2,3,4,5,6,7,8,9,10]));// [2,3,5,7]
console.log(filterPrime([10, 18, 19, 29, 33, 35, 47, 66, 83]));//[19 ,29 ,47 , 83]