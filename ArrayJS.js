/* Arrow Function
const myFunc=function(a,b){
    return a+b;

}
console.log(myFunc(1,4));
console.log(myFunc);
*/
/*
----------------------
Arrow function
-----------------------------
*/
const myFunc=(a,b)=>{
    return a+b;

}
console.log(myFunc);

/*
Arrays Methods
find() method-- single elements
filter()--return in form array elemts
every()--retrun  boolean value is present or not for every elemts in array
*/
const  arr=[2,6,6,7,8,10];

const myFunction=function(value1,index){
    if(value1===6){
        console.log("value is present")
    }
    else{
        console.log("not present");
    }
}
arr.find(myFunction);

arr.find((value,index)=>{
    if(value===10){
        console.log(index);
    }
}

)


const res=arr.every((value,index)=>{
    return value>2  ;
});
console.log(res);

/*
for of loop
*/
for (const val of arr){
    console.log(val);
}