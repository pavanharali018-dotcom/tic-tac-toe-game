
// console.log("Hello World!");
// console.log("This is my first JavaScript file.");
// name="John";
// console.log("My name is",name);
// age=30;
// console.log("I am",age,"years old.");
// age=age+1;
// console.log("Next year, I will be",age,"years old.");
// let usn=24;
// console.log("My USN is",usn);

// _age=25;
// console.log("My age is",_age);

// const student={
//     name:"Pavan",
//     age:19,
//     usn:30,
//     sgpa:9.15,
// };

// console.log("Student name:",student.name);
// console.log("Student age:",student.age);
// console.log("Student USN:",student.usn);
// console.log("Student SGPA:",student.sgpa);
// const profile={
//     name:"Shradha Kapra",
//     posts:195,
//     followers:5660000,
//     following:9,
//     profession:"Entrepreneur",

// }
// console.log(profile);
// let a=10;
// let b=20;
// let cond1=a>b;
// let cond2=a<b;
// console.log("Is a greater than b?",cond1);
// console.log("Is a less than b?",cond2);
// console.log("Any one of the  conditions true?",cond1 || cond2);
// let n=-y;
// if(n%2==0){
//     console.log("Number",n,"is even.");
// }
// else if(n%2!=0){
//     console.log("Number",n,"is odd.");
// }
// else{
//     console.log("Invalid input.");
// };

// let age=5;
// age>=18? console.log("You are eligible to vote.") : console.log("You are not eligible to vote.");    

// let n=prompt("Enter marks:");
// if(n>=80 && n<100){
//     console.log("Grade: A");
// }
// else if(n>=70 && n<89){
//     console.log("Grade: B");
// }
// else if(n>=60 && n<69){
//     console.log("Grade: C");
// }
// else if(n>=50 && n<59){
//     console.log("Grade: D");
// }
// Loops and strings
//  for(let i=1;i<=5;i++){
//     console.log("RCB");
//  }
//  let sum=0;
//  n=prompt("Enter a number:");
//  for(let i=1;i<=n;i++){
//     sum=sum+i;
//  } console.log("The sum of first",n,"natural numbers is",sum);

// let i=1;
// while(i<8){
//     console.log("RCB");
//     i++;
// }

// for of loop
// let length=0;
//  let str="Hello";
//   for(let char of str){
//      console.log("character:",char);
//      length++;
//  }
//  console.log("Length of the string is:",length);

// for in loop
// const student={
//     name:"Pavan",
//     age:19,
//     usn:30,
//     sgpa:9.15,

// };
// for(let i in student){
//     console.log(i,":",student[i]);
// }
//strings-- (immutable)
// let str="Pavan";
// console.log("length of the string is:",str.length);
// console.log("Character at index 0:",str[0]);

// let tempLiteral=`My name is ${str} and i am ${18+1} years old. I am learning JavaScript.`;
// console.log(tempLiteral);
// let obj={
//     item:"book",
//     price:10,

// };
// console.log(`The cost of ${obj.item} is ${obj.price} dollars.`);
// let hey= "Hello World!";
// //string methods
// console.log(hey.toUpperCase());
// console.log(hey.toLowerCase());
// console.log(hey);
// str3="Apna college";
// console.log(str3.slice(5,12));
// str4="Shreya";
// str5=" Harali";
// let fullName=str4.concat(str5);
// console.log(fullName);  
// str6="Melony";
// console.log(str6.replace("n","d"));

//practise q1
// let fullName2=prompt("Enter Full Name:");
// let lenf=fullName2.length;
// let lowerCaseName=fullName2.toLowerCase();
// let username="@"+lowerCaseName+lenf;
// console.log("Your username is:",username);

//Arrays
// let arr=[1,2,3,4,5];
// console.log(arr);
// arr[4]=6;
// console.log(arr); // Arrays are mutable, we can change the elements of an array.

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let cricketTeams=["RCB","CSK","MI","KKR"];
// for(let team of cricketTeams){
//     console.log(team);
// }
// let team={
//     name:"Csk",
//     captain:"Dhoni",
//     trophies:5,
//     ban:"2 years",

// };
// for(let key in team){
//     console.log(key,":",team[key]);
// }
// //practise q2
// let marks=[85,78,92,75,88];
// let sum=0;
// for(let mark of marks){
//     sum+=mark;
// }
// let average=sum/marks.length;
// console.log(`The average marks of students is ${average}.  `);
// //practise q3
// let items=[900,560,760,450,320];
// items.push(300);// adding a new item to the array
// console.log(items); 

