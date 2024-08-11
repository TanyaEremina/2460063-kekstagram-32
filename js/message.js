const receivingErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successfulState = document.querySelector('#success').content.querySelector('.success');
const errorfulState = document.querySelector('#error').content.querySelector('.error');

const showAnErrorUponReceipt = () => {
  const receivingErrorElement = receivingErrorTemplate.cloneNode(true);
  document.body.append(receivingErrorElement);
  setTimeout(() => {
    receivingErrorElement.remove();
  }, 5000);
};

const onDocumentCheckClick = (evt) => {
  const element = evt.target;
  if (element === document.querySelector('.error') || element === document.querySelector('.success')){
    onButtonCloseClick();
  }
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onButtonCloseClick();
  }
};

function onButtonCloseClick () {
  const message = document.querySelector('.error') || document.querySelector('.success');
  message.remove();
  document.removeEventListener('keydown',onDocumentKeydown);
}

const showAFortune = () => {
  const successfulStateElement = successfulState.cloneNode(true);
  document.body.append(successfulStateElement);
  const button = successfulStateElement.querySelector('.success__button');

  button.addEventListener('click', onButtonCloseClick);
  document.querySelector('.success').addEventListener('click', onDocumentCheckClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const showAPublishingError = () => {
  const errorfulStateElement = errorfulState.cloneNode(true);
  document.body.append(errorfulStateElement);
  const button = errorfulStateElement.querySelector('.error__button');

  button.addEventListener('click', onButtonCloseClick);
  document.querySelector('.error').addEventListener('click', onDocumentCheckClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {showAnErrorUponReceipt, showAFortune, showAPublishingError};
