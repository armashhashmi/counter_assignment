let sum = 0;
let numberEl = document.getElementById("number");
let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");
let resetEl = document.getElementById("reset");

numberEl.innerHTML = sum;

function increment() {
  sum++;
  numberEl.innerHTML = sum;
}

function decrement() {
  if (sum > 0) {
    sum--;
  }

  numberEl.innerHTML = sum;
}

function reset() {
  sum = 0;
  numberEl.innerHTML = sum;
}

incrementEl.addEventListener("click", increment);
decrementEl.addEventListener("click", decrement);
resetEl.addEventListener("click", reset);
