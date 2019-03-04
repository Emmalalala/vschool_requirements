/*Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise 
print "Even".*/

function alternateLoops(){
  for(let i = 0; i <= 100; i++){
      if(i % 2 === 0){
        console.log("Even");
      } else {
        console.log("Odd");
    }
  }
}
console.log(alternateLoops());