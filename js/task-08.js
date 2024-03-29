const refs = {
input: document.querySelector('#controls > input'),
renderBtn: document.querySelector('button[data-action="render"]'),
destroyBtn: document.querySelector('button[data-action="destroy"]'),
boxesContainer: document.querySelector('#boxes'),
}

function range(count) {
	const array = [];
	for (let i = 0; i < count; i++) {
		array.push(i);
	}
	return array;
}

const genRGB = function () {
	return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

function createBoxes(amount) {
	let size = 30;	
	const arr = range(amount);
	return arr.map(() => {
		const box = document.createElement('div')
		box.style.width = `${size}px`
		box.style.height = `${size}px`
		box.style.backgroundColor = genRGB();
		size += 10;
		return box;
	})
}



refs.input.addEventListener('input', (event) => {
	let value = event.target.value
	refs.renderBtn.addEventListener('click', () => {	
		const boxes = document.createElement('div')
		boxes.append(...createBoxes(value))	
		refs.boxesContainer.append(boxes)
		
	})
	console.log(value);
});

refs.destroyBtn.addEventListener('click', () => {
	// refs.boxesContainer.innerHTML = '';
	// refs.input.value = '';
	document.location.reload();
});




