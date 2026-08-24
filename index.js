// console.log("hello dear");


// let val=function data(){
//     let name = "gen"
// }

// let data = function nam(){
//     let name1 = "man"
// }

// let num = 232323232323n
// console.log(typeof num)


// let name = "faiyaz"
// name[0] = "m"
// console.log(name);
// console.log(typeof name);
// let value = [10,20,30,40,50,60,70]
// value.push(80)
// value[0]= 100
// console.log(value);



//  copy by value hota h  primitive data types(kis v value ka copy jata h) 
// let a = 10
// let b = a
// b=20
// console.log(a,b);



// let obj1 = {
//     "name":"faiayz ansari",
//     "age":23,
//     "Department":"Website Development"
// }

// let obj2 = obj1
// console.log("object 2",obj2)
// console.log("object 1",obj1)

// obj1.Department = "app development"
// console.log("object 1",obj1)


// let a = {
//   value: 10
// };

// let b = a;

// b.value++;

// console.log(a.value);


// let a = {
//   value: 10
// };

// let b = { ...a };

// b.value++;

// console.log(a.value);
// console.log(b.value);



// shallow copy and deep copy 


// let orignatObj = {
//     name:"faiyaz",
//     age:23,
//     address:{city:"patna"}
// }

// // let shallowCopy = Object.assign({},orignatObj)

// let shallowcopy = {...orignatObj}       // jab hum copy bnate h  orignal me update krte h to shallow copy  me v changes hota h 

// orignatObj.address.city = "delhi"
// console.log(shallowcopy)


// let deepCopy = JSON.parse(JSON.stringify(orignatObj))
// orignatObj.address.city = "kolkata"
// console.log(deepCopy.address.city)



// let x= 4
// let y =5
// x++
//  x+= y
// console.log(x)

// let a = "faiyaz123";
// let b = "aminaa";

// console.log(a.length);
// console.log(b.length);

// if (a.length == b.length) {

//   console.log(a + " ansari");

//   if (a.length == b.length) {
//     console.log("a and b are equal");
//   } else {
//     console.log("a and b are not equal");
//   }

// }


// let a = "faiyaz123";
// let b = "aminaa";

// if (a.length == b.length) {
//   console.log(a + " ansari");
//   console.log("a and b are equal");
// } else {
//   console.log("a and b are not equal");
// }


let a = 0.1
let a1 = String(a)
let b = 0.2
let b1 = String(b)

let c = a+b
let d = String(c)
console.log(a1,b1,d)
console.log(d == a1+b1)
