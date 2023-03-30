// const obj = new Object({ name: "hi" });
// console.log(obj);

const arr2 = [
    { id: 1, name: "Avi" },
    { id: 2, name: "Rahul" },
  ];
  console.log(arr2);
  
  // const str = new String("Hi Hello How Are You?");
  // console.log(str);
  
  Array.prototype.showNames = function () {
    return this.map((item) => item.name);
  };
  
  console.log("showing Numbers", arr2.showNames());
  
  // const arr3 = new Array(1, 2, 3, 4);
  // console.log(arr3.map);
  
  // Array.prototype.map = function () {
  
  // };
  
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
  
  const newUsers = [
    { id: 1, name: "Supriyo" },
    { id: 2, name: "Akshay" },
  ];
  
  function showNames(arr) {
    return arr.map((item) => item.name);
  }
  
  console.log(newUsers.showNames());
  
  console.log(showNames(newUsers));
  
  // const metroIndia = {
  //   getLines: function () {},
  // };
  // const metroDelhi = {
  //   __proto__: metroIndia,
  // };
  // const metroMumbai = { __proto__: metroIndia };
  // const metroBangalore = { __proto__: metroIndia };
  
  // metroDelhi.getLines();
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, speak) {
      super(name);
      this.speak = speak;
    }
  }
  
  const doggy = new Dog("Tommy", "Bark");
  console.log(doggy);










function Student() {
  this.name = 'John';
  this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // undefined

/**
 * As you can see in the above example, age property is attached to studObj1 instance. However, studObj2 instance will not have age property because it is defined only on studObj1 instance.

So what to do if we want to add new properties at later stage to a function which will be shared across all the instances?

The answer is Prototype.

The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

Every function includes prototype object by default.
The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.

So, use prototype property of a function in the above example in order to have age properties across all the objects as shown below.
 */

function Student() {
  this.name = 'John';
  this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // 15


/**
 * Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.
 * 
 Function's prototype property can be accessed using <function-name>.prototype. However, an object (instance) does not expose prototype property, instead you can access it using __proto__

 The prototype property is special type of enumerable object which cannot be iterate using for..in or foreach loop.
 */

function Student() {
  this.name = 'John';
  this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object

console.log(Student.prototype === studObj.__proto__ ); // true

/**
 * Use of Prototype
The prototype object is being used by JavaScript engine in two things, 1) to find properties and methods of an object 2) to implement inheritance in JavaScript.



// what is prototype chain??
/**When a property or method is called on an object, if the object doesn’t contain it, the JavaScript engine will then look to the object’s prototype to resolve the property or method. 
  This continues until we get the property we are accessing or we reach at to the end of prototype chain giving undefined.
*/



/**
 * INHERITANCE IN JAVASCRIPT
 In JavaScript, inheritance is supported by using prototype object. Some people call it "Prototypal Inheriatance" and some people call it "Behaviour Delegation".

  we want to create Student class that inherits from Person class so that we don't have to redefine FirstName, LastName and getFullName() method in Student class. The following is a Student class that inherits Person class.
 */
 function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
  Person.call(this, firstName, lastName);

  this.SchoolName = schoolName || "unknown";
  this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
          
alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true

/**
 * Please note that we have set Student.prototype to newly created person object. The new keyword creates an object of Person class and also assigns Person.prototype to new object's prototype object and then finally assigns newly created object to Student.prototype object. Optionally, you can also assign Person.prototype to Student.prototype object.

Now, we can create an object of Student that uses properties and methods of the Person as shown below.
 */