/*Varables: There are  3 ways to declare variable in JS
1) var: It is a old way to declare variable. It has document scope means you can acces this variable's value anywhere in the document. 
2) let: It is a new method to declare varibale. It has body scope means you can't access this variable's value outside the body.
3) const: It is a new method to declare constant variable. It also has body scope but you can't reassign the value of that varaible. */

var num1 = 1;
let userName = "Waqar Ahmed";
const bool = true;

console.log(num1);
console.log(userName);
console.log(bool);

//=============================================================================================================================================

/*Operators: Means to perform some opration on operand.
operand: The value on which operation are performed. Ex 2 + 2 here 2 is operand and + is operator.

1) Arithmetic Operators: 
    i)  +   (Add)
    ii) -   (Subtract)
    iii) /  (Divide)
    iV) *   (Multiplication)
    V)  %   (Mode)*/

console.log(2 + 5); //7
console.log(10 - 5); //5
console.log(5 / 9); //0.5555555555555556
console.log(2 * 5); //10
console.log(2 % 11); //2

/*2) Logical Operators: 
    i)  && (AND)
    ii) || (OR)
    iii) ! (NOT) */

console.log(2 < 5 && 5 > 2); //true
console.log(2 > 5 || 5 > 2); //true
console.log(!5); //false

/*3) Relational Operator:
    i) >    (Greater Than)
    ii) <   (Less Than)
    iii) == (Equal to) or === (strict equal to)
    iv) !=  (Not Equal to)
    v)  >=  (Greater Than Equal to)
    vi) <=  (Less Than Equal to) */

console.log(2 > 5); //false
console.log(2 < 5); //true
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(5 != 5); //false
console.log(10 >= 5); //true
console.log(10 <= 10); //true

//=============================================================================================================================================

/*Type Coercion: Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another (such as strings to numbers). This can happen in various operations, and understanding how JavaScript handles type coercion is important for avoiding unexpected results.*/

console.log(5 + 5) //10
console.log(5 + "5") //55
/*The number 5 is being added to the string "5".
JavaScript sees that one operand is a string and the other is a number.
It converts the number 5 to a string, resulting in "5".
It then concatenates the two strings "5" and "5".*/
console.log(10 - "5") //5
/*The number 10 is being subtracted by the string "5".
JavaScript sees that one operand is a number and the other is a string.
For the - operator, JavaScript will attempt to convert the string to a number.
The string "5" is successfully converted to the number 5.
The subtraction operation is then performed: 10 - 5. */
var a = 5;
var b = "10";
console.log(a + + b) //15
/*The unary + operator is used to convert b from a string to a number.
The + operator between a and +b then performs numerical addition.
The expression becomes 10 + 5, which results in 15.*/

//=============================================================================================================================================

/*Concatination: It means to join 2 or more strings The symbol is + */
let age1 = 22;
console.log("The Age of Waqar is " + age1 + " He is a Teacher.");

/*Template Literals: Template literals allow for easier and more readable string interpolation and multi-line strings. This is a convenient way to create strings that include variables or expressions without needing to concatenate strings with the + operator. */
let age = 22;
console.log(`The Age of Waqar is ${age} He is a Teacher.`);

//=============================================================================================================================================

/*Increment: Incrementing is the process of increasing a numerical value by a specific amount, typically by 1. In programming, incrementing is a common operation used in loops and other iterative processes.

In many programming languages, including JavaScript, there are shorthand operators for incrementing a variable. For example:

Increment Operator (++)
Post-increment (variable++): Increments the value of the variable after its current value has been used.
Pre-increment (++variable): Increments the value of the variable before its current value is used. */
let x = 5;
console.log(x++); // Outputs 5, x is now 6
console.log(x);   // Outputs 6

let y = 5;
console.log(++y); // Outputs 6, y is now 6
console.log(y);   // Outputs 6

