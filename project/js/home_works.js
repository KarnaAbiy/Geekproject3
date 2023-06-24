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

// AJAX

const people = [
    { name: "Abiy", age: 19 },
    { name: "Dio", age: 122 },
    { name: "Joseph", age: 18 },
    { name: "Lisa", age: 50 },
];

const peopleList = document.getElementById("people-list");
  
people.forEach(person => {
    const listItem = document.createElement("li");
    listItem.style.border = "1px solid orange";
    listItem.style.padding = "2 0px";
    listItem.style.color = "orange";
    listItem.textContent = `${person.name}, age: ${person.age}`;
    peopleList.appendChild(listItem);
});

// AJAX 2

const consoleBtn = document.querySelector('.consoleBtn');

var infoRequest = new XMLHttpRequest();
infoRequest.open("GET", "peoples.json", true);
consoleBtn.onclick = () => {
    if(infoRequest.readyState = 4){
        var response = JSON.parse(infoRequest.responseText);
        console.log(response)
    }
}
infoRequest.send();

//curency

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (element, targetElement1, targetElement2, isItOk) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "curr.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      const response = JSON.parse(request.response);
      if (isItOk) {
        targetElement1.value = (element.value / response.usd).toFixed(2);
        targetElement2.value = (element.value / response.eur).toFixed(2);
      } else {
        targetElement1.value = (element.value * response.usd).toFixed(2);
        targetElement2.value = (element.value * response.eur).toFixed(2);
      }
      element.value === "" ? (targetElement1.value = "", targetElement2.value = "") : false;
    };
  };
};

convert(som, usd, eur, true);
convert(usd, som, eur, false);
convert(eur, som, usd, true);
