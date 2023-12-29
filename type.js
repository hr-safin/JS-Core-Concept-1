// primitive type > are stored directly to variable's location , when we are assign
// a primitive value to variable, we are working with actual value

// EXP :  string, number , null , NaN, boolean, symbol, 

let a = "Hasibur rahman safin"

let b = a // gets actual value of a

// changing a will not affect b 
a = "Mahi rahman"
// console.log(a)
// console.log(b)


//refernce type > are stored as a reference to the memory location where the data is stored.
// When you assign a reference type to a variable, 
//you are working with a pointer to the actual data.

//EXP : array, object , function, date, Regex

let num1 = [1,2,3,4,5]

let num2 =  num1 // numb2 gets the reference of num1 value but the actual value

// num2.pop()

// console.log(num1)
// console.log(num2)

num1 = ["HAIFSD", "DSFDF"]
num2 = num1

console.log(num1)
console.log(num2)