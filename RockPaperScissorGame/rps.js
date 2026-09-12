let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let UserScorepara=document.querySelector("#user-score");
let CompScorepara=document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const genCompChoice=()=>{
   let options=["rock","paper","scissor"];
   let randIdx=Math.floor(Math.random()*3);
   return options[randIdx];

}
const drawGame=()=>{
    console.log("Game is drawn");
    msg.innerText="Game Drawn,Play Again";
    msg.style.backgroundColor="#081b31";
    
};
//showing winner
    const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            UserScorepara.innerText="userScore";
            msg.innerText=`You Win!,Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="Green";
        }
        else{
            compScore++;
            CompScorepara.innerText="compScore";
            msg.innerText=`You lost!,Computer's ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="Red";
        }
    };




const playGame=(userChoice)=>{
    console.log(`You chose:${userChoice}`);
    //generate comp choice
    const compChoice=genCompChoice();
    console.log(`Comp chose:${compChoice}`);
    
    // checking draw condition.
    if(userChoice === compChoice){
         drawGame();

    }


    else{let userWin=true;
    if(userChoice==="rock"){
        //scissor or paper
        userWin = compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        //either rock or scissor
        userWin = compChoice==="scissor"? false:true;
    }
    else{
        //either rock or paper
        userWin = compChoice==="rock"? false:true;
    }
    
   
    showWinner(userWin,userChoice,compChoice);}
}





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })



});

const checkwinner=()=>{
   
}

