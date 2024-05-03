//  execution context - when we call a function, say myFunction(), when js sees () it is going to say 'oh, I am going to run a func and create an execution context, and it will add this exec context to the call stack, and then it will try to run the code withing that funciton. If it is calling another func, it will create a new exec context for that inner called function, and that func might be calling another func insidem and then js will create a new exec context for that one. Inside each exec cont for a func js will run the code.
//  initially js will create a global execution context. And on top of that is when we start to add other exec context as they come up. So anytime werun code in js is always within an execution context, even if it is the global one.
//  the first thing js does when starting to run a code file is to create the global exec context, and then it gives you 2 things: 1 - the global object and this keyword. The global exec cont gives us these two things right away.
//  withing the global object we can assign variable, declare functions and so on. This is called the creation phase, then we will have a second phase - the execution phase, when we actually run the code. When code is run in JS a global exec cont is created, and when we run a func a new exec cont is created, and we start running the code within that func.
//  lexical environment - also called lexical scope of analysys. This is simply where you write something - a lexical environment simply means that. Whe can think of the lexical environment as the little universes of each exec cont that get created. When we say the compiler is doing a lexcal analysys, we are basically saying it is checking where the words are written, that is, within which context.
//  many times we write functions and declare variables in the global exec cont. When we have a func declared withing another func, it is written within a new context - basically it is lexically written within another context.The compiler knowingwhere things are written can make decisions as to where to place things and what actions to take and what a func have access to.
//  in JS everytime we have a func it creates a new world for us, and within it we can do different things have diff info inside them, and they can communicate with each other in diff ways.
//  The execution context tells you which lexical environment is currently running -> that would be the eprfect definition. In Js our lexical scope (available data + variables where the func was declared/defined) determines our available variables - Not where the function is called (which is the dinamic scope).
//  It doesn't matter where we are calling the func, what matter is in which lexical env was the func written.And the first lexical wnv we have is the global env.
//  Hoisting There is a 'line' that divides the creation phase and the execution phase, and in the creation phase there is another important step, which is called hoisting which is the behaviour of moving the variables or func dec to the top of their respective env during compilation. Variables are partially hoisted and functions are completelly hoisted. Basically what it is is the Js engine allocating memory for the variables and func that it sees in your code during the creation phase before it executes it -> what happens underneath the hood is that during the creation phase, the engine is going to look through the code, and as soon it sees two things: either a var or a func it is going to say oh, let me allocate some memory for those things. For variables, it allocates memory but does not yet place their assigned values into that mamory, instead it fill the memory with the 'undefined' data type - that is why variables are partially hoisted.
//  Functions, on the other hand, are fully hoisted, meaning the function declaration was, during the creation phase, assigned a location in memory and its contents were written in that memory.
//  now, about const and let -> they do not get hoisted, not even partially, it has to be with var keyword.
//  The compiler is not actually, physically, moving the lines of code upwards, it looks like that, but what it is actually doing is a one pass-through the code and reserving or assigning memory.
//  now, when it comes to function expressions, like:
//    var = function(){console.log("Hi!")}
//  it is different from a function declaration, like:
//    function hi() {console.log("Hi!")}
//  During the creation phase the var is going to be hoisted and assigned undefined, so with function expressions, untill the execution phase reaches it, the function assigned to that variable will not be placed in memory, and var will be pointing to undefined.
//  In review - within our global execution context, during the creation phase, js creates the global object and this method. Then during the execution phase we run our code, but dalways remember that in the creation phase there is the hoisting, which is quite unique to JS, this allocation of memory for var and functions.
//  Also, remember that anytime we are calling a function! Anytime we call a func there is a creation phase and an execution phase, where there is hoisting involved.
//  Programs arte simply assigning memory and then running a function for the program to do something to or with those variables. Without functions our programs wouldn't do anything. Functions give us some amasing powers in JS.
//  We already saw that in Js we have Functions Expressions and Function Declarations. The functions expression you first declare a variable and assign to it a function.
//  We can then call our functions, we say: function invocation, function calling or function execution. Wehen we do those we are creating an execution context.
//  function expressions are defined at runtime, when we are actually calling or invoking the function is when it actually gets defined in memory. Versus function declarations, where the function gets defined at parse-time and start hoisting.
//  When a function is invocated we create a new execution context on top of our global context, and we get a few things, such as this keyword, but unlike the global context, which gave us a global object, instead with a function invocation we get arguments. Arguments is another keyword in JS.
//  The arguments keyword gives us an object, where keys are indexes and the values are the parameters passed into the function when invocated.
//  Arguments is only available to us when creating a new execution context with a function. But arguments is a little bit dangerous to use, because arguments look like an array but it is not really an array, and so there are many things you can do with this keyword that might make the compiler or the engine less able to optimised your code, as you cannot use array methods with arguments.There are some cases when we might want to iterate or loop through arguments, one solution is to: console.log(Array.from(arguments));
//  another way is to use the spread operator ... in the function parameters: function test(...args) {console.log(args)} -> with modern Js you want to avoid arguments and rely on one of those other options. Remember that in each execution context we create the arguments object, and even if we pass no paramenters into the function, it will create an empty object.
//  But what about variables declared within functions lexical context? In the execution context of that function there is a place for those variables, so beasides the creation of this and arguments, js also creates a 'little space' called Variable Environment, which is a place that variables can live in in this stack world.
//  Scope defines the accessibility of variables and functions in the code - it tells us what we can access and what we cannot.Code within an Execution Context can access variables in its scope and in the scopes outside, but not variables declared in scopes inside it.
//  eval() and with are problematic for the compiler because they can actually change hwo scope chains work internally, and that makes it difficult, for the lexical scope is altered, which might trick the JS engine.
//  Another thing you must be careful about is the leackeage of global variables,when you create a variable, say 'teste = 10', without declaring 'var', 'let', 'const', even if you do that within a function, it will go up the scope chain into the scope environment and the global environment will create that variable within it. Now we have 'use strict' to prevent Js from doing these strange unpredictable edge cases. With use strict you have to declare variable somewhere, eith var, let or const.
//  you also have to be careful about something else:
//    var heyhey = function doodle() {return 'hey'};
//  you cannot call doodle() in the global scope, you can only call it within the heyhey() scope.

//  lets talk now about function scope vs block scope, and these are very important terms in every programming languages. Remember, scope tells us what variables and funcs we have access to. Js have function scope, that means everytime we create a function we create a new execution context which has its own variable environment. Most other programming languages have what is called clock scope.This basically mean that:
//    if (5 > 4 ) {var secret = '12345'}
//  Well, th secret variable is not within a function, therefore, in the global scope I can access the secret variable -> we only create a new scope, a new environment in Js when there is a funciton. In most other programming languages they use block scope, and block scope is the creation of a new execution context, scope environment, everytime there is a code block, defined by {}.
//  Then, with ES6 JS introduced let and const keywords for variable declarations, and they allow us to use block scoping.Variables declared within a block scope, like an if statement or a for loop can be accessible from the outside, but now with the introduction of let and const this is solved.
//  Let's talk about global variables and how dangerous they are. We have limited space, limited memory, and how dangerous it can be when there is memory leaps. But another issue with globla variables also arises -> variable colisions. When this happens in the same scope, the lattest declared variable with the same name as a preivous one is the one maintained. this can easily break the code.
//  IIFE -> immediatelly invocaded function expression; an IFFE is a function expression that looks like this:
//    (function(){})();
//  The idea is that using the above pattern we can include all library code inside a local scope to avoid any colisions.
//  The interesting idea here, besides the local scope, is that you can immediatelly call a function expression, like the example above, whereas you cannot do such thing with function declarations:
//    function(){}() -> this will return an error.
//  Now, talking about the previous function expression ->(function(){})();<- , what are the benefits of it? Since the anonymous function within this IFFE is a function expression, and is not being assigned to any global variables, no global property is really being created, and all of the properties creatd in there are going to be scoped inside that anonymous function.
// An IIFE allows us to call the function immediatelly as JS is executing, it is going to define what it is within the braces and right afterwards with the parenthesis, it is going to call it - creating a new variable environmentwithin a new execution context that is going to have its own scope - this allows us to attach private data that can access the global execution context.
//  The thing about IFFE is to use them to place all library code inside the local scope toa void colisions with the global scope. The first thing with the outter parenthesis is saying to the compiler: "hey, this is not a funciton declarations, it is a function expression!" This automatically makes it into a function expression - then we immediatelly invoque it, meaning we run the function. Since the anonymous function within this IIFE is a func expre and not assigned to any global variables, no global property is being created, and all the propertiescreated within the function is going to be scoped inside the function,so they will only be available inside this IFEE, but not autside.
//  An IIFE allow us to call the function immediatelly as JS is executing - it will define what it is and straight away run it. This was usually used in this format:
// var script = (function () {
//   function a() {
//     return 5;
//   }
//   return { a: a };
// })();
//  Now to run it we would do: script.a() -> script is returning an object that contains the a function - we still created the script global variable, but the good thing is that this variable can now be an object that contains many properties that we may want to use and it only polutes the global space with one name - more importantly, we are attaching the private data to a function that creates fresh environment for us, executes them and allow us to return only what we want.

//  this -> the possibly most difficult part of JS. What is this? All that it means is the object that the function is a property of. Simply meaning: we have an object, inside this object we have a function, and within the function, when we do domething, we have access to this keyword, and it refers to the object that encloses the function.
//  When it comes to coding, most of the time we never want this to refer to the global object, although this happens all the time - and many mistakes come when we use this and it is referring to the global object instead of what we wanted it to refer to.\

const obj = {
    name: "Billy",
    sing() {
        return "lalala " + this.name;
    },
    singAgain() {
        return this.sing() + "!";
    },
};
//  this is the object that the function is a property of. This refers to whatever is to the left of the .
//  There are 2 main benefits of this, and they are the reason why this keyword was creatd for:
//    1 - it gives methods access to their object.
//    2 - we can execute the same code for multiple objects -> but what does that mean?

function importantPerson() {
    console.log(this.name);
}
const name = "Sunny";
global.name = name;
const object1 = {
    name: "Cassy",
    importantPerson: importantPerson,
};
const object2 = {
    name: "Jacob",
    importantPerson: importantPerson,
};
// Theerefore we can use the same function code for multiple objects! I wrote the function once and it can apply to multiple objects.

//  In other for us to manipulate this keyword there are 3 really important methods, which show up a lot for code interviews, they are call(), apply() and bind().
//  Let's first talk about call() and apply().
//  underneath the hood, all funcitons use call(). Whenvere we use the parenthesis to call a function, underneath the hood what is actually is you are invoquing the call method.This means that:
function a() {
    console.log("a");
}
//  when we do a() is the same thing as doing a.call(). a() is just a shorthand. Apply() for now, does the samething as call().

const wizard = {
    name: "Merlin",
    health: 100,
    heal() {
        return (this.health = 100);
    },
};

