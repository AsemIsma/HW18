const result = document.querySelector("h2");
const lowLim = document.querySelector("#lower");
const upLim = document.querySelector("#upper");
const genBtn = document.querySelector("#genBtn");
const clearBtn = document.querySelector("#clearBtn");

genBtn.addEventListener("click", function (min, max) {
    event.preventDefault();

    min = Number(lowLim.value);
    max = Number(upLim.value);

    if(min < max) {
        let randomNum = Number(Math.floor(Math.random() * (max - min + 1))) + Number(min);
        result.innerHTML = randomNum;
        console.log(randomNum);
    } else {
        result.innerHTML = "Invalid Input";
    }
});

clearBtn.addEventListener("click", function () {
    lowLim.value = '';
    upLim.value = '';
    result.innerHTML = ' ';
});