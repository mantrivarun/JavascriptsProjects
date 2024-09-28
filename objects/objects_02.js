// const myUser= new Object(); // singleton declartion of an object
// const myUser1= {}
// console.log(myUser)
// console.log(myUser1)

const myUser={
    email:"some@gmail.com",
    fullName:{
        user:{
            firstName:"Varun",
            lastName:"Mantri"
        }
    }

}
// console.log(myUser.fullName)
// console.log(myUser.fullName.user)
// console.log(myUser.fullName.user.firstName)


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj4={5:'c',6:'d'}

//const obj3={obj1,obj2}
//const obj3= Object.assign(obj1,obj2)
//const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2,...obj4}  // spread operator

//console.log(obj3)


const course= 
{
    courseName: "Coding",
    pricing:'999',
    instructor: "Varun"
}
const {instructor:teacher}=course // destructureing 
console.log(course)
//console.log(instructor)
console.log(teacher)


navbar