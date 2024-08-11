import {drawPhotos} from './miniatures.js';

const NUMBER_OF_POSTS = 10;
const RERENDER_DELAY = 500;
const filters = document.querySelector('.img-filters__form');
const filterButtons = filters.querySelectorAll('.img-filters__button');

let usersPhoto = [];

const setPhotos = (photos) => {
  usersPhoto = photos;
};

const deletePhotos = () => {
  const posts = document.querySelectorAll('.picture');
  posts.forEach((post) => {
    post.remove();
  });
};

const comparePhotos = (photoA, photoB) => {
  const commentsA = photoA.comments.length;
  const commentsB = photoB.comments.length;

  return commentsB - commentsA;
};

const setFilterListener = (button) => {
  filterButtons.forEach((filter) => {
    filter.classList.remove('img-filters__button--active');
  });
  const id = button.id;
  button.classList.add('img-filters__button--active');
  deletePhotos(usersPhoto);
  const copyPhotos = usersPhoto.slice();
  let mixedPhotos = [];
  let partPhotos = [];
  switch(id){
    case 'filter-discussed':
      copyPhotos.sort(comparePhotos);
      drawPhotos(copyPhotos);
      break;
    case 'filter-random':
      mixedPhotos = copyPhotos.sort(() => 0.5 - Math.random());
      partPhotos = mixedPhotos.slice(0, NUMBER_OF_POSTS);
      drawPhotos(partPhotos);
      break;
    case 'filter-default':
      drawPhotos(usersPhoto);
      break;
  }
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const debouncedSetFilterListener = debounce (setFilterListener, RERENDER_DELAY);

filterButtons.forEach((filter) => {
  filter.addEventListener('click', (evt) => {
    const currentValue = evt.target;
    debouncedSetFilterListener(currentValue);
  });
});


export{setPhotos};
