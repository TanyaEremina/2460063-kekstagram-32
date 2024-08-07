import {arrayOfPhotographs} from './data.js';

const listPhotos = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');


const photos = arrayOfPhotographs;
const listFragment = document.createDocumentFragment();

photos.forEach(({url, description, comments, likes}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  listPhotos.appendChild(photoElement);
});
listPhotos.appendChild(listFragment);