const archer = {
    name: "Robin Hood",
    health: 30,
};
wizard.heal.call(archer);
//  besides of substituting the bounded object by a new one when calling a function, call() can receive other arguments as well: .call(object, arg1, arg2...).
//  applly does very much the same thing, but with apply it takes an array of paramenters instead of individual paramenters:
//.apply(objec, [...args])

//  bind(), instead of immediatelly running like call() and apply(), instead returns a new function with a certain context and parameters, it is usually used when we want that a function to be called latter on with a certain typer of context of a certain type of this keyword.

//  wizard.heal.bind(archer, 100, 30) -> if I run this now it wont run, it returns a function! So you have to assign its return to a variable, for example:
const healArcher = wizard.heal.bind(archer, 100, 30);
healArcher();
//  bind allows us to store the this keyword of the funciton for latter use. Bind is like a bandaid.
const obj1 = {
    value: 10,
    changeValue(n) {
        this.value = n;
    },
};
const obj2 = {
    value: 0,
};
chValueObj2 = obj1.changeValue.bind(obj2);

//  function currying - this is the other usage of binding. Currying refers to only partially passing on a parameter to a function:
function multiply(a, b) {
    return a * b;
}
let multiplyByTwo = multiply.bind(this, 2);
//  now I can:
multiplyByTwo(4);
//  which will print 8.
//  Context vs Scope:
//  Scope is a function based thing, scope means what is the variable access of a function when it is invocated, what is in the variable environsment.
//  Context, in the other hand, is more about object based, constext says what is the value of the this keyword, which is a reference to the object that owns that current executing code. Context is more commenly determined by how a function is invocated with the value of this keyword and scope is referring to the visibility of variables.

// There are only 7 types in JS:
//  numbers -> 5, boolean -> true, strings -> 'to be or not to be', undefined, null, symbol('just me'), objects -> {}
//  But where are arrays or functions?
//  JS has an operator that tells us the type of an item -> typeof
//  latter we will talk about the funny mistake that happens when we do typeof null -> it returns 'object' but in fact it is not an object, even the creator of the language acnkowledge this is a mistake.
// Now symbol was introduced in ES6, and it creates something unique to us, a single value, in this case 'just me' that is useful to identify an object, they are usually used to identify object properties, so that the object properties are unique.
//  What are the differences between undefined and null? Undefined is the absence of a definition, it is used as the default value when the JS engine initialises our variables during hoisting, remember? Function return undefined when they don't return anything, or when there are missing properties of an object. Undefined simply means there is a variable there but nothing there.
// Null on the other hand is the absence of value - is means there is no value there. Undefined is the absence of definition Null is an absence of value.
// and what about typeof function(){}? It returns function, but technically no, there is no function type, in reality they are an object - for now we need to trust that both arrays and functions are objects - we will get back to this later in details and properly define what this means. for now, functions and arrays are objects, even though typeof function gives us a return of function, but underneath the hood, a funciton is just an object.
//  In JS there are two distinctions - the primitive types: number, bool, string, undefined, null, symbol - and we have the non-primitive types.
//  The difference between the two? In Js all types with the exception of the object type are primitive. So what is a primitive type? It is a data that only representes a single value. That means that the primitive type, in memory, has only its own type. There is no ambiguity about it - a variable of a primitive type directly contains the type of that value. They are like atom, they cannot be broken down into any smaller parts.
//  A non-primitive type doesn't contian the actual value directly. The object doesn't actually contain the value objec, instead it contains a reference to somewhere in memory where the object is held.
//  There is a term that states "everything in Js is an object", many things that we interact directly in Js, such as strings, numbers and booleans, which are primitives, get a little bit complicated by the fact that these primitives have objects wrappers.
//  For example:
String();
Number();
Boolean();
true.toString();
//  JS silently creates a wrapper object arount the value true, something like:
Boolean(true).toString();
//  Types in JS is a bit tricky.
//  Primitive types are simple types, whereas objects are a bit more confusing.
//  Past by Reference vs Past by Value
//  Primitive types are immutable, in order to change them we need to completelly remove the primitive, that is literally move it from memory and create something new. I can't really modify it, something new has to be created. Primitive types are exactly like thakt, when I assign a primitive type to a variable, this variable will contain a reference to the value in memory. If I assign another primitive type value to another variable, again the same thing happens, and they don't know about each other's existance -> this is what we call Pass by Value.
//  Objects, on the other hand, are what we call pass by reference.
let aaa = 5;
let bbb = a; // because primitive types are passed by value, we are actually coppying the value referenced by a and allocating it in a new space in memory, storing that new reference in variable b.
b++;
console.log(aaa); // prints 5.
console.log(bbb); // prints 6.
//  these variables are not pointing to the same address in memory, when whe passed a to b, we actually copied the value and sotred it in a new place in memory.
//  now, check what happens with objects:
let obj11 = { name: "John", password: "123" };
let obj22 = obj1; // here is different, obj1 and obj2 are both pointing to the same address in memory, they are pointing to the same data!

obj2.password = "456";
console.log(obj11); // prints {name: 'John', password: '456'};
console.log(obj22); // prints {name: 'John', password: '456'};
//  By changing the data through either obj will change for both, because they are pointing to the same data in memory -> this is Pass by Reference.
//  Now, why is it a good idea to have objects that are assigned other objects be all pointing to the same data in memory? For one, we are saving space in memory.

//  But this can cause issues by mistake if someone changes a property it will affect all references to that obj.
// If we want to actually copy an obj, let's say an array, there are few options, but a straight forward way is:
let arr1 = [1, 2, 3];
let arr2 = [].concat(arr1);
arr2.push(4);
console.log(arr1); // prints [1, 2, 3]
console.log(arr2); // prints [1, 2, 3, 4]
//  For copying objects it is a bit more complicated:
let ob1 = { a: "a", b: "b", c: "c" };
let ob2 = Object.assign({}, ob1);
ob2.a = "5";
console.log(ob1); // prints {a: 'a', b: 'b', c: 'c'}
console.log(ob2); // prints {a: '5', b: 'b', c: 'c'}
//  another way of doing it is by using the spread operator:
let ob3 = { ...ob1 }; //  this is a relativelly new feature introduced.
//  We now need to ask ourselves what is going to happpen if we have an obj inside an obj?
let ob11 = { a: "a", b: "b", c: { deep: "try and copy me" } };
let ob22 = { ...ob11 };
// that will also work... but pay attention to this:
obj11.c.deep = "hahaha";
console.log(ob11); // evaluates to { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(ob22); // evaluates to { a: 'a', b: 'b', c: { deep: 'hahaha' } }
//oh... but I thought I had copied it!
//  each obj gets passed by reference, so although we cloned the initial obj, this is what we call a shallow clone, it clones the first level, that is the data of the outer obj, but within that obj was another address to another obj, and this address never changed, it kept refencing the same obj.
// How can we do deep clone?
let superClone = JSON.parse(JSON.stringify(ob11));
//  But attention, if you are doing a deep clone, you should be careful, because this can have performance implications.

//  Type coersion -> is the conversion of a data type to another data type trying to perform comparesons. It is the language automatically converting a type into another type.
//  All languages have type coersion. In memory, different types look completelly different then how we type. All languages do coersion at different levels of the stack, but JS have a heavy type coersion to it.
//  In JS it performs coersion when we use ==. When we use three equals: === we are comapring two values without coersing them.When we use two equals == it makes the code far less predictable.
// JS coerses 0 to false and 1 to true, for example.
//  In Js there is the concept of a negative zero and a positive zero.
//  Object.is is a methode that works similarly to the ===, except for a few cases, like +0 and -0... and NaN.
//  Dynamic vs Typing -> in a static typed language you have to define what is the data type.
//  In dinamically typed languages, type checking is done during runtime.

//  Let's start off bytalking about funcitons - they are, in Js, also objects. When we invoque functions, we get two parameters automatically: (1)this keyword and the (2)arguments keyword. Arguments is an array-like object that can have some weird behaviours for looping and iteration, so we want to avoid using it and instead use the spread operator. Also, because of the arguments oject, we can technically not have any parameters defined for a func and when we call that func, if we add parameters to it, we can still grab them using the arguments keyword. Also, when we define our func and the compilor looks at our code lexically, it determines what variables are available for us in the variable env and it also add the scope chains. Also, there are some ways of creating functions.
//  Functions are objects, and this is something not really common in other languages, because in js I can create and add properties to it, underneath the hood JS creates a special type of object called a callable obj, that is, a special obj, in which one parameter is the fun name, another is a callable parameter, and you can add otther parameters.
//  Inside a function, it has: 1- the code() 2- name(optional) 3- properties (like .call(), .apply(), .bind())
//  Functions are a special type of obj, a callable obj with the parenthesis notation and special properties. This is relevant: because funtions are objects, we can pass them around, like we do with objects -> like things that contain data! We can also store them as data and move them around.

//  First-Class Citzens. Functions are fisrt class citzens in JS, but what does that even mean? Well, basically 3 things:
//  1 - Firstly, func can be assigned to variables and properties of objects.
//  2 - Secondly, we can pass functions as arguments to other functions
//  3 - We can return functions as values from other functions.
//  Funcs are data, they are also pieces of data, they don't simply perform actions for us, but they are also data that we can pass around, like first class citzes, as if they were JS types. Anything you can do with other types, you can do with funcitons!
//  This whole idea of a funcs being a first-class citzens in JS actually introduces JS into a whole world of Functional Programming.

//  Lets now talk about High Order Functions!
//  They are simply a function that can take a func as an arg or a func that return another func.
//  The big problem is that most people know what a HOF is, but don't know why they are useful.

function letAdamLogin() {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return "Access Granted to Adam";
}

const giveAccessTo = (name) => "Access Granted to " + name;

const authenticate = (verify) => {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return true;
};

letPerson = (person, fn) => {
    if (person.level === "admin") {
        fn(500000);
    } else if (person.level === "user") {
        fn(100000);
    }
    return giveAccessTo(person.name);
};

const adam = { name: "Adam", level: "user" };
const eva = { name: "Eva", level: "admin" };

letPerson(adam);
letPerson(eva);

const multiplyBy = (x) => (y) => x * y;

const multiplyBy2 = multiplyBy(2);
const multiplyBy10 = multiplyBy(10);

//  Closures => This is one of the two pilars of JS, and fully understanding it will grant you superpowers as a programmer!
//  Firtly, remember that functions are fist-class-citzens in JS, meaning we can pass them as data, like any other type in Js. We also have the idea of the lexical scope, the Js engine knkows, based on where our code is written, even before the code is run, what variables each function has access to.
//  Closure is simply that, a combination of function and the lexical env where it was declared. Closures allow a function to access variables from an enclosing scope or environment, even after it leaves the scope in which it was declared.

