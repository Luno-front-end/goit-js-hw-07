const itemEl = document.querySelectorAll(".item");

console.log(`У списку ${itemEl.length} категорії`);

function textValue(head) {
  const headingEl = head.querySelector("h2");
  const valueEl = head.querySelectorAll(".item li");

  console.log(`Категорія: ${headingEl.textContent}`);
  console.log(`Кількість елементів: ${valueEl.length}`);
}
itemEl.forEach(textValue);
