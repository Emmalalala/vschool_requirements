//Write a for loop that prints to the console the numbers 0 through 9.

for(let i = 0; i < 10; i++){
    console.log(i);
}

//Write a for loop that prints to the console 9 through 0.

for(let i = 10; i >= 0; i--){
    console.log(i);
}

//Write a for loop that prints these fruits to the console.

var fruit = ["banana", "orange", "apple", "kiwi"];
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//Write a for loop that will push the numbers 0 through 9 to an array.

let arr = []
for(let i = 0; i < 10; i++){
    
    arr.push(i)
}
console.log(arr)
//Write a for loop that prints to the console only even numbers 0 through 100.
for(let i = 0; i < 101; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newFruit = [];
for(let i = 0; i < fruit.length; i++){
 
  if(i % 2 === 0){
    newFruit.push(fruit[i]);
  }
}

console.log(newFruit);


//next exercise:
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

//Write a loop that will print out all the names of the people of the people array
for(let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var names = [];
var occupations = [];
for(let i = 0; i < peopleArray.length; i++){
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);
  

//Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other 
//occupation to another array starting with "Singer".

var otherName = [];
var otherOccupation = [];
for(let i = 0; i < peopleArray.length; i++){
  if(i % 2 === 0){
    otherName.push(peopleArray[i].name);
    otherOccupation.push(peopleArray[i].occupation);
  }
}
console.log(otherName);
console.log(otherOccupation);

//Create an array that mimics a grid like the following using nested for loops:

let crzyArr = [];


//   for(let i = 0; crzyArr.length < 3; i++){
//     let childArr = [];
//     for(let i = 0; childArr.length < 3; i++){
//       let childVal = 0;
//       childArr.push(childVal);
//     }
//     crzyArr.push(childArr);
//   }
// console.log(crzyArr);

// let crzyArr = [];


  for(let i = 0; crzyArr.length < 3; i++){
    let childArr = [];
    for(let j = 0; childArr.length < 3; j++){
      let childVal = j;
      childArr.push(childVal);
    }
    crzyArr.push(childArr);
  }
console.log(crzyArr);

// for(let i = 0; crzyArr.length < 3; i++){
//   let childArr = [];
//   for(let j = 0; childArr.length < 3; j++){
//     let childVal = i;
//     childArr.push(childVal);
//   }
//   crzyArr.push(childArr);
// }
// console.log(crzyArr);