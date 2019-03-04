var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];











var chArray =()=> {
    // Remove the last item from the vegetable array.
    vegetables.pop();
    console.log(vegetables);
    // Remove the first item from the fruit array.
    fruit.shift();
    console.log(fruit);
    // Find the index of "orange."
    var o = fruit.indexOf("orange");
    console.log(o);
    // Add that number to the end of the fruit array.
    fruit.push(o);
    console.log(fruit);
    // Use the length property to find the length of the vegetable array.
    var vLength = vegetables.length;
    console.log(vLength);
    // Add that number to the end of the vegetable array.
    vegetables.push(vLength);
    console.log(vegetables);
    // Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = vegetables.concat(fruit);
    console.log("new", food);
    // Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);
    console.log("spliced", food);
    // Reverse your array.
    food.reverse();
    console.log("reverse",food);
    // Turn the aray into a string and return it.
    food = food.join(" ");
    console.log("string:",food);
    return food;
}

chArray();