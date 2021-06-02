const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');

const ingrCollection = ingredients.map(ingr => {
const ingredientEl = document.createElement('li')
ingredientEl.textContent = ingr
return ingredientEl
});

ingredientsRef.append(...ingrCollection);



