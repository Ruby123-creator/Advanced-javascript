let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "", success: false });
      // reject("Password incorrect");
    }, 2000);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Data Found...");
      // reject(new Error("Not Found",code:404))
    }, 3000);
  });
  

  /*   Using promises, we can write asynchronous programs in a more manageable way. Using Async/Await syntax, a promise-based asynchronous code can be written in a synchronous format which saves a lot of time and code becomes scalable.
  The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.it also written promise object.
  Why Async function is better than normal promises??

  async is a keyword to write async function in normal function
 1. async function functionName (arguments) {
 // Do something asynchronous
}
You can also use it in an arrow-function.

2. const functionName = async (arguments) => {
 // Do something asynchronous
}
  
 Asynchronous functions always return promises
It doesn’t matter what you return. The returned value will always be a promise.
*/
const getOne1 = async ()=> { 
 return 1 
}
const promise = getOne1()
console.log(promise) // Promise 
 

/**
 * The await keyword
When you call a promise, you handle the next step in a then call, like this:
*/
const getOne = async _ => { 
 return 1 
}
getOne()
 .then(value => {
 console.log(value) // 1
 })
 /*
The await keyword lets you wait for the promise to resolve. Once the promise is resolved, it returns the parameter passed into the then call.
*/
const test = async _ => {
 const one = await getOne()
 console.log(one) // 1
}
test()
 
  // if you dont want to use await then no nees to write async function 
  /**
   * (If you return await something, you resolve the original promise first. Then, you create a new promise from the resolved value. return await effectively does nothing. No need for the extra step).
https://medium.com/@zellwk/an-introduction-to-javascripts-async-and-await-edb313356677

   */
  async function login() {
    console.log("Logging in...");
  
    // promise1
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.success) {
    //       promise2.then((response2) => {
    //         console.log(response2);
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  
    try {
      const data1 = await promise1;
      console.log("DATA1>>>", data1);
      if (data1.success) {
        const data2 = await promise2;
        console.log("DATA2>>>", data2);
      } else {
        console.log("Password incorrect, no data and success was false");
      }
    } catch (e) {
      console.log("Error");
    }
  }
  
  login();


  //function which returns promise after 2 seconds of delay
function resolveAfter2Seconds() {
  return new Promise(resolve => {
  setTimeout(() => {
  resolve('resolved');
  }, 2000);
  });
 }
 
 //async function which is asyncronous which uses await to make all statements below to wait while resolveAfter2Seconds()
 //function gets executed and returns new promise using resolve("resolved") as "resolved"
 
 async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
 }
 asyncCall();

 // Promise
function getFriends(personID) {
  return fetch(`http://my.api/friends?personID=${personID}`)
    .then(response => response.json())
    .then(result => {
       const someoneHasNoName = result.data.includes(friend => friend.name === null);
       if (someoneHasNoName) {
         throw new Error("Someone has no name");
       }
       return result.data
    })
}

// Async/Await
async function getFriends(personID) {
  const response = await fetch(`http://my.api/friends?personID=${personID}`)
  const result = await response.json()
  
  const someoneHasNoName = result.data.includes(friend => friend.name === null);
  if (someoneHasNoName) {
    throw new Error("Someone has no name");
  }
  
  return result.data
}

/**
 * One thing to note about async/await however is that the asynchronous code runs synchronously—each time an await is declared the value defined after it has to be resolved before the next instruction gets executed, meaning async/await could slow things down if you’re not careful.

Benefits of Asynchronous Programming

Organize your code in a much more neat and readable manner than the boilerplate code of traditional thread creation and handling. You write less code with async/await, which is more maintainable than with previous asynchronous programming methods such as basic tasks.
If you are using another asynchronous function which is depending on the first asynchronous function, you should use await to wait first one to finish instead of promise chaining. If there are multiple asynchronous functions that can be run in parallel, you can use promise

Clean Code. If you compare above code then async/await code is much cleaner compare to promises.
Error Handling. Async/await makes it finally possible to handle both synchronous and asynchronous errors with the same construct, good old try/catch. ...
Return Conditional Data. ...
Intermediate values. ...
Debugging.
 */