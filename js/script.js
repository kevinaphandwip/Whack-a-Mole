const soil = document.querySelectorAll('.soil');
const mole = document.querySelectorAll('.mole');
const scoreboard = document.querySelector('.scoreboard');
const pop = document.querySelector('#pop');

let soilBefore;
let done ;
let score;

function randomSoil(soil) {
    const s = Math.floor(Math.random() * soil.length);
    const sRandom = soil[s];
    if (sRandom == soilBefore) {
        randomSoil(soil);
    }
    soilBefore = sRandom;
    return sRandom;
}

function randomTime(min,max){
    return Math.round(Math.random() * (max-min) + min);
}

function showMole() {
    const sRandom = randomSoil(soil);
    const cRandom = randomTime(300, 1000); 
    sRandom.classList.add('show');

    setTimeout(() => {
       sRandom.classList.remove('show');
       if(!done) {
        showMole();
    } 
    }, cRandom);
   
}

function start() {
    done = false;
    score = 0;
    scoreboard.textContent = 0;
    showMole();
    setTimeout(() => {
        done = true;
    }, 10000);
}

function punch(){
 score++;
 this.parentNode.classList.remove('show');
 pop.play();
 scoreboard.textContent = score;
 


}

mole.forEach(m => {
    m.addEventListener('click',punch);
});