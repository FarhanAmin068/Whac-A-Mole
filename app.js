const squares=document.querySelectorAll('.square');
const mole=document.querySelector('.mole');
const timeLeft=document.querySelector('#time-left');
const score=document.querySelector('#score');

let result=0;
let hitPosition;
let timerId=null;
let currentTime=60;
// Now to place a mole in the randomSquare we need to use a function
function randomSquare(){
    squares.forEach(square =>{
        // That means if we check a square the mole would be removed
    square.classList.remove('mole');
    })

    // Now we want yo get a random square for the mole to appear each time


    let randomPosition= squares[Math.floor(Math.random()*9)]
    // console.log(randomPosition);
    // Now if we want to add the mole to randomSquare each time then
    randomPosition.classList.add('mole');
    hitPosition=randomPosition.id;
}
//we want to increase score everytime we hit a mole
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
      }
    })
  })
// This function helps to move the mole automatically
function moveMole(){
   
    timerId=setInterval(randomSquare,700);

}

// randomSquare();
moveMole();

// Now to set a timer for the whole round
function countDown(){
currentTime--
timeLeft.textContent=currentTime;

if(currentTime==0){
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('Game Over!!!!Your Final Score is '+ result);
}
}
let countDownTimerId=setInterval(countDown,1000);