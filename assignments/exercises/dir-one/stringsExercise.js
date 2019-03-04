//Make a function that will return any given string into 
//all caps followed by the same string all lowercase.

let capsLower = str1 => {
    str1 = str1.toLowerCase();
    let str2 = str1.toUpperCase();
    console.log(str1 + " " + str2);
}
capsLower("Hello World");

//Make a function that returns a number half the length, 
//and rounded down. You'll need to use Math.floor().

let halfLength = str3 => {
    let half = str3.length / 2;
    half = Math.floor(half);
    return half;
}
console.log(halfLength("What's up, doc?"));

//Make a function that uses slice() and the other functions you've written to return 
//the first half of the string

let firstHalf = str4 => {
    let newStr4 = halfLength(str4);
    str4 = str4.slice(0, newStr4);
    console.log(str4);
}
firstHalf('You look nice today');

// Make a function that takes a string and returns that string where the first 
// half is capitalized, and the second half is lower cased. (If the string 
// length is odd, capitalize the shorter of the first half.) 

let capAndLower = str5 => {
    let newStr5 = halfLength(str5);
    let str5First = str5.slice(0, newStr5);
    str5First = str5First.toUpperCase();
    let lastIndex = (str5.length - 1) - newStr5;
    let str5Last = str5.slice(lastIndex);
    str5Last = str5Last.toLowerCase();
    return str5First + str5Last;
}
console.log(capAndLower('Drew Barrymore'));

//Optional Code Challenge (This one is a step up in difficulty):
//Make a function that takes any string and capitalizes any character that follows a space.

let str6 = "I am so excited for school today!";


let capAfterSpace = str6 => {
    str6 = str6.split(" ");
    for (let i = 0; i < str6.length; i++) {
        str6[i] = str6[i].charAt(0).toUpperCase() + str6[i].slice(1);
    }
    return str6.join(" ")
}


console.log(capAfterSpace("I am so excited for school today!"));