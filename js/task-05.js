const refs = {
	input: document.querySelector('#name-input'),
	output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);

const defText = 'незнакомец';
function onInputChange(event) {
if (event.currentTarget.value === '' || event.currentTarget.value === ' '){
	refs.output.textContent = defText;
} else {
refs.output.textContent = event.currentTarget.value;
}
}