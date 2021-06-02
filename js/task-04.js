let counterValue = 0;

const btnIncrClickHandler = () => {
	counterValue += 1;
	return counterEl.textContent = counterValue};

const btnDecrClickHandler = () => {
	counterValue -= 1;
	return counterEl.textContent = counterValue};

const counterEl = document.querySelector('#value');
const btnIncr = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]');

btnIncr.addEventListener('click', btnIncrClickHandler);
btnDecr.addEventListener('click', btnDecrClickHandler);


