// array = group of values
// we can also use array constructor to create an array

// some common array method in js >> length, push, pop, shift, unshift
// push add element to the end of the array
// pop remove the last element of the array
// unshift add element to the first of the array
// shift remove element first element from the array

const arr1 = [1,2,3,4,5,5] // >> start index from 0 and goes on


arr1.push("string")

console.log(arr1)

arr1.pop()

console.log(arr1)

arr1.unshift("string1")

console.log(arr1)

arr1.shift()

console.log(arr1)

const arr2 = [1,2,3,4,5,6,7,8,8]

arr2.splice(2,3)  // << splice(startIndex, how many index)

console.log(arr2)
