const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  refs.valueEl.textContent = counterValue.value;
});
refs.incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  refs.valueEl.textContent = counterValue.value;
});
