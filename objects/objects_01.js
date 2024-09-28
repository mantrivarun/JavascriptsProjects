// singleton

//object literals


const mySym= Symbol("key1");

const JSuser={
    name:"Varun",
    [mySym]:"mykey1",
    "Full Name": "Varun Mantri",
    "Age": 22,
    "isEmployed": false,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",  
        "state": "CA"
        }
}

JSuser.name="Nurav" // = notation helps in changing values

// console.log(JSuser.name) 
// console.log(JSuser["Full Name"]) // generally square brackets are used inplace of . operator in order to access objects
// console.log(JSuser["address"]["city"])
// console.log(JSuser[mySym])

JSuser.greeting= function(){
    console.log("Hello User !!");
}
JSuser.greetingTwo= function(){
    console.log(`Hello JS User ${this.name}`); /*`` this is called interpolation and $ helps in adding things 
                                                    and this helps to access objects*/
}

console.log(JSuser.greeting())  
console.log(JSuser.greetingTwo())  
