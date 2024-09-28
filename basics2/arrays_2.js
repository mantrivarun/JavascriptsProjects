const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=['superman','flash',"batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// const all_heros=marvel_heros.concat(dc_heros)  //concat returns a new concatinated array
// console.log(all)

const all_new_heros=[...marvel_heros,...dc_heros] //spread operator used most often
//console.log(all_new_heros)

const another_arr=[1,2,3,[4,5,6],7,[8,[9,10]]]
const usable_another_array=another_arr.flat(Infinity) // flat merges all arrays within arrays also called depth here infinity shows the depth
//console.log(usable_another_array)

// console.log(Array.isArray(dc_heros)) // checks array
// console.log(Array.from("varun")) // converts into array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))