const refs = {
input: document.querySelector('#validation-input'),
}

const inputDataLength = Number(refs.input.getAttribute('data-length'));

refs.input.addEventListener('blur', inputOnBlur)

function inputOnBlur(event) {
const value = event.currentTarget.value;
if (value.length !== inputDataLength) {refs.input.classList.add('invalid')}
if (value.length === inputDataLength) {
	refs.input.classList.add('valid')
	refs.input.classList.remove('invalid')
} 
}
