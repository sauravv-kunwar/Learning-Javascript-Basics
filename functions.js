//Functions are called Fist Class Citizens in JS

// Function can be stored in a variable
// Function can be passed as an argument to another function
// Function can be returned from another function

function add(a,b)
{
    return a+b;

}
console.log(add);
console.log(add(5,8));


let sum = function (a,b)
{
    return a+b;
}
// console.log(sum(5,8));


let diff = function(a,b)
{
    return a-b;
}

function operate(operationFunction, a,b)
{
    return operationFunction(a,b);

}
console.log(operate(sum,10,3));
console.log(operate(diff,10,3));

// Arrow Function

let multiply = (a,b) => {
    return a*b;
}
console.log(multiply(4,5));

// Shorter Syntax for Arrow Function
let square = a => a*a;
console.log(square(6));


// function outer()
// { 
//     function inner()
//     {
//         console.log('hello');
//     }
//     return inner;

// }

// let returnedFuncVar = outer();
// console.log(returnedFuncVar);
// returnedFuncVar();


//Function + Lexical Scope = Closure

let a =100;
function outer()
{ 
    a =10;
    function inner()
    {
        console.log(a);
    }
    return inner;

}

let returnedFuncVar = outer();

a = 20;

a = 80;  // This will change the value of a in outer function as well because a is not defined in outer function so it will look for a in the parent scope which is global scope
console.log(returnedFuncVar);
returnedFuncVar();

// Closure is a combination of a function and its lexical environment.
// A closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// Common use case of closure is to create private variables
function counter()
{
    let count = 0; // private variable
    return function()
    {
        count++;
        return count;
    }
}           
