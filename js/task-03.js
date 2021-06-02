const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
/* const imgCreator = ({url, alt}) => {
const liEl = document.createElement('li');
const imgEl = document.createElement('img');
imgEl.src = url;
imgEl.alt = alt;
imgEl.style.width = '800px';
liEl.appendChild(imgEl);
return liEl;
}
galleryEl.append(...images.map(imgCreator));
*/


const galleryEl = document.querySelector('#gallery');
images.map( img => galleryEl.insertAdjacentHTML('beforebegin', `<img src="${img.url}" alt="${img.alt}"></img>`)) 
