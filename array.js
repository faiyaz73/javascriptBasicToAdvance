// let a = [12,45,56,35]
// a.push(45)
// a.pop()
// console.log(a)

// let b = [1,2,3,4]
// b.unshift(5)
// console.log(b)
// b.shift()
// console.log(b)


// loop uses  for 

// for(let n = 0; n <= a.length; n++){
//     console.log(a[n])
// }


// for of 


// for(let n of a){
//     console.log(n)
// }


// let arr1 = [1,2,4,5,6,7,8]
// let arr2 = arr1
// console.log(arr2)
// console.log(arr1)
// arr1.push(23)
// console.log(arr1)
// console.log(arr2)

// let a = 30
// let b = a
// b = 40
// // console.log(a)
// console.log(a)
// console.log(b)




// var a = 30

// let data = ()=>{
//     var a = 40
//     let data1 = ()=>{
//         var a = 50
//     }
//     console.log(data)
//     console.log(data1)
// }
// console.log(data)
// console.log(data1)


// let arr1 = [1,2,4,5,6,7,8]
// console.log(arr1.slice(1,4))
// console.log(arr1);
// console.log(arr1.splice(1,1))
// console.log(arr1)



// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,9,10]
// let arr4 =[11,12]
// let arr3 = arr1.concat(arr2,arr4)
// console.log(arr3);


// spread operators 

// let spe = [...arr1,...arr2,...arr4]
// console.log(spe)


// let name = ["faiyaz","aman","abdul"]
// console.log( typeof name.toString())
//  join string me convert krega

// let jo = name.join("-")
// console.log(jo);
// console.log(name.indexOf("aman"))
// data = [1,2,34]
// fName = ["ansari","khan","tiwari"]
// let n = fName.includes("ansari")
// console.log(n)

// let name = ["faiyaz","aman","ramesh","tanu"]
// let so = name.sort()
// console.log(so)

// let rev = name.reverse()
// console.log(rev)

// let arr = [12,34,56,4,6,112,78,45,78]
// arr.sort((a,b)=>a-b)             // sort es methods se krege
// console.log(arr)



let a = [1,2,3,4,[5,6,7,8,9,[78,23,46]]]
let arr = a.flat(Infinity)    // array to array se sbhi ko single array me convert kr dega
console.log(arr)