/*Ans to the Ques no 1*/
**difference between var, let, and const**

**var** - var is used to declare variables and the oldest way to declare variables.

- It is function scope.
- Reassignment and redeclaration is possible with var.
- Variables are hoisted and initialized with undefined.
- Example
  **Reassignment**
  var price = 30;
  price = 60; (updated value)
  console.log(price); output: 60
  **Redeclaration**
  var price = 30;
  var price = 60; (updated value)
  console.log(price); output: 60
  **Hoisting**
  console.log(price); output: undefined
  var price = 30;

  **let** - let is used to declare variables.

- It is block scope.
- Reassignment is possible with let.
- redeclaration is not possible with let
- Variables are hoisted and stay in TDZ(Temporal Dead Zone), cannot be accessed before declaration.
- Example
  **Reassignment**
  let price = 30;
  price = 60; (updated value)
  console.log(price); output: 60
  **Redeclaration**
  let price = 30;
  let price = 60; (updated value)
  console.log(price); output: error
  **Hoisting**
  console.log(price); output: error
  let price = 30;

  **const** - const is used to declare variables and safest way for coding.

- It is block scope.
- Reassignment and redeclaration are not possible with const.
- Variables are hoisted and stay in TDZ(Temporal Dead Zone), cannot be accessed before declaration.
- Example
  **Reassignment**
  const price = 30;
  price = 60; (updated value)
  console.log(price); output: error
  **Redeclaration**
  const price = 30;
  const price = 60; (updated value)
  console.log(price); output: error
  **Hoisting**
  console.log(price); output: error
  const price = 30;


  /*Ans to the Ques no 2*/
  **spread operator** - is a feature of javascript that allows to spread or expand an iterable object(like an array or a string) into individual elements.
  Example
  const arr1 = [1, 2, 3];
  const arr2 = [11, ...arr1, 66, 78];
  console.log(arr2);
  output: [ 11, 1, 2, 3, 66, 78 ]
  

  /*Ans to the Ques no 3*/
  **difference between map(), filter(), and forEach()**
  **map()**- is an array method which applies function to each and every element of an array and returns them in a new array.
  Example
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled);
  output: [ 2, 4, 6, 8, 10 ]

  **filter()**- is an array method that creates a new array containing only the elements that pass a specific condition.
  Example
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers);
  output: [ 2, 4 ]

  **forEach**- is a built-in javascript array method that simply executes a specific function once for each element in an array. It does not return any array.
  Example
  const numbers = [10, 20, 30];
  let total = 0;
  numbers.forEach(num=>{
    total= total+num;
  })
  console.log(total);
  output: 60.


  /*Ans to the Ques no 4*/
  **arrow function** - is a shorter way to write function in javascript, introduced in ES6.
  Example
  Traditional function
  const add = function(num1, num2){
    return num1+num2;
  }

  Arrow function
  const add = (num1, num2) => num1+num2;


  /*Ans to the Ques no 5*/
  **template literals** - are new and strong method of string declaration in javascript.It stays in between back tick(` `) character instead of double quotes(" ") or single quotes(' ').
  Advantages
  - line breaks can be performed directly with template literals.
  - variables or expressions can be embed directly into a string using ${} syntax which makes the code easier to read and maintain.