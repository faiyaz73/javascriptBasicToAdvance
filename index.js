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


let objValue = {
    "name":"faiyaz ansari",
    "amount":4000,
    "address":{"city":"patna"}
}

let objvalue1 = Object.assign({},objValue)
console.log(objvalue1);
console.log(objValue);
let shallow = {...objValue}
console.log("shallow copy",shallow)
