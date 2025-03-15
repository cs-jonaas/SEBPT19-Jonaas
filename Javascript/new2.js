let string = 1;
console.log(typeof string)
// Here, 'if (string)' is checking if 'string' is not an empty string, null, undefined, false, 0, or NaN.
if (string === true) { 
  // This block of code will run because 'string' contains a non-falsy value.
    console.log("if === ")
}

if (string == true) { 
    // This block of code will run because 'string' contains a non-falsy value.
      console.log("if == ")
  }

if (string !== "") {
    // this is a more lengthy way of trying to make the same check without 
    // relying on the inherent nature of truthy/falsy values in JavaScript
    console.log("if (check with string)")
}

var name = "amy"
var postal = 123456

var particulars = [name, postal];
console.log(typeof particulars);
console.log(particulars); 
name = "brandon"
particulars = [name, postal]
console.log(particulars);

console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6


var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const birthday =  new Date(Date.now()).toLocaleTimeString("en-US", options) ;

console.log(typeof birthday, birthday)
