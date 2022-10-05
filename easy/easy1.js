
/*Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
Example:
Input: [2, 4, 7, 11, 15, 16]

Output: Even numbers: [2, 4, 16]
	  Odd Numbers: [7, 11, 15]
*/
        
function randomArray (arr){
    let evenArr = [];
    let oddArr = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        };
    }
    console.log(evenArr);
    console.log(oddArr);
}

randomArray([2, 4, 7, 11, 15, 16]);