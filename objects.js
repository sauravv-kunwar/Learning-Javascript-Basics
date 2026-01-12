//Objects
let person = {
    nam:'Saurav',
    age:21
};
console.log(person);
console.log(typeof person); // Output: object


//Arrays

let selectedColors = ['red','blue','green'];
console.log(selectedColors);
console.log(selectedColors[0]); // Output: red
console.log(selectedColors[2]); // Output: green
console.log(typeof selectedColors); // Output: object

selectedColors[3] = 'pink'; // Adding new element
console.log(selectedColors);

console.log(selectedColors.length); // Output: 4

//Functions

function sum(a,b)
{
    return a + b;
}

console.log(sum(5,10)); // Output: 15
console.log(typeof sum); // Output: function        

// Function Expression
let multiply = function(a,b)
{
    return a * b;
}

console.log(multiply(5,10)); // Output: 50
console.log(typeof multiply); // Output: function   




