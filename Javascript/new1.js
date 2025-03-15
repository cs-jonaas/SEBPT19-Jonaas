// console.log('Comments are great'); // I only ignore words written after me!

// let marvel = 'Tony Stark';
// console.log(marvel);

// let x = 25;
// console.log("initial value for x" + ' ' + x)
//x = 100; // no problem
// console.log("new value for x", x)
// const z = 25;
// console.log("initial value for z", z)

let str = "";

for (let i = 0; i < 23; i++) {
  str = str + i;
}

console.log(str);

let n = 0
while (n < 3) { // don't know how many times to run, but you have a condition to fulfill
    console.log(a)
    n+=2 // n=0, n=2 
}
/*
n=0: 
n<3 ? -> true
runs console.log(a) --> -10
runs n+=2 --> n=2
n=2:
n<3 ? -> true
runs console.log(a) --> -10
runs n+=2 --> n=4
n=4:
n<3 ? -> false
end the loop
*/
console.log(n)