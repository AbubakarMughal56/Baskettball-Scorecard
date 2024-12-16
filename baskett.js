let scoreEl1 = document.getElementById("score1");
let scoreEl2 = document.getElementById("score2");


let countOne = 0;
let countTwo = 0;

function btnPlus1(){
    countOne += 1;
    scoreEl1.textContent = countOne;
}
function btnPlus2(){
    countOne += 2;
    scoreEl1.textContent = countOne;
}
function btnPlus3(){
    countOne += 3;
    scoreEl1.textContent = countOne;
}
function btnPlus11(){
    countTwo += 1;
    scoreEl2.textContent = countTwo;
}
function btnPlus22(){
    countTwo += 2;
    scoreEl2.textContent = countTwo;
}
function btnPlus33(){
    countTwo += 3;
    scoreEl2.textContent = countTwo;
}