// for(let i=0;i<items.length;i++){
// items[i]=items[i]*0.9; // applying 10% discount
//     console.log(`The price of item after discount is ${items[i]}`);
// }
// for(let item of items){
//     item=item*0.9;
//     console.log(`The price of item after discount :  ${item}`);

// }
// console.log(items);
// let batters=["Virat", "Rohit", "Dhoni", "AB"];
// let bowlers=["Bumrah", "Chahal", "Jadeja", "Siraj"];
// let cricketers=batters.concat(bowlers);
// console.log(cricketers);
// console.log(batters);
// console.log(bowlers);
// //splice

// let a=[1,2,3,4,5];
// a.splice(1,2,4,4);
// console.log(a);

// let companies=["Bloomberg", "Google", "Microsoft", "Uber", "IBM", "Netflix"];
// console.log(companies);
// // for(let company of companies){
// //     console.log(company);}

// // console.log(companies.shift("Bloomberg"));
// companies.splice(3,1,"OLa");
// console.log(companies);
// console.log(companies.pop());
// console.log(companies);
// console.log(companies.push("Amazon"));

// //Functions
// // function def

// function add(a,b){
//      return a+b;
// }

// sum= add(2,4);  // /func call
// console.log(`Sum of numbers a and b is ${sum}`);

// //arrow function
// const arrowproduct=(a,b) =>{
//     console.log(a*b);
// };

// arrowproduct(21,3);

// //practise q1
// let count=0;let str="Pavan";
// function p1(str){
//     for(let char of str){
//         if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//            count++;
//         }
//     }
//     return count;

   

// }

//  p1("Pavan");
// console.log(`Number of vowels in ${str} are ${count}`);


// //foreach method
// let avengers=["Ironman","Captain America","Thor","Hulk"];
// avengers.forEach(function(avenger){
//     console.log(avenger);
// });

// //arrow func  
// avengers.forEach((avenger) => {
//     console.log(avenger.toUpperCase());
// });

//practise q2
// let scores=[85,78,92,75,88];
// scores.forEach(function(score,index,array){
    // console.log(`score of student ${index+1} is ${score}`);
    // console.log(array);
// })

// practise q2 using arrow function

// scores.forEach((score,index) =>{
//     console.log(`Score of srudent ${index+1} is ${score}`);
// })
// //practise q3
// let arr=[1,2,3,4,5];
// arr.forEach(function(num){
//     console.log(num*num);
// })
//another way
// square=(num)=>{
//     console.log(num*num);
// };
// arr.forEach(square); //undefined because forEach does not return anything


//array methods

//1 maps : returns a new array after performing the operation on each element of the array
// let arr2=[1,2,3,4,5];
// doublearray=arr2.map(num =>{
//     return num*2;
// });
// console.log(doublearray);
// console.log(arr2); //original array remains unchanged

// const students=[
//     {name: "Alice", age: 20, grade: "A"},
//     {name: "Bob", age: 22, grade: "B"},
//     {name: "Charlie", age: 21, grade: "A"}
// ];

// names=students.map(item => item.name);
// console.log(names);
// ages=students.map(item => item.age);
// console.log(ages);
// grades=students.map(item =>item.grade);
// console.log(grades);

// 2 filter : returns a new array after filtering the elements of the array based on the condition provided
// arr =[1,2,3,4,5,6,7,8,9,10];
// evenarr=arr.filter((num)=>{
//     return num%2==0;// checks condition

// });
// console.log(evenarr);
// 3 reduce : returns a single value after performing the operation on each element of the array

// const output=arr.reduce((res,current)=>{
//     return res+current;
// });
// console.log(output);

// to print largest number in the array
// const largest=arr.reduce((prev,current)=>{
//     return prev>current? prev:current;
// }) ;
// console.log(largest);

//practise q3
// let n=prompt("Enter a number:");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// sum=arr.reduce((res,current)=>{
//     return res+current;
// })
// console.log(`The sum of first ${n} natural numbers is ${sum}.`);

// product=arr.reduce((res,current)=>{
//     return res*current;
// });
// console.log(`The product of first ${n} natural numbers is ${product}.`);//factorial of n


//Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// let firsthead=document.querySelectorAll(".heading","p");
// console.dir(firsthead);
// let div=document.querySelector("div");
// console.dir(div);
// div.innerHTML="<h1>Welcome to my website</h1><p>This is a sample paragraph.</p>";   

