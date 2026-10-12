let count = 0;

let countDisplay = document.getElementById("count");
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");

function updateCounter() {
countDisplay.textContent = count;

if (count > 0) {
    countDisplay.style.color = "green";
} else if (count < 0) {
    countDisplay.style.color = "red";
} else {
    countDisplay.style.color = "black";
}


}

incrementButton.addEventListener("click", function () {
count++;
updateCounter();
});

decrementButton.addEventListener("click", function () {
count--;
updateCounter();
});

resetButton.addEventListener("click", function () {
count = 0;
updateCounter();
});

updateCounter();
