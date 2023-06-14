//EMAIL

const emailInput = document.querySelector("#email");
const buttonCheck = document.querySelector("#gmail_button");
const isitok = document.querySelector("#gmail_result");

const regExp = /@gmail.com/gi;

buttonCheck.onclick = () =>{
    if (regExp.test(emailInput.value)) {
        isitok.innerHTML = "Valid email address";
    }
    else{
        isitok.innerHTML = "It is not email address";
    }
}

// MOVE BLOCK

const box = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
let direction = 'right';

const move = () => {
    if (direction === 'right') {
        if (positionX < 450) {
            positionX++;
            box.style.left = `${positionX}px`;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < 450) {
            positionY++;
            box.style.top = `${positionY}px`;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--;
            box.style.left = `${positionX}px`;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--;
            box.style.top = `${positionY}px`;
        } else {
            direction = 'right';
        }
    }

    setTimeout(move, 1);
};

move();

//TIME

let num = 0;
let timing;
let currentNum = 0;

const nZero = document.querySelector('.numberZero');
const btresume = document.querySelector('.btresume');
const btstop = document.querySelector('.btstop');
const btstart = document.querySelector('.btstart');
const btreset = document.querySelector('.btreset');

btstart.addEventListener("click", () => {
    timing = setInterval(() => {
        num++;
        nZero.textContent = num;
    }, 1000)    
})

btreset.addEventListener("click", () => {
    clearInterval(timing);
    num = 0;
    nZero.textContent = num;
});

btstop.addEventListener("click", () => {
    clearInterval(timing);
    savedNum = num;
});

btresume.addEventListener("click", () => {
    num = savedNum;
    nZero.textContent = num;
    timing = setInterval(() => {
        num++;
        nZero.textContent = num;
    }, 1000);
});