// let greeting=document.querySelector("h2").append("from Apna College students");
// console.log(greeting.innerHTML);        
// let newgreeting=greeting.append("from Apna College students");


// 
// let boxes=document.querySelectorAll(".box");
// console.dir(boxes);
// let index=1
// for(let box of boxes){
//     box.innerText=`This is a box ${index}`;
//     index++;
// };


// let div=document.querySelectorAll("div");
// console.log(div);

// let classname=div[0].setAttribute("class","newBox");
// console.log(classname);

// let idname=div[1].getAttribute("id");
// console.log(idname);
// console.log(div[1].setAttribute("id","newBox2"));

// let para=document.querySelector("p");
// console.log(para);

// let newparaName=(para.setAttribute("name","newPara"));
// console.log(newparaName);

//creating a new element eg,button , paragraph, heading etc. and adding it to the DOM
// el1=document.createElement("h1");

// el1.innerText="This is a new heading";
// console.log(el1);
// // div[0].before(el1);

// // let heading=document.querySelector("h2");


// let el2=document.createElement("button");
// el2.innerText="Click Me";
// el2.style.color="blue";
// el2.style.backgroundColor="Red";
// console.log(el2);
// heading.prepend(el2);

// let clinic=document.querySelector("#info");

// clinic.addEventListener("mouseover",()=>{
//      clinic.style.color="blue";
//     clinic.style.fontFamily="cursive";
     
// });
// clinic.addEventListener("mouseout",()=>{
//     clinic.style.color="black"
//     clinic.style.fontFamily= "Georgia";
// });

// let clinic = document.querySelector("#info");

// const enterHandler = () => {
//     clinic.style.color = "blue";
// };

// const leaveHandler = () => {
//     clinic.style.color = "black";
// };

// clinic.addEventListener("mouseover", enterHandler);
// clinic.addEventListener("mouseout", leaveHandler);

//Objects,Prototypes,Classes
// const student={
//     name:"Pavan",
//     age:19,
//     greeting  () {
//         console.log(`Hi, I am ${this.name}`);
//     }
    
    
// };
// student.greeting();

 // classes 
// class marutiCars{
//      constructor(brand,mileage){
//         console.log("Creating new object");
//         this.Brand=brand;
//         this.mileage=mileage;

//      }
     
// }

// let car1= new marutiCars("Breeza",20);//obj1
// console.log(car1);
// let car2= new marutiCars("Grand Vitara",18);//obj2
// console.log(car2);

// class students{
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;

//     }

//     greet(){
//         console.log(`hi i'm ${this.name}`);
//        }


//     haspassed(marks){
//         if(this.marks>=35){
//           return console.log(`${this.name} has Passed`);

//         }
//         else{
//            return console.log(`${this.name} has not Passed`);
//         }
//     }
   
// }

// const student1 = new students("Ravi",87);
// student1.haspassed(87);
// console.log(student1);
// const student2 = new students("Sanju",33);
// console.log(student2);
// student2.haspassed(33);

// Inheritance  from Parent class to child class.
// class Parent{
//     constructor(mother,father){
//         this.mother="Savita";
//         this.father = "Raju";

//     }
//     greet(){
//         console.log("Hello we are Parents!!");
//     }
    
// }

// class child extends Parent{
//     // greet(){console.log("We are Children");
    
// } 

// let child1 = new child();

// console.log(super.greet(mother));