const a = () => {
    let grandpa = "grandpa";
    return function b() {
        let father = "father";
        return function c() {
            let son = "son";
            return `${grandpa} > ${father} > ${son}`;
        };
    };
};
a()()(); // returns 'grandpa > father > son'
//  Well, this shouldn't surprise us, this is the expected behaviour!
//  Now, this is very important, let's say we do this:
const one = a();
//  What just happened? we just ran this function inside, function a was invocated, so what is remaining inside the variable one is func b() ~and c() by consequence of being inside of b()~!
//  This means that func a() got popped off the Stack! And what happens when things get popped out of the stack? Well, we remove the variable environment!!!! So shouldn't the variable 'grandpa' be garbage collected and thrown away since it was removed from the stack?
//  Somehow, all the way down to c(), there is still access to variable 'grandpa'!
//  This is what closure is!!
//  Basically, after function a is ran, its execution context is removed from the call stack, but variable 'grandpa' remains inside the closure box. And why is that? Because this box is technically where the memory heep is, a bucnh of memory, and as soon as we don't need something anymore we need to remove it. But when the garbage collector comes and sees grandpa, it says... hmmm, there is a closure here, it is in the special closure box, and this closure box I cannot clean up as there is something referencing it.
//  So the next b() function is called, added to the call stack, a new variable environment is created and there is father there... Once b() is popped out of the call stack, father is also being referenced aby another function inside of it, so father is also placed into the closure box in memory heep.
//  Then c() comes along, finally getting called, and we have the son variable here, c() is called, and its return is mentioning variables outside its scope,is will have to look for father and grandpa -> but then it will look into the closure box for them.
//  Js is doing something unique here, the engine is going to make sure the function has access to all the variables outside of the function with this closure! Closure is a feature of JS!
//  The closure box will only keep variables that are required/mentioned by deeper layers, is something else was declarted in function b() or a(), since it was not referred further, they would have been removed by the garbage collector.
//  Closures are also called lexical scoping -> we actually have seen that before: lexical means where it was written, scoping is what variable we have access to. By that definition means that JS engine, before we even ran the code, already knows which function has access to each variables, because JS is lexically scoped, or statically scoped. It sees during the first phase, when it is looking through our code, and says, ah, yeah, I'll keep grandpa and father around.
//  We can have functions that return functions, since functions are first-class-citzens, and we have this idea of lexical scope. Where we write the function matters, not wehre we call or invoque the function.
const boo = (string) => (name) => (name2) =>
    console.log(`${string} ${name} ${name2}`);
boo("hi")("Tim")("Becca"); // returns 'hi Tim Becca'

function callMeMaybe() {
    const callMe = "Hi! I am now here!";
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
}
//  Closures have two very important main benefits: they can be very memory efficient, and they also allow us to do what we call encapsulation. These two things are the coolest part about closures!
//  1 - Memory efficient:
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(":)");
    console.log("created!");
    return bigArray[index];
}
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);
//  Very well, what is happenning there is we are creating a big array, adding data to our memory, which we have limited memory of, we are creating it every time, so every time we run this function we create this memory and then we return it and because nothing is referencing it, it gets destroyed, and this cycle happens for every invocation of the function.
//  That is not efficient. What we want is to create the array and, because we know it is going to be used a lot, to only create it once, and just have it in memory there so we can access it instead of all that work? The question here is -> how can we do that with closures?

function heavyDuty2() {
    const bigArray = new Array(7000).fill("😄");
    console.log("created again!");
    return function (index) {
        return bigArray[index];
    };
}
//  the difference between the above code and the one before is that now we have created closure! That is, there is a reference to bigArray!
//  Also, in the above code we don't need the argument index anymore for the outter function, because index is something we are going to pass to the fuction the outter func returns.

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

//  2 - encapsulation:
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        ("💥");
    };
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime,
    };
};

const ohno = makeNuclearButton();
ohno.totalPeaceTime(); // returns zero, than it keep counting up the time. If we launch:
ohno.launch(); // returns '💥'. And then totalPEaceTime starts counting up again.

//  For the above function we used closures. the timeWithoutDestruction is something that these functions have access to, but we also don't really want people to have powers like launch, right? So, instead, let's remove the launch function from the return object and instead just have totalPeaceTime:
return {
    totalPeaceTime: totalPeaceTime,
};
//  So that, if I run launch now I'll get an error. It states 'launch is not a function' -> this is what encapsulation does! hidding of information that is unnecessary to be seen by the outside world or manipulated. This gets into the idea of Principle of least priviledge. Which is a big security principle when it comes to programming, where you don't want to give to just anybody access to your API, to your special function or variables.
//  Using closures, we are able to access things like timeWithoutDestruction that I don't want anybody else touching, because I just want to set interval to constantly increment. But at the same time, I want people to have access to things like totalPeaceTime, so that it can access the variables that are sacred to me.
//  This is one of the main benefits of closures -> data encapsulation, which refers tot he idea that some data should just not be directly exposed.

let view;
function initialise() {
    view = "🏔️";
    console.log("view has been set!");
}
// how to turn the above function into a function that can only be called one? So that even though somebody might abuse it and run it a bunch of times, as long as the function has been run once, it will only run one time.

function initialise() {
    let called = 0;
    return function () {
        if (called > 0) {
            return;
        } else {
            view = "🏔️";
            called++;
            console.log("view has been set!");
        }
    };
}
const runInitialise = initialise();

//  Another exercise:
const array = [1, 2, 3, 4];
for (var i = 1; i < array.length; i++) {
    setTimeout(function () {
        console.log("I am at index " + i);
    }, 3000);
}
//  One simple solution here is to change var 1 = 0 to let i = 0. But why that works? Well, now we are using block scoping -> the block within the for loop creates a scope for each i so that i is scoped within, because initially when we had var i it was part of the global scope, now this setTimeout when it finally returned, by that point the for loop has already gone through everything, so has turned i into 4

const callTimeout = (i) => {
    setTimeout(function () {
        console.log("I am at index " + i);
    }, 3000);
};
for (var i = 0; i < array.length; i++) {
    callTimeout(i);
}
//  in the above code we are wrapping setTimeout in an enclosing function, so it wraps the entire setTimeout, so now, in this wrapping function, we can reference i, and as long as we reference i it wont be removed from the local scope, or at least the reference of what i is when the loop invoqued each setTimeout. So the i variable was kept in the closure by passing it as a paremeter and using it inside of the callback function.

//  We learned the first important pillar of JS, closures-> which are a combination of a function and the lexical env where it was originally declared, and we are able to do this because functions are a first-class-citzens and we have lexical scope in JS. Closures allow functions to acceess variables fron an ennclosing scope, or outter scope env, even after it leaves the scope in which it was declared -> all that matters in js is where the function was written.
//  The interesting thing about closures is that JS really popularised this idea that is now all over programming languages, especially functional programming languages. The closure concept is now adpeted and added to different languages like python and ruby after JS popularised it and showed how powerful is it.

//  Time to dive into the second pillar of JS -> Prototypes!
//  This part is going to be very tough, it may seem convoluted at times, we might need to revisit the videos a few times, but this is going to be fundamental to understanding OOP in the next session.
//  Arrays and functions are just objects in JS, now let's dive deeper into this -> JS uses something called prototypol inherintance, that means, by inheritance, that an object gets access to the properties and methods of another object. So the array object gets access to the properties and methods of the object, and same with functions, this happens through prototipal inheritance.
const myArray = [];
myArray.__proto__;
//  the myArray was created using a constructor, and this constructor created our array variable, and with __proto__ we can go up the prototypal chain and get into the source object.
myArray.__proto__.__proto__; // this is going to be the base object in JS, the one from which everything in Js gets created from, including functions and arrays - and there are some proeprties there, like the toString method, which means that anything that is a descendant from an object will get the toString methode. That means that an array such as myArray has the toString method in it because of this prototypal chain. An object gets access to the properties and methods of another object through the prototypal chain.
function aa() {}
aa.__proto__;
// here we will get the native funciton, which is the Js base function, from which all functions in JS are created from. Now, going up the prototype chain again:
aa.__proto__.__proto__; // we will get to the base object from which all objects comes from.
//  Let's now create an empty object:
const myObj = {};
myObj.__proto__; //  we will go straight back to the base object in JS.
//  This is what prototypal inheritance is -> this feature is quite unique and not common in other popular languages, which use something called classical inheritance, JS uses prototypal inheritance.
//  Even though in Js we have the class keyword, and it is something we are going to talk about in the OOP section, in JS this is what we call syntatic sugar -> there is actually no classes in JS, we only have prototypal inheritances.
//  Well, let's do a demonstration of the prototypal chain:

let dragon = {
    name: "Tanya",
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        return `I am ${this.name}, the breather of fire`;
    },
};

let lizard = {
    name: "Kiki",
    fight() {
        return 1;
    },
};

