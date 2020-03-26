function computerPlay(){
    let num=Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSOR';
            break;
    }
}
function playRound(playerSelection,computerSelection){
    if(playerSelection==='ROCK'){
        if(computerSelection==='PAPER'){
            return 'lose';
        }else if(computerSelection==='SCISSOR'){
            return 'win';
        }else{
            return 'tie';
        }
    }
    if(playerSelection==='PAPER'){
        if(computerSelection==='SCISSOR'){
            return 'lose';
        }else if(computerSelection==='ROCK'){
            return 'win';
        }else{
            return 'tie';
        }
    }
    if(playerSelection=='SCISSOR'){
        if(computerSelection=='ROCK'){
            return 'lose';
        }else if(computerSelection=='PAPER'){
            return 'win';
        }else{
            return 'tie';
        }
    }
}
/*
adding a querySelector for each button and logging the 
event to target and find out the className associated
        e.originalTarget.className
*/
let playerScore=0,computerScore=0;
let counter=0;

const btn=document.querySelectorAll('button');

btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        
        document.getElementById("tieCondition").textContent="";
        document.getElementById("result").innerHTML="";
        
        let tempString = `${btn.id}`;
        if(playRound(tempString,computerPlay())==='win'){
            playerScore++;
            document.getElementById("playerscore").textContent=`${playerScore}`;
        }else if(playRound(tempString,computerPlay())==='lose'){
            computerScore++;
            document.getElementById("computerscore").innerHTML=`${computerScore}`;
        }else{
            document.getElementById("tieCondition").textContent="it was a tie";
        }

        if(computerScore===5){
            document.getElementById("result").innerHTML="You lost the Game :(";
            computerScore=0;
            playerScore=0;
            document.getElementById("playerscore").textContent=`${playerScore}`;
            document.getElementById("computerscore").innerHTML=`${computerScore}`;
        }
        if(playerScore===5){
            document.getElementById("result").innerHTML="You win the Game :)";
            computerScore=0;
            playerScore=0;
            document.getElementById("playerscore").textContent=`${playerScore}`;
            document.getElementById("computerscore").innerHTML=`${computerScore}`;
        }
    });
});
