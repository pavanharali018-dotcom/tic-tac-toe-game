const btn1=document.querySelector(".nav-cart"); 
let count=0;
btn1.addEventListener("click",()=>{
    count=count+1;
    console.log(count);
});
    


let btn2=document.querySelector(".nav_search");
btn2.onmouseover=()=>{
    console.log("Mouse is over the search bar");
};


let modes=document.querySelector(".mode");
modes.innerText="Change Mode";

modes.addEventListener("click",()=>{

    document.querySelector("body").style.backgroundColor="black";
});

