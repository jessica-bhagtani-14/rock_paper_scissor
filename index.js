console.log("Hello");

let humanScore=0;
let computerScore=0;

function getComputerChoice()
{
    let x=Math.floor(Math.random()*3)+1;
    console.log(x);
    return x;
}

function getHumanChoice()
{
    let y=prompt("Enter rock paper or scissor");
    console.log(y);
    return y;
}

function round(i)
{
    alert("This is "+i+" round");
    let x=getComputerChoice();
    let y=getHumanChoice();
    if(x==y)
    {
        alert("Its a tie. Try again");
        round();
    }
    else if(x==1 && y==3)
    {    
        computerScore+=1;
        alert("Computer won this round");
    }
    else if(x==3 && y==1)
    {
        humanScore+=1;
        alert("Human won this round");
    }
    else if(x==1 && y==2)
    {
        humanScore+=1;
        alert("Human won this round");
    }
    else if(x==2 && y==1)
    {    
        computerScore+=1;
        alert("Computer won this round");
    }
    else if(x==2 && y==3)
    {
        humanScore+=1;
        alert("Human won this round");
    }
    else if(x==3 && y==2)
    {    
        computerScore+=1;
        alert("Computer won this round");
    }
}

function Game()
{
    let a=5;
    for(let i=1;i<=a;i++)
    {
        round(i);
    }
    if(humanScore>computerScore)
        alert("Human won the game");
    else
        alert("Computer won the game");
}

Game();