/*Decrement: Decrementing is the process of decreasing a numerical value by a specific amount, typically by 1. In programming, decrementing is also a common operation used in loops and other iterative processes.

In many programming languages, including JavaScript, there are shorthand operators for decrementing a variable.

Decrement Operator (--)
Post-decrement (variable--): Decrements the value of the variable after its current value has been used.
Pre-decrement (--variable): Decrements the value of the variable before its current value is used. */
let a = 5;
console.log(a--); // Outputs 5, x is now 4
console.log(a);   // Outputs 4

let b = 5;
console.log(--b); // Outputs 4, y is now 4
console.log(b);   // Outputs 4

//=============================================================================================================================================

/*Condition: In programming, a condition is an expression that evaluates to either true or false. Conditions are fundamental to control flow in programming, as they determine whether specific blocks of code are executed. */

//1) if statement: Executes a block of code if a specified condition is true.

let UserAge = 18;
if (UserAge >= 18) {
    console.log("You are an adult.");
}
//if you have one statement in body so you can write without curly braces. 
let UserAge = 18;
if (UserAge >= 18)
    console.log("You are an adult.");

// 2) If-Else Statement: Executes one block of code if a condition is true and another block if it is false.
let age = 17;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// 3) Else If Statement: Allows for multiple conditions to be checked in sequence.
let age = 20;
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

// 4) Switch Statement: Selects one of many code blocks to be executed based on the value of an expression. It can be used only for check equality.
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("Middle of the work week.");
}

// 5) Conditional (Ternary) Operator:
/*  ? is called the ternary operator or conditional operator.
    : is the else part of the ternary operator. */
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(message);
/*if the condition is true ? (ternary operator) is executed otherwise : (else part) executed.
If age >= 18 is true, message will be assigned "You are an adult.".
If age >= 18 is false, message will be assigned "You are not an adult." */

//=============================================================================================================================================

/*Nullish Coalescing Operator: The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand. This operator is particularly useful for providing default values when dealing with potentially null or undefined variables. */
let user;
let defaultName = "Guest";

let userName = user ?? defaultName;
console.log(userName); // Outputs: "Guest"

user = "John";
userName = user ?? defaultName;
console.log(userName); // Outputs: "John"

/*When user is null or undefined, userName will be assigned the value of defaultName.
When user has a valid (non-nullish) value, userName will be assigned the value of user.*/

/*logical OR (||) operator: The nullish coalescing operator is similar to the logical OR (||) operator, but with a key difference: the logical OR operator considers any falsy value (such as 0, "", NaN, false) as equivalent to false, whereas the nullish coalescing operator only considers null and undefined as nullish. */
let count = 0;
let defaultCount = 10;

let total = count || defaultCount;  // Using logical OR
console.log(total); // Outputs: 10

total = count ?? defaultCount;      // Using nullish coalescing
console.log(total); // Outputs: 0

/*count || defaultCount returns defaultCount because count is 0 (a falsy value).
count ?? defaultCount returns count because 0 is not nullish (not null or undefined).*/

//=============================================================================================================================================

/*False Values: In JavaScript, there are several values that are considered falsy when evaluated in a boolean context. A falsy value is a value that translates to false when evaluated as a boolean. Here's a list of all falsy values in JavaScript:

false: The boolean value false itself.
0: The number zero.
-0: Negative zero (though this behaves slightly differently in some contexts).
0n: BigInt zero (0n).
"": An empty string.
null: The absence of any value.
undefined: A variable that has not been assigned a value.
NaN: Not a Number.

These values are considered falsy because when JavaScript evaluates them in a boolean context (for example, in an if statement or as the condition in a ternary operator), they will be treated as false.

All other values in JavaScript are considered truthy, meaning they will evaluate to true in a boolean context.*/
if (false || 0 || '' || null || undefined || NaN) {
    // This block will not execute because all values inside the condition are falsy
    console.log("This line will not be printed.");
} else {
    // This block will execute because all conditions are falsy
    console.log("All conditions are falsy.");
}
/*In this example, the console.log("All conditions are falsy.") line will be executed because all the values within the if condition (false, 0, '', null, undefined, NaN) are falsy.*/

