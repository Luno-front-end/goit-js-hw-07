const inputEl = document.querySelector("#validation-input");
const valueEl = inputEl.dataset.length;

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length <= Number(valueEl)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