//  Now, if we want to borrow a method from the Dragon object, we leraned how to do that, with bind:
const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());
//  But let's say this ibjects get's more complicated, for example, in order for a . creature to be able to sing its breathing fire, it needs to have fire: true in their properties.
let newDragon = {
    name: "Tanya",
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`;
        }
    },
};
//  What is we have a huge object and we want to borrow more than just one method? Say, we want to make the lizard object to inherit a bunch of those properties -> this is where prototypal inheritances comes in -> what if we instead create a prototype chain, that says hey, I want lizard to inherit all the proeprties and methods from dragon.
//  To do that, we can go like this:
lizard.__proto__ = dragon;
//  Attention, if I run lizard.fight() it will still returns 1, because fight is a property that is declared withing lizard, and that will overwrite the general fight func from the dragon.
//  But we were able to inherit through the prototypal chain all the methods and properties of the dragon, and overwrite them with methods and properties that we have already defined in the lziard object. So name and fight stays with lizard.
//  We have to keep in mind that the prototype chain of lizard will go up all the way up to the base object in JS
//  Now we are going to do something different:
//  let's do a for loop:
for (let prop in lizard) {
    console.log(prop);
} // this will return name, fight, fire and sing. This happens because we created the prototype chain. Now:
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
} //  This will return only name and fight. This is because lizard only has, as his own properties, name and fight, all the other properties were inherited from Dragon thorugh the prototype chain. This means we are not actually coppying these properties from the dragon!
//  This is not the same thing as the scope chainwe talked about, this is prototype chain -> Kepp that in mind, because they might work in a similar fashion, but they are definetely different things.
//  But we need to talk about why we don't really see much of this __proto__ in js codes: we really should never use this __proto__ in our codes. It is bad for performance and there are other ways we can inherity when it comes to prototype inheritance. This is something we will dive deep when we talk about OOP. We never want to manually assign the prototype chain and create that chain ouserlves, for this will actually mess up the js compiler badly. But we had to see this to know how it works and in OOP we will learn proper ways of doing this.
//  Now, let's talk why this prototypal inheritance is useful - the fact that objects can share prototypes means that we can have objects with properties that are pointing to the same place in memory, thus being more efficient - > for example, imagine if we had a ton of lizards, and we had copied all the functionalities of the dragon into each lizard, it would be allocated in different places in memory, that can get overwhelming very soon - but with prototypal inheritance, intesad of copying, we have itin just one place - everythingthat inherit from dragon will just use this one instance of the method.
//  Also, whenever the js engine does not find the up the prototype chian there will return an error or an undefined. Let's say:
const theObj = {};
//  then we do:
theObj.__proto__.__proto__; // this returns null -> meaning there is nothing there. undefined means there is no definition, null meant there is no data, no value, nothing. Pass the base obj there is nothing.
//  Let's try a few more things:
const anotherNewObj = {
    name: "Sally",
};
anotherNewObj.hasOwnProperty("name"); // returns true. But if we do:
anotherNewObj.hasOwnProperty("hasOwnProperty"); // this will return false, this is because anotherNewObj does not have this defined as a parameter within, it comes as a inherited method through the prototype chain. Now, how about a facuntion, and this gets interesting:
function aaa() {}
aaa.hasOwnProperty("call"); // returns false, same for bind or apply... but name returns true! aaa.name is aaa. But call, bind and apply are not there. Well, remember that a function is a special type of obj, it is a callable obj, where we have code that can be involved, an optional main field, and properties that we can add to the function as it is an object, and we also have call, apply and bind as properties. But technically these properties (call, apply and bind) are in the base function through the prototype chain.
//  All functions have a .__proto__ and a prototype:{}, and the .__proto__ links the function to the upper function in the prototype chain, dirrectly to the prototype:{} of the upper function. What this means is:
aaa.__proto__; // is the same as:
Function.prototype;
//  these both will be pointing to the same thing.
//  __proto__ is a reference that points to up the chain prototype object.
//  Arrays and functions are objects in JS, and a function is a special type of object tht is a callable object which intead of having call apply and bind directly definied withing uses prototype inheritance to actually inherit from the base funciton object. and __proto__ points to the prototype up the chain
//  Remember that we should never use __proto__ = {some obj}, this is for performance reasons and our js code. What is a safe way of doing this? Well, let's check the code below:
let human = {
    mortal: true,
};
let socrates = Object.create(human); //  This is one of the appropriate ways to inherit from human,
socrates.mortal; //return true, because we created using Object.create a prototype chain up to human, so if I do:
console.log(human.isPrototypeOf(socrates)); // returns true.
// We will explore this a bit more, but for now at least we know how to do this without using __proto__ -> as a matter of fact __proto__ was named in this way for preventing people from messing with the prototype chain.
// Only functions have the prototype property. Remember how __proto__ points to the prototype object (prototype: {...}), well the thing that contains the prototype object is always a function.
// The prototype property of a function, although they are a property present on all functions, the only time we use them is when we use what we call constructor functions - constructor functions they usually start with a capital letter and they contain the actually blueprint of prototype that we use.
//  This is the takeaway: every function has a prototype property that references to an object used to attach properties that will be inherited by objects further down the prototype chain. The last object in the prototype chain is this built-in Object.prototype. The Object is a function because it has the prototype property, whereas the Object.prototype is what is called the base object, the very last object that we can look for properties on before it is pointed to null.
//  Everything in JS in an obj, and arrays and functions in Js are objects, they inherity from the prototype chain from the base object -> you can go up the prototype chain looking for properties on this prototype prototype property. this prototype property also has the __proto__ inside of it that links higher up to the next prototype chain object.

/* Refined Explanation
-> 1. Using Objects
Prototype Linkage:
The __proto__ property links an object to a parent object, termed the "prototype" of this object. This link allows the child object to access any methods and properties defined on the parent object, provided they are not overridden in the child object.

-> 2. Using Functions
Two Methods of Defining Behaviour:

(i) Instance-Specific Methods:
Methods and properties defined using this.methodName = function() {...} (therefore defined in the body of the constructor function -> that is, within a constructor function) are created anew each time the constructor is invoked (i.e., each new instance receives its own copy of these methods and properties).

(ii) Prototype Methods:
Methods and properties that are defined on the prototype object of the constructor function (e.g., ConstructorFunction.prototype.methodName = function() {...}) are shared across all instances of this constructor. This means that these methods and properties are not copied into each new instance but are accessed via the prototype chain.
*/

//  -> Object Oriented Programming <-
//  OOP and FP are paradigms that help us to organise our codes in a way that is easy to reason about. By using these paradigms we a going to make code more clear and understandable, it will be easy to extend, meaning as the code grow, the use grow, it will be easier to extend using these paradigms. Also, it will be easier to maintain. It is going to be memory efficient and lastly it will keep our code DRY, without repetitions.
//  Prgramming paradigms are simply that - they allow us to make complex code more organised.
//  In all programs there are two primary components: 1 - the Data, which we keep in our memory, and 2 - the behaviour, that is, the things that the programs can do, the functions.
//  OOP says that bringing together the data and its behaviour in a single location called an object and containing it all in a box makes it easier to understand how our programs work.
//  FP says that Data and Behaviour are distinctly different things, and should be kept separate for clarity.
//  OOP is like building a robot, we have a head component, an arm component, legs components, chest component, antena components, and then we build them together.
//  FP says just give me the data and I will act upon that data, through functions, and I will return something new from the data you gave me.
//  But these are actually complementary - not one over the other, but using both paradigms. Js is multi-paradigm.Remember how closures are a pilar in JS for functions and how inheritance is a pilar in JS for objects!
//  When we talk about OOP, there are two main types: 1 - class based programming languages and 2 - prototype based programming languages. As we know, JS we have prototypal inheritance. By the end of this OOP section, we should become confortable with the idea of why it allows us to have code we can reason about.

//  Let's see how we can go from procedural programming into OOP.
//  To do that we will start to create a game! Using this, let's create a progra that has OOP principles in mind to organise our code.

const elf = {
    name: "Orwell",
    weapon: "bow",
    attack() {
        return "attack with " + elf.weapon;
    },
};

const elf2 = {
    name: "Sally",
    weapon: "bow",
    attack() {
        return "attack with " + elf.weapon;
    },
};

//  Let's see factory functions, that are functions that act like factories, they create objects for us:
function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return "attack with " + elf.weapon;
        },
    };
}
const peter = createElf("Peter", "stones");
peter.attack(); // returns attack with stones
//  So a factory function is a function that creates objects for us. We can even simplify it a bit further using ES6 syntax, that states when property and value are the same we can just keep it simple:
return {
    name,
    weapon,
    attack() {
        return "attack with " + elf.weapon;
    },
};
//  The beauty with factory functions is that now if I want to create another elf I simply have to:
const sam = createElf("Sam", "fire");
//  So factory functions are great, but imagine if we had 1000 elves, they require space in memory right, to store data. And methodsthat are very generic, like attack() that is going to be coppied into memory in a different location for each elf, so 1000 elves mean 1000 attack() functions in different locations in memory for each elf.
//  One way of foing it is to:
const elfFunctions = {
    attack() {
        return "attack with " + this.weapon;
    },
};
peter.attack = elfFunctions.attack;
//  Now it is not too bad, we have a shared functionality, but still a lot of manual work. There is a way to make it a lot easier that JS enables for us, which is Object.create()! And with it we can clean up the code a bit, because instead of manually attaching the method to each elf created, instead we are going to use Object.create to create that link, that chain, between the createElf function and the attack function inside eldFunctions:
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;
    return {
        newElf,
    };
}
//  So, what Object.create does is it creates a link between the elfFunctions and the newElf we have just created. We are doing prototypal inheritance here.
//  Now, what we are doing with Object.create is pure prototypal inheritance, and it is meant to be used like this. The code is cleaner now. However we are not going to see this much in codebases... It is not very standard.
//  This is not quite OOP yet.
//  Let's see what we had since the beggining in JS language - we did not have Object.create, and this approach is closer the OOP.
//  This is the constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
const peter = new Elf("Peter", "stones");
//  The new keyword in JS, which a lot of people don't like, automatically returns the object for us and it creates the elf constructor. Any function that is invocated using the new keyword is called a constructor function.
//  As a rule, all constructor functions should start with a capital letter, to let other programmers know that we need to call this function using the new keyword.
const Elf1 = new Function(
    "name",
    "wepaon",
    `this.name = name; this.weapon = weapon;`
);
const sara = new Elf1("Sara", "fireworks");
//  Constructor functions are simply that, they allow us to use the new keyword and create these objects for us.
//  Now, we still need to implement the attack. Because we are now using the new keyword and it automatically returns an elf object for us and it creates this elf constructor, we created a new object, and because this function in invocated, a new execution context is created, and because of that, because this is a function that we are running, that means we automatically get the this variable attached to it. The interested thing though is that when we use the new keyword, instead of this pointing to the window object it changes what this is pointing to when a new execution context is created. this will now be pointing to the object we've just created. this now becomes peter, or sam. If we remove the new keyword we are not creating the object and therefore not returning the object, and we are not assigning this to the object that is calling the constructor function.
//  Now, every function in Js gets automatically the prototype property! Functions are special types of objects in Js, it is a callable object that has code that can be invocated and an optional name, lots of properties that we might give to it but we also get the prototype that gets created with any new function - this property is useless for regular functions, but when it comes to constructor functions, this prototype becomes useful!
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function () {
    return "attack with " + this.weapon;
};
const sammuel = new Elf("Sam", "fire");
sam.attack(); // returns 'attack with fire'
//  now when sam.attack() gets called, well, sammuel doe snot have attack as a local function to use, as its own method, but it can go up the prototype chain, __proto__ is going to be pointing to prototype, and this prototype has this method, so every object created with new Elf() will have access to this method. And this method is stored in a single location in memory. And we can just keep adding functinalities there!
//  One last note, when we are creating a method and adding it to the prototype property of the constructor function, we cannot use arrow functions!
Elf.prototype.attack = () => {
    return "attack with " + this.weapon;
};
sam.attack(); // returns 'attack with undefined'
//  But why is that? Because arrow functions are lexically scoped, that is they define this based where they are written! and in the case above there is no surrounding object to Elf.prototype.attack = function () {} except for the global object! But by using the regular function() {} we have the this keyword being dynamically scoped, meaning it does not matter where it is written what matters is who is calling it, which object is calling it.
// Remember that with constructor functions, the only way we can add properties to the object  is using this keyword.

//  let's review the this keyword now, and specially check the 4 ways we can use it:
//  1 - > new binding:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Xavier", 89);
//  now we have person1 with the this update, the new binding allows us to assign this to the object we are instantiationg and not the global scope.

//  2 - implicit binding
const person2 = {
    name: "",
    age: 40,
    hi() {
        console.log("hi, I am " + this.name);
    },
};
//  well, we created an obj and inside it the this keyword will refer to its enclosing object.

//  3 - explicit binding
const person3 = {
    name: "",
    age: 40,
    hi: function () {
        console.log("hi, I am " + this.setTimeout).bind(global);
    },
};
//  this time the hi function has a setTimeout it is going to call, but in this case we want that this keyword be referring to a different obje, in the above example the global obje (yeah, this is kind of useless in the above obj, but serves to merely demonstrate), we do this by saying bind(global). Explicity binding uses either call, apply or bind to explicitly tell the program what obj the this keyword should be referencing.

//  4 - arrow functions
//  with arrow functions, unlike anyother times where this is dinamically scoped, meaning it gets determined when it get called, with the arrow funcitons we are doing lexically scope, so wherever we write the function, that is what this will be referencing to. So:
const person4 = {
    name: "",
    age: 40,
    hi: function () {
        var inner = () => {
            console.log("hi, I am " + this.name);
        };
        return inner();
    },
};
person4.hi();
//  the above will work, but the code below will return undefined instead of karen for the console log name:
const person5 = {
    name: "karen",
    age: 40,
    hi: function () {
        let inner = () => {
            console.log("hi, I am " + this.name);
        };
        return inner();
    },
};
person5.hi();

//  The 4 pillars of OOP:
//  1 -> Encapsulation -> before OOP we had procedural programming, and unlike procedural programming, OOP places things in an object, a container, and organises things into units that model real-world applications -> this is encapsulation, we wrap code into boxes that are related to one another, so these box can interact with each other using the methods and properties made available -> this makes code easier to maintain and more reusable.
//  2 -> Abstraction -> this means hidding the complexity from the user, creating simpler interfaces, like: I'll handle the class, all you have to do is instaciate. The idea of abstraction is like: 'hey, here are the methods and properties you can use, don't worry about anything else, I'll do the calculations behind the scene'-> this reduces complexity, because we can see the methods and understand what the class can do. Also the idea of abstraction also helps when we have private variables and methods.
//  3 -> Inheritance -> by inheriting from other classes, we avoid having to rewrite the same code and we also save memory space. Inheritance is very very important and a powerful concept.
//  4 -> Polymorphism -> many-forms, the idea is the ability to call the same method on different objects and each object responding in an accordingly different way. It has the ability to process objects differently depending on their data type or class.
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return "attack with " + this.weapon;
    }
}
class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        const validTypes = ["hearts", "clubs", "spades", "diamonds"];
        if (!validTypes.includes(type)) {
            throw new Error(
                `Invalid type for Queen, must choose among: 'hearts', 'clubs', 'spades' or 'diamonds'.`
            );
        } else {
            this.type = type;
        }
    }
    attack() {
        return (
            super.attack() +
            `\nI am the ${this.name} of ${this.type}, now bow down to me!`
        );
    }
}
const victoria = new Queen("Victoria", "army", "hearts");
console.log(victoria.attack());

//  -> -> FUNCTIONAL PROGRAMMING <- <-
//  It is all about separation of concerns, which OOP actually does as well, it is all about packaging our code into separate chuncks so that everything is well organised and each aprt of our code concerns itself with one things at a time.
//  But this goes into a level where they also separate data and functions -> they don't combine data and functions into one piece like an object,generally functional languages have an enphasis on simplicity, where data and functions are concerned. We separate them up. And functions operate on well defined data structures like arrays and objects rather than actually belonging to that data structure like methods of an object. The goals of functional programming are the same as OOP.
//  When it comes to FP there is one very important pilar, and unlike OOP where we had four grand pilars (encapsulation, abstraction, inheritance and polymorphism)
//  It all comes down to the concept of Pure Functions. The idea here is the separation of data of a program and the behaviour of a program, and all objects created in FP are immutable, meaning that once something is created, it cannot be changed. Shared state is avoided here, and there is the adherance of the principle of pure functions.
//  Functional programming actually has a lot of restraints, a lot of rules and things you cannot do -> but restraints like this are good in coding, because we don't allow people to do just anything, by having small options of things we can do we can make sure we have code that don't get out of hand.

// -----------------------------------------------------------------------------------------------
// Amazon shopping
const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: [],
    history: [],
};

const itemX = {
    name: "X",
    price: 100,
};

function addItemToCart(item, user) {
    item.price = (item.price * 103) / 100;
    user.cart.push(item);
    user.history.push(`added ${item.name} to cart`);
}

function emptyCart(user) {
    user.cart = [];
    user.history.push(`cart emptied`);
}

function buyItems(user) {
    user.cart.map((item) => {
        user.purchases.push(item);
        user.history.push(`${item.name} purchased`);
    });
    emptyCart(user);
}

function refund(item, user) {
    if (user.purchases.includes(item)) {
        const itemIndex = user.purchases.indexOf(item);
        user.purchases.splice(itemIndex, 1);
        user.history.push(`${item.name} refunded`);
    } else {
        console.log(`${user.name} does not have ${item.name} in purchases`);
    }
}

function removeFromCart(item, user) {
    if (user.cart.includes(item)) {
        const itemIndex = user.cart.indexOf(item);
        user.cart.splice(itemIndex, 1);
        user.history.push(`${item.name} removed from cart`);
    } else {
        console.log(`${user.name} does not have ${item.name} in cart`);
    }
}
// -----------------------------------------------------------------------------------------------

//  Let's now start analysing Pure Functions
//  Pure Functions there are two main rules: 1 - a function has to always return the same output when given the same input. 2 - A function cannot modify anything outside of iteself (no side-effects).
//  Given the same inputs it shall always return the same output
//  side-effects is when a function is modifying things outside its scope, like objects, arrays, variables and so on.
//  One of the problems of having side-effects is we are using shared state, like an array or variable, that can iteract with anything, and then the order of the functions call matters...
//  How can we write code without side effects?
//  take the below code for example:
const anArray = [1, 2, 3];
function mutateArray(arr) {
    arr.forEach((element) => {
        arr.push(1);
    });
}
mutateArray(anArray);
console.log(anArray); // returns [ 1, 2, 3, 1, 1, 1 ] -> the function modified an external object, an array.
//  Hoe can we make the above code not generate any side-effects? Well, to start with we cannot change what the outter array is. Therefore we need to create a new array.
const theArray = [1, 2, 3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
console.log(removeLastItem(theArray)); //   returns [1, 2]
//  note -> we did not change the original array:
console.log(theArray); //  return [1, 2, 3]
//  That is the beauty with no side-effect functions: because it don't affect the 'outside-world' we know what to expect from it.
const anotherArray = [1, 2, 3];
function mutateArray(arr) {
    const newArray = [].concat(arr);
    arr.forEach((element) => {
        newArray.push(1);
    });
    return newArray;
}
console.log(mutateArray(anotherArray)); //  return [ 1, 2, 3, 1, 1, 1 ]
console.log(anotherArray); //  return [ 1, 2, 3 ]
//  Again, the above function does not generate any side-effect!
//  Now, you must be very attentive, let's examine the below function:
function greeting() {
    console.log("hi");
}
//  Is the above function pure? No, it is not, here is why:
//  A pure function should not have any side effects, meaning it should not modify any external state or cause any observable changes outside of returning a value. The greeting() function produces a side effect by writing to the console, which is an external interaction beyond returning data.
//  Now,  about inputs-> outputs, lets consider the function below:
function theSum(num1, num2) {
    return num1 + num2;
}
//  This is what is called referential transparency, consider the below scenario:
theSum(3, 4); //  If I always pass 3 and 4, is there any situation in which the function shall not return 7? No. For every time the function is called with parameters 3 and 4 it shall always return 7 -> to the point that, if we can actually replace the function for its return value, that is, in this case, instead of theSum(3, 4) I simply write 7, it would still work -> this is referential transparency.
//  By adhering to pure functions pillars, and writting only pure functions, this shall make functions very easy to test, to compose and avoids a LOT of bugs, because there are no mutations, no shared state. So it is very predictable!
//  Now, one very important question -> can we only write code using pure functions? Can all functions be pure?
//  Well, strictly speaking, input and output could be a side-effect depending on the extreme you are willing to go... After all, it is a communication with the outside world. With just pure functions, ultimatelly, a program cannot exist without side-effects.
//  Therefore, it is important to nnote that the goal of pure functions is not to make everything pure functions, but to minimise side-effects -> to organise your code where there is a specific part that has side-effects, but when a bug comes through you know right away to go to that spot, as that is where there is side-effects happening, and the rest of your code should remain pure.
//  Purity is more of a confidence level, it cannot ever be 100%. Side effects and impurity is not necessarily bad, but the goal is to organise your code in a way so that you isolate these side-effects, these database-calls, API calls,Input-Output to a certain location in your program so that your code becomes predictable and easy to debug. At the end of the day we still need to have a global state to describe our application. But at its core, the essence of FP is very simple -> build programs that are built with a bunch of very small, very re-usable and predictable pure functions.
/* Withing that philosophy, this is what a perfect function should do:
1 - It must perform 1 task, and 1 task ONLY, we don't want massive functions, but a simple, very testable function, that does 1 thing really well.
2 - It must have a return statement, every function should return something from it, for when we give an input it is expected an output.
3 - It should be pure
4 - Which means there should be no shared state with other functions
5 - Also meaning it should have an immutable state, meaning we can modify some of the state within the function, but we always return a copy of whatever we get, not changing the actual, out-side, input. We never modify the global state
6 - Functions must also be composable.
7 - Most importantly -> they must be predictable! If we understand with 100% certainty what our functions do our codes becomes predictable.
*/
//  FP is, at the end of the day, just about making the code predictable.
//  Idempotence: The idea is a function that always returns or does what we excpect it to return or to do. That sounds familiar with the concept of purity we just talked about, but it is a little bit different here, because an impure function can still have the idempotence feature. For example:
function print(num) {
    console.log(num);
}
//  Well, the above function is clearly impure as it is changing the console state, which is something quite aoutside the scope of the function itself, but no matter how many times I do print(5), it will always behave in the same way, that is, logging 5 to the console. Therefore, even though it is not a pure function, it is still idempotent. We see a lot of idempotency in API calls, like HTTP get requests -> I can do an API call and I expect that that API call, given some parameter, is always going to return the same result, even though we are communicating with the outside world.
//  Therefore, this idea is that, even though we might have to work with impurity, we should still strive to maintain predictibility, and idempotence is an inportant guideline to follow when working with impurity. Being able to call something 1000 times and always getting the same result is extremely valuabe when it comes to things in computation involving parallel and distributed computation -> this is because it makes the code predictable!
//  Another interesting feature of idempotence is the idea of being able to call yourself inside yourself over and over and over and still always get the same result you would get by invoking it only once:
Math.abs(-50); // returns positive 50. Now:
Math.abs(Math.abs(Math.abs(Math.abs(Math.abs(Math.abs(Math.abs(-50)))))));
//  I still get the same result, which is positive 50. No matter what, calling the above function over and over and over inside of itself always returns the same thing.
//  With that in mind we have some garantees of code being predictable.

//  Imperative vs Declarative.
//  Imperative code is code that tells the machine how to do something,the declarative code simply tells what to be done, not how. A computer is better at being imperative, that is, it needs to know how to do things, we, humans, on the other hand, are better at being declarative -> if I tell, hey, can you pass me that jug? I don't need to tell him each sgtep he need to perform to acomplish the task I asked.
//  When we talked about Js engines, we can see that machine code is very imperative -> put this value in this memory space... But higher level languages tend to be more and more declarative, this is done through the incrementation of abstraction.
//  FP helps us be more declarative, by using funcitons, and what composing functions which we will learn latter, we tell the programs what to do instead of how to do it.
//  Remember that when we talk about Declarative and Imperative, declarative code is always going to end up either compiling down or being processed by something imperative, like machine code -> at the end of the day we cannot simply avoid side-effects and data manipulation, at the end of the day something has to manipulate the DOM on the webpage or talk to a database.
//  React, for example, does abstract a lot of this complexity so that we as programmers don't have to do it, but the React library itself and even functional languages like Haskell eventually have to compile and do imperative things, but the idea is to allow programmers do go a step higher into declarative code so it is easier to read and we can be more productive.

//  Immutability -> this means not changing the data, not changing the state.
//  Now, remember how an OOP we had classes where you could change the name property, the weapons... in FP the idea is of immutability, that is not changing state, but instead making copy of the states and returning a new state everytime. In FP the idea of imutability is very important, we can change things inside our functions but we don't want to affect the ouside world.
//  One could argue it does not seems very memory efficient, if we are just coppying things over and over everytime we want to make a change, doesn't that just fill up our memory? Well, there is something called structural sharing, and it is largely implemented when it comes to FP. The idea behind it is that when a datastructure is created, we don't actually coppy everything, like a massive obj or array it could be very expensive memorywise, instead, underneath the hood, what happens is that only the changes made to the state will be coppyed, but the things that don't change, in memory, are actually there in only one place. This is called structural sharing, this combined with the fact that in the current age memory is fairly cheap, it makes sense for some cases in FP where we have immutability. Because by having immutability we can do some really interesting things.
//  The idea behind immutability is: This data is not mine, so any data I receive I can only borrow it and coppy it, so other people can still use the original data unchanged.

//  Now, let's revisit few terms we have seen before - that is, in JS functions are First-Class-Citzens, which meanswe can have High Order Functions and we can also have Closures.
//  Higher Order Functions (HOF) -> both in mathematics as well as in CS simply means a function that does one of two things: it either takes one or more functions as arguments or returns a function as a result (often called a call back function).
//  For example, a func that returns a func:
const hof = () => () => 5; //  this is a function that returns a function that returns 5, if I simply call:
hof(); //   This will return FUNCTION, because that is what it returns, to get to 5 we need to:
hof()(); // This will return 5.
//  Now a function that receives a function as a parameter:
const hof2 = (fn) => fn(5);
hof2(function a(x) {
    return x;
});
//  Now about closures, as a review, it is a mechanism for containing some sort of state. In Js we create a closure whenever a function access a variable defined outside of the immediate function's scope.
const closure = function () {
    let count = 0;
    return function increment() {
        count++;
        return count;
    };
};
closure(); // returns the increment function
//  but we can do the following:
const incrementFn = closure();
incrementFn(); //   return 1
incrementFn(); //   return 2
incrementFn(); //   return 3
//  So even though the initial closure function was called, because the function of the increment remembers the variable declared in the outter scope, so the variable in the outter scope will be available to it, even after the outter function is done running.
//  We are modifying state outside of our function, aren't we? This increment function is touching a state or data that belongs to another function, the closure function. And when it comes to FP, it doesn't mean we cannot use closures, we can definetely use them, and they are very powerful, but we have to be careful that closures only make a function impure if we modify the closed over variable.
//  We can still use closures as long as we are not modifying the state, but there is no problem with receiving data from outside, as long as we don't mutate that data.
//  What is nice with this is that we just created private variables - we are able to use closures to create data privacy - now, as a user, I can't really modify the variable -> in fact, closures get used a lot in FP for this specific reason -> we just have to be careful not to modify the state.

//  Currying -> this is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.
//  Basically we take a function that can take multiple arguments, and instead, using curying, modify it to a function that takes one parameter at a time:
const multiply = (a, b) => a * b;
multiply(3, 4); //  returns 12.
//  How can we use currying in the above function?
const curriedMultiply = (a) => (b) => a * b;
//  we are creating a function (curriedMultiply) that takes on argument and returns another function that takes another parameter, and that is the one that will return the parameters.
//  Because of closure, we have access inside of the b function to the a variable.
curriedMultiply(4)(3); // returns the same 12, but it is taking one parameter at a time.
//  But why is this useful? Because I can now create multiple utility functions out of this. For example:
const curriedMultiplyByFive = curriedMultiply(5); //  now I've called the curriedMultiply function once with a paramenter of 5, so curriedMultiplyByFive will going to always have 5 as a parameter of the multiplication
//  Currying almost remember us of those methods on prototypes that are shared among objects.

//  Now let's see something similar to currying, but yet slightly different. It is called partial application.
//  Partial application is a way for us to partially apply a function. It is a process of producing a function with a smaller number of parameters. This basically means to take a function, applying some of its arguments into a function, so it will remember those parameters, and then it uses closures to later on be called with the rest of the parameters.
//  Let's see how that is actually used in code and then compare it to curying.
const newMultiply = (a, b, c) => a * b * c;
//  Partial applications says I want to apply a portion of the parameters, for example, a, and next time I call that function I want to apply the rest of the arguments, b and c.
//  A curried function will simply have another function:
const curriedNewMultiply = (a) => (b) => (c) => a * b * c;
curriedNewMultiply(3)(4)(10); // returns 120
//  Partial application says no, I want you to call the function once, and then apply the rest of the arguments to it later. So on the second call I expect all the left arguments.
//  One way of doing it is by simply using bind. We can assign newMultiply to a new function, say partialMultiply, and we can pass a fixed argument there! In this case the first argument, which would be the object for the this keyword is kind of irrelevant in this context, so we can pass null there, but then we can pass a fixed parameter or argument:
const partialMultiply = newMultiply.bind(null, 3);
//  Therefore we can call partialMultiply where the argument 3 is already fixed, we just have to pass the remaining parameters:
partialMultiply(4, 10); // this returns the 120.
//  In partial application, on the second function call all the remaining arguments are expected to be provided. Whereas in currying, it expects only one argument at a time.

//  Memoization -> To properly understand it we need to firstly understand what Caching is.
//  Caching is a way to store values so we can use them latter on, ideally we can think of it as a backpack we take to school. instead of going all the way home when we need something, we have a small contaner on our back that holds the items we need, so that when we go to school we can access them fastly.
//  Caching is just a way for us to speed up programs, by holding some piece of data in an easily accessable box.
//  Memoization is a specific form of caching that we are going to be talking about.
function addTo80(n) {
    return n + 80;
}
addTo80(5); // returns 85.
//  Simple functions, but if I run that function again, I will have to go again through the process, and if I do that again, once again I will have to go to memory, get the function's steps, load the values to CPU and perform the computation. Now, for a simple function as the one above it is not such a big deal, but imagine a very extensive and computational expensive function that requires a long time to perform the operation. h/ence comes the question: 'is there a way we can optimise this procedure?'
//  That is when we can use caching (and memoization). Let's imporve the above function by doing somwthing different:
let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = n + 80;
        return cache[n];
    }
}
//  So memoisation is a specific form of caching that involves caching the return value of a function based on its parameters. If the parameter of this function doesn't change, then it is memoized, it uses the cache.
// When the parameter changes, say:
memoizedAddTo80(6);
//  then it is a different parameter so it is going to calculate it and add to the cache.
//  memoization is a way to remember a solution to a problem, so we don't have to calculate it again.
//  Now, lets improve the function! Ideally we don't want to fill the cache in what we call the global scope, that is, a cache that is living outside of the function. Ideally it is a good practice to have memory, or in this case, the cache, to live inside of the function, not puluting the global scope.
//  There are many ways to do it based on the language, in Js we can use what we call closures!
function memoizedAddTo80(n) {
    let cache = {};
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = n + 80;
        return cache[n];
    }
}

//  The problem now is, everytime we run the function we have to perform the calculation all over again, every time. This is because cache gets reset every time, because with every call cache becomes an empty object. to get around it we have to use closures in js:
function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = n + 80;
            return cache[n];
        }
    };
}
//  So what we are doing is returning a function, and this is creating closure! So ebcause of closure we are able to access this cache inside of this child function.
//  Now we can:
const memoized = memoizedAddTo80();
memoized(5);
memoized(5);
//  This is very powerful! This allows us to be very efficient with our code.

//  Compose
//  This is a big one and it really shows the power of functional programming! Which, up untill now has been a little bit confusing,  with all the purity concepts and all. We learned a lot of stuff but so far it has been a bit complicated to actually see the use of it all.
//  Composing, or composition, is the idea that any sort of data transformation that we do should be obvious!
//  We have data that gets processed by a function that outputs some sort of new data, which by its turn gets processed by a new function that outputs an another new data.
//  data --> fn --> newData --> fn --> anotherNewData.
//  Composability is a system design principle, that deals with this relationship of components. How we can compose different components over a factory. A highly composable system provides components that can be selected and assembled in various combinations, just like an assembly line -> moving pieces around to get the desired output based on the user specifics requirements.
//  Let's say we want to have a number, like -50, that gets multiplyed by 3, and we also want to take the absolute of that.
//  We want to do, therefore, two things. two functions... How can we compose them together? Like in an assembly line in a factory?
//  in FP we can use something called compose, but compose doesn't exit in JS, but is it so common that there are a ton of libraries that actually let you use compose
const multiplyByThreeAndAbsolute = compose(multiplyByThree, makePositive);
//  basically we want a compose function that, when given a number, is going to multiply by 3 and make the result positive.
//  Lets start by defining our own compose function:
const myCompose = (f, g) => (data) => f(g(data));
const multiplyByThree = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
//  now I can:
multiplyByThreeAndAbsolute(-50); // return 150.
//  So, using compose, we actually created our assembly line, where we can compose different functions together, and that is what compose is... Remember the definition -> composibility is a system design principle, that deals with the relationship between components. The functions are the components! Which can be selected and then assembled in various combinations! We can move them around, like machienry in an assembly line!
//  Now we can compose functions! Build them together to add extra functionality, to create dataflow where we take a piece of data and submit it through the series of selected functions and then finally we have some sort of output, because all those functions are pure and all of them are composable.
//  When it comes to compose, that is one of the most common functions we are going to see in a programming language or paradigm.

//  Now, there is another thing called Pipe, which is essentially the same thing, except going from right to left it goes left to right. Let's see what that means.
//  If instead of compose = something we want to Pipe. Well, pipe is simply the order that is different.
const pipe = (f, g) => (data) => g(f(data));
//  So now, with pipe, the operations are different -> f gets run first with the data, and then g gets to run on that data.
//  Imagine a function 1 that takes as a parameter a function2 that itself takes a function3 as the paramenter and that itself takes 50.
fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50); //   In compose we are basically saying, first apply 50 to fn3, then the output to fn2 and finally the output th fn1, we are going right to left.
//  Pipe is just the oposite:
pipe(fn1, fn2, fn3)(50); //  here we are applying 50 to fn1, the the output to fn2 and finally the output to fn3 -> we are going left to right.

//  Let's implement all we learned in the Amazon challange:

const buyer = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: [],
};

const item = {
    name: "laptop",
    price: 200,
};

purchaseItem(emptyCart, buyItem, applyTax, addItemToCart)(buyer, item);

const compose =
    (f, g) =>
    (...args) =>
        f(g(...args));

function purchaseItem(...fns) {
    return fns.reduce(compose);
}

function addItemToCart(buyer, item) {
    const updateCart = buyer.cart.concat([item]);
    return Object.assign({}, buyer, { cart: updateCart });
}

function applyTax(buyer) {
    const { cart } = buyer;
    const taxRate = 1.03;
    const updatedCart = cart.map((item) => {
        return {
            name: item.name,
            price: item.price * taxRate,
        };
    });
    return Object.assign({}, buyer, { cart: updatedCart });
}

function buyItem(buyer) {
    return Object.assign({}, buyer, { purchases: buyer.cart });
}

function emptyCart(buyer) {
    return Object.assign({}, buyer, { cart: [] });
}

//  We have to talk about composition vs Inheritance. Inheritance is a superclass that is extended to smaller pieces that add or overwrite things. We used inheritance by using class [] extends []. Composition is smaller pieces to create something bigger -> like using compose, we compose functions to act upon data differently -> Smaller pieces that are combined to create something bigger.
//  The debate between composition vs inheritance is a heavy one, and a lot of people prefer composition over inheritance.
//  The first thing we want to keep in mind when we talk about inheritance is that the structure of our code is around what it is. That is, what is the superclass, what is each of its subclass, we are structuring our classes around what things are. They have data as well as methods and actions and functions that act upon said data.
//  With composition, on the other hand, we focus and structure our code aorund what it does to data. We are focusing on what the abilities are.
//  When we define something as what it is, we are saying that this is what is going to happen, but as humans we are notoriously bad at predicting the future, and we are assuming no change.
//  There lies a problem: called the tight cuppling problem.
//  The coupling between a child class and its parent is a very tight form of coupling, that means the opposite of reusable modular code, because making a small change to a class, even a small change in one of its methods, will have these rippling effects to all its subclasses. In one hand this can be a benefit, keeping your code Dry, but on the other hand, it can also cause a lot of problems, basically you have all these dependencies where, if you change something, you have to be sure it is not breaking something in the subclasses. Remember, these subclasses are using inheritance.
//  This leads us to the other problem: Fragile Base Class Problem.
//  Where, because the base class changes all subclasses, this can be very fragile, it can break our code down the path.
//  Another problem we can have with inheritance is the: Hierarchy Problem.
//  With inheritance, we start to get into a situation where we design the program with a user in mind, with superclasses in mind and then we have the subclasses in mind, but then all of a sudden the program needs to change and you have to create new classes and new superclasses and the problem start to arise now where we want to start sharing methods but everything just becomes too tightly coupled that eventually as a program it becomes bigger and bigger it creates more and more issues, then you have to refactory the code and all of the function you start violating the dry principle.
//  Well, if we have these inheritance problems, how can we fix them with composition?
//  The first thing we can do it to remove all the methods.
function Elf(name, weapon, type) {
    let elf = {
        name,
        weapon,
        type,
    };
    return getAttack(elf);
}
function getAttack(character) {
    return Object.assign({}, character, { attackFn: () => {} });
}

Elf = attack() + sleep();
Ogre = attack() + makeFort() + sleep();

/*--------------------  Converting OOP into FP  --------------------*/

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return "attack with " + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, colour) {
        super(name, weapon);
        this.colour = colour;
    }
    makeFort() {
        return "strongest fort in the world made";
    }
}

class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        const validTypes = ["hearts", "clubs", "spades", "diamonds"];
        if (!validTypes.includes(type)) {
            throw new Error(
                `Invalid type for Queen, must choose among: 'hearts', 'clubs', 'spades' or 'diamonds'.`
            );
        } else {
            this.type = type;
        }
    }
    attack() {
        return (
            super.attack() +
            `\nI am the ${this.name} of ${this.type}, now bow down to me!`
        );
    }
}

//-------------------------------------------------------------------

// Base character
const character = (name, weapon) => {
    return {
        name,
        weapon,
    };
};

// Character classes
const createElf = (name, weapon, type) => {
    return {
        ...character(name, weapon),
        type,
    };
};

const createOgre = (name, weapon, colour) => {
    return {
        ...character(name, weapon),
        colour,
    };
};

const createQueen = (name, weapon, type) => {
    const validTypes = ["hearts", "clubs", "spades", "diamonds"];
    if (!validTypes.includes(type)) {
        throw new Error(
            `Invalid type for Queen, must choose among: 'hearts', 'clubs', 'spades' or 'diamonds'.`
        );
    }
    return {
        ...character(name, weapon),
        type,
    };
};

// Methods
const attack = (character) => `attack with ${character.weapon}`;
const queenAttack = (queen) =>
    `${attack(queen)}` +
    `\nI am the ${queen.name} of ${queen.type}, now bow down to me!`;
const makeFort = (ogre) =>
    `I, ${ogre.name}, built the strongest fort in the world!`;

const describeCharacter = (character) => {
    description = {
        name: character.name,
        weapon: character.weapon,
    };
    if (character.type) {
        description.type = character.type;
    }
    if (character.colour) {
        description.colour = character.colour;
    }
    return description;
};

//  Running:
const legolas = createElf("Legolas", "bow", "woodelf");
console.log(describeCharacter(legolas));
console.log(attack(legolas));

const queenOfHearts = createQueen("Queen", "armies", "hearts");
console.log(describeCharacter(queenOfHearts));
console.log(queenAttack(queenOfHearts));

const shrek = createOgre("Shrek", "club", "green");
console.log(describeCharacter(shrek));
console.log(makeFort(shrek));

//  OOP vs FP
//  They are both paradigms, and a programming paradigm is writting code compliant with a predefined set of rules. Organising the code into units would be OOP, avoiding side-effects and writting pure functions would be FP.
//  In OOP an object is a box containing information and operations that are supposed to refer to the same concept. We are grouping it as an object. These pieces of information inside of the object are called attributes or states, and the operations that can happen to this state are known as methods.
//  In FP the code is essentially a combination of functions and data is immutable, which leads to writting programs with no side-effects and pure functions. Because in a function within a FP paradigm, that function cannot change the outside world - and the output of value of a function simply depends on the given arguments. This allows FP to really have control over a program flow.
//  We learned that FP is based on different concepts, like Higher Order Functions, Pure functions, referential transparency, functions are first class citzens.
//  In OOP, objects are first class citzens, and we learned about the pillars of each of these paradigms, like abstraction, encapsulation, inheritance and polymorphism.
//  In FP it is all about the idea of pure functions, and composing functions to act upon the data.
//  OOP has been around for a long time, since the 70s, and FP as well if not even before, OOP is very common in languages like C#, Python, Java and the functional programmin in languages like Closure and Haskel, but at the end of the day there is not one better than the other, all of them are good in their own ways, they are simply different appraches to the same problem. That is, how:
//  to write clear, easy to understand, easy to expand and to mantain efficient, dry code.
//  in a FP style, functions manipulate data structures, and things like composition are used a lot more than loops and iterations and if-else statements that are more procedural.
//  although some languages prefer one over the other in terms of programming paradigms, languages like javascript embrace both paradigms, which is extremelly wonderful -> the programmer can pick the best solution for his problems.
//  Although the language thhat we use does have an effect on which type of paradigm you wirte, even pure functions like haskel you can write procedural code, or even in OOP style and even in procedural languages like C.
//  The advantage to each paradigm is simply in the modelling of the algorithm and the data structure. The choiceof which to use is simply what makes more sense to the project and the language being used.

/*  
FP                                              OOP
many operations on fixed data                   few operations on common data
stateless                                       stateful
pure                                            side-effects
declarative                                     imperative
*/

//  Asynchronous JS
//  Asynchronous simply mean that we don't have it right now. When we build modern websites, we don't have all the data straight away, we have the html, css, some js, but as the page is being loaded, we also have to make requests to databases, across the web, to fetch some 3rd party API, all these require asynchronous code because it is information we don't have yet, we need to get it, we aresimply saying to JS, hey, can you go and find this out for me, and when you have it, do this with that data.
//  Asynchronous functions are functions that we can execute later.
//  But firstly, what is a program? Well, it has do to 2 simple things: 1 - allocate memory and 2 - parse and execute the script.
//  We also know that there is the js engine and that engine reads the code we write and changes it into machine executable instructions for the browser. Now the engine consists of 2 parts:
//  A memory Heap and a Call Stack
//  The memory Heap is where the memory allocation happens. And the call stack is where the code is read and executed - it tells you where you are in the program.
//  A single threaded language means that it has only one call stack -> it can only do one thing at a time. And in Js the logic for the call stack is, first in-last out.
//  Other languages can have multiple call stacks, and they are called multi-threaded languages.
//  Why was Js designed to be single threaded? Running code in single thread is quite easy, because you don't have to deal with complicated scenarios that arise in mult-threaded scenarios, like deadlocks.
//  So Synchronous programming means: line 1 gets executed, then line 2 gets executed and then line thre and so on.
//  Now attention to the stack overflow problem: it happens when the callstack just gets bigger and bigger and bigger untill it just doesn't have enough space anymore.
//  So the Js engine has a memory heap and a callstack, now js is single threaded, only one statement gets executed at a time. But there is a problem! Imagine in the call stack there is a function that is extremelly complicated and has milions of iterations and all, it would freeze the whole program, if we are talking about a website, the whole page would freeze and the user wouldn't be able to do anything with it untill that operation ends and gets removed from the callstack.
//  To save the day there is asynchronous -> we can think of it like a behaviour. synchronous execution is great because it is predictable, we know what happens and in which order, but it can get slow.
//  In order for Js as we know it to run, we need more than the JS engine, we need a runtime environment -> it is part of the browser, it is included in the browsers.
//  and in the runtime env is part of the browserand is included in the browsers, and ontop of the engine, they have WEB APIS callback queue and a Event Loop. Actually Timeout is part of the runtime env and not technically part of the Js, it is basically something the browsers give us so we can do asynchronous programming.

//  Promises are a new feature in JS, and they are great!
//  A promise is an object that may produce a single value some time in the future, either a resolve value or a reason that it is not resolved (rejected).
//  A promise may be in one of three possible states: fulfilled, rejected or pending.
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("stuff worked");
    } else {
        reject("Error, it broke");
    }
});
promise
    .then((result) => result + "!")
    .then((result2) => {
        console.log(result2);
    })
    .catch(() => console.log("error!"));
//  .catch will catch any error that happens between the chains .then

promise
    .then((result) => result + "!")
    .then((result2) => result2 + "?")
    .catch(() => console.log("errror"))
    .then((result3) => console.log(result3 + "!"));
//  Remember, catch only works for the .then chain before it, not for those after it.

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HII!!");
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Pookie!");
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Is it me you are looking for?");
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
});

movePlayer(100, "left")
    .then(() => movePlayer(400, "left"))
    .then(() => movePlayer(10, "right"))
    .then(() => movePlayer(330, "left"));

async function playerStart() {
    const first = await movePlayer(100, "left");
    const second = await movePlayer(400, "left");
    await movePlayer(10, "right");
    await movePlayer(330, "left");
}

//  The biggest benefit of async await is that it makes code easier to read.
//  So with async syntax we first declare that a function is async by placing the async before the function. Then we start writting the function's code, but we gain access to a new syntatic word, await, because we used the async word. This await keyword says pause this function untill I have something for you. You can use this await keyword in front of any call of a function that returns a promise, and when the promise is resolved then the function moves into the next line.
//Let's use an example with the fetch function.

fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then(console.log());

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}
fetchUsers();

//  Now let's see a far more realistic approach:
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
    try {
        const [users, posts, albuns] = await Promise.all(
            urls.map((url) => fetch(url).then((resp) => resp.json()))
        );
        console.log("users", users);
        console.log("posts", posts);
        console.log("albuns", albuns);
    } catch (err) {
        console.log("error: ", err);
    }
};

const swUrls = [
    "https://swapi.co/api/people/1",
    "https://swapi.co/api/people/2",
    "https://swapi.co/api/people/3",
    "https://swapi.co/api/people/4",
];

Promise.all(
    swUrls.map((url) => {
        return fetch(url).then((people) => people.json());
    })
)
    .then((array) => {
        console.log("1", array[0]);
        console.log("2", array[1]);
        console.log("3", array[2]);
        console.log("4", array[3]);
    })
    .catch((err) => console.log("error: ", err))
    .finally(() => console.log("extra: ", data));

//  for await of

const loopThroughUrls = (urls) => {
    for (url of urls) {
        console.log(url);
    }
};

const getData2 = async function () {
    const arrayOfPromises = urls.map((url) => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
    }
    console.log(data);
};

//--------------------------------------------------------------
//  When we have a code with multiple promises, we may want to decide how we wish to operate those promises. For example, we might want to run them in parallel, all at once, of sequencially, one at a time. Also a race, we call three things: but we will only keep the one that gets returned first.

const promisify = (item, delay) =>
    new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `prallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);

