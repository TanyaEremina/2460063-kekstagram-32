const slider = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const fieldValue = document.querySelector('.effect-level__value');

const SliderSettings = {
  CHROME: { range: { 'min': 0, 'max': 1 }, step: 0.1, start: 1 },
  SEPIA: { range: { 'min': 0,'max': 1 }, step: 0.1, start: 1 },
  MARVIN: { range: { 'min': 0, 'max': 100 }, step: 1, start: 100 },
  PHOBOS: { range: { 'min': 0, 'max': 3 }, step: 0.1, start: 3 },
  HEAT: { range: { 'min': 1, 'max': 3 }, step: 0.1, start: 3 },
  NONE: { range: { 'min': 0, 'max': 100 }, step: 1, start: 100 },
};


noUiSlider.create(slider, {
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
  slider.noUiSlider.updateOptions({
    range: {min, max},
    start: start,
    step: step,
    connect: 'lower',
  });
};

const applyAnEffect = (id) => {
  fieldValue.value = null;
  switch(id){
    case 'effect-chrome':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      fieldValue.value = 0;
      updateSlider(SliderSettings.CHROME);
      slider.noUiSlider.on('update', () => {
        fieldValue.value = slider.noUiSlider.get();
        image.style.filter = `grayscale(${fieldValue.value})`;
      });
      break;
    case 'effect-sepia':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      fieldValue.value = 0;
      updateSlider(SliderSettings.SEPIA);
      slider.noUiSlider.on('update', () => {
        fieldValue.value = slider.noUiSlider.get();
        image.style.filter = `sepia(${fieldValue.value})`;
      });
      break;
    case 'effect-marvin':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      fieldValue.value = 0;
      updateSlider(SliderSettings.MARVIN);
      slider.noUiSlider.on('update', () => {
        fieldValue.value = slider.noUiSlider.get();
        image.style.filter = `invert(${fieldValue.value}%)`;
      });
      break;
    case 'effect-heat':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      fieldValue.value = 0;
      updateSlider(SliderSettings.HEAT);
      slider.noUiSlider.on('update', () => {
        fieldValue.value = slider.noUiSlider.get();
        image.style.filter = `brightness(${fieldValue.value})`;
      });
      break;
    case 'effect-phobos':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      fieldValue.value = 0;
      updateSlider(SliderSettings.PHOBOS);
      slider.noUiSlider.on('update', () => {
        fieldValue.value = slider.noUiSlider.get();
        image.style.filter = `blur(${fieldValue.value}px)`;
      });
      break;
    case 'effect-none':
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
      fieldValue.value = 0;
      image.style.filter = null;
      break;
  }
};

export{applyAnEffect};
