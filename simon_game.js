let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let btns = ['yellow', 'red', 'purple', 'green'];
let h3 = document.querySelector("h3");
let maxi = 0;


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game has started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerHTML = `CurrScore : ${level - 1}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    gameFlash(randBtn);
    // programming ma jab jab hamko bar bar kam karna hai then we use function bro
}

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}
// function userFlash(a){
//     // 
//     a.classList.add('userflash');
//     setTimeout(function () {
//         a.classList.remove('userflash');
//     }, 250);
// }

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        if(maxi < level - 1){
            maxi = level - 1;
        }
        maxScore(maxi);
        if(level === 0){
            h3.innerHTML = "Enter valid key Yaar!!";
        }
        else{
            h3.innerHTML = `Game over! Your score is ${level - 1}. <br> Press any key to start again` ;  
        }
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "black";

        }, 150);
        reset();
          
    }

}

function btnPress(){
    let btn = this
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
    // this will say which button we have pressed
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function maxScore(maxi){
    let c = document.querySelector("#high_score");
    c.innerText = `High-Score : ${maxi}`


}