//=============================================================================================================================================

/*Compound Operator: Compound operators, also known as compound assignment operators, are shorthand notations in programming languages that combine an arithmetic or String (and more, depending on the programming language's capabilities) with an assignment. They are used to simplify code and make it more concise. Instead of writing separate lines for an operation and an assignment, compound operators allow you to perform both actions in a single statement.*/

// 1) Arithmetic Operator:
let x = 10;

x += 5; // Equivalent to: x = x + 5
x -= 3; // Equivalent to: x = x - 3
x *= 2; // Equivalent to: x = x * 2
x /= 4; // Equivalent to: x = x / 4
x %= 3; // Equivalent to: x = x % 3

// 2) String Concatenation: (+=): Concatenates (joins together) the right operand (a string) to the end of the left operand (also a string) and assigns the resulting string to the left operand.
let greeting = "Hello, ";
let name = "John";
greeting += name; // Equivalent to: greeting = greeting + name;
// Now, greeting is "Hello, John"

//=============================================================================================================================================

/*Loops: Loops are control structures in programming that execute a block of code repeatedly until a specified condition is met. They are essential for automating repetitive tasks and iterating over collections of data. In general, loops allow you to efficiently execute the same block of code multiple times without having to write the code multiple times manually. */

// 1) For Loop: Executes a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Iteration Over Array
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
/*Parts of a For Loop:
Initialization: let i = 0; initializes the loop counter (i) to a starting value. it is also called couter variable.
Condition: i < 5; specifies the condition for continuing the loop.
Increment: i++ increments the loop counter after each iteration. */

// 2) While Loop: Executes a block of code as long as a specified condition is true.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
/*Parts of a While Loop:
Condition: i < 5; specifies the condition for continuing the loop.
Code Block: Inside the curly braces { ... }, the code to be executed is defined.
Increment: i++ increments the loop counter to eventually end the loop. */

// 3) Do-While Loop: Similar to a while loop, but guarantees at least one execution of the block of code, even if the condition is false initially.
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
/*Parts of a Do-While Loop:
Code Block: Inside the curly braces { ... }, the code to be executed is defined.
Condition: while (i < 5); specifies the condition for continuing the loop after the first execution. */

// 4) For in Loop: Used to Iterate over the object Only.
let person = {
    name: 'John',
    age: 30
};
for (let key in person) {
    console.log(key, person[key]);
}
/*Parts of a For in Loop:
Declare Variable: A variable (commonly key) that will hold the current property name (key) on each iteration.
in Keyword: The keyword in is used to specify that you are iterating over the properties of an object.
Object Name: The name of the object whose properties you want to iterate over. */

// 5) For of Loop: Iterates over the values of an iterable object (like arrays or strings), executing a block of code for each element.
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// 6) Include: Checks if an array includes a certain value, returning true or false.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(10)); // Output: false

// 7) Map: Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// 8) ForEach: Executes a provided function once for each array element.
let numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num);
});
// Output:
// 1
// 2
// 3

// 9) Filter: Creates a new array with all elements that pass a test provided by a function.
let numbers = [1, 2, 3, 4, 5];
let filtered = numbers.filter(num => num % 2 === 0);
console.log(filtered); // Output: [2, 4]

// 10) Find: Returns the first element in an array that satisfies a provided testing function.
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found); // Output: 4

/*Usage: These methods are powerful tools for working with arrays in JavaScript.
Functionality: Each method has a specific purpose:
    1) for...of iterates over iterable objects.
    2) includes checks if an array includes a certain value.
    3) map creates a new array based on transformations.
    4) forEach executes a function for each array element.
    5) filter creates a new array based on a condition.
    6) find returns the first element that matches a condition.
Benefits: Using these methods can simplify code, improve readability, and make array operations more expressive and concise.*/

//=============================================================================================================================================

/*Continue & Break Statements: The continue and break statements are used to control the flow of loops in JavaScript. They allow you to either skip an iteration of a loop or terminate the loop entirely. */

