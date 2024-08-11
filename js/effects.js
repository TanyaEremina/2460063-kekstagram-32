const sliderElement = document.querySelector('.effect-level__slider');
const effects = document.querySelectorAll('.effects__item');
const image = document.querySelector('.img-upload__preview img');

const SliderSettings = {
  CHROME: { range: { 'min': 0, 'max': 1 }, step: 0.1, start: 1 },
  SEPIA: { range: { 'min': 0,'max': 1 }, step: 0.1, start: 1 },
  MARVIN: { range: { 'min': 0, 'max': 100 }, step: 1, start: 100 },
  PHOBOS: { range: { 'min': 0, 'max': 3 }, step: 0.1, start: 3 },
  HEAT: { range: { 'min': 1, 'max': 3 }, step: 0.1, start: 3 },
  NONE: { range: { 'min': 0, 'max': 100 }, step: 1, start: 100 },
};


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const updateSlider = (effect) =>{
  const {range: {min, max}, step, start} = effect;
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    start: start,
    step: step,
    connect: 'lower',
  });
};

const applyAnEffect = (id, index) => {
  switch(id){
    case 'effect-chrome':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      updateSlider(SliderSettings.CHROME);
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `grayscale(${fieldValue.value})`;
      });
      break;
    case 'effect-sepia':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      updateSlider(SliderSettings.SEPIA);
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `sepia(${fieldValue.value})`;
      });
      break;
    case 'effect-marvin':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      updateSlider(SliderSettings.MARVIN);
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `invert(${fieldValue.value}%)`;
      });
      break;
    case 'effect-heat':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      updateSlider(SliderSettings.HEAT);
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `brightness(${fieldValue.value})`;
      });
      break;
    case 'effect-phobos':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      updateSlider(SliderSettings.PHOBOS);
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `blur(${fieldValue.value}px)`;
      });
      break;
    case 'effect-none':
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
      image.style.filter = '';
      break;
  }
};

export{applyAnEffect};