// class human{
//     constructor(){
//         this.species = "Homo Sapiens";
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     walk(){
//         console.log("Walk");
//     }
// }

// class doctor extends human{
  
//     constructor(specialisation){
//           super();  // to invoke parent class constructor.
//         this.speci=specialisation;
//     }
//     checkUp(){
//         console.log("Take care of patients");
//     }
// }

// let kiranobj = new doctor("Heart Specialist");

// class User{
//     constructor(name){
//         this.Name = name;
        
//     }
//     viewData(){
//         console.log("This is user Data");
//     }
// }
// let user1 = new User("Aman");

// class Admin extends User{
//     constructor(name,email){
//         super(name);
//         this.email = email;
//     }
//     editData(){
//         console.log("You can Edit ur data here");
//     }
// }

// let adm1 = new Admin("Amit","amitt@gmail.com");

//Callbacks, Promises, Async Await


// function getData(dataID){
//     setTimeout(()=>{
//         console.log("Data",dataID);
//     },2000);
// }
// getData(123);

// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataID);
//         if(getNextData){
//             getNextData();
//         }
        
        
//     },2000);
// }

    




// Call back hell:nested callbacks
// getData(1,()=>{
//     console.log("getting data 2....");
//     getData(2,()=>{
//         console.log("getting data 3...");
//       getData(3,()=>{
//         console.log("getting data 4...");
//         getData(4);
//     });
// });
// });

//Promises
// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise.");
//     resolve("Problem Resolved.");
    
// });

// Handling Promises
// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am Promise.");
//         // resolve("Problem resolved successfully.");
//         reject("Error occurred!");
//     });
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log(res);
// });

// promise.catch((err)=>{
//     console.log(err);
// });

//Chaining — this is what actually fixes callback hell.
// const getData1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched.");
//         },2000);
//     });
// }
// const getData2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched.");
//         },2000);
//     });
    
// }

// const getData3 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched.");
//         },2000);
//     });
    
// }

// function login(username){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve(`${username} logged in`);
//         },1000)
//     })
// }

// function fetchOrders(username){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`orders fetched for ${username}`);
//         },1000);
//     })
// }

// login("pavanharali18").then((res)=>{
//     console.log(res);
//     return fetchOrders("pavanharali18");
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// //Promise Chaining
// console.log("getting data 1...");
// getData1().then((res)=>{
//     console.log(res);
//     console.log("getting data 2...");
//     getData2().then((res)=>{
//         console.log(res);
//          console.log("getting data 3...");
//         getData3().then((res)=>{
//             console.log(res);
//         })
//     })
// });

// function getData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataID);
//         resolve("Success");  
//     },2000);
//     });
// }

// using promise chain 
// console.log("fetching data...");

// getData(1).then((res)=>{
//     return getData(2);
    
//     }).then((res)=>{
//         return getData(3);
// }).then((res)=>{
//     console.log(res);
// });

//Async await.
// function api(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("getting data");
//         resolve(220);
//     },2000);
//     });
// }


// async function getWeatherApi(){
//     await api();
// }

// function getData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataID);
//         resolve("Success");  
//     },2000);
//     });
// }

// async function getAllData(){
    // console.log("Getting data 1...");
    // await getData(1);
    // console.log("Getting data 2...");
    // await getData(2);
    // console.log("Getting data 3...");
    // await getData(3);
    // console.log("Getting data 4...");
    // await getData(4);
    // console.log("Getting data 5...");
    // await getData(5);

// }

//IIFE : Immediately Invoked Function Expression: no need to call async function.
// (async()=>{
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
//     console.log("Getting data 4...");
//     await getData(4);
//     console.log("Getting data 5...");
//     await getData(5);


//  function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 name:"Pavan",
//                 age:20
//             });
//         },1500);
        
        
//     });

//  }

//  async function getallUser(){
//     console.log("Getting User Data...");
//     try{
//       const user = await getUser();
//       console.log(user);
//     }
//     catch{
//         console.log("Error in getting user data.");
//     }
   
//  }
//  getallUser();

//  getUser().then((user)=>{
//     console.log(user);
//  });

//Fetch API
// const factpara = document.querySelector("#fact1");
// const btn = document.querySelector("#btn");

//  async function getFacts(){
//     console.log("Getting data...");
    // const URL = fetch("https://fakestoreapi.com/products");
    // const response = await URL;
    // const data = await response.json();
    // factpara.innerText = data[4].title;
    
//  }; 

//using promises for above method.
// let index = 0;
// function getFacts(){
//     console.log("Getting facts...");
//     return fetch("https://fakestoreapi.com/products")
//     .then((response)=>{
//         return response.json(); })
//         .then((data)=>{
//             factpara.innerText = data[index].title;
//             console.log(data);
//             index++;
            
//         })
    
//     .catch(()=>{
//         console.log("Could not get facts");
//     });

// } ;
 

// btn.addEventListener("click",getFacts);

function verifyCart(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("cart verified");
        },1000);
    })
}

function applyDiscount(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Discount Applied");
        },1000);
    })
}

function confirmPayment(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Payment Confirmed");
        },1000);
    });
}

async function checkoutFlow(){
   try{
    const step1=await verifyCart();
    console.log(step1);
    const step2=await applyDiscount();
    console.log(step2);
    const step3=await confirmPayment();
    console.log(step3);
}catch(err){
    console.log(err);
}
}

checkoutFlow();
