// // Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var newFruit = [];
// for(var i = 0; i < fruit.length; i++){
//     if(i % 2 === 0){
//      newFruit.push(fruit[i]);
//     }
// }
// console.log(newFruit);

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
// // Write a loop that will print out all the names of the people of the people array
// for(let i = 0; i < peopleArray.length; i++){
//   console.log(peopleArray[i].name);


// //Write a loop that pushes the names into a names array, 
// //and the occupations into an occupations array

// var namesArr = [];
// var occupationsArr = [];
// for(let i = 0; i < peopleArray.length; i++){
//   namesArr.push(peopleArray[i].name);
//   occupationsArr.push(peopleArray[i].occupation);
// }
// console.log(namesArr);
// console.log(occupationsArr);

// Write a loop that pushes every other name to an array starting with 
// "Harrison Ford", and every other occupation to another array starting with "Singer".
var newName = [];
var newOccupation = [];
for(let j = 0; j < peopleArray.length; j++){
  if(j % 2 === 0){
    newName.push(peopleArray[j].name);
    newOccupation.push(peopleArray[j].occupation);
  }
}
console.log(newName);
console.log(newOccupation);
