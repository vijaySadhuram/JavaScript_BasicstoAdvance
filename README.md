# JavaScript important topics
-----------------------------------------

# Hoisting
 
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the 
compilation phase, before the code is executed. This means that you can use variables and call functions before they are actually 
declared in your code.


However, it's important to note that only the declarations are hoisted, not the initializations or assignments. Let's take a look at two examples to illustrate hoisting:


Example 1: Variable Hoisting

          console.log(x); // Output: undefined
	  var x = 10;

In this example, the variable x is declared and assigned a value of 10. However, when we try to log x before its declaration, it doesn't throw an error. Instead, it prints undefined. This is because during hoisting, the declaration var x; is moved to the top of the scope. The variable is created but not yet assigned a value until the actual line x = 10 is reached.

Example 2: Function Hoisting

    greet(); // Output: "Hello!"

    function greet() {
    console.log("Hello!");
    }
    
In this example, we call the greet function before its actual declaration. Again, this works because during hoisting, the function declaration is moved to the top of the scope. As a result, the function can be called anywhere within the same scope, even before its declaration.

It's worth noting that hoisting applies to both variable and function declarations. However, function declarations take precedence over variable declarations during hoisting. If there are conflicting variable and function declarations with the same name, the function declaration will override the variable declaration.


# Arrays
Here are some of the commonly used array operations listed in the official MDN Javascript documentation:-

1. concat(): The concat() method is used to merge two or more arrays. This method does not change the existing arrays but returns a new array.

                                        let a=[1,2,3]; 
                                        let b=[4,5,6];
                                        let c=a.concat(b);
                                        console.log(c)
                                        
                                        (6) [1, 2, 3, 4, 5, 6]

 

2. join(): The join()  method joins all elements of an array into a string and returns this string.
                                            
                                            
                                            
                                            
                                            
                                          
3. pop(): The pop()  method removes the last element from an array and returns that element. This method changes the length of the array.

 

4. push(): The push() method adds one or more elements to the end of an array and returns the new length of the array.

 

5. shift(): The shift() method removes the first element from an array and returns that removed element

                                     let a=[1,2,3];
                                     let b=[4,5,6];
                                      a.shift()
                                    // console.log(c)
                                     console.log(a)
                                     
                                     (2) [2, 3]

6. unshift(): The unshift() method adds one or more elements to the beginning of an array

 

7. slice(): The slice() method returns a copy of a portion of an array into a new array object. It has two parameters: start and end.  Both the parameters are optional. The start is an integer that tells where to start the selection. If omitted, it acts like "0". The end is an integer that specifies where to end the selection. If omitted, all elements from the start position to the end of the array will be selected.
                                       let a=[1,2,3,4,5];
                                       let c=a.slice(0,3);
                                       console.log(c)
                                       output
                                       
                                       [1, 2, 3]
 

8. splice(): The splice() method changes the contents of an array by removing existing elements and/or adding new elements. This method takes three parameters. The first is an index required, whereas the other two parameters are optional. The index is an integer that specifies at what position to add/remove items. The next parameters tell the number of items to be removed. The third parameter is the new items added to the array separated by a comma. 
                                        
                                        Syntax:arrays.splice(startindx,NumOfDeletedElem,newElem);
                                        
                                        let array=[1,3,4,5,6,7];
                                        let DeletedArray=array.splice(0,2,9);
                                        console.log(array):
                                        console.log(DeletedArray);
                                        2-count of deleted elemet
                                        0-starting index;
                                        9-insert at beginning;
                                        output:
                                        [9,4,5,6,7];
                                        [1,2];
                                        
Example 2:                                        
                                        
               var array = ["Mountains","Sea","Island","Forest","Cave"];
               array.splice(2);
               console.log(array);
               output:
               ["Mountains", "Sea"]
Explanation:

The splice() method returns the removed item(s) in an array and changes the original array. Since we are printing the original array, it will have been modified by the splice method and thus will return ["Mountains", "Sea"]
                                 
                                 var cities = ['Hamilton', 'Toronto', 'Vancouver', 'London', 'Brussels', 'Sydney'] 
                                 /*
	                                  complete code to:- (write single line each)
		                                Remove cities to which you cant go
		                                Add 'Tokyo' at the end
	                                	Add 'Boston' at the start
		                                Remove furthest city from the array
		                                Print the array
                                  */
                                    cities.splice(4);
                                    cities.push('Tokyo');
                                    cities.unshift('Boston');
                                    cities.pop();
                                    console.log(cities)

                                       
                                  
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

# Object Prototypes

Every object in JavaScript inherits all its properties (including methods) from the Object.prototype. This means that the basic structure 

of any newly declared object is inherited from Object.prototype - in simple words, the Object.prototype acts as a skeleton from which 

every object is built.

OBJECTS ARE PASSED AS REFERENCE AND NOT AS VALUES (i.e. not copied)

Example:
                                        const person={
                                        'name':['vijay','sadhuram'],
                                         age:20,
                                         mobileno:'94u3'
                                         }

                                       const a=person;
                                       a.lastname="sure"
                                       console.log(person);
                                       console.log(a);


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

# Constructor in JS

Example:

function Person(firstname,lastnmae,age){

this.firstname=firstname;

this.lastname=lastname;

this.age=age;

}

add proprties

Person.prototype.nationality="indian";

# set
                                        const set=new Set([1,2,4,5]);
                                        set.add(9);
                                       //iterate over the set
                                        for(let value of set){
                                       console.log(value)
                                        }

Example:
					const set=new Set([1,2,4,5]);
                                        set.add(9);
                                       //iterate over the set
                                       set.forEach((value,index,set)=>{
                                       console.log(value)

                                       })
				
# Map
        A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

                                                 Create map
						 const fruits = new Map([
                                                ["apples", 500],
                                                 ["bananas", 300],
                                                ["oranges", 200]
                                                ]);

                                                

                                           //iterate over the map
                                            fruits.forEach((value,index)=>{
                                            console.log(index);

                                              })


How to Create a Map:

You can create a JavaScript Map by:
<space> 
Passing an Array to new Map()

Create a Map and use Map.set()
<space/>
The set() Method
	                              
	// Create a Map
        const fruits = new Map();

        // Set Map Values
        fruits.set("apples", 500);
        fruits.set("bananas", 300);
        fruits.set("oranges", 200);
	fruits.get("apples")//500
	fruits.delete("apples");
	


					
					










