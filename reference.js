// Reference Type -> Objects,Arrays,Functions

let course = 
{
    title : "JavaScript for Beginners",
    duration : 3,
    lessons : 20,
    instructor : "John Doe" 
}

console.log(course);
console.log(typeof course);


// Accessing Object Properties
// Dot Notation
console.log(course.title);
console.log(course.duration);
// Bracket Notation
console.log(course['lessons']);


// Value Type vs Reference Type
// Copying Value Type
x = 'saurav'
let y = x; // Copying the value of x to y
console.log(x); // Output: saurav
console.log(y); // Output: saurav

x = 'kunwar'
console.log(x);
console.log(y); // Output: saurav


// Copying Reference Type
let p = {name :'saurav'}
let q = p; // Copying the reference of p to q

p.name  = 'kunwar'
console.log(p); // Output: {'kunwar'}
console.log(q); // Output: {'kunwar'}

// Reference Type -> Objects,Arrays,Functions
let courses = ['javascript','python','dsa',6,true,null];

console.log(courses[0]);
console.log(courses[1]);
console.log(typeof courses); //Arrays are also objects in JS

// Modifying Array
courses[1] = 'java';
console.log(courses);

// Adding new element
courses[6] = 'c++';
console.log(courses);

// Length of Array
console.log(courses.length);


//Fuctions
//Functions are also objects in JS

function greet(name)
{
    console.log('Hello ' + name);
}

greet('Saurav');

// Function Expression
let greet2 = function(name)
{
    console.log('Hi ' + name);
}

greet2('Kunwar');

console.log(typeof greet); // function
console.log(typeof greet2); // function


// Hoisting in JavaScript

createCourse('Web Development'); // This works due to hoisting
function createCourse(courseName)
{
    console.log('Course Created: ' + courseName);
}


// HOE JS CODE IS EXECUTED
// 1. Parsing
// 2. Compilation
// 3. Execution

// During Parsing -> Creation of Global Execution Context
// During Compilation -> Memory Allocation for Variables and Functions
// During Execution -> Code is executed line by line

// HOISTING 
//-> Memory allocation for variables and functions during the compilation phase

// Function Hoisting -> Fully hoisted
// Variable Hoisting -> Only declaration is hoisted, not the initialization

console.log(a);
console.log(this.a);
console.log(window.a);


var a = 10;
console.log(a);
console.log(this.a);
console.log(window.a);

console.log(window);

console.log(this == window);


//let,var and const


// const c = 10;
// c = 300;
// console.log(c);   // here  const is more strict than var


//Temporal Dead Zone(TDZ)
// we will get ReferenceError if we try to access let and const before initialization

// console.log(d);
// console.log(e);
// console.log(f);
// let d = 20;
// const e = 30;
// var f = 40;    --> global variable is created as property of window object



// var -> Function Scoped
// let,const -> Block Scoped
{
    let a = 100;
    const b = 200;
    var g = 300;
    console.log(a);
    console.log(b);
    console.log(g);  // we can access c outside the block but not a and b
}

//Lexical Scope is a scope that is defined by the position of the variables and blocks in the source code.
console.log(g);
