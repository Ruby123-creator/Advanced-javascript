/* Synchronous js: Synchronous execution usually uses to code executing in sequence and the program is executed line by line, one line at a time. When a function is called, the program execution waits until that function returns before continuing to the next line of code. Synchronous code is also called blocking as it halts the program until all the resources are available.

*/
console.log("hi");
console.log("my name is suman");
console.log("i'm a software dev");

/* Ansynchronous js  :Asynchronous execution applies to execution that doesn’t run in the sequence it appears in the code. The program doesn’t wait for the task to complete and can move on to the next task. 
*/
setTimeout(() => {
    console.log("fetching pl data");
}, 5000);
setTimeout(() => {
    console.log("fetching mf data");
}, 2000);
setTimeout(() => {
    console.log("fetching health insurance data");
}, 3000);

/**Synchronous code wastes around 90% of CPU cycles waiting for the network or disk to get the data, but the Asynchronous code is much more performing.

Using Asynchronous code is a more efficient to have concurrency without dealing with multiple execution threads.

 */
// settimeout is a browser API
// it's a method that allows you to execute a piece of code after a certain time has passed
// Syntax: setTimeout(function, ms, param1, param2)

function greeting(fname, sname) {
    console.log("Hello there!", fname, sname );
}
let timeoutId = setTimeout(greeting, 5000, "Suman", "Ghosh")
//clearTimeout: it prevents the setTimeout() method from executing the function
// Syntax: clearTimeout(id)
// clearTimeout(timeoutId);

// setTimeout(function greeting(name) {
//     console.log("Hello there!", name);
// }, 5000, "name")

// setTimeout((name) => {
//     console.log("Hello there!", name);
// }, 5000, name)

// setTimeout(greeting("Suman"), 5000)
// the js will immediately execute the function without waiting, bcoz you're
// passing a function call and not a function reference as the first param
//greeting()====function call
//greeting ==== function acts as a parameter

// Interview question:
console.log("start");
setTimeout(() => {
    console.log("set timeout func");
}, 0)
console.log("end");

//**If you call setTimeout() with a time of 0 ms, the function you specify is not invoked right away. Instead, it is placed on a queue to be invoked “as soon as possible” after any currently pending event handlers finish running. */


//Another way to write asynchronous function
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise 1 Resolved");
      resolve("Promise 1");
    }, 500);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise 1 Resolved");
      resolve("Promise 2");
    }, 1000);
  });
  
  async function myAsyncFunction() {
    console.log("function running...");
    const res = await promise1.catch((e) => console.log(e));
    if (res.data) {
      console.log("res1", res);
      const res2 = await promise2;
      if (res2) {
        console.log("res2", res2);
      }
    }
    //   const res = await promise1.catch((e) => {
    //     console.log("err", e);
    //   });
  
    //   try {
    //     const res = await promise1;
    //   } catch (e) {
    //     console.log("err", e);
    //   }
  }
  
  myAsyncFunction();
  
  // function myNormalFunction() {
  //   console.log("1");
  //   promise1.then((res) => {
  //     console.log("res");
  //   });
  //   console.log("2");
  // }
  
  // myNormalFunction();

