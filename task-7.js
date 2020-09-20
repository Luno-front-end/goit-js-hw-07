const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);
function onInput(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
