const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');

const makeIngrCollection = (arr) => {
const ingrCollection = arr.map(ingr => {
const ingredientEl = document.createElement('li')
ingredientEl.textContent = ingr
return ingredientEl
})
ingredientsRef.append(...ingrCollection);
};


makeIngrCollection(ingredients);

