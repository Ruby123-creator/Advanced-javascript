console.log("Promise Methods");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 500);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Promise2");
    reject("promise 2");
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise3");
  }, 2000);
});
//Method-1 to resolve and reject the promise(independent to each other)
promise1.then((res) => {
  console.log(res);
});

promise2.then((res) => {
  console.log(res);
});

promise3.then((res) => {
  console.log(res);
});

//Method-2 Promise All
// If I want ALL of these promises to resolve and then do something - total time taken = sum of all promises


// The Promise.all(iterable) the method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.
Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log("Res", res);
  })
  .catch((e) => {
    console.log("Error", e);
  });


  //Method-3 Promise.any
// If I want any of these promises to resolve and the one which takes the least time - total time = min(promise1 && resolve ,promise2 && resolve ,promise3 && resolve )

var startingTime = new Date();
var endingTime;
Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log("Res", res);
    endingTime = new Date();

    console.log("Time Diff", endingTime - startingTime);
  })
  .catch((e) => {
    console.log("Error", e);
    endingTime = new Date();
    console.log("Time Diff", endingTime - startingTime);
  });

// All settled means - keep the code going, show me the states but still keep the code going.- total time taken = sum of all promises
Promise.allSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log("Res", res);
  })
  .catch((e) => {
    console.log("Error", e);
  });

// Race is basically for the fastest outcome - doesnt matter if my promise gets rejected or resolved it will still go for the fastest outcome - total time = (min(promise1,promise2,promise3))

Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log("Res", res);
  })
  .catch((e) => {
    console.log("Error", e);
  })