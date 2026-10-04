// function outer(){
//     function inner(){
//         console.log("increament")
//         return 20;
//     }
//     return inner;
// }
// const val = outer()
// console.log(val)


// closure methods 

function counter(){
    let count = 0
    function increament(){
        count++
        return count
     }
     return increament
}
const data = counter()
console.log(data())
console.log(data())
console.log(data())
console.log(data())