/*Break Statement: The break statement terminates the current loop and transfers control to the statement immediately following the loop.
    Purpose: To exit the loop immediately when a certain condition is met.
    Usage: Often used when you need to stop the loop as soon as a certain condition is true.*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
// Output:
// 0
// 1
// 2
// 3
// 4

/*Continue Statement: The continue statement skips the rest of the code inside the current iteration of the loop and proceeds to the next iteration.
    Purpose: To skip the rest of the code in the current iteration and jump to the next iteration.
    Usage: Useful when you want to skip specific iterations of the loop based on a condition.*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the current iteration when i is 5
    }
    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9

//=============================================================================================================================================

/*Nested Loop: A nested loop is a loop inside another loop. The outer loop executes once for every iteration of the inner loop, meaning the inner loop will complete all its iterations for each iteration of the outer loop. Nested loops are often used for working with multi-dimensional data structures, like matrices or tables. 
    Outer Loop is responsible for Row
    Inner Loop is responsible for Column */
// Ex 01:
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// Ex 02:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col]);
    }
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

/*When you need to break out of an outer loop from within an inner loop, you can use labeled statements. A label provides a name for a statement, allowing you to refer to it elsewhere in your code. Here's how to use labels to break out of an outer loop from within an inner loop in JavaScript
    Define a Label: Place a label before the outer loop. A label is an identifier followed by a colon (:).
    Break to the Label: Use the break statement followed by the label name to exit the outer loop.*/