//  Modules in JS
//  Modules are a very, very important concept in Js and in any other programming language. Just like a painnter has in his pallet paint in different compartments, and he or she can combines them for new hues, or a writter who writes different chapters for a book, modules are just like that. Different pieces of code are grouped together so things are organised and as our applications gets larger and larger, we can combine different pieces togerther to make these large applications.
//  Good modules are highly self-contained and grouped together with their own specific functionalities, allowing them to be moved around, used by other places or even removed withoutdestructing the system as a whole.
//  We need a way, in Js, to import dependencies, that is, code we want to use written by someone else and made available, and export functionality, often called an interface, to allow others to use our code. With modules this idea extends beyond functions and classes we saw in the Programing paradigms. This idea of modularity actually goes beyond just Js files, to entire systems and distributed computing. The concept prevails throughout programming.

//  What are programs in genenral? They are simply a way for us to modify data, modify variables, and because so much of our code is about modifying data and how we organise these variables within our code, the way we structure this data should be the most important part of our program, because it is going to allow us to have more maintanable code. As humans, if we just have few variables it is easy.
//  Without a function being able to talk with other functions, without talking to other pieces of data outside ourselves, well, we can't really write programs - we need a way to share data between our functions, so how do we do this?
//  One way is declaring a variable with some data outside the scope of those functions I am declaring, and pass that variable on through the function. We basically lexically declare the variable up the scope chain, that is in the the parent context.
//  But as soon as we start writting bigger and bigger programs, we start having this code that is keeping extending, then we know we have the idea of tight couplling, which means that everything is connected and tightly so. This also create hard to debug code because so many things can happen that can modify data and poluting the global space causes possible memory leak.
//  So we have this problem to solve, a massive file with thousand of lines of JS with the global scope too poluted, all tightly coupled, how can we fix it?
//  So, originally we used a technique. We know we have idea of the Global Scope and then the function scope. Now we also have the concept of block scope (for and if when using let and const), but before that we only had global and function. In an ideal world we would have another scope: the module scope, which is higher up than the function scope, so we could group functions together in this module scope, and we could even use the module scope to share variables between functions there declared without poluting the global scope - so we can share things without having to go through the global scope.
//  Back in the day we were able to create this module scope using what was called the module pattern, basically using closure and encapsolation to create module scopes. It looked like this:
(function () {})();
// this is a IIFE ( immeadiatelly invoked function expression)
//  remember, because we are wrapping it in a parenthesis, it is not a function declaration, what the compilor sees wont be a function. This is essentially a function as a module, because if we wrap out entire file within that, we remove all variables and functions away from the global scope:

