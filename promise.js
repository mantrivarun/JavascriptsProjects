let promise= new Promise(function(resolve, reject){
    alert("hello");
    resolve(50);
})

console.log("Hello");
setTimeout(function(){
    console.log("hello 2",500);
})
console.log("my name is"+"varun"); 