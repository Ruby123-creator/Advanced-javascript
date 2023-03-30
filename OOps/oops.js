//create a object
/**
 * Objects:

Objects are basically containers of data and methods. They follow a key:value pair, something similar like a hash map.
 */
// given below is a cat object
let cat = {
    name: "Peter",      // these are the properties of object
    legs: 4,
    tail: 1,
    "cat category": "german",
    sayLegs: function(){      // this one is method of object
    return "Cat has "+ cat.legs +" legs"; 
  }
};
cat.sayLegs();
// sayLegs() is a method in cat object
console.log(cat.legs)//it works
// console.log(cat[legs])//it doesnot work
console.log(cat["cat category"])//it works
/**The . notation is quite simple to read, although on the other hand, the bracket notation allows you to pass in 2 worded attributes. Lets say for example you have a “Side Hustles” attribute */
let cat1 = {
    name: "Peter",
    legs: 4,
    tail: 1,
    sayLegs: function(){
    return "Cat has "+this.legs+" legs"; }
};

//what is oops??
/**
 * OOP is a convention of writing code. It is a way for programmers to write their code in a really organized manner.
 */



// constructor function
/**
 * A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties
 */
// constructor is used to instantiation/create the object whenever new keyword use
let person = function(name ,gender ,birthYear){   // it acts as like blueprint for all person category  and type of person is object
  this.name = name;
  this.gender = gender; 
  this.birthYear = birthYear;
  this.calAge = function(){
    let age = new Date().getFullYear() - birthYear;
    console.log(age);
  }
}

let john = new person("john" ,"male", 1990)  //instatiation of class
console.log(john);
john.calAge();// to get the methods
//new keyword:- it creates 3 things while creating an object using function constructor
//1. it creates an empty object.
//2. it also makes sure that this keyword now points to newly created empty object
//so here this refers to john.name ,john.gender
//3. finally it returns the object from function constructor



// inheritance in javascript
//when one object gets access to the properties and methods of another object
//it is achieved using this prototype property
//objects inherit from other objects


//what is prototype??
/** all objects have prototype property.whenever we create an empty object where a prototype property is attached within.
  all functions are also objects, which means that they can have properties. And as it so happens, they all have a property called `prototype`, which is also an object.
  There’s really no such property as fido.bark. It doesn’t exist. Instead, fido has access to the bark() method on Dog.prototype because it’s an instance of Dog. This is the “invisible link” I mentioned. More commonly, it’s referred to as the “prototype chain”.
  
 */

  person.prototype.greet = function() {   // method which is a prototype of person
    console.log("good morning");
   };
  person.prototype.city = "London";
  // now john have attached with prototype(city ,greet())

   john.greet();
   console.log(john);
   console.log(john.hasOwnProperty("greet"));
   console.log(person.hasOwnProperty("greet"));
   console.log(john.hasOwnProperty("city"));

   console.log(john.__proto__.__proto__===Object.prototype);
   
/*
   What actually happens when I write john.greet() is this:

1. The JS engine looks for a property called greet on our john object.
2. It doesn’t find one, so it looks “up the prototype chain” to john’s parent, which is person.prototype.
3. It finds person.prototype.greet, and calls it with this bound to john.

In JavaScript, all functions have a Prototype property and all objects have a __proto__ property that points to the prototype of their constructor function.

The __proto__ property can be thought of as pointing to the prototype of the function it was created from.

Remember, we can also obtain the prototype of an object using Object.getPrototypeOf
(yourObject)
*/


/**The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. */
console.log(john instanceof person)
// console.log(greet instanceof person)//error

var arr = [ 1, 2, 3, 4, 5 ];
Array.prototype.shuffle = function() {
 return this.sort(function() {
 return Math.round( Math.random() * 2 ) -1;
 });
};
arr.shuffle(); // [ 3, 1, 4, 5, 2 ]
/**The important thing to notice in this example is that arr was created before Array.prototype.shuffle existed. But because property lookups go up the prototype chain, our array got access to the new method anyway — because it existed on Array.prototype by the time we tried to actually use it. It’s like we went back in time and gave Array a (stupid) new method. */



// What is classes??
/**It is more similar as function constructor but with more feature and in oragnised way
 there are 2 ways to create class
 class classname{

 }
 let classname = class{

 }
 */

 class Bike{
  constructor(name ,model ,color){
    this.name = name;
    this.model = model;
    this.color = color;
  }
  drive(){                            // it creates prototype 
    return `${this.name} runs very fast.`
     }
 }

 let honda = new Bike("Swift" ,"swuzki" ,"white")
 console.log(honda);



 const obj1 = {
  name: "Avi",
  getAge: function () {
    return "My Age is " + this.age;
  },
};

const obj2 = {
  age: 22,
  __proto__: obj1,
};

console.log(obj2.getAge());
console.log(obj2.name);
console.log(obj2);


// Defining class using es6
class Vehicle {
  constructor(name, maker, engine, price) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
    this.price = price;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }

  getPrice() {
    return `The price of the bike is ${this.price}.`;
  }

  getEngine(makerFlag) {
    if (makerFlag) {
      return `The engine of the bike is ${this.engine} and the maker is ${this.maker}`;
    }
    return `The engine of the bike is ${this.engine}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc", "90000");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc", "100000");

console.log(bike1); // Hayabusa
console.log(bike2); // Kawasaki
console.log(bike1.getDetails());
console.log(bike1.getEngine(true));

class User {
  #password;
  constructor(name, email, age, password) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#password = password;
  }

  showDetails() {
    console.log(this.#comparePassword());
    return `${this.name},${this.#password}`;
  }

  #comparePassword() {
    return "comparing password...";
  }
}

const userAvi = new User("Avi", "avi@gmail.com", "22", "12343");
console.log("name", userAvi.name);
// console.log("password", userAvi.#password);
console.log("get Details", userAvi.showDetails());
// console.log("avi", userAvi.#comparePassword());



class Animal {
  constructor(name, eyes) {
    this.name = name;
    this.eyes = eyes;
    this.species = "new species";
  }
  speak() {
    return "Animal Speaks by saying - ";
  }
}

class Dog extends Animal {
  constructor(name, eyes, legs, teeth, tail) {
    super(name, eyes);
    this.legs = legs;
    this.teeth = teeth;
    this.tail = tail;
  }
  speak() {
    return `Animal Name = ${this.name} ${super.speak()} Woof...`;
  }
}

const myPet = new Dog("tommy", "brown", "4", "cannine", "curly");
console.log(myPet);

