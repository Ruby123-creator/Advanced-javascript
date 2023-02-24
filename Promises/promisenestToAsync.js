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