(function () {
    var harry = "Potter";
    var voldemort = "He who must not be named";

    function fight(character1, character2) {
        let attack1 = Math.floor(Math.random() * character1.length);
        let attack2 = Math.floor(Math.random() * character2.length);
        return attack1 > attack2 ? `${character1} wins` : `${character2} wins`;
    }
})();

//  The question then arises: if we want something else to use the fight(), but we don't want them to touch harry or voldmort, because they are private variables? Well, using the IIFE and the module pattern, I can simply say:

const fightModule = (function () {
    var harry = "Potter";
    var voldemort = "He who must not be named";

    function fight(character1, character2) {
        let attack1 = Math.floor(Math.random() * character1.length);
        let attack2 = Math.floor(Math.random() * character2.length);
        return attack1 > attack2 ? `${character1} wins` : `${character2} wins`;
    }
    return { fight: fight };
})();
fightModule.fight("Ron", "Hagrid");

//  Very well, so using an IIFE we were able to create a scope, a function scope, that mimics a module scope, so we can wrap an entire Js file using this notation of an IIFE, and everything inside of it will run because we are immediatelly invoking it, and we will only return what we need to a variable that will be accessible in the global scope.
//  Now we are only revealling one variable, so 'poluting' the global scope with one variable, just once, and hiding everything else, and everything we want to make public we can attach to that variable as an object and attachdifferent paramenters and methods to it.
//  This is great for maintainability, as by definition a module is self-contained. Updating a module is much easier when it is decoupled from the rest of the code. So changing the stuff inside the module won't afftec other data-sctructures.
//  Also, there is the idea of reusability, instead of copying code over and over, these modular functions can now be shared, so I can use fight function in other parts of the code, and if we need to fix it, we know exactly where to go instead of changing the code in multiple places.
//  But, well... There are two main problems with this approach. 1 - we technically are still poluting the main space as fightModule is still a variable declared in the global scope -> so although we did minimise the polution, it still happens and we can still get name clashes. 2 - we don't necessarilly know all the dependencies, this means that the order of the script tags must be correct!
//  How can we solve this? Well, there came two main solutions!
//  Two great solutions came along, so we no longer had to use an IIFE and module pattern. They were: CommonJS and AMD (Asynchronous Module Definition) -> these solved the problem of designing a module in a way that we won't have any interferance in the global scope.
//  CommonJS:
var module1 = require("module1");
var module2 = require("module2");

