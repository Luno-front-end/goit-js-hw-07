const refs = {
  renderBtn: document.querySelector("[data-action = render]"),
  destroyBtn: document.querySelector("[data-action = destroy]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
};

refs.renderBtn.addEventListener("click", onRenderBtn);
refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.input.addEventListener("input", onInputValue);

function onInputValue(event) {
  refs.input.textContent = event.currentTarget.value;
}

function onRenderBtn() {
  const value = refs.input.textContent;
  createBoxes(value);
}

function createBoxes(amount) {
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    basicSize += i * 10;
    boxEl.style.height = basicSize + "px";
    boxEl.style.width = basicSize + "px";
    boxEl.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()} )`;
    refs.boxes.append(boxEl);
  }

  // console.log(boxEl);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
function random() {
  return Math.floor(Math.random() * 256);
}
