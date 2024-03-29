/**What is promises??
 A Promise is   simply a placeholder for an asynchronous task which is yet to be completed. When you define a promise object in your script, instead of returning a value immediately, it returns a promise.

Take an example, suppose you make a promise to your friends that are next weekend you will take them to a party.

But actually, you don't know you will get time on the weekend or not, means either you are going to complete that promise or maybe not.

So there may be below chances-
So promises have three phases
Pending: You don't know you will get time or not

Fulfilled: You gave them a party
           OR
Rejected: You don't give a party to them

So promise start with the pending state then after fulfilled and at the end it in the Rejected state.

Operating System(Your friend)------->Google chrome(Promises)--------->User(you)

The new Promise constructor returns a promise object which has the following properties:
- state: Initially, the promise is in the pending state, then it can be in the fulfilled state when resolve() is called or it can be in the rejected state if reject() is called.
- result: Initially it is undefined, when resolve( value ) is called it contains the value or it contains an error if reject( error ) is returned.


 */


//how to create promises object

//Syntax to write promises
/*
let custom_name = new Promise(write the function which takes 2 parameters eg- resolve and reject
   ()=>{
  if(condition){
    resolve(" resolve data"); // these are functions which will be call  when the condition is true
  }
  else{
    reject("error data");  
  }


  //to use settimeout function
  setTimeout(()=>{
     if(condition){
    resolve(" resolve data"); // these are functions which will be call  when the condition is true
  }
  else{
    reject("error data");  
  }
  } ,delay time)
})


method-1
let onfulfillment = (value)=>{    // value is resolve data
  console.log(value)
}
let rejection = (error)=>{
  console.log(error);
}

to call promises:----
we call the promise by using then and catch method

custom_name.then(onfulfillment)
custom_name.catch(rejection)



method2
custom_name.then(onfulfillment wala function yhii likh do(value)=>{    // value is resolve data
  console.log(value)).catch(just write the rejection function here only  (error)=>{
  console.log(error);
} )


promise argument is called executor function. The executor function f is executed synchronously upon calling new Promise(f). type of promise is function.
Promises ease the task of writing complex asynchronous code. True until and unless promise chaining comes.
promise is a webAPi method().
If the method then() is invoked at a time its promise is settled, then it executes the corresponding callback argument synchronously.




//
*/

let myPromise = new Promise(function(resolve, reject) {
    
    setTimeout(() => {
        resolve({
          data: ["result1", "result2", "result3", "result4"],
          status: "200 OK",
        });
      }, 7000);
  });

  console.log(myPromise)

  function search() {
    console.log("Searching...");
  
    myPromise
      .then((response) => {
        const myArray = response.data;
        let pTag = document.getElementById("results");
        myArray.map((result) => {
          console.log(result);
          pTag.innerHTML += result;
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(myPromise);
      });
  }


  

  /**In the executor function, resolve callback indicates success which results in the execution of then callback. Execution of reject callback indicates an error which will run catch callback.

 */



  let partyPromise = true;
let giveParty = new Promise(function (resolve, reject) {
 setTimeout(() => {
 if (partyPromise) {
 resolve("i give party to my friend");
 console.log("party successfull");
 } else {
 reject("I have not giving any party");
 }
 }, 5*1000);
});

console.log(giveParty);// promise pending  till 5sec after that it shows fulfilled 




// The then() the method is used to schedule a callback to be executed when the promise is successfully resolved.
// The catch() If you want to schedule a callback to be executed when the promise is rejected.
// The final() It is used to execute the same piece of code whether the promise is fulfilled or rejected.
function makePromise(partyPromise) {
    return new Promise(function (resolve, reject) {
       setTimeout(() => {
           if (partyPromise) {
               resolve("I given party to friends");
           } else {
               reject("I have not given party to friends");
           }
       },  7000);
   });
   }
   let partyPromise1 = makePromise(true);
  


       function decision(){
        console.log("waiting for your decision")
        partyPromise1
        .then((resolve) => console.log(resolve))
        .catch(reason => console.log(reason))
        .finally(() => console.log("lets back to  home !"));
 
       }


       /**



Key points:

1.Use promises whenever you are using async or blocking code.
2. A promise is an object that returns a value in the future.
3. A promise starts in the pending state and ends in either a fulfilled state or a rejected state.
resolve maps to then and reject maps to catch
4. If something needs to be done in both cases use .finally 
*/

let num = prompt("enter the value")
let prom = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        if (num == 20) {
            resolve("This resolve should come in the then block");
          } else {
            reject("This reject should come in the catch block");
          }
    } , 5000)
  });
  prom
    .then((msg) => console.log("then block -->", msg))
    .catch((msg) => console.log("catch block -->", msg));

