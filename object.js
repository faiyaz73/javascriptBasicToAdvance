// let user = {
//     "name":"faiyaz",
//     "age":25,
//     "address":"patna",
//     "account":22345
// }



// user.aadhar = 23344
// user.aadhar = 23567788     // edit  value
// console.log(user)
// delete user.age
// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))


// let user = {
//     "name":"faiyaz",
//     "age":25,
//     "address":"patna",
//     "account":22345
// }

// for(let keys in user){
//     console.log(keys,user[keys])
// }

// Destruchuring

// let {name,age,amount} = user
// console.log(name,amount,age)



// let user = {
//     "name":"faiyaz",
//     "age":25,
//     "amount":12345,
//     "aadhar":2344556

// }

// for(let keys of Object.keys(user)){
//     console.log(keys)
// }

// let user = {
//     "name":"faiyaz",
//     "age":25,
//     "amount":12345,
//     "aadhar":2344556

// }

// for(let value of Object.values(user)){
//     console.log(value)
// }



// let user = {
//     "name":"faiyaz",
//     "age":25,
//     "amount":12345,
//     "aadhar":2344556

// }

// for(let [keys,value] of Object.entries(user)){
//     console.log(keys,value)
// }



//  let user = {
//     "name":"faiyaz",
//     "age":25,
//     "amount":12345,
//     "aadhar":2344556,
//     greed:function(){
//         console.log(`dear mem and sir ${this.name}`)
//         return 30
//     },
//     address:{
//         city:"dawarka",
//         accountnum:3444
//     }

// }
// let data = user.address.city
// console.log(data)



let data = {
    "name":"faiyaz ansari",
    "roll Number":323,
    "account":232324,
    nested:{
        "fasion":"tshirt",
        "parlour":"makeup",
    }
}

let data2 = {...data}
data.name = "amin"
console.log(data2)
console.log(data)



// let data = {
//     "name":"faiyaz ansari",
//     "roll Number":323,
//     "account":232324,
//     nested:{
//         "fasion":"tshirt",
//         "parlour":"makeup",
//     }
// }

// let user1 = structuredClone(data)
// user1.nested.fasion = "jeans"
// console.log(data)
// console.log(user1)



// let sym = Symbol("id")

// let user = {
//     "name":"faiyaz",
//     "account":1211212,
//     "adhar":434323,
//     [sym]:"hellow dear"

// }

// console.log(user[sym])