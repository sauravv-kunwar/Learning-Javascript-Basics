// Function Callbacks
//A callback in JavaScript is simply a function that is passed as an argument to another function, and then executed later, usually after some task is finished.

// event queue
// event loop 
function fetchData(callback)
{
    setTimeout(() => {
        let data = 'fetched data';
        callback(data,'server error');
    }, 2000);
}

function handleData(data,error)
{
    if(error)
    {
        console.log(error);

    }
    else
    {
        console.log(data);
    }
}

console.log('start');

fetchData(handleData);



// Problems with Callbacks
// 1. Callback Hell. or Pyramid of Doom
// 2. Difficult to handle errors
// 3. Inversion of Control

// Solutions to Callback Problems
// 1. Promises
// 2. Async/Await

asyncOperation, (result) => {
    asyncOperation2(result, (result2) => {
        asyncOperation3(result2, (result3) => {
            // and so on...
        });
    });
}


// Promises 
//A Promise is an object used to handle asynchronous operations in JavaScript.
// It represents a value that will be available in the future.

// Why Promises are used

// JavaScript does not wait for slow tasks (like API calls or timers).
// Promises help JavaScript know when a task is completed and what to do next.

// Promise States

// A promise can be in one of these states:

// Pending – task is still running

// Fulfilled – task completed successfully

// Rejected – task failed

// Key Points

// Promises avoid callback hell

// They make asynchronous code clean and readable

// A promise result can be used only once

// Promises are the base of async/await


function getData()
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    })
}

getData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

async function fetchData()
{
    try{
        const data = await getData();
        console.log(data);
    }
    catch(error)
    {
        console.error(error)

    }
}

fetchData();



// Map
let numbers = [1,2,3,4,5];
console.log(numbers);
const doubleNUms = numbers.map(nums => nums * 2);
console.log(doubleNUms);

// Filter
const evenNums = numbers.filter(num => num % 2 === 0);
console.log(evenNums);

// Reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);   

