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
console.log(document.getElementsByClassName("thirdChild").getAttribute("id"));
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