function fight() {}
module.exports = {
    fight: fight,
};
//  This was created with servers and backend in mind, and it is one of the main reasons why node.js became so popular, this commonJs import / export module system made code very easy to share for node.js programs. NPM ( Node Package Manager) is actually a way for people to share modules! People using commonJS started sharing their code to other programmers, so in node.js sharing code and using third party code became really really easy.
//  With commonJS modules are meant to be loaded synchronously, remembering that JS has one callstack, so that means if a module takes a really long time to load, we will have to just wait there, untill it gets loaded, then the next one gets loaded, and only then we can run our script.
//  The thing is that it is not ideal for browsers, where we have users clicking on buttons and entering data into forms, and many other interactions. Synchronous code on the browser can get really dangerous, and that is why commonJS was user on the server-side.

//  The other solution now, AMD:
define(["module1", "module2"], function (module1Import, module2Import) {
    var modlue1 = module1Import;
    var module2 = module2Import;

    function dance() {}
    return {
        dance: dance,
    };
});
//  AMD was designed specifically for the browsers, that means it loads scripts or modules asynchronously, which is crutial for browsers.
//  Then finally came the standard module system in JS with ES6:

import module1 from "module1"; // {fight};
import module2 from "module2";

export function jump() {}

//  Now we have a native keyword: import, which imports a module from whatever file we want, and anytime we want to export something, we simply do export and whatever we want to export.

