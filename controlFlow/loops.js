// for(let index=0; index<=10; index++)
// {
//     const element=index;
//     console.log(element);
// }


// for(let i=1;i<=10;i++)
// {
//     for(let j=1;j<=10;j++)
//     {
//         console.log(i*j);
//     }
// }


// break and continue

// for(let i=1;i<=20;i++)
// {
//     if(i==5){
//         //break;
//         console.log('5 found');
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
// }

let arr=[1,2,3,4,5]
for(const num of arr){
    //console.log(num);
}

// here if you give of after num you will get values and if you type in youll get index  


const map= new Map()
map.set('name','John')
map.set('age',30)
console.log(map);

for(const [key,value] of map)
{
    console.log(key);
    console.log(value);
}