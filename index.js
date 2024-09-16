console.log("Hello");

let humanScore=0;
let computerScore=0;

const data=document.querySelector("#data");

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

function round(a)
{
    //alert("This is "+i+" round");
    let x=getComputerChoice();
    let y=a;
    if(x==y)
    {
        alert("Its a tie. Try again");
        return;
    }
    else if(x==1 && y==3)
    {    
        computerScore+=1;
        data.textContent="Computer won this round";
    }
    else if(x==3 && y==1)
    {
        humanScore+=1;
        data.textContent="Human won this round";
    }
    else if(x==1 && y==2)
    {
        humanScore+=1;
        data.textContent="Human won this round";
    }
    else if(x==2 && y==1)
    {    
        computerScore+=1;
        data.textContent="Computer won this round";
    }
    else if(x==2 && y==3)
    {
        humanScore+=1;
        data.textContent="Human won this round";
    }
    else if(x==3 && y==2)
    {    
        computerScore+=1;
        data.textContent="Computer won this round";
    }
    data.textContent += ` | Human score = ${humanScore} and Computer score = ${computerScore}`;

    if(humanScore===5)
        data.textContent += " | Human won";
    else if(computerScore===5)
        data.textContent+= " | Computer won";
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

const rock=document.querySelector("#rock");
console.log(rock);

rock.addEventListener("click",()=>round(1));
const paper=document.querySelector("#paper");
console.log(paper);

paper.addEventListener("click",()=>round(2));

const scissor=document.querySelector("#scissor");
console.log(scissor);

scissor.addEventListener("click",()=>round(3));
