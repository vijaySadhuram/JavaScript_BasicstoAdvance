// console.log(document.body.firstElementChild.outerHTML);
//convert to array 
// const arr=document.body.children;
// const newArr=Array.from(arr);
// console.log(newArr);
/* ..................................................
  ID selector
-----------------------------------------------
  */
 console.log(secondChild);
 console.log(document.getElementById("secondChild").outerText);
 //change html element
//  const a=document.getElementById("secondChild").outerText;
/*
class selector
*/
console.log(document.getElementsByClassName("thirdChild"));
//manipulating span tag
const  thisOne=document.getElementsByTagName("span");
thisOne[0].style.color="yellow";
console.log(thisOne[0].innerText);

const mybtn=document.getElementById("btn");
console.log(mybtn);
mybtn.style.backgroundColor="yellow";
mybtn.style.padding="2vmax 5vmax";
mybtn.style.cursor="pointer";
console.log(mybtn.getAttribute("id"));
//set attribute
mybtn.setAttribute("id","MyBtn");
/*

Query Selector

*/
const btn=document.querySelector(".thirdChild");
btn.innerText="vijay"
//create html elements
// btn.onclick=bringMeHeading;
const myBtn=document.querySelectorAll("button");
myBtn[0].onclick=bringMeHeading;
console.log(myBtn[0]);

myBtn.onclick=bringMeHeading;
function bringMeHeading(){
const h2=document.createElement("h2");
document.querySelector("body").prepend(h2);
// or
// document.body.append(h2);
h2.innerText="WELCOME TO WORLD"

}

// function DeleteHeading(){
//   // const h2=document.createElement("h2");
  
//   // or
//   // document.body.append(h2);
//   h2.remove();
//   }