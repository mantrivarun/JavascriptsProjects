/* Promise is an eventual completion of an asyncronus operations and resulting value */
/* A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.    */

// const promiseOne= new Promise(function(resolve,reject){
//     //does async task
//     setTimeout(function(){
//         console.log("Task 1 is completed!");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise one is completed!");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 2 is completed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async task 2 is resolved");
// })

// const three= new Promise(function(resolve,reject){
//     resolve({username:'varun',email:'varunvmantri@gmail.com'});
// })
// three.then(function(data){
//     console.log(data);
// })

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
