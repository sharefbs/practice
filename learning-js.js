// This is an evolving doc for my javascript training.

/* 

JavaScript Training Document
Multiple Lines of Comments or block comments; /* *\/ (note: do NOT escape the forward slash)
Single Line of Comments or inline comments; //

*/

/* 

JavaScript code is inserted into an HTML document using the <script> tag.
JavaScript code can be placed in the <head> or <body> section of an HTML document.
JavaScript code can also be placed in an external JavaScript file with a .js extension.
PLACE JavaScript code at the end of the <body> section to ensure that the HTML content is loaded before the JavaScript code is executed.
To use an external JavaScript file, use the <script src="filename.js"></script> tag in the HTML document.
 ** External scripts cannot contain <script> tags.
 *** External scripts cannot contain <script> tags.
 **** External scripts cannot contain <script> tags.

*/ 


//Example HTML document with embedded JavaScript code
/*
<!DOCTYPE html>
<html>
<head>
    <title>My JavaScript Training Document</title>
</head>
<body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>

    <p id="demo"></p>

    <script>
        <!-- Syntax to change inner HTML content of an element -->
        document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";

        <!-- Syntax to change the inner text conent of an element -->
        document.getElementById("demo").innerText = "Hello World";

        <!-- Syntax for testing JavaScript code -->
        document.write(5 + 6); <!-- Will delete all existing HTML after an HTML dcoument is loaded -->
        console.log(5 + 6); <!-- Will display the result in the console -->
        alert(5 + 6); <!-- Will display an alert box with the result -->

        <!-- Syntax for printing current window -->
        window.print();
    </script>
<!-- Example of using JavaScript to print the current window
    <button onclick="window.print()">Print this page</button>
-->
</body>

</html>
*/

// Literals are fixed values, not variables.
// Literals can be numbers, strings, booleans, arrays, objects, etc.
// Example of literals in JavaScript:
let x = 5;
let y = "Hello, World!";
let z = true;
let a = [1, 2, 3];
let b = {name: "John", age: 30};

// Variables are used to store data values.
// Variables can be declared using the let, const, or var {Archaic, not recommended} keywords.
// Example of variable declaration in JavaScript:
let age = 25;
const PI = 3.14;
var name = "Alice";
// Functions are blocks of code that can be executed when called.
// Functions can be defined using the function keyword or arrow syntax.
// Example of function definition in JavaScript:    
function greet(name) {
    return `Hello, ${name}!`;
}
const greetArrow = (name) => {
    `Hello, ${name}!`;
}
// Rules for identifier names in JavaScript:
// 1. Identifiers must start with a letter (a-z, A-Z), an underscore (_), or a dollar sign ($).
// 2. Identifiers cannot start with a number.
// 3. Identifiers are case-sensitive.
// 4. Identifiers cannot be a reserved keyword in JavaScript.
// 5. Identifiers should be descriptive and meaningful.
// 6. Identifiers should not contain spaces or special characters.
// 7. Identifiers should not be the same as built-in JavaScript objects or functions.
// 8. Identifiers should not be the same as other identifiers in the same scope.
// 9. Identifiers should not be the same as other identifiers in the global scope, local scope, or block scope.
// 10. Identifiers should not be the same as other identifiers in the same file or module.
// 11. Identifiers should not be the same as other identifiers in the same project or application.

// Avoid lines longer than 80 characters for better readability and maintainability.
// Use semicolons to end statements for better readability and maintainability.
// Use spaces around operators and after commas for better readability and maintainability.
// Use camelCase for variable and function names for better readability and maintainability.
// Use PascalCase for class names for better readability and maintainability.
// Use all uppercase letters for constants for better readability and maintainability.
// Use single quotes for string literals for better readability and maintainability.
// Use double quotes for string literals when the string contains single quotes for better readability and maintainability.
// Use template literals for multi-line strings and embedded expressions for better readability and maintainability.
// Use comments to explain complex code or algorithms for better readability and maintainability.
// Use comments to explain the purpose of a function or method for better readability and maintainability.

// Variables declared with the let keyword have block scope, must be declared before use, and cannot be redeclared within the same scope.
// Variables declared with the const keyword have block scope, must be declared and initialized before use, and cannot be redeclared or reassigned within the same scope.
// Variables declared with the var keyword have global scope or function scope, can be redeclared within the same scope, and can be reassigned within the same scope.


// Use const when declaring arrays, objects, functions, RegExp and other data types that should not be reassigned.
// Cannot reassign a const value, array, or object, but you can change the contents of an array or object.

//Const arrays can have their contents changed, but cannot be reassigned to a new array.
const fruits = ["apple", "banana", "cherry"];
fruits[1] = "orange"; // Valid
// fruits = ["grape", "kiwi"]; // Invalid, cannot reassign a const array

// Const objects can have their properties changed, but cannot be reassigned to a new object.
const person = {name: "John", age: 30};
person.age = 31; // Valid
// person = {name: "Jane", age: 25}; // Invalid, cannot reassign a const object

// A JavaScript variable can hold eight data types:
// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// Example of data types in JavaScript:

