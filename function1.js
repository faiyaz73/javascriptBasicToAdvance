// function greeting(){
//  console.log("welcome to  function")
//  return 30
// }
// console.log(greeting())

// function add(a,b){
//   const sum = a+b
//   console.log(sum)
// }

// add(3,5)
// add(3,50)



// rest operators 



// function add(...num){
//   let sum = 0
//   for(let n of num){
//     sum+=n
//   }
//   console.log(sum)
// }

// add(21,35)
// add(21,35,34)
// add(21,35,34,45)
// add(21,35,34,45,83)
// add(21,35,34,45,83,43)
// add(21,35,34,45,83,43,76)
// add(21,35,34,45,83,43,76,24)


// spread operators 

// let arr1 = [33,45,21,56,46,78]
// let [num1,num2,...num] = arr1
// console.log(num1,num2,num)




// let arr1 = [33,45,21,56,46,78]
// let arr2 = [35,56,21,56,42,78,2]

// spread opeators 
// const ans = [...arr1,...arr2]
// console.log(ans)


// second method create  function 

// const data = function(num1,num2){
//     let sum = num1+num2
//     return sum
    
// }

//  let va= data(34,6)
//  console.log(va)


// arrow function 


// let add =(num1,num2)=>{
//   return num1 + num2
// }
// console.log(add(34,2))


//  jab   mai ek hi line me likhu to function to retunr ki jrurt nhi aur na hi {} 


let Numbersum = (num1,num2) => num1+num2
console.log(Numbersum(3,76))

let NumberSquare = num => num*num
console.log(NumberSquare(4))
