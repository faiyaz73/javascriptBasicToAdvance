// function handle(){
//     let element = document.getElementById("first")
//     element.textContent='ss edcuation foundation'
// }
// function handleleave(){
//     let element = document.getElementById("first")
//     element.textContent='faiyaz ansari developer'
// }

// next types se eshe hm use kr sakte h 

// let element = document.getElementById("first")

// element.onclick = () =>{
//     element.textContent="change data !"
// }


//   yha pr  maine   addEventListener us kr ke bnaya h 

// let elementFirst = document.getElementById("first")
// let btnElement = document.getElementById("btn")

// btnElement.addEventListener("click",()=>{
//     elementFirst.textContent = "change data"
// })



// let firstElement = document.getElementById("first");

// firstElement.addEventListener("dblclick", () => {
//     firstElement.style.background = "red";
//     firstElement.style.transform =
//         "translate(-50%, -50%) rotateY(180deg)";
// });

// firstElement.addEventListener("mouseleave", () => {
//     firstElement.style.background = "black";
//     firstElement.style.transform =
//         "translate(-50%, -50%) rotateY(0deg)";
// });

let parent = document.getElementById("parents")
let childrenData = parent.children

for(let child  of childrenData){
    child.addEventListener("click", () =>{
     child.textContent = "I m Developer";
    })
}