outerLoop: // Label for the outer loop
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i = ${i}, j = ${j}`);
        if (j === 2) {
            break outerLoop; // Break out of the outer loop
        }
    }
}
// Output:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2

//Note: You can use one type of loop inside the body of another type of loop.

//=============================================================================================================================================

/*Alert, Prompt, Confirm: In JavaScript, there are several functions commonly used to interact with users. These functions allow you to gather input from users, display messages, and confirm actions.*/

/*alert():
Purpose: Displays a message to the user in a modal dialog box with an OK button.
Usage: Often used to provide information or alert the user.
 */
alert("This is an alert message!");

/*prompt():
Purpose: Displays a dialog box that prompts the user to input a value. The dialog box contains a text field and OK/Cancel buttons.
Usage: Used to gather input from the user. */
let userInput = prompt("Please enter your name:");
console.log("User's name is " + userInput);

// Note: The prompt function receives input as a string, even if the input is a number. If you want to ensure that the input remains a number, you can:
let userInput = +prompt("Please enter a number:");

//Or can use number function 
let userInput = prompt("Please enter a number:");
let numericInput = Number(userInput);

// If the user does not input anything, the prompt function will receive a null value. You can handle this in two ways:
// 1: You cam use if statement
let age = +prompt("Please enter your age:");
if (age !== null) {
    console.log(`Your age is ${age}`);
} else {
    console.log("Age field is blank...");
}
/*Using an if statement: This method checks if the user input is not null. If the input is not null, it prints the age; otherwise, it prints a message indicating the age field is blank.*/

// 2: Providing a default value as the second parameter
let age = +prompt("Please enter your age:", 20);
if (age !== null) {
    console.log(`Your age is ${age}`);
} else {
    console.log("Age field is blank...");
}
// Output: Your age is 20
/*Providing a default value: This method sets a default value (in this case, 20) that will be used if the user does not input anything. If the input is not null, it prints the age; otherwise, it prints a message indicating the age field is blank. In this example, if the user does not enter anything, the default value (20) will be stored and displayed.*/

/*confirm():
Purpose: Displays a dialog box with a message and OK/Cancel buttons. It returns true if the user clicks OK and false if the user clicks Cancel.
Usage: Used to confirm an action from the user. */
let userConfirmation = confirm("Do you want to proceed?");
if (userConfirmation) {
    console.log("User chose to proceed.");
} else {
    console.log("User chose to cancel.");
}

/*console.log():
Purpose: Outputs a message to the web console. It is not a modal dialog but a way to interact with users (especially developers) for debugging purposes.
Usage: Used to display messages or variables in the console for debugging. */
console.log("This is a message for developers.");
let value = 42;
console.log("The value is:", value);

// Note: When these functions are not completed, you cannot interact with the web page.

//=============================================================================================================================================

/*Type Conversion" or "Type Coercion: It refers to the process of converting a value from one type to another, such as from a string to a number or vice versa.*/
let num = 2;
console.log(typeof num); // Output: "number"

let bool = true;
console.log(typeof bool); // Output: "boolean"

let str = "Waqar";
console.log(typeof str); // Output: "string"

//Type conversion can be implicit (automatic) or explicit (manual).

// 1) implicit Conversion:
let result = '5' - 2;
console.log(result); // Output: 3 (string '5' is converted to number 5)
console.log(typeof result); // Output: "number"

let result = 5 + null;
console.log(result); // Output: 5 (null==0 in JS bcz null means nothing so it is considered null is 0)
console.log(typeof result); // Output: "number"

let result = "5" + null;
console.log(result); // Output: 5null 
//(When "5" (a string) is concatenated with null, JavaScript converts null to its string representation, which is "null". Therefore, "5" + null results in the string "5null")
console.log(typeof result); // Output: "number"

let result = '5' * '2';
console.log(result); // Output: 10 
//In JavaScript, the * operator is used for multiplication. When both operands are strings that can be converted to numbers, JavaScript performs numeric conversion and then multiplies them. 
console.log(typeof result); // Output: "number"

let result = '5' * "Yes";
console.log(result); // Output: NaN 
/*'5' * "Yes" attempts to multiply the numeric value 5 with the non-numeric value "Yes".Since "Yes" cannot be converted to a number, JavaScript returns NaN (Not a Number).
typeof result returns "number", which might seem counterintuitive given that NaN stands for "Not a Number". However, in JavaScript, NaN is still considered a numeric type because it represents a value that is not a valid number. */
console.log(typeof result); // Output: "number"

// 2) explicit Conversion: explicit type conversion (or coercion) can be performed using the following built-in functions:

// 1) String(): Converts a value to a string.
let num = 42;
console.log(typeof num); // Output: "number"
let str = String(num); // Converts number to string
console.log(typeof str); // Output: "string"

let bool = false;
console.log(typeof bool); // Output: "boolean"
let str = String(num); // Converts boolean to string
console.log(typeof str); // Output: "string"

// 2) Number(): Converts a value to a number.
let str = "42";
console.log(typeof str); // Output: "string"
let num = Number(str); // Converts string to number
console.log(typeof num); // Output: "number"

let str = "hello";
console.log(typeof str); // Output: "string"
let num = Number(str); // Can't Converts string to number 
console.log(typeof num); // Output: "NaN"

let bool = true;
console.log(typeof bool); // Output: "boolean"
let num = Number(str); // Converts string to number 
console.log(typeof num); // Output: "number" beacue true is equal to 1 and false 0

// 2) Boolean(): Converts a value to a boolean (true or false).
let value = "Hello";
console.log(typeof value); // Output: "string"
let bool = Boolean(value); // Converts string to boolean
console.log( typeof bool); // Output: "boolean" (non-empty string converts to true)

let value = " ";
console.log(typeof value); // Output: "string"
let bool = Boolean(value); // Converts string to boolean
console.log( typeof bool); // Output: "boolean" (Non-empty strings (even if they contain only whitespace like " ") convert to true when converted to a boolean.)

let value = "";
console.log(typeof value); // Output: "string"
let bool = Boolean(value); // Converts string to boolean
console.log( typeof bool); // Output: "boolean" (An empty string "" converts to false when converted to a boolean.)

let num = 1;
console.log(typeof num); // Output: "number"
let bool = Boolean(num); // Converts string to boolean
console.log( typeof bool); // Output: "boolean" (non-zero value converts to true)






