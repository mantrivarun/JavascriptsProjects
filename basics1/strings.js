const str1="varun"
const str2="mantri"

//console.log(str1+str2)

//console.log(`Hi, my first name is ${str1} and last name is ${str2}`); // use backlits not single quotes

const gameName=new String('vice-city')
// console.log(gameName[0]); // returns string object, within this object strings is in the form of key value pair
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())

const newString= gameName.substring(0,4);
// console.log(newString);

const newString1= gameName.slice(-8,3); // in slice we can give negative indexing whereas in substring its not possible
//console.log(newString1);

const another= "    varun      "
console.log(another.trim()); // removes leading and trailing spaces

const url="google.com/&20google"
console.log(url.replace('20','g'))
console.log(url.includes('google'))
console.log(gameName.split('-'))
