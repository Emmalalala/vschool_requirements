var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

function numOfComs() {
    //list initial amount of "computer".
    var computer = 0;
    for (let i = 0; i < officeItems.length; i++) {
        //for each item "i" in the array that = "computer",
        if (officeItems[i] === "computer") {
            //add one to "computer" counter 
            computer++;
        }
    }
    return computer;
}

console.log(numOfComs());

// Loop through the following array and log to the console "old enough" if 
// they are 18 or older, and "not old enough" if thy aren't 18.
var movieGoers = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
] 

function oldEnough(){
    for(let i = 0; i < movieGoers.length; i++){
        if(movieGoers[i].age >= 18){
            var statement = "old enough";
        } else {
            var statement = "not old enough";
        }
        var gender = (movieGoers[i].gender === "male") ? "HIM" : "HER";
        console.log(movieGoers[i].name + " is " + statement + " to see Mad Max, don't let " + gender +" in.")
    }
}
oldEnough();

// Imagine you have a button that toggles a light on and off. Loop through the following 
// array of numbers and toggle the button the numbers of times for each number. The array 
// [2, 3, 2] would toggle the button 7 times.

//var light = "Off";
var total = 0;
function lightOnOff(){
    var lightArr = [9, 3, 4, 2];
    for(var i = 0; i < lightArr.length; i++){
        total = total + lightArr[i];
        // console.log(total);
    } //return light;
    if(total % 2 === 0){
        return "Off";
    } else {
        return "On";
    }
}

// The light is off to start with. Log to the console whether or not the light is on at the end.
console.log(lightOnOff()); 