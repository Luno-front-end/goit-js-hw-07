const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const navEl = document.querySelector("#ingredients");

const ctaegoriesMenuEl = ingredients.map((options) => {
  const menuListEl = document.createElement("li");
  menuListEl.textContent = options;
  return menuListEl;
});

navEl.append(...ctaegoriesMenuEl);
console.log(ctaegoriesMenuEl);
