let btns=document.querySelectorAll(".innerBox");
let resetBtn=document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-game-button");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

const winpatterns=
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ] 

turnO=true; //player 1 
winnerfound=false;

btns.forEach((btn)=>{
   
    btn.addEventListener("click",()=>{
      if(turnO){
        btn.innerText="O";
        turnO=false;
      }
      else{
        btn.innerText="X";
        turnO=true;
      }
      btn.disabled=true;
      checkWinner();

   }); 
  
});

function resetGame(){
    turnO=true;
    enablebtns();
    msgContainer.classList.add("hide");
    winnerfound=false;
}


function checkWinner(){
    for(let pattern of winpatterns){
       let pos1val=btns[pattern[0]].innerText;
       let pos2val=btns[pattern[1]].innerText;
       let pos3val=btns[pattern[2]].innerText;

      if(pos1val!=""&& pos2val!="" && pos3val!=""){
         if(pos1val===pos2val && pos2val===pos3val){
        winnerfound=true;
        console.log("Winner",pos2val);
        finalwinner(pos2val);
        
       
        
    } 
 } 
    }

    let count=0;
    btns.forEach((btn)=>{
      if(btn.innerText=="X"|| btn.innerText=="O"){
         count++ ;
      }

    } 
 );

    
    if(count==9 && winnerfound==false){
       console.log("game tied!!");
       msg.innerText="It's a tie! Restart again";
       msgContainer.classList.remove("hide");
    }

    
}


function finalwinner(winner){
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
}
   

function disablebtns(){
    for(let btn of btns){
        btn.disabled=true;
    }
}

function enablebtns(){
for(let btn of btns){
    btn.disabled=false;
    btn.innerText="";
}
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
