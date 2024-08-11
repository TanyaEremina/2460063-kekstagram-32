import {applyAnEffect} from './effects.js';


const setListenerEffects = (effects) => {
  effects.forEach((element) => {
    element.addEventListener('click',(evt) => {
      const event = evt.currentTarget;
      const currentId = event.querySelector('input').id;
      applyAnEffect(currentId);
    });
  });
};


export {setListenerEffects};
