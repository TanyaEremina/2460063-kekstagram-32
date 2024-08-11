const fieldScale = document.querySelector('.scale__control--value');
const image = document.querySelector(' .img-upload__preview img');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const STEP = 0.25;

const changeImage = () => parseInt(fieldScale.value, 10) / 100;

const zoomOut = () => {
  const currentScale = parseInt(fieldScale.value,10) / 100;
  if(currentScale > STEP){
    fieldScale.value = `${(currentScale - STEP) * 100}%`;
    image.style.transform = `scale(${changeImage()})`;
  }
};

const zoomIn = () => {
  const currentScale = parseInt(fieldScale.value,10) / 100;
  if(currentScale < 1){
    fieldScale.value = `${(currentScale + STEP) * 100}%`;
    image.style.transform = `scale(${changeImage()})`;
  }
};

buttonSmaller.addEventListener('click', zoomOut);
buttonBigger.addEventListener('click', zoomIn);


