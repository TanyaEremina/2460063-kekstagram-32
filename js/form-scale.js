const fieldScale = document.querySelector('.scale__control--value');
const image = document.querySelector(' .img-upload__preview img');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const MINIMUM_VALUE = 0.25;

const changeImage = () => parseInt(fieldScale.value, 10) / 100;

const onScaleSmallerClick = () => {
  const currentScale = parseInt(fieldScale.value,10) / 100;
  if(currentScale > MINIMUM_VALUE){
    fieldScale.value = `${(currentScale - MINIMUM_VALUE) * 100}%`;
    image.style.transform = `scale(${changeImage()})`;
  }
};

const onScaleBiggerClick = () => {
  const currentScale = parseInt(fieldScale.value,10) / 100;
  if(currentScale < 1){
    fieldScale.value = `${(currentScale + MINIMUM_VALUE) * 100}%`;
    image.style.transform = `scale(${changeImage()})`;
  }
};

buttonSmaller.addEventListener('click', onScaleSmallerClick);
buttonBigger.addEventListener('click', onScaleBiggerClick);


