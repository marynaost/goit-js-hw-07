// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в 
// список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector("#ingredients")

const elements = ingredients.map(elem => {
  const itemEl = document.createElement("li")
  itemEl.textContent = elem

  return itemEl
})

ingredientsRef.append(...elements)