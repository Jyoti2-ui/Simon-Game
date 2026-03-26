let gameSeq=[]; 
let userSeq=[]; 
let h1 = document.querySelector("h1");
let started = false; 
let btn = ["red", "yellow", "green", "pink"];

let level = 0; 

document.addEventListener("keypress", function() 
{ 
    if(started == false) 
    { 
        console.log("game is started"); 
        started = true; 
        levelUp();
    } 
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function ()
    {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp()
{
    userSeq=[];
    level++;
    h1.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btn.length);
    let randColor = btn[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);

    gameFlash(randbtn);
}

function checkAns()
{
    //console.log("curr level: " , level);
    let Idx = level-1;

    if(userSeq[Idx]===gameSeq[Idx])
    {
        if(userSeq.length=gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
else{
      h1.innerHTML = `GAME OVER!! YOUR SCORE WAS <b>${level}</b> <br> PRESS ANY KEY TO RESTART`;
      document.querySelector("body").style.backgroundColor ="red";
      reset();
      setTimeout(function()
      {
    
        document.querySelector("body").style.backgroundColor ="white";
    })
}
}



function btnPress()
{
 // this prints the div in console
    let btn = this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns)
{
    btn.addEventListener("click", btnPress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}