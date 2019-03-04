

//Write an if statement that prints "is greater than" if 5 is greater than 3
var isGreaterThan = (5 > 3) ? "is greater than" : "error"; 
console.log(isGreaterThan);

//Write an if statement that prints "is the length" if the length of "cat" is 3
var stringLength = ("cat".length === 3) ? "is the length" : "error";
console.log(stringLength);

//Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
let str1 = "cat";
let str2 = "dog";
var compareString = (str1 === str2) ? "error" : "not the same";
console.log(compareString);

/*Using the below object, write an if statement that prints 
<theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older),
 and the opposite if they are not older than 18.
*/

var person = {
  name: ["Bobby", "Billy", "Joel"],
  age: [12, 18, 21],
    allowed: function(){
      for (let i = 0; i < person.age.length; i++){
          if(person.name[i].charAt("B") === "B" && person.age[i] >= 18){
            console.log("Congrats, " + person.name[i] + " you are " + person.age[i] + " and may therefore attend this movie!");
              } else {
                console.log("too bad for you");
              }
        }
    }
}
console.log(person.allowed());

/*Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 
1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4 */


let one = "1";
let compareOne = () => {
  if(one === 1){
    console.log("strict");
  } else if(one == "1"){
    console.log("abstract");
  } else { 
    console.log("Not equal at all!");
  }
}
console.log(compareOne());

if(1 <= 2 && 2 === 4){
  console.log("yes");
} else {
  console.log("false");
}

// Write an if statement that checks to see if "dog" is a string
(typeof "dog" === "string") ? console.log("yes") : console.log("nope");
// Write an if statement that checks to see if "true" is a boolean
(typeof false === "boolean") ? console.log("Yup!") : console.log("Nah.");
// Write an if statement that checks to see if a variable has been defined or not
(typeof variable === undefined) ? console.log("Is defined.") : console.log("Is undefined.");
// Write an if statement asking if "s" greater than 12?
("s" > 12) ? console.log("You bet!") : console.log("Not a chance.");
// Try it with a few more letters and a few numbers.
(13 > 12) ? console.log("You bet!") : console.log("Not a chance.");
("s" > "12") ? console.log("You bet!") : console.log("Not a chance.");
("y" > 16) ? console.log("You bet!") : console.log("Not a chance.");
// Write a ternary statement that console.logs whether a number is odd or even. For example: */
let myVar =10;
(myVar % 2 === 0) ? console.log("Even") : console.log("Odd");