// Primitive

// 7 Types: string, number, boolean, null, undefined, symbol, BigInt

// data type of null is object and undefined is undefined also function has same scenario


const score=100;
const scorevalue=100.3
const isLoggedIn= false
const outsideTemp=null  

let useEmail;

const id= Symbol('123')
const anotherId= Symbol("123")

//console.log([id,anotherId,id==anotherId])



// Reference/ Non-Primitive

// Arrays, Objects,, Functions


const heros= ["Bheem","Hatori","Jack"]
let myObj={
    name: "varun",
    age: 21,
}

const myFunction= function(){
    console.log("Hello JI");
}

// myFunction()



/*-------------------------------------------------------*/

/* Stack (Primitive) and Heap(Non-Primitive) */


let val1= "Varun"
let val2=val1
console.log(val1,val2);
val2="Mantri"
console.log(val1,val2);

// copies banata hai isliye values change nhi hoti


let obj1={
    email:"varunvmantri@gmail.com",
    pass:123
}

let obj2=obj1

obj2.email="mantrivv@rknec.edu"

console.log(obj1.email,obj2.email);

// yaha heap ko adderess karta hai, no copies are created so changes will reflect in both