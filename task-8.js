const refs = {
  renderBtn: document.querySelector("[data-action = render]"),
  destroyBtn: document.querySelector("[data-action = destroy]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
  boxControls: document.querySelector("#controls"),
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

function onModalError(maxCreateBoxes) {
  const modalBox = document.createElement("div");
  const classModalBox = modalBox.classList.add("modal-box");
  const closeModalBtn = document.createElement("button");
  const classModalBtn = closeModalBtn.classList.add("modal-btn");
  const modalHeading = document.createElement("h1");
  const classModalHeading = modalHeading.classList.add("modal-h");
  const modalParagraph = document.createElement("p");
  const classModalParagraph = modalParagraph.classList.add("modal-p");

  closeModalBtn.textContent = "Закрить";
  closeModalBtn.type = "button";
  modalHeading.textContent = "Ти хочеш, щоб завіс браузер?🤔";
  modalParagraph.textContent = `Тоді зменш значення до ${maxCreateBoxes} 😜 включно😊`;
  onIfBoxModalCreate(modalBox, modalHeading, modalParagraph, closeModalBtn);
}

function onIfBoxModalCreate(
  modalBox,
  modalHeading,
  modalParagraph,
  closeModalBtn
) {
  const modal = document.querySelector(".modal-box");

  if (modal) {
    modal.remove();

    refs.boxes.after(modalBox);
    modalBox.append(modalHeading, modalParagraph, closeModalBtn);
    const modalBtn = document.querySelector(".modal-btn");
    modalBtn.addEventListener("click", closeBtn, { once: true });
    const modalIsHidenControls = refs.boxControls.classList.add("is-hiden");
    const modalIsHidenBoxes = refs.boxes.classList.add("is-hiden");
    offScrol();
  } else {
    refs.boxes.after(modalBox);
    modalBox.append(modalHeading, modalParagraph, closeModalBtn);
    const modalBtn = document.querySelector(".modal-btn");
    modalBtn.addEventListener("click", closeBtn, { once: true });
    const modalIsHidenControls = refs.boxControls.classList.add("is-hiden");
    const modalIsHidenBoxes = refs.boxes.classList.add("is-hiden");
    offScrol();
  }
}
function closeBtn() {
  const modal = document.querySelector(".modal-box");
  modal.remove();
  const modalIsHidenControls = refs.boxControls.classList.remove("is-hiden");
  const modalIsHidenBoxes = refs.boxes.classList.remove("is-hiden");
  onScrol();
}

function createBoxes(amount) {
  // const maxCreateBoxes = 100;
  const maxCreateBoxes = Number(refs.input.getAttribute("max"));
  let basicSize = 30;
  if (amount <= maxCreateBoxes) {
    for (let i = 0; i < amount; i += 1) {
      const boxEl = document.createElement("div");
      basicSize += 10;
      boxEl.style.height = basicSize + "px";
      boxEl.style.width = basicSize + "px";
      boxEl.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()} )`;
      refs.boxes.append(boxEl);
    }
  } else {
    onModalError(maxCreateBoxes);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
function random() {
  return Math.floor(Math.random() * 256);
}
function offScrol() {
  // .. логика отображения попапа
  document.body.style.overflow = "hidden";
}
function onScrol() {
  // .. логика скрытия попапа
  document.body.style.overflow = "auto";
}
