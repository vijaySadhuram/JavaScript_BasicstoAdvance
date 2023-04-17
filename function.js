// let a=40,b=60,c=90;
// function myFunction(){
//     // let b=90;
//     console.log(b);
//     let d=10;
// }
// console.log(c);

// myFunction(10,50,60);
function sumOfarrayOfElement(arr){
    let sum=0;
    for( i=0;i<arr.length;i++){
        sum=sum+arr[i];

    }
    return sum;
}
let arr=[1,2,3]
let sumArray=sumOfarrayOfElement(arr);
console.log(sumArray);