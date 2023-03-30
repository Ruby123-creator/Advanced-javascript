// If logged in, directly take the user to the profile page

// first part - that save the state of the user logging in
//second part - get this saved state so that you can take them to the page

if (localStorage.getItem("isLoggedIn") === "true") {
  // localStorage.getItem("data_name") - to get the saved data in local storage
  window.location.href = "/profile";
}

console.log(localStorage.getItem("isLoggedIn"));
var isLoggedIn = localStorage.getItem("isLoggedIn");

function login() {
  // save this data
  localStorage.setItem("isLoggedIn", true);
  //localstorage.setItem("data_name" ,data which u want to store )
  return true;
}

// function clickedButton() {
//   isLoggedIn = login();

//   if (isLoggedIn) {
//     window.location.href = "/profile";
//   }
// }






console.log("Hi");

// onClick -> Login Button
// Compare my email and my password - with the email and password in the database (to authenticate)
// developer will send to the profile

var isLoggedIn = false;

function checkIfLoggedIn() {
  //to get the string data into its original form(object) use JSON.parse
  var user = JSON.parse(localStorage.getItem("user"));
  if (user.isLoggedIn) {
    window.location.href = "/profile.html";
  }
}
// checkIfLoggedIn();

function loginUser() {
  // Logic to compare the pass and email from db
  console.log("User password and email is correct....");
  isLoggedIn = true;

  user = {
    email: document.getElementById("email-input").value,
    isLoggedIn: true,
    timeOfLogin: new Date(),
  };
   // store the data(objects) in string form using JSON.stringify
  localStorage.setItem("user", JSON.stringify(user));
  // localStorage.setItem("email", document.getElementById("email-input").value);
  // localStorage.setItem("isLoggedIn", "true");
  // localStorage.setItem("timeOfLogin", new Date().toString());
  if (isLoggedIn) {
    window.location.href = "/profile.html";
  }
}

// while logging in - store the state that Avi has logged In.
// When the person comes back - retrieve the fact that Avi had logged in and take Avi to profile.

googleChrome = {
  localStorage: {
    "http://127.0.0.1:5500": [{ isLoggedIn: true }, { email: "avi@gmail.com" }],
    "https://www.docs.google.com": [],
  },
};

function logout() {
  // Logic to compare the pass and email from db
  localStorage.setItem("isLoggedIn", false);
  window.location.href = "/index.html";
}

// localStorage.removeItem("isLoggedIn");  // it is used to remove particular data_name storage
// localStorage.clear();// it is used to clear all the data