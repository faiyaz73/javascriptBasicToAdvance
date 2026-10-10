// console.log("hellow faiyaz ansari")
// let data = document.createElement("h2")
// data.textContent = "Website Developer"
// data.id = "second"
// const element_h1 = document.getElementById("first")
// element_h1.after(data)

// const newElement2 = document.createElement("h3")
// newElement2.textContent = "Digital Marketer"
// newElement2.id = "third"
// newElement2.className = "four"
// data.after(newElement2)
// let design = document.querySelector(".four")
// design.style.color="red"
// design.style.background = "white"
// design.style.padding = "20px"
// design.style.borderRadius = "10px"
// design.style.textTransform = "UpperCase"
// // design.style.transform = "rotate(45deg)";
// let btn = document.createElement("button");

// btn.textContent = "Button";

// btn.className = "btn1";

// newElement2.after(btn);

// btn.style.color = "white";
// btn.style.background = "black";
// btn.style.padding = "10px 20px";
// newElement2.classList.add("five")
// console.log(newElement2);


// const unOrderlist = document.createElement("li")
// const unOrderlist1 = document.createElement("li")
// const unOrderlist2 = document.createElement("li")
// const unOrderlist3 = document.createElement("li")
// unOrderlist.textContent = "SS Foundation"
// unOrderlist1.textContent = "Coffee"
// unOrderlist2.textContent = "halwa"
// unOrderlist3.textContent = "paneer"

// const addlist =  document.getElementById("listing")
// addlist.append(unOrderlist)
// addlist.append(unOrderlist1)
// addlist.prepend(unOrderlist2)   // starting me add kr dega elements ko 
// addlist.children[0].after(unOrderlist2)



let arr = ["faiyaz","firoj","aman","anil","rakesh","aayan"]
const addlist =  document.getElementById("listing")

for(let name  of arr){
   let names = document.createElement('li')
   names.textContent = name
   addlist.append(names) 
   
}