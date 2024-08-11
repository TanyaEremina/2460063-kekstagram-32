import {drawPhotos} from './miniatures.js';
const NUMBER_OF_POSTS = 10;
const RERENDER_DELAY = 500;
const filters = document.querySelector('.img-filters__form');

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

const getTheFilterId = () =>{
  filters.addEventListener('click', (evt) => {
    const id = evt.target.id;
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
    }
  });
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const debouncedGetTheFilterId = debounce (getTheFilterId, RERENDER_DELAY);

export{setPhotos,debouncedGetTheFilterId};
