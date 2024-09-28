function myName()
{
    console.log("V")
    console.log("A")
    console.log("R")
    console.log("U")
    console.log("N")
}

//myName()

// function addition(num1,num2)
// {
//     console.log(num1+num2);
// }

function addition(num1,num2)
{
    let result= num1+num2;
    return result;
}
const result= addition(5,6);
//const result= addition(5,6);
//console.log("result:",result);


function loginUserMessage(username)
{
    if(username === undefined) // if(!username)
    {
        console.log("please enter the usename");
        return;
    }
    return `${username} just logged in!`
}

//let ans=loginUserMessage()
//console.log(ans);

function calculateCartPrice(val1,val2,...num1)
{
    console.log(num1);
}
//calculateCartPrice(10,20,30,40,200); // ... is refered to as spread operator but here its an rest operator


const user={
    name:"varun",
    age:25
}
function handleObj(anyObj)
{
    console.log(`The name is ${anyObj.name} and the age is ${anyObj.age}`)
}
handleObj(user);


