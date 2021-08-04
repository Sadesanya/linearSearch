// Linear Search
// - Create an array of at least 10 values.

// - Take an input from the user to look for in the array

// - Find and display the total number of occurrences of the user input value in the array

// - Also, display the positions in which they occur.      HINT: Create another array for keeping track of positions

// var prompt = require('prompt-sync')();
// var n = prompt('which number are we searching for?');


var prompt = require('prompt-sync')();
var num = prompt('What num are you looking for? ')

array = [12, 32, 4, 9, 5, -1, 100, -5, -22, -40, 5, 100, 9, 9, 100, 4];
counter = 0;
found = false
position=[]
for (let i = 0; i < array.length; i++) {
  if (num == array[i]) {
    counter++;
    position.push(i+1)
    found=true
  }
}
console.log('Total occurrences of ' + num + ': ' + counter)

// console.log('Number found in ' + (i + 1) + ' position');

if (!found) {
console.log('Number not found')}
