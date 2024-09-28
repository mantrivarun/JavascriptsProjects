const myArray= [1,2,3,4,5]
//console.log(myArray[2])

// Arrays Methods
// push() - adds an element to the end of an array

// myArray.push(6)
// myArray.push(7)
// myArray.pop(7)

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9)) // BOOLEAN datatypes
// console.log(myArray.indexOf(9)) 

const newArray= myArray.join()
// console.log(myArray) 
// console.log(newArray)  //join converts array datatypes to string datatype

/* Slice and Splice : The difference between slice and splice is
    in slice the last index is not considered but in splice the last index is considerd
    but the important fact here is all the items in splice gets moved to another array 
    affecting the original array */

console.log("A",myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);

const myn2=myArray.splice(1,3)
console.log(myArray);
console.log(myn2);