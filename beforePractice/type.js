// primitive > immutable

let a1 = 12

let b1 = a1 // b1 gets actual value of a1

a1 = 13
b1 = a1
// console.log(a1)
// console.log(b1)


// reference () {} [] > mutable

let obj1 = {
    name : "Hasibur Rahman Safin",
    age : "21",
    dream : "Study Abroad"
}


let obj2 = obj1


obj2.name = "Mahi Rahman"

// console.log(obj1)
// console.log(obj2)


let arr1 = [1,2,3,4]

let arr2 = arr1

arr2.push(5)
console.log(arr1)
console.log(arr2)