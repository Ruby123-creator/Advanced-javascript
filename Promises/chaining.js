let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Password is correct...", success: true });
  }, 6000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User Data Found...");
  }, 3000);
});
//whenever u click button login
function login() {
  console.log("Logging in...");

  promise1
    .then((response) => {
      console.log(response.data);
      if (response.success) {
        promise2.then((response2) => {
          console.log(response2);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// Promise Chaining??
/**
 * Promise chaining: Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order.
 The key to making this work is built on the fact that:
Every time you call then(), catch() on a promise, it creates and returns a new promise which can be chained further.
 *  */

console.log("Lecture 3 - promise Chain");

function getUsername() {
  return new Promise((resolve, reject) => {
    console.log("1");
    resolve({ username: "Avi" });
  });
}

function getAge(data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    console.log("2");
    resolve({ ...data, age: 21 });
    // reject("Couldnt get percentage sorry");
  });
}

function getGrade(data) {
  return new Promise((resolve, reject) => {
    console.log("3");
    resolve({ ...data, grade: "A+" });
  });
}

function getPercentage(data) {
  return new Promise((resolve, reject) => {
    console.log("4");
    resolve({ ...data, percentage: "90%" });
  });
}

function printData(data) {
  console.log("DATA>>>", data);
}

// getUsername -> getAge -> getGrade -> getPercentage -> PrintData


getUsername()
  .then((data1) => getAge(data1))
  .then((data2) => getGrade(data2))
  .then((data3) => getPercentage(data3))
  .then((data4) => printData(data4))
  .catch((e) => {
    console.log("ERROR>>>", e);
  });
/**
 * The callback passed to the then() method executes once the promise is resolved. In the callback, we show the result of the promise and return a new value multiplied by two (result*2).

Because the then() method returns a new Promise with a value resolved to a value, you can call the then() method on the return Promise like this:
 */
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});
