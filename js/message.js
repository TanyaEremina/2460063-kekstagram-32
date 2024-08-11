const receivingErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successfulState = document.querySelector('#success').content.querySelector('.success');
const errorfulState = document.querySelector('#error').content.querySelector('.error');

const closeMessage = (button, message) => {
  button.addEventListener('click', () => {
    message.remove();
  });
  document.addEventListener('click',(evt) =>{
    const event = evt.target;
    if(message === event){
      message.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      message.remove();
    }
  });
};
const createAnErrorUponReceipt = () => {
  const receivingErrorElement = receivingErrorTemplate.cloneNode(true);
  document.body.append(receivingErrorElement);
  setTimeout(() => {
    receivingErrorElement.remove();
  }, 5000);
};

const createAFortune = () => {
  const successfulStateElement = successfulState.cloneNode(true);
  document.body.append(successfulStateElement);
  const successButton = successfulStateElement.querySelector('.success__button');
  closeMessage(successButton, successfulStateElement);
};

const createAPublishingError = () => {
  const errorfulStateElement = errorfulState.cloneNode(true);
  document.body.append(errorfulStateElement);
  const errorButton = errorfulStateElement.querySelector('.error__button');
  closeMessage(errorButton, errorfulStateElement);
};

export {createAnErrorUponReceipt, createAFortune, createAPublishingError};