//String
let name = "Alice";
let color = 'red';
//Number
let ageYears = 25;
let height = 1.75;
//Boolean
let isStudent = true;
let isEmployed = false;
//BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
let bigIntValue2 = BigInt("1234567890123456789012345678901234567890");
//Undefined
let undefinedValue;
let undefinedValue2 = undefined;
//Null
let nullValue = null;
//Symbol
const symbolValue = Symbol("unique");
//Object
const person = {name: "John", age: 30};
//Array Object
const fruits = ["apple", "banana", "cherry"];
//Date Object
const today = new Date("2003-04-01");

// Use the typeof operator to determine the data type of a variable or value.
console.log(typeof (person)); // Output: "object"

// Logical operators in JavaScript:
// 1. && (logical AND)
// 2. || (logical OR)
// 3. ! (logical NOT)

// Example of logical operators in JavaScript:
let g = 5;
let h = 10;
let j = 15;
if (g < h && h < j) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

if (g < h || h > j) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

if (!g < h) {
    console.log("g is not less than h");
} else {
    console.log("g is less than h");
}

// Spread operator in JavaScript:
//  to spread elements of an array or object into a new array or object.
// Example of spread operator in JavaScript:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// Comparison operators in JavaScript:
// 1. == (equal to)
// 2. === (equal value and equal type)
// 3. != (not equal to)
// 4. !== (not equal value or not equal type)
// 5. > (greater than)
// 6. < (less than)
// 7. >= (greater than or equal to)
// 8. <= (less than or equal to)

// Conditional statements in JavaScript:
// 1. if
// 2. else
// 3. else if
// 4. switch
// 5. ternary operator (? : )

// Example of conditional statements in JavaScript:

// If, Else, Else If statements
let howOld = 25;
if (howOld >= 18) {
    console.log("You are an adult");
} else if (howOld < 18 && howOld >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

//Switch statement for multiple conditions utilizing implicit strict comparison
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary operator if-else statement in one line
let maturity = 25;
let message = age >= 18 ? "You are an adult" : "You are a child";
console.log(message); // Output: "You are an adult"

// Break statement in JavaScript:
// Exits the iteration of a loop or switch statement.
// Example of break statement in JavaScript:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Continue statement in JavaScript:
// Skips the current iteration of a loop.
// Example of continue statement in JavaScript:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Return statement in JavaScript:
// a value from a function.
// Example of return statement in JavaScript:
function add(a, b) {
    return a + b;
}   
console.log(add(5, 3)); // Output: 8

// Loops in JavaScript:
// 1. for
// 2. while
// 3. do-while
// 4. for...in
// 5. for...of

// Example of loops in JavaScript:
// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Do-while runs at least once before checking condition
let p = 0;
do {
    console.log(p);
    p++;
}   while (p < 10);
// For...in loop
const person = {name: "John", age: 30};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// For...of loop
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}


// Boolean function
Boolean(10); // true
Boolean(0); // false
Boolean("Hello"); // true
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(true); // true
Boolean(false); // false

// Boolean object #Deprecated
const boolObj = new Boolean(true);
console.log(boolObj.valueOf()); // true

// JavaScript labels are used to identify a loop or a block of code.
// They are used in conjunction with break and continue statements.
// Example of labels in JavaScript:
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
        console.log("i = " + i + ", j = " + j);
    }
}

// Template strings in JavaScript:
// 1. backticks (``)
// 2. embedded expressions (using ${expression})
// Example of template strings in JavaScript:
const nameFirst = "Alice";
const personTime = 25;
const greeting = `Hello, my name is ${nameFirst} and I am ${personTime} years old.`;
console.log(greeting); // Output: "Hello, my name is Alice and I am 25 years old."

// Escape characters in JavaScript:
// 1. \n (newline)
// 2. \t (tab)
// 3. \\ (backslash)
// 4. \' (single quote)
// 5. \" (double quote)
// 6. \b (backspace)
// 7. \f (form feed)
// 8. \r (carriage return)
// 9. \v (vertical tab)
// 10. \xXX (hexadecimal character)
// 11. \uXXXX (Unicode character)
// 12. \u{XXXXX} (Unicode character)

// Break up strings with string addition
let string1 = "Hello, ";
let string2 = "World!";
let string3 = string1 + string2;
console.log(string3); // Output: "Hello, World!"

document.getElementById("demo").inneHTML = "Hello " +
"World!"; // This is a multi-line string using string addition and line breaks for readability.

// Template strings allow for multi-line strings and embedded expressions
let string4 = `Hello,
World!`;
console.log(string4); // Output: "Hello,\nWorld!"

// Strings can be defined as objects with the keyword new
let string5 = new String("Hello, World!");
console.log(string5); // Output: String { "Hello, World!" }

// Template strings example for HTML content
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