const harry = "Potter";
const voldemort = "He who must not be named";

export function fight(character1, character2) {
    const attack1 = Math.floor(Math.random() * character1.length);
    const attack2 = Math.floor(Math.random() * character2.length);
    return attack1 > attack2 ? `${character1} wins` : `${character2} wins`;
}

//  Errors -> they are actually a feature! therefore, handling errors is an important way for us to become great programmers!
//  In Js we have an Error constructor:
Error;
new Error("Oopsie");
//  But what we need to do is throw an error -> when we throw an error the script stops executing.
throw new Error();
//  You can actually throw anything:
throw "hello";
//  When we throw something, it stops the execution of our code.
const myError = new Error("Ooopsie");
myError.name; // Error
myError.message; //  "Ooopsie"
myError.stack; //  Shows where the error happened, the exact place of the stack. It shows where we were in the callstack when the error came up.
//  we have the generic Error, but also: SyntaxError, ReferenceError -> and as soon as Js identifies any of those, it automatically throws that error.
//  But sometimes we don't want the program to stop completelly because of an error, sometimes we want to catch said error instead of simply stopping it all and throwing the error.
//  In Js there is a system for errors -> in the callstack, as soon as an error happens, we go to the next execution context in the queue and ask: "Is there a catch? Anything handling the error? No, okay, then I'll keep asking along the stack", and if all throught the callstack nothing is handling the error, then the error is thrown.
//  The power in the errors is in the fact that you can create these little hurtles, stops, along the callstack to catch these exceptions, and once you catch them you can do something interesting to address them, so the program doesn't stop running.
//  In JS there are 2 ways we can catch the errors:
//  1:
try {
} catch {}
//  2:
//  .catch()

//  If I have a function called fail:
function fail() {
    try {
        console.log("this works");
    } catch (error) {
        console.log("we have made an oopsie", error);
    } finally {
        console.log("sill good");
        return "returning fail";
    }
}
//  The abovemethod can be used to catch any type of synchronous errors.
try {
    try {
        something();
    } catch (e) {
        throw new Error(e);
    }
} catch (e) {
    console.log("got it ", e);
}
//  As said before, it works with synchronous code, so in case of asynchronous:
try {
    setTimeout(function () {
        fakeVariable;
    }, 1000);
} catch (e) {
    console.log("got it", e);
}
//  The above code will return no errors. The catch block will not catch it, because this code is asynchronous. As we know, the setTimeout exits our current callstack, goes all the way to the Web API, event queue, callback loop, pushed back on to the stack, after the rest of the code is executed.
//  So, this is a problem, because we also write asynchronous code.
//  So, how do we handle asynchronous code?
//  To handle these kind of errors we use the .catch() method.
//  To deal with promises:
Promise.resolve("asyncFail")
    .then((response) => {
        throw new Error("#1 fail");
        console.log(response);
        return response;
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
        return err;
    })
    .then((response) => {
        console.log(response.message);
        throw new Error("#2");
    })
    .catch((err) => {
        console.log("final error");
    });

//  Course completed!
