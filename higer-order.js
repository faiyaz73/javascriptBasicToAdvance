// let arr = [21,34,42,87,24,56]
// let sum = 0
// let mul = 1
// arr.forEach((number)=>{
//     sum += number
//     mul *= number

// })

// console.log(sum)
// console.log(mul)

// let num = [35,76,54,98,35,98,47,65]
// let data=num.filter((num)=>num>89)
// console.log(data)


// let numbers = [35, 76, 54, 98, 47, 65, 23, 89, 12, 56];

// let data = numbers.filter(function(number){
//     return number > 50
// })

// console.log(data);

// let val =  numbers.filter(function(num){
//     return num > 50
// })
// console.log(val)

// let numbers = [35, 76, 54, 98, 47, 65, 23, 89, 12, 56];
// let val1 = numbers.filter((num)=>num%2!=0)
// console.log(val1)
// let sub = val1.reduce((total,num)=>total+num,1)
// console.log(sub)

// reduce ke sath sath ab hme foreach se problems ko solve krte h 

// let numbers = [35, 76, 54, 98, 47, 65, 23, 89, 12, 56];
// let val = numbers.filter((num)=>num%2==0)
// console.log(val)
// let sum = 0

// val.forEach((num)=>{
//     sum+=num
// })
// console.log(sum)

// custom filter create 

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
// numbers.filtering = function(compair){
//     let ans = []
//     for(let num of this){
//         if(compair(num)){
//             ans.push(num)
//         }
//     }
//     return ans
// }
// const val = numbers.filtering((numbers)=>numbers>40)
// console.log(val)


// let m = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
// // let num = m.map((num)=>num*2)
// // console.log(num);

// let result = m.map(function(num){
//     return num*4
// })

let students = [
    {"name":"faiyaz"},
    {"name":"aman"},
    {"name":"Rakesh"}
   ]

let data = students.map((student_name)=>student_name.name)
console.log(data)


