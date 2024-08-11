import {sendData} from './api.js';
import {showAFortune, showAPublishingError} from './message.js';
import {setListenerEffects} from './util.js';
import './form-scale.js';

const MAX_COUNT_HASHTAGS = 5;
const MAX_COUNT_CHARACTERS = 140;
const CHARACTER_SET = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_COUNT_HASHTAGS} хэштегов`,
  UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_ID: 'Неправильный хэштег',
  STRING_DESCRIPTION: 'длина комментария не может составлять больше 140 символов'
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Опубликовываю...'
};

const uploadField = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const formSubmit = document.querySelector('.img-upload__form');
const bodyScroll = document.querySelector('body');
const buttonCancel = document.querySelector('.img-upload__cancel');
const fieldHashags = document.querySelector('.text__hashtags');
const fieldDescription = document.querySelector('.text__description');
const effects = document.querySelectorAll('.effects__item');
const submitButton = document.querySelector('.img-upload__submit');
const filter = document.querySelector('.img-upload__effect-level');

const onUploadImageClick = () => {
  overlay.classList.remove('hidden');
  bodyScroll.classList.add('modal-open');
  filter.classList.add('hidden');
  setListenerEffects(effects);

};

const pristine = new Pristine(formSubmit, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const convertStringToArray = (stringTags) => {
  const arrayTags = stringTags.trim().toLowerCase().split(' ');
  const filteredTags = arrayTags.filter((tag) => tag !== '');
  return filteredTags;
};

const checkingTagsForQuantity = (value) => {
  const currentArrayTags = convertStringToArray(value);
  return currentArrayTags.length <= MAX_COUNT_HASHTAGS;
};

const checkingTagsForСorrectness = (value) => {
  const currentArrayTags = convertStringToArray(value);
  return currentArrayTags.every((tag) => CHARACTER_SET.test(tag));
};

const checkMessageLength = (value) => value.length < MAX_COUNT_CHARACTERS;

const checkForDuplicates = (value) => {
  const tags = convertStringToArray(value);
  const tagsUnique = [...new Set(tags)];
  return tags.length === tagsUnique.length;
};

pristine.addValidator(fieldHashags, checkingTagsForQuantity, errorText.INVALID_COUNT);
pristine.addValidator(fieldHashags, checkForDuplicates, errorText.UNIQUE);
pristine.addValidator(fieldHashags, checkingTagsForСorrectness, errorText.INVALID_ID);
pristine.addValidator(fieldDescription, checkMessageLength, errorText.STRING_DESCRIPTION);

const hasFocusField = () => document.activeElement === fieldDescription || document.activeElement === fieldHashags;

const onWindowKeydown = (evt) => {
  if (evt.key === 'Escape' && !hasFocusField() && !document.body.contains(document.querySelector('.error'))){
    evt.preventDefault();
    onFormClose();
  }else{
    evt.stopPropagation();
  }
};

function onFormClose () {
  overlay.classList.add('hidden');
  bodyScroll.classList.remove('modal-open');
  formSubmit.reset();
  pristine.reset();
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = () => {
  formSubmit.addEventListener('submit',(evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onFormClose)
        .then(showAFortune)
        .catch((err) => {
          showAPublishingError(err.message);
        })
        .finally(unblockSubmitButton);
    }
  });
};

uploadField.addEventListener('change', onUploadImageClick);
buttonCancel.addEventListener('click', onFormClose);
document.addEventListener('keydown', onWindowKeydown);

export{setUserFormSubmit};