// String Methods in JavaScript:
// 1. at()	Returns an indexed character from a string
// 2. charAt()	Returns the character at a specified index (position)
// 3. charCodeAt()	Returns the Unicode of the character at a specified index
// 4. codePointAt()	Returns the Unicode value at an index (position) in a string
// 5. concat()	Returns two or more joined strings
// 6. constructor	Returns the string's constructor function
// 7. endsWith()	Returns if a string ends with a specified value
// 8. fromCharCode()	Returns Unicode values as characters
// 9. includes()	Returns if a string contains a specified value
// 10. indexOf()	Returns the index (position) of the first occurrence of a value in a string
// 11. isWellFormed()	Returns true if a string is well formed
// 12. lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
// 13. length	Returns the length of a string
// 14. localeCompare()	Compares two strings in the current locale
// 15. match()	Searches a string for a value, or a regular expression, and returns the matches
// 16. matchAll()	Searches a string for a value, or a regular expression, and returns the matches
// 17. padEnd()	Pads a string at the end
// 18. padStart()	Pads a string from the start
// 19. prototype	Allows you to add properties and methods to an object
// 20. repeat()	Returns a new string with a number of copies of a string
// 21. replace()	Searches a string for a pattern, and returns a string where the first match is replaced
// 22. replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
// 23. search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
// 24. slice()	Extracts a part of a string and returns a new string
// 25. split()	Splits a string into an array of substrings
// 26. startsWith()	Checks whether a string begins with specified characters
// 27. substr()	Deprecated. Use substring() or slice() instead.
// 28. substring()	Extracts characters from a string, between two specified indices (positions)
// 29. toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
// 30. toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
// 31. toLowerCase()	Returns a string converted to lowercase letters
// 32. toString()	Returns a string or a string object as a string
// 33. toUpperCase()	Returns a string converted to uppercase letters
// 34. toWellFormed()	Returns a string where "lone surrogates" are replaced with the Unicode replacement character
// 35. trim()	Returns a string with removed whitespaces
// 36. trimEnd()	Returns a string with removed whitespaces from the end
// 37. trimStart()	Returns a string with removed whitespaces from the start
// 38. valueOf()	Returns the primitive value of a string or a string object

// String HTML wrapper Methods in JavaScript (*Deprecated*):
// 1. anchor()	Creates an HTML anchor for a string
// 2. big()	Creates an HTML <big> element for a string  
// 3. blink()	Creates an HTML <blink> element for a string  
// 4. bold()	Creates an HTML <b> element for a string  
// 5. fixed()	Creates an HTML <tt> element for a string
// 6. fontcolor()	Creates an HTML <font> element with a color attribute for a string  
// 7. fontsize()	Creates an HTML <font> element with a size attribute for a string  
// 8. italics()	Creates an HTML <i> element for a string
// 9. link()	Creates an HTML anchor for a string
// 10. small()	Creates an HTML <small> element for a string
// 11. strike()	Creates an HTML <strike> element for a string
// 12. sub()	Creates an HTML <sub> element for a string
// 13. sup()	Creates an HTML <sup> element for a string

// JavaScript numbers are ALWAYS stored as floating point numbers.
// JavaScript numbers can be written with or without decimals.
/*

Integers are accurate up to 15 digits.
After that, the precision is lost.
The maximum number of decimals is 17.

Floating point arithmetic is not always accurate,
so it helps to multiply and divide by 10 to avoid rounding errors.

*/

// NaN (Not a Number) is a special value in JavaScript that represents a value that is not a number.
// NaN is a property of the global object, which means it is a variable in global scope.
// NaN is not equal to any value, including itself.
// To check if a value is NaN, use the isNaN() function.

//Infinity is the value JavaScript returns if you calculate a number outside the largest possible number.
//Infinity is a property of the global object, which means it is a variable in global scope.
//Infinity is equal to itself.
// To check if a value is Infinity, use the isFinite() function.

// Hexadecimal numbers are written with a "0x" prefix.
// Octal numbers are written with a "0o" prefix.
// Binary numbers are written with a "0b" prefix.

// Number Methods in JavaScript:
// 1. toExponential()	Converts a number into an exponential notation
// 2. toFixed()	Converts a number into a string, rounded to a specified number of decimals
// 3. toPrecision()	Converts a number into a string, with a specified length
// 4. toString()	Converts a number to a string
// 5. valueOf() Returns the primitive value of a number or a number object

// Number static Methods in JavaScript:
// 1. isFinite()	Checks whether a value is a finite number
// 2. isInteger()	Checks whether a value is an integer
// 3. isNaN()	    Checks whether a value is NaN
// 4. parseFloat()	Parses a string and returns a floating point number
// 5. parseInt()	Parses a string and returns an integer
// 6. isSafeInteger()	Checks whether a value is a safe integer

// Number Properties in JavaScript:
// 1. MAX_VALUE	Represents the largest number possible in JavaScript
// 2. MIN_VALUE	Represents the smallest number possible in JavaScript
// 3. NEGATIVE_INFINITY	Represents negative infinity
// 4. NaN	Represents a "Not-a-Number" value
// 5. POSITIVE_INFINITY	Represents positive infinity
// 6. EPSILON	Represents the difference between 1 and the smallest floating point number greater than 1
// 7. MAX_VALUE	Represents the largest number possible in JavaScript
// 8. MIN_Value    Represents the smallest number possible in JavaScript