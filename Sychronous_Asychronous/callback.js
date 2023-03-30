// a callback function is a function which is:
// - passed as an argument to another function
// - invoked inside the outer function to which it is passed as an argument to complete some action

// payment
// order is placed/not

// here, the order completion depends on the status of payment


//Synchronous callback functions
function orderPlaced(callGetPaymentStatus) {  // this function depends on the getpaymentstatus which is passes as an argument in the function
    let result = callGetPaymentStatus();
    result ?
        console.log("payment successful, order has been placed") :
        console.log("payment failed, order could not be placed");
}

function getPaymentStatus() {
    return false;
}

orderPlaced(getPaymentStatus)




//ASynchronous callback functions
// Creating our own ice cream parlour
let stocks = {
    fruits: ['banana', "mango", "pineapple", "grapes"],
    holder: ["cone", "cup", "stick"],
    liquid: ["water", "ice"],
    toppings: ["choco chips", "sprinkles", "dry fruits"]
}

function order(fruitName, call_production) {   //pineapple , production function
    setTimeout(function () {
        console.log(`${stocks.fruits[fruitName]} has been picked by customer`);
        call_production()  
     }, 2000)
}

function production() {
    setTimeout(function () { 
        console.log("production has started");                    
        setTimeout(function () {
            console.log("the fruits have been chopped");  
            setTimeout(function () {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
                setTimeout(function () { 
                    console.log("start the machine");
                    setTimeout(function () { 
                        console.log(`ice cream is placed on ${stocks.holder[0]}`);
                        setTimeout(function () { 
                            console.log(`${stocks.toppings[1]} added`);
                            setTimeout(function () { 
                                console.log('serve the ice cream');
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000) 
}

order(2,production) //order starts from here

/*As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of ... that may include more loops, conditional statements and so on.

That’s sometimes called “CALLBACK HELL” or “PYRAMID OF DOOM.” 


Disadvantages of callback hell: It is hard to debug and add error handling to. It also reduces code readability
Callback Hell  – The main disadvantage of using callback is Callback Hell. Callback hell is essentially nested callbacks where each callback is dependent on previous callback.

promiseChaining is used to get rid of callback hells

*/

console.log("Lecture 3");

function getUsername(getAge) {
  const data = { username: "Avi" };
  //callback = getAge
  getAge(data, getGrade);
}

function getAge(data, getGrade) {
  //callback = getGrade
  getGrade({ ...data, age: 21 }, getPercentage);
}

function getGrade(data, getPercentage) {
  //callback = getPercentage
  getPercentage({ ...data, grade: "A+" }, printData);
}

function getPercentage(data, printData) {
  // callback = printData
  printData({ ...data, percentage: "90%" });
}

function printData(data) {
  console.log("DATA>>>", data);
}

getUsername(getAge);

//callback hell

function getUsers(callback) { // callback == function
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },  // users array in which find iterate
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);  // query solved after 1 sec
  }
  
  function findUser(username, callback) { //2
    getUsers((users) => {  // whole function used as parameter in get users
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser('john', console.log);//1