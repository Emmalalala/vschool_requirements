// //Write a function that accepts two numbers as parameters, and returns the sum
function sum(num1, num2) {
     return num1 + num2;
}
 console.log(sum(3, 4)); // -> 9
 console.log(sum(10, 11)); // -> 21

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function returnLargest(int1, int2, int3) {
  var nums = [int1, int2, int3];
    let j = 0;
    for (var i = 0; i < nums.length; i++) {
//the numbers that are greater than "j" (0) will be stored within "j" 
      if (nums[i] > j) {
//this will recur as long as the number is greater than the present value "j".
          j = nums[i];
      }
  }
//the function ends with the final storage of "j" which is returned when the method is called.
  return j;
}
console.log(returnLargest(3, 8, 4));


//Write a function that accepts one number 
//as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")
function evenOrOdd(num) {
//no comment
  if (num % 2 === 0) {
    return num + " is even";
  } else {
    return num + " is odd";
    }
}
console.log(evenOrOdd(56));

// Write a function that accepts a string as a parameter. If the length of the string is 
// less than or equal to twenty characters long, return the string concatenated with itself 
// (string + string). If the string is more than twenty characters 
//long, return the first half of the string.
var str;
//place-holder for the mutated string
var position;
function doSomethingStr(str) {
    if (str.length <= 20) {
        console.log(str + str);
    } else {
        //halves the string's length and stores the new length in "position".
        position = str.length / 2 - str.length;
        //Storing in "str", a slice() that requires a starting position and ending place, the beginning of 
        //the string "0", will show up until to the stopping point, "position".
        str = str.slice(0, position);
        console.log(str);
    }
}

console.log(doSomethingStr("hello world"));

// ###################################### OPTIONAL CHALLENGES ##########################################################
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and 
//return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// So if n were 6, the sum of 1+1+2+3+5+8 would be 20

// Don't hardcode the sequence.
var fibSeq = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function fibonacciSeqSum(n) {
    //total value of added numbers within the sequence
    var total = 0;
    //"n" dictates the incrementation of "i"
    for (let i = 0; i < n; i++) {
        //"i" is plugged into the sequence, where each time it is added to the "total" value. (0+1) (1+1)...
        total = total + fibSeq[i];
    }
    //"total" is now totalled and "return" ends the function.
    return total;
}
console.log(fibonacciSeqSum(6));

// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string. ( White spaces count as a letter )

// declare a string variable
var words;
function showMostFrequentLetter(words) {
    var obj = {}
    //create a variable in which any frequency can be stored.
    var y;
    //variable in which the number of white spaces can be stored.
    var space = 0;

    var charactersArrays = words.split("")
    //count the amount of spaces in the string, store it in "space".
    for (let i = 0; i < charactersArrays.length; i++) {
        if (obj[charactersArrays[i]]){
            obj[charactersArrays[i]] = obj[charactersArrays[i]] + 1
        }  else {
            obj[charactersArrays[i]] = 1
        }
    }
    var answer;
    var max = 0
    for (i in obj){
        if (obj[i] > max){
            max = obj[i]
            answer = i
        }
    }
    return answer
    //Declare a variable for the new array from the string "words"
}
console.log(showMostFrequentLetter("tttyyyyyypppeeewriters rule"));


//Split the string into an array
//Push each character to an object




