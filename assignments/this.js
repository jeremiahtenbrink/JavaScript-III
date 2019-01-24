/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is always pointing to something even in the global state. This will point to window/console
* Object when in the global scope.
*
* 2. The object that uses the function is the function that this refers to.
*
* 3. When a constructor function is called this points to the specific instance that created it. It will remain with
* that instance and creation of other instances will not affect the previous instances.
*
* 4. Explicit binding allows a function call to change the this references to another object if that object is called.
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// this is pointing to the window object.

// Principle 2

// code example for Implicit Binding
const myObject = {
	saying: "this is a saying",
	say: function () {
		console.log(this.saying);
	}
};
myObject.say();

// Principle 3

// code example for New Binding

function NewPerson (name) {
	this.name = name;
	this.speak = function () {
		console.log(`my name is ${this.name}`);
	}
}

const me = new NewPerson("Jeremiah");
const you = new NewPerson("Your name");

me.speak();
you.speak();

// Principle 4

// code example for Explicit Binding

me.speak.call(you);
you.speak.apply(me);