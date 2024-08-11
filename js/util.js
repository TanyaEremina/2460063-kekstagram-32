import {applyAnEffect} from './effects.js';
/*const makeCounter = () => {
  let currentCount = 1;

  function counter() {
    return currentCount++;
  }

  return counter;
};

const getIdPost = makeCounter();
const getIdComments = makeCounter();
const getUrlPhotos = makeCounter();

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getElemenyFromArray = (array) => {
  const elementFromArray = array[getRandomInteger(0, array.length - 1)];
  return elementFromArray;
};


const getNumberFromArray = (min, max) => {
  const array = [];
  for (let i = min; i <= max; i++){
    array.push(i);
  }
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};*/

const getEffectId = (effects) => {
  effects.forEach((element, index) => {
    element.addEventListener('click',(evt) => {
      const event = evt.currentTarget;
      const currentId = event.querySelector('input').id;
      applyAnEffect(currentId, index);
    });
  });
};


export {getEffectId};
