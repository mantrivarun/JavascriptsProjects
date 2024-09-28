console.log(null>0)     //false
console.log(null==0)    //false
console.log(null>=0)    //true

/*the reason that the value is changing is because comparison operator >,<,>=,<= works
differently from equality check, comparison operator treates null as a number 0 where */


console.log(undefined>=0) // will give false in all the case


//strict check === check numbers as well as data types