'use strict'

const catRef = document.querySelector('#categories');

console.log(`В списке ${catRef.children.length} категории.`);

const itemRef = document.querySelectorAll('.item');

itemRef.forEach(item => console.table(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}
`));




