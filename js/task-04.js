let counterValue = 0;

const increment = () => {
	counterValue += 1;
	return counterEl.textContent = counterValue};

const decrement = () => {
	counterValue -= 1;
	return counterEl.textContent = counterValue};

const counterEl = document.querySelector('#value');
const btnIncr = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]');
btnIncr.addEventListener('click', increment);

btnDecr.addEventListener('click', decrement);


