/*

1. Number Methods
    Number()	      // Returns a number, or returns NaN
    parseFloat()	  // Parses a string and returns a floating point number
    parseInt()	      // Parses a string and returns an integer

2. String Methods
    String(x)         // returns a string from a number variable x
    String(123)       // returns a string from a number literal 123
    String(100 + 23)  // returns a string from a number from an expression

    .toString()
    .toExponential()  //Returns a string, with a number rounded and written using exponential notation.
    .toFixed()	      //Returns a string, with a number rounded and written with a specified number of decimals.
    .toPrecision()	  //Returns a string, with a number written with a specified length

3. Boolean Methods
    Boolean(x)        // Returns a boolean value, true if x is not null, undefined, 0, NaN, or the empty string ("")

*/

let mathStr = "1 + 20"

console.log(eval(mathStr))