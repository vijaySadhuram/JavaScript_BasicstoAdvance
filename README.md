# JavaScript important topics

# JS objects

1.Objects may conatin many value
2.can written as name :variable pair

# Object Methods

1.Methods are actions that can be performed on objects.

# Creating a JavaScript Object


With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

1.Create a single object, using an object literal.

2. Create a single object, with the keyword new.

3. Define an object constructor, and then create objects of the constructed type.

4. Create an object using Object.create().


# Using an Object Literal


const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const persson={}--> empty js objects

# we can add proprties

person.firstname="vijay"

person.lastname="sadhuram"

# 2.Using the JavaScript Keyword new

keyword-->new Object()

Example:

const person = new Object();

person.firstName = "John";

person.lastName = "Doe";

person.age = 50;

person.eyeColor = "blue";

1.JavaScript objects are mutable.

Any changes to a copy of an object will also change the original object:

For example:

const person={

firstname:"vaijay"

age:10;

}
const x=person;

// it referenc if we make chages on the x it will changes on person also


# JavaScript Properties

objectname.property

// person.age// access the properties

person["age"]


# JavaScript for...in Loop



const person={
    
    firstname:"vijay",
    
    lastname:"sadhuram"

}

// const x=person;

// x.firstname="suresh"

// console.log(x);

// console.log(person)

for (let variable in person){

console.log( variable);//to name 

console.log(person[varible]) //to get value or properties

}


# how to add new property

person.address="Hyderabad"

# Deleting Properties

                                                      delete person.age;

                                                      delete person.firstname;

                                                      console.log(person)


# ouptput :

                                                     { lastname: 'sadhuram' }

or

                                                      delete person["age"];

# Nested Objects

                                                      myObj = {
  
                                                     name:"John",
  
                                                     age:30,
  
                                                     cars: {
  
                                                     car1:"Ford",
  
                                                     car2:"BMW",
  
                                                      car3:"Fiat"
  
                                                        }

                                                        }
                                                      
                                            
You can access nested objects using the dot notation or the bracket notation:

myObj.cars.car2;

or

myObj[cars][car1];


# Local  storage vs Session storage

const btn=document.getElementById("mybtn");

const myinput=document.getElementById("myInput");

const clickbtn=()=>{

sessionStorage.setItem("key1",myinput.value);// store in session

alert(myinput.value)

   
    // console.log(myinput.value);

}

sessionStorage.setItem("key1",myinput.value);

btn.addEventListener("click",clickbtn)

// console.log(sessionStorage.length);




const a={

firstname:"vijay",

lastname:"sadhuram"
    

}

let b=a;

b.firstname="ram";

console.log(b);//

console.log(a);

Output:

{ firstname: 'ram', lastname: 'sadhuram' }
{ firstname: 'ram', lastname: 'sadhuram' }

Factory function in JS
--------------------------------------
function printAvg(a,b){

return {height: a,

wight:b,
sum:()=>{
console.log(height+wight);
}
}

}

console.log(printAvg(10,20))

output:

{ height: 10, wight: 20, sum: [Function: sum] }

Constructor in JS
--------------------------------

Example:

function Person(firstname,lastnmae,age){

this.firstname=firstname;

this.lastname=lastname;

this.age=age;

}

add proprties

Person.prototype.nationality="indian";










