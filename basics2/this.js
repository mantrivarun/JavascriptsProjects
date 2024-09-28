// const user={
//     name:"John",
//     age:23,
//     welcomeMessage: function(){
//         console.log(`Welcome to my website,${this.name} `);
//     }
// }

// user.welcomeMessage()
// user.name="sam"
// user.welcomeMessage()


// function chai(){
//     console.log(this)
// }
const chai= ()=>{
    console.log(this)
}
//chai();

const addTwo = (num1,num2)=> (num1+num2) // no need to user return , aka implicit return

//console.log(addTwo(5,7))

(function chai(){
    console.log("chai